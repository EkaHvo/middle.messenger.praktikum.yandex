// import startPage from "./index.hbs";

import Router from "./utils/Router";

import { MainChartPage } from "./pages/mainChart";
import { LoginPage } from "./pages/login";
import { SigninPage } from "./pages/signin";
import { ProfilePage } from "./pages/profile";
import { PageError500 } from "./pages/500";
import { PageError404 } from "./pages/404";

import { Avatar } from "./components/avatar";
import { ArrowIcon } from "./components/arrowIcon";
import { SearchIcon } from "./components/searchIcon";
import { AddMessageLine } from "./components/addMessageLine";
import { FriendInfoTopLine } from "./components/friendInfoTopLine";
import { ClipIcon } from "./components/clipIcon";
import { DottesIcon } from "./components/dottesIcon";
import { InputWrap } from "./components/inputWrap";
import { Input } from "./components/input";
import { NoPhotoIcon } from "./components/noPhotoIcon";
import { MessageView } from "./components/messageView";
import { ErrorInput } from "./components/errorInput";
import { InputLabel } from "./components/inputLabel";
import { Message } from "./components/message";
import { Button } from "./components/button";
import { CrossIcon } from "./components/crossIcon";
import { AddRemoveFriend } from "./components/addRemoveFriend";
import { FriendChangeItem } from "./components/friendChangeItem";
import { AddMessageModal } from "./components/addMessageModal";
import { LinkItem } from "./components/linkItem";
import { Form } from "./components/form";

import { registerComponent } from "./utils/registerComponent";
registerComponent('Avatar', Avatar as any);
registerComponent('ArrowIcon', ArrowIcon as any);
registerComponent('SearchIcon', SearchIcon as any);
registerComponent('AddMessageLine', AddMessageLine as any);
registerComponent('FriendInfoTopLine', FriendInfoTopLine as any);
registerComponent('ClipIcon', ClipIcon as any);
registerComponent('DottesIcon', DottesIcon as any);
registerComponent('InputWrap', InputWrap as any);
registerComponent('Input', Input as any);
registerComponent('NoPhotoIcon', NoPhotoIcon as any);
registerComponent('MessageView', MessageView as any);
registerComponent('ErrorInput', ErrorInput as any);
registerComponent('InputLabel', InputLabel as any);
registerComponent('Message', Message as any);
registerComponent('Button', Button as any);
registerComponent('CrossIcon', CrossIcon as any);
registerComponent('AddRemoveFriend', AddRemoveFriend as any);
registerComponent('FriendChangeItem', FriendChangeItem as any);
registerComponent('AddMessageModal', AddMessageModal as any);
registerComponent('LinkItem', LinkItem as any);
registerComponent('Form', Form as any);


window.addEventListener("DOMContentLoaded", () => {

    Router
    .use('/', LoginPage)
    .use('/sign-up', SigninPage)
    .use('/messenger', MainChartPage)
    .use('/page_404', PageError404)
    .use('/page_500', PageError500)
    .use('/settings', ProfilePage)
    .start()
});
