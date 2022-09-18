import Block from "./Block";
import renderDOM from "./renderDOM";

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

export default Route;
