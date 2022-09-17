import Block from "./Block";

export default function render(query:string, block:Block) {
  const root = document.querySelector(query);
  if(root === null){
    throw new Error(`rootnot found selector "${query}"`);
  }

  root.innerHTML = '';
  
  root.append(block.getContent()!);

  return root;
}
