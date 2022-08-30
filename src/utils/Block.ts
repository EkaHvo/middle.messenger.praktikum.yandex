import { EventBus } from "./EventBus";
import { nanoid } from "nanoid";

class Block {
  
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };

    public id = nanoid(8);
    protected props: Record<string, unknown>;
    private eventBus: ()=> EventBus;
    private _element: HTMLElement | null = null;
    private _meta: { tagName: string; props:any;};
    protected children: Record<string, Block>;

    constructor(tagName: string = "div", childrenAndProps: any = {}){
        const eventBus = new EventBus();

        const {props, children} = this._getChildrenAndProps(childrenAndProps);

        this._meta = {
            tagName,
            props
        };

        this.children = children;
        this.props = this._makePropsProxy(props);
        this.eventBus = () => eventBus;
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    _getChildrenAndProps(childrenAndProps: any) {
        const props: Record<string, any> = {};
        const children: Record<string, Block> = {};

        Object.entries(childrenAndProps).forEach(([key, value]) => {
            if(value instanceof Block) {
                children[key] = value;
            } else {
                props[key] = value;
            }
        });

        return {props, children}
    }

    _addEvents() {
      const {events = {}} = this.props as { events: Record<string, ()=> void>};

      Object.keys(events).forEach(eventName => {
        this._element!.addEventListener(eventName, events[eventName]);
      })
    }

    private _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this)); 
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    private _createResources() {
        // const { tagName } = this._meta;
        // this._element = this._createDocumentElement(tagName);
    }

    private _init() {
      this._createResources();
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

    protected _componentDidUpdate() {
        const response = this.componentDidUpdate();
        if(response) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    }

    public componentDidUpdate() {
        return true;
    }

    public setProps = (nextProps:any) => {
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

    protected compile(template: (context:any) => string, context: any) {
        const contextAndStubs = { ...context };

        Object.entries(this.children).forEach(([name, component]) => {
            contextAndStubs[name] = `<div data-id="${component.id}"></div>`
        })
        const html = template(contextAndStubs);

        const temp = document.createElement('template');

        temp.innerHTML = html;

        Object.entries(this.children).forEach(([_, component]) => {
            const stub = temp.content.querySelector(`[data-id="${component.id}"]`);
            if(!stub){
                return
            }
            stub.replaceWith(component.getContent()!);
        })

        return temp.content;
    }

    public getContent(): HTMLElement | null {
        return this.element;
    }


    private _makePropsProxy(props: any) {
        const self = this;

        return new Proxy(props, {
            get(target, prop) {
                const value = target[prop];
                return typeof value === 'function' ? value.bind(target) : value;
            },
            set(target, prop, value) {
                const oldTarget = {...target}
                target[prop] = value;
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
                return true
            },
            deleteProperty() {
                throw new Error("Нет доступа")
            }
        });
    }

    private _createDocumentElement(tagName:string) {
        return document.createElement(tagName);
    }

    show() {
        const content = this.getContent();
        if(content){
            content.style.display = "block";
        }
    }

    hide() {
        const content = this.getContent();
        if(content){
            content.style.display = "none";
        }
    }
}

export default Block; 