import { set } from "./helpers";
import { EventBus } from "./EventBus";
import isEqual from "./isEqual";
import Block from "./Block";
import { StateData } from '../interfaces/interfaces';

export enum StoreEvents {
  Updated = 'updated'
}


export class Store extends EventBus{

  private state:any = {};

  public set(keypath: string, data: unknown){
    set(this.state, keypath, data);

    this.emit(StoreEvents.Updated, this.getState())
  }

  public getState():StateData{
    return this.state;
  }
}

const store = new Store();

export function withStore(mapStateToProps: (state: any) => any){

  return function wrap(Component: typeof Block){

    let previousState: any;
    return class WithStore extends Component {

      constructor(props: any) {
        previousState = mapStateToProps(store.getState());

        super({...props, ...previousState});

        store.on(StoreEvents.Updated, () => {
          const stateProps = mapStateToProps(store.getState());

          if(isEqual(previousState, stateProps)) {
            return
          }
          previousState = stateProps;

          this.setProps({...stateProps});
        });
      }
    }
  }
}

export default store;
