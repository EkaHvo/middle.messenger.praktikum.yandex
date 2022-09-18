import Route from "./Route";
import Block from "./Block";

class Router {

  private static __instance: Router;
  private routes: Route[] = [];
  private _currentRoute: Route | null = null;
  private history:History = window.history;

  constructor(private readonly _rootQuery: string) {
      if (Router.__instance) {
          return Router.__instance;
      }

      this.routes = [];
      Router.__instance = this;
  }

  public use(pathname:string, block: typeof Block) {
      const route = new Route(pathname, block, this._rootQuery);
      this.routes.push(route);
      return this;
  } 

  public start() {
      window.onpopstate = (event: PopStateEvent ) => {
        const target = event.currentTarget as Window;
        this._onRoute(target.location.pathname);
      };

      this._onRoute(window.location.pathname);
  }

  private _onRoute(pathname:string) {
      const route = this.getRoute(pathname);
      if(!route){
        //todo redirect 
        // if(this.defaultBlock){
        //   this.go('/404');
        // }
        
        return
      }

      if (this._currentRoute && this._currentRoute !== route) {
          this._currentRoute.leave();
      }

      this._currentRoute = route;
      route.render();
  }

  public go(pathname:string) {
    this.history.pushState({}, "", pathname);
    this._onRoute(pathname);
  }

  public back() {
    this.history.back();
  }

  public forward() {
    this.history.forward();
  }

  private getRoute(pathname:string) {
    return this.routes.find(route => route.match(pathname));
  }
}

export default new Router('#app');
