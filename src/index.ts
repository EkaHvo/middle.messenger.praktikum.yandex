import startPage from "./index.hbs";
import errorObj from "./dataFiles/errorData.ts";
import testData from "./dataFiles/testData.ts";

import { MainChartPage } from "./pages/mainChart";
import { SigninPage } from "./pages/signin";
import { LoginPage } from "./pages/login";
import { ProfilePage } from "./pages/profile";
import { PageError } from "./pages/pageError";

import "./components";

window.addEventListener("DOMContentLoaded", () => {

    const app:HTMLElement | null = document.getElementById("app");

    if(app){
        if (window.location.pathname === "/page_404.html") {
            const pageError = new PageError({
                errorCode: errorObj.err404.errorCode,
                errorText: errorObj.err404.errorText,
            });
            app.append(pageError.getContent()!);

        } else if (window.location.pathname === "/page_500.html") {
            const pageError = new PageError({
                errorCode: errorObj.err500.errorCode,
                errorText: errorObj.err500.errorText,
            });
            app.append(pageError.getContent()!);

        } else if (window.location.pathname === "/profile.html") {
            const profile = new ProfilePage({
                profileInputs: testData.profileInputsObj
            });
            app.append(profile.getContent()!);

        } else if (window.location.pathname === "/login.html") {
            const login = new LoginPage({
                loginInputs: testData.loginInputs
            });
            app.append(login.getContent()!);

        } else if (window.location.pathname === "/signin.html") {
            const signin = new SigninPage({
                signinInputs: testData.signinInputsObj
            });
            app.append(signin.getContent()!);

        } else if (window.location.pathname === "/main_chart.html") {
            const mainChart = new MainChartPage({
                messages: testData.messages
            });
            app.append(mainChart.getContent()!);
        } else {
            app.innerHTML = startPage({});
        }
    }
});
