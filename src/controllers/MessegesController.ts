import WSTransport, { WSTransportEvents } from "../utils/WStransport";
import { Messege } from "../interfaces/interfaces";
import store from '../utils/Store';

class MessegesController {

    private sockets: Map<number, WSTransport> = new Map();

    async connect(id:number, token: string){
        if(this.sockets.has(id)){
            return;
        }

        const userId = store.getState().user.id;

        const wsTransport = new WSTransport(`wss://ya-praktikum.tech/ws/chats/${userId}/${id}/${token}`);

        this.sockets.set(id, wsTransport);

        await wsTransport.connect();

        this.subscribe(wsTransport, id);
        this.fetchOldMesseges(id);
    }

    sendMessege(id:number, messege:string){
        const socket = this.sockets.get(id);
        if(!socket) {
            throw new Error(`Chat ${id} is not connected`)
        }

        socket.send({
            type: 'message', 
            content: messege,
        })
    }

    fetchOldMesseges(id:number){
        const socket = this.sockets.get(id);
        if(!socket) {
            throw new Error(`Chat ${id} is not connected`)
        }

        socket.send({
            type: 'get old', 
            content: '0'
        })
    }

    closeAll() {
        Array.from(this.sockets.values()).forEach(socket => socket.close());
    }

    private onMessege(id: number, messeges: Messege | Messege[]){
        let messegesToAdd: Messege[] = [];
        if (Array.isArray(messeges)) {
            messegesToAdd = messeges.reverse();
        } else {
            messegesToAdd.push(messeges);
        }
      
        const currentMesseges = (store.getState().messeges || {})[id] || [];
      
        messegesToAdd = [...currentMesseges, ...messegesToAdd];
      
        store.set(`messeges.${id}`, messegesToAdd);
    }

    private onClose(id: number){
        this.sockets.delete(id)
    }

    private subscribe(transport: WSTransport, id:number){
        transport.on(WSTransportEvents.Message, (messege)=> this.onMessege(id, messege));
        transport.on(WSTransportEvents.Close, ()=> this.onClose(id))
    }
}

export default new MessegesController();

