// TODO: write code here

import { Example } from "./Example";

// comment this to pass build
const unusedVariable = "variable";

// for demonstration purpose only
export default function demo(value) {
  return `Demo: ${value}`;
}

console.log("app.js included");

const root = document.querySelector(".root");
setTimeout(() => {
  root.textContent = "content";
}, 4000);

const elClass = new Example(root);

elClass.change("I am a text from metod change");
