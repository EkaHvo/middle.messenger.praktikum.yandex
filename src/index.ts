import startPage from "./index.hbs";
import testData from "./dataFiles/testData.ts";

import { MainChartPage } from "./pages/mainChart";
import { LoginPage } from "./pages/login";
import { SigninPage } from "./pages/signin";
import { ProfilePage } from "./pages/profile";
import { PageError } from "./pages/pageError";

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
registerComponent('AddMessageModal', AddMessageModal as any);
registerComponent('LinkItem', LinkItem as any);
registerComponent('Form', Form as any);

window.addEventListener("DOMContentLoaded", () => {

    const app:HTMLElement | null = document.getElementById("app");

    if(app){
        if (window.location.pathname === "/page_404.html") {
            const pageError = new PageError({
                errorCode: "404",
                errorText: "Не туда попали",
            });
            app.append(pageError.getContent()!);

        } else if (window.location.pathname === "/page_500.html") {
            const pageError = new PageError({
                errorCode: "500",
                errorText: "Мы уже фиксим",
            });
            app.append(pageError.getContent()!);

        } else if (window.location.pathname === "/profile.html") {
            const profile = new ProfilePage({});
            app.append(profile.getContent()!);

        } else if (window.location.pathname === "/login.html") {
            const login = new LoginPage({});
            app.append(login.getContent()!);

        } else if (window.location.pathname === "/signin.html") {
            const signin = new SigninPage({});
            app.append(signin.getContent()!);

        } else if (window.location.pathname === "/main_chart.html") {
            const mainChart = new MainChartPage({
                messages: testData.messages,
                messageViews: testData.messageViews,
                hasActiveMessage: true,
            });
            app.append(mainChart.getContent()!);
        } else {
            app.innerHTML = startPage({});
        }
    }
});
