import Main from "../pages/main/Main.jsx";
import {MAIN_ROUTE, SERVICES_ROUTE} from "../utils/consts.js";
import Services from "../pages/Services.jsx";

export const routes = [
    {
        path: MAIN_ROUTE,
        component: Main
    },
    {
        path: SERVICES_ROUTE,
        component: Services
    },
]