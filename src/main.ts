import "normalize.css";
import "./style.sass";
import Logo from "./assets/logo-bookmark.svg";
import MenuIcon from "./assets/icon-hamburger.svg";

const app = document.querySelector("#app");

const createHeader = (): HTMLElement => {
	const header = document.createElement("header");
	const logoContainer = document.createElement("div");
	logoContainer.classList.add("logo__container");
	const logo = document.createElement("img");
	logo.src = Logo;
	const menuContainer = document.createElement("div");
	const menuButton = document.createElement("button");
	menuButton.classList.add("button__menu");
	menuButton.innerHTML = `
    <img src=${MenuIcon} alt="menu"/>
  `;
	logoContainer.appendChild(logo);
	menuContainer.append(menuButton);
	header.append(logoContainer, menuContainer);
	return header;
};

const header = createHeader();
app?.append(header);
