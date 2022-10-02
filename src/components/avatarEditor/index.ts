import Block from "../../utils/Block";
import template from './avatarEditor.hbs';
import { Button } from "../button";
import { Input } from "../input";
import { Link } from "../linkItem";
import UserController from "../../controllers/UserController";

export class AvatarEditor extends Block {
    constructor(props:{}){
        super(props)
    }

    protected init(): void {

        this.children.input = new Input({
            class: 'editor__input',
            type: 'file',
            id: 'btnInput',
            name: 'upload',
            events: {
                input: (e:Event) => this.onLoadFile(e),
            },
        });

        this.children.link = new Link({
            label: 'Выберите файл на компьютере'
        });

        this.children.button = new Button({
            buttonClass: '',
            buttonText: 'Поменять',
            events: {
                click: () => this.onSubmit(),
            },
        });
    }

    async onSubmit(){
        const inputFile = this.children.input._element;
        if(inputFile){
            const data = new FormData();
            data.append('avatar', inputFile.files[0]);
            await UserController.editAvatar(data as any);
            this.props.changeAvatar();
        }
    }

    onLoadFile(e: Event){
        let el = e.target as HTMLInputElement;
        let files:any =  el!.files;
        let fileName = files[0].name;
        this.children.link.setProps({
            label: fileName
        })
    }

    render() {
        return this.compile(template, {
            children: this.children,
        })
    }
}
