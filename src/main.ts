import "normalize.css";
import "./style.sass";
import {
	createHeader,
	createFooter,
	createMain,
	createMenu,
} from "./UIElements";
import { initFunctions } from "./functions";

const app = document.querySelector("#app");

const header = createHeader();
const menu = createMenu();
const main = createMain();
const footer = createFooter();
app?.append(header, menu, main, footer);

initFunctions();
