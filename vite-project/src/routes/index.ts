import RouteBuilder, {IRouteBuilder} from "../utils/builders/RouteBuilder";
import Dashboard from "../Views/Dashboard";


interface IDashboardIdRoute extends IRouteBuilder {
    params: { dashId: string }
    setRouteParam: (params:IDashboardIdRoute['params']) => IDashboardIdRoute
}



export const dashboardRoute = RouteBuilder.create('/dashboard',{view:Dashboard})
export const dashboardIdRoute = RouteBuilder.create('/dashboard/:dashId',{view:Dashboard}).addSubRoute({
    dashboardRoute
}) as IDashboardIdRoute