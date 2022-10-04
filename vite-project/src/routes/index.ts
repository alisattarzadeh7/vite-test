import RouteBuilder, {IRouteBuilder} from "../utils/builders/RouteBuilder";
import Dashboard from "../Views/Dashboard";
import {IDashboardIdRoute} from "../utils/interfaces/routeInterfaces";


export const dashboardIdRoute = RouteBuilder.create('/dashboard/:dashId', {view: Dashboard}).addSubRoute({
    dashboardRoute: RouteBuilder.create(`/dashboard`, {view: Dashboard}),
}, '/test') as IDashboardIdRoute;