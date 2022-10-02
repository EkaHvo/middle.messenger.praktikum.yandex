import { MainChatPage } from "./pages/mainChat";
import { LoginPage } from "./pages/login";
import { SigninPage } from "./pages/signin";
import { ProfilePage } from "./pages/profile";
import { PswEditPage } from "./pages/pswEditPage";
import { ProfileEdit } from "./pages/profileEdit";
import { PageError500 } from "./pages/500";
import { PageError404 } from "./pages/404";

import Router from "./utils/Router";
import AuthController from "./controllers/AuthController";

import { Avatar } from "./components/avatar";
import { ArrowIcon } from "./components/arrowIcon";
import { SearchIcon } from "./components/searchIcon";
import { Messenger } from "./components/Messenger";
import { FriendInfoTopLine } from "./components/friendInfoTopLine";
import { ClipIcon } from "./components/clipIcon";
import { DottesIcon } from "./components/dottesIcon";
import { InputWrap } from "./components/inputWrap";
import { Input } from "./components/input";
import { NoPhotoIcon } from "./components/noPhotoIcon";
import { ErrorInput } from "./components/errorInput";
import { InputLabel } from "./components/inputLabel";
import { MessegeItem } from "./components/messegeItem";
import { Button } from "./components/button";
import { CrossIcon } from "./components/crossIcon";
import { AddRemoveFriend } from "./components/addRemoveFriend";
import { FriendChangeItem } from "./components/friendChangeItem";
import { AddMessegeModal } from "./components/addMessegeModal";
import { SearchUsersBlock } from "./components/SearchUsersBlock";
import { ChatsList } from "./components/chatsList";
import { Chat } from "./components/chat";
import { Link} from "./components/linkItem";
import { Form } from "./components/form";

import { registerComponent } from "./utils/registerComponent"; 
registerComponent('Avatar', Avatar as any);
registerComponent('ArrowIcon', ArrowIcon as any);
registerComponent('SearchIcon', SearchIcon as any);
registerComponent('Messenger', Messenger as any);
registerComponent('FriendInfoTopLine', FriendInfoTopLine as any);
registerComponent('ClipIcon', ClipIcon as any);
registerComponent('DottesIcon', DottesIcon as any);
registerComponent('InputWrap', InputWrap as any);
registerComponent('Input', Input as any);
registerComponent('NoPhotoIcon', NoPhotoIcon as any);
registerComponent('ErrorInput', ErrorInput as any);
registerComponent('InputLabel', InputLabel as any);
registerComponent('MessegeItem', MessegeItem as any);
registerComponent('Button', Button as any);
registerComponent('CrossIcon', CrossIcon as any);
registerComponent('AddRemoveFriend', AddRemoveFriend as any);
registerComponent('FriendChangeItem', FriendChangeItem as any);
registerComponent('AddMessegeModal', AddMessegeModal as any);
registerComponent('SearchUsersBlock', SearchUsersBlock as any);
registerComponent('ChatsList', ChatsList as any);
registerComponent('Chat', Chat as any);
registerComponent('Link', Link as any);
registerComponent('Form', Form as any);

window.addEventListener("DOMContentLoaded", async() => {

    Router
    .use('/', LoginPage)
    .use('/sign-up', SigninPage)
    .use('/messenger', MainChatPage)
    .use('/page_404', PageError404)
    .use('/page_500', PageError500)
    .use('/settings', ProfilePage)
    .use('/pswEditPage', PswEditPage)
    .use('/profileEdit', ProfileEdit);

    let isProtectedRoute = true;

    switch (window.location.pathname) {
        case '/':
        case '/sign-up':
            isProtectedRoute = false;
            break;
    }

    try {
       await AuthController.fetchUser();
       Router.start();

       if(!isProtectedRoute){
            Router.go('/messenger');
       }
    } catch (e) {
        Router.start();

        if(isProtectedRoute){
            Router.go('/');
        }
    }
});
