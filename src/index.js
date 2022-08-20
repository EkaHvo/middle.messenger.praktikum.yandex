import startPage from "./index.hbs";
import pageError from "./pages/page_error.hbs";
import login from "./pages/login.hbs";
import signin from "./pages/signin.hbs";
import mainChart from "./pages/main_chart.hbs";
import profile from "./pages/profile.hbs";
import errorObj from "./pages/errorData.js";
import testData from "./pages/testData.js";

import "./components";

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    if (window.location.pathname === "/page_404.html") {
        app.innerHTML = pageError(errorObj.err404);
    } else if (window.location.pathname === "/page_500.html") {
        app.innerHTML = pageError(errorObj.err500);
    } else if (window.location.pathname === "/profile.html") {
        app.innerHTML = profile(testData);
    } else if (window.location.pathname === "/login.html") {
        app.innerHTML = login(testData);
    } else if (window.location.pathname === "/signin.html") {
        app.innerHTML = signin(testData);
    } else if (window.location.pathname === "/main_chart.html") {
        app.innerHTML = mainChart(testData);
    } else {
        app.innerHTML = startPage({});
    }
});
