import React from "react"
import {createBrowserHistory} from "history"
interface routeOptions {
    view: React.FC<any>;
    name?: string;
    icon?: string;
    params?: any;
}



export interface IRouteBuilder {
    url: string
    view: React.FC<any> | undefined
    name: string | undefined
    icon: string | undefined
    setRouteParam: (n:any) => IRouteBuilder
    navigate: () => IRouteBuilder
    params:any
}


export default class RouteBuilder implements IRouteBuilder {
    url: string = '';
    view: React.FC<any> | undefined
    name: string | undefined = ''
    icon: string | undefined = ''
    params:any

    static create(url: string, options: routeOptions) {
        const routeBuilder = new RouteBuilder();
        routeBuilder.url = url
        routeBuilder.view = options.view
        routeBuilder.name = options.name
        routeBuilder.icon = options.icon
        return routeBuilder
    }


    addMiddleware() {
        //     add new middleware
    }

    setRouteParam(params:RouteBuilder['params']) {
        let urlArr = String(this.url).split('/')
        let url:any
        for(let [key, value] of Object.entries(params)) {
            url = urlArr.map(item=>item.replace(`:${key}`,String(value)))
        }
        this.url = url.join('/')
        return this
    }

    setQueryParam() {

    }


    navigate(){
        let history = createBrowserHistory();
        history.push(this.url)
        return this
    }

    addSubRoute(subRoute:any,prefix:string = this.url){

        // const tempsubRoute =

        return {
            ...this,
            ...subRoute
        }
    }


}