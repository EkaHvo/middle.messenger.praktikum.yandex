import Block from "./Block";
//@ts-ignore
import * as Handlebars from "handlebars";

export function registerComponent(name: string, Component: typeof Block) {
  Handlebars.registerHelper(name, function({data, hash}):string{
    
    const component = new Component(hash);

    if(!data.root.children) {
      data.root.children = {};
    }

    data.root.children[component.id] = component;

    return `<div data-id="${component.id}"></div>`

  })
}
