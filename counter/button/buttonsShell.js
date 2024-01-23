import buttonPlius from "./buttonPlius.js";
import buttonMinus from "./buttonMinus.js";
const buttonsShell = document.createElement('div');
buttonsShell.className = "buttonShell";
buttonsShell.append(buttonMinus, buttonPlius);
export default buttonsShell;