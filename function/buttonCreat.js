import idGen from "./idCreat.js";
export default function creatButton(q = 1) {
    for(let i = 0; i <= q; i++) {
        const button = document.createElement('button');
        button.id = `b${idGen()}`;
        button.className = "button";
        return button;
    }
}