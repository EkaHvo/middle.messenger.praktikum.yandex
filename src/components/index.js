import input from "./input.hbs";
import message from "./message.hbs";
import Handlebars from "handlebars/dist/handlebars.runtime";

Handlebars.registerPartial('inputItem', input);
Handlebars.registerPartial('messageItem', message);