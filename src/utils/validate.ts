import { INPUTREGEXP } from "./regexpConstants";

export default function validate(value: string, name: string): boolean {
  let reg = new RegExp(INPUTREGEXP[name], "gm");
  return !reg.test(value);
}