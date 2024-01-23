import header from "./header/header.js";
import value from "./value/value.js";
import buttonsShell from "./button/buttonsShell.js";
export default function counterShell() {
    const counterShell = document.createElement('div');
    counterShell.className = "counterShell";
    counterShell.append(header, value, buttonsShell);
    document.body.insertAdjacentElement("afterbegin", counterShell);
}