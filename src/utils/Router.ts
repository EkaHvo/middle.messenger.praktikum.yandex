import Block from "./Block";

function renderDOM(query:string, block:Block) {
  const root = document.querySelector(query);
  if(root === null){
    throw new Error(`rootnot found selector "${query}"`);
  }

  root.innerHTML = '';
  
  root.append(block.getContent()!);

  return root;
}

const isEqual = (lhs:string, rhs:string) => {
  return lhs === rhs;
}

class Route {
  private _block:Block | null = null;

  constructor(
      private _pathname:string,
      private readonly _blockClass: typeof Block,
      private readonly _query:string) {
  }
  leave() {
      this._block = null;
  }
  match(pathname:string) {
      return isEqual(pathname, this._pathname);
  }
  render() {
    if (!this._block) {
        this._block = new this._blockClass({});
        renderDOM(this._query, this._block);
        return;
    }
  }
}

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
        this.go('/page_404');
        return;
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
