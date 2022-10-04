import {IRouteBuilder} from "../builders/RouteBuilder";

export interface IDashboardIdRoute extends IRouteBuilder {
    params: { dashId: string }
    setRouteParam: (params:IDashboardIdRoute['params']) => IDashboardIdRoute
    dashboardRoute:IRouteBuilder
}
