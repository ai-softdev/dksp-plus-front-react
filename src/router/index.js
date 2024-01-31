import Main from "../pages/main/Main.jsx";
import {ANALYSIS_ROUTE, MAIN_ROUTE, PRICING_ROUTE, PROJECTS_ROUTE, SERVICES_ROUTE} from "../utils/consts.js";
import Services from "../pages/Services.jsx";
import Projects from "../pages/projects/Projects.jsx";
import Pricing from "../pages/pricing/Pricing.jsx";
import Analysis from "../pages/analysis/Analysis.jsx";

export const routes = [
    {
        path: MAIN_ROUTE,
        component: Main
    },
    {
        path: PROJECTS_ROUTE,
        component: Projects
    },
    {
        path: PRICING_ROUTE,
        component: Pricing
    },
    {
        path: SERVICES_ROUTE,
        component: Services
    },
    {
        path: ANALYSIS_ROUTE,
        component: Analysis
    },
]