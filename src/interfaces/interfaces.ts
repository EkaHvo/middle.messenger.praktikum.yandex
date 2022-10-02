export interface InputProps {
    events?: {
        focus?: () => void,
        blur?: (e:Event) => void,
        input?: (e:Event) => void,
    },
    class?: string, 
    type?: string, 
    id?: string, 
    name?: string, 
    placeholder?: string,
    readonly?: boolean,
    value?: string,
}

export interface User {
    first_name: string,
    second_name: string,
    display_name?: string,
    login: string,
    email: string,
    phone: string,
    id?: number,
    avatar?: string,
    status?: null,
    password?: string;
}

export interface SigninData {
  login: string;
  password: string;
}

export interface SignupData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface SearchUserData {
    login: string;
}

export interface EditPass {
    oldPassword: string,
    newPassword: string
}

export interface ChatUserData {
    chatId:number,
    users: number[]
}

export interface ChatData {
    id: number;
    title: string;
    avatar?: string | null;
    unread_count?: number;
    last_message: {
        user: User,
        time: string,
        content: string
    };
}

export interface StateData {
  chats: ChatData[];
  user: User;
  messeges: Record<number, Messege[]>;
  users?: Array<User>;
  selectedChat?: number;
  selectedChatUsers?: User[];
}

export interface Messege {
    chat_id: number;
    time: string;
    type: string;
    user_id: number;
    content: string;
    file?: {
        id: number;
        user_id: number;
        path: string;
        filename: string;
        content_type: string;
        content_size: number;
        upload_date: string;
    }
}
