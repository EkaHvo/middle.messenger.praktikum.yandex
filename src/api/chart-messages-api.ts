import HTTPTransport from '../utils/HTTPTransport';
import BaseAPI from './Base-api';

const chatMessagesAPIInstance = new HTTPTransport('api/v1/messages');

export default class ChatMessagesAPI extends BaseAPI {
    request({id}) {
        return chatMessagesAPIInstance.get(`/${id}`);
    }
}