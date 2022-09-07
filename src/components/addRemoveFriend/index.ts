import Block from "../../utils/Block";
import template from './addRemoveFriend.hbs';
import { FriendChangeItem } from "../../components/friendChangeItem";

interface AddRemoveFriendProps {
    modalItems: any;
}

export class AddRemoveFriend extends Block<AddRemoveFriendProps> {
    constructor(props:{}){
        super(props)
    }

    protected init(): void {
        const { modalItems } = this.props;

        if (modalItems && Array.isArray(modalItems)) {
            this.children.modalItemsBlock = modalItems.map((modalItem) => {
                return new FriendChangeItem({
                    class: modalItem.class,
                    text: modalItem.text,
                    events: modalItem.events,
                });
            });
        }
    }

    render() {
        return this.compile(template, {
            children: this.children,
        })
    }
}
