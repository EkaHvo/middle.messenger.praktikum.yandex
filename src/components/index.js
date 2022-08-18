import input from "./input.hbs";
import message from "./message.hbs";
import avatar from "./avatar.hbs";
import addMessageLine from "./addMessageLine.hbs";
import friendInfoTopLine from "./friendInfoTopLine.hbs";
import Handlebars from "handlebars/dist/handlebars.runtime";

Handlebars.registerPartial('inputItem', input);
Handlebars.registerPartial('messageItem', message);
Handlebars.registerPartial('avatarItem', avatar);
Handlebars.registerPartial('addMessageLine', addMessageLine);
Handlebars.registerPartial('friendInfoTopLine', friendInfoTopLine);