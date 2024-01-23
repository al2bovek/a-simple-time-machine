import buttonMinus from "../counter/button/buttonMinus.js";
import buttonPlius from "../counter/button/buttonPlius.js";
import value from "../counter/value/value.js";
let data = setInterval(() => value.textContent++, 1000);
buttonMinus.addEventListener('click', () => value.textContent--);
buttonPlius.addEventListener('click', () => value.textContent++);
export default data;