import BaseAPI from './Base-api';


export class ChatAPI extends BaseAPI {
    constructor(){
        super('/charts')
    }
    create() {
        return chatAPIInstance.post('/', {title: 'string'});
    }
    request() {
        return chatAPIInstance.get('/full');
    }
}