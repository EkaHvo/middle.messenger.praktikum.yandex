import { EventBus } from "./EventBus";
import { nanoid } from "nanoid";

class Block<P extends Record<string,any> = any> {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render",
    };

    public id = nanoid(8);
    protected props: P;
    private eventBus: () => EventBus;
    private _element: HTMLElement | null = null;
    protected children: Record<string, Block|any>;

    constructor(childrenAndProps: P) {
        const eventBus = new EventBus();

        const { props, children } = this._getChildrenAndProps(childrenAndProps);

        this.children = children;
        this.props = this._makePropsProxy(props);
        this.eventBus = () => eventBus;
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    private _getChildrenAndProps(childrenAndProps: P): {props:P, children: Record<string, Block|Block[]>} {
        const props: Record<string, unknown> = {};
        const children: Record<string, Block | Block[]> = {};

        Object.entries(childrenAndProps).forEach(([key, value]) => {
            if(Array.isArray(value) && value.length > 0 && value.every(v => v instanceof Block)){
                children[key as string] = value;
            } else if (value instanceof Block) {
                children[key as string] = value;
            } else {
                props[key] = value;
            }
        });

        return { props: props as P, children };
    }

    private _addEvents() {
        const events: Record<string, () => void> = (this.props as any).events;

        if (!events) {
            return;
        }

        Object.keys(events).forEach((eventName) => {
            this._element!.addEventListener(eventName, events[eventName]);
        });
    }

    private _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    private _init() {
        this.init();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    protected init() {}

    private _componentDidMount() {
        this.componentDidMount();
    }

    protected componentDidMount() {}

    public dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    protected _componentDidUpdate(oldProps: P, newProps: P) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (response) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    }

    //@ts-ignore
    protected componentDidUpdate(oldProps: P, newProps: P) {
        return true;
    }

    public setProps = (nextProps: P) => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    get element() {
        return this._element;
    }

    private _render() {
        const fragment = this.render();
        const newElement = fragment.firstElementChild as HTMLElement;
        this._element?.replaceWith(newElement);
        this._element = newElement;

        this._addEvents();
    }

    protected render(): DocumentFragment {
        return new DocumentFragment();
    }

    protected compile(template: (context: any) => string, context: any) {
        const contextAndStubs = { ...context };

        Object.entries(this.children).forEach(([name, component]) => {
            if (Array.isArray(component)) {
                contextAndStubs[name] = component.map((item) =>
                    this._createStub(item.id)
                );
            } else {
                contextAndStubs[name] = this._createStub(component.id);
            }
        });

        const html = template(contextAndStubs);

        const temp = document.createElement("template");

        temp.innerHTML = html;

        Object.entries(this.children).forEach(([_, component]) => {
            if (Array.isArray(component)) {
                component.forEach((el: Block) => {
                    this._replaceStub(temp.content, el);
                });
            } else {
                this._replaceStub(temp.content, component);
            }
        });

        return temp.content;
    }

    private _createStub(id: string): string {
        return `<div data-id="${id}"></div>`;
    }

    private _replaceStub(content: any, component: Block): void {
        const stub = content.querySelector(`[data-id="${component.id}"]`);
        if (!stub) {
            return;
        }
        stub.replaceWith(component.getContent()!);
    }

    public getContent(): HTMLElement | null {
        return this.element;
    }

    private _makePropsProxy(props: P) {
        const self = this;

        return new Proxy(props, {
            get(target: P, prop: string) {
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },
            set(target: P, prop: string, value) {
                const oldTarget = { ...target };
                target[prop as keyof P] = value;
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
                return true;
            },
            deleteProperty() {
                throw new Error("?????? ??????????????");
            },
        });
    }

    show() {
        const content = this.getContent();
        content!.style.display = "block";
    }

    hide() {
        const content = this.getContent();
        content!.style.display = "none";
    }
}

export default Block;
