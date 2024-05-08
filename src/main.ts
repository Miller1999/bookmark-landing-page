import "normalize.css";
import "./style.sass";
import Logo from "./assets/logo-bookmark.svg";
import MenuIcon from "./assets/icon-hamburger.svg";
import PreImg from "./assets/illustration-hero.svg";

const app = document.querySelector("#app");

const createElement = (
	tagName: string,
	className: string = "",
	html: string = "",
	textContent: string = "",
	attributes: { [key: string]: string } = {}
): HTMLElement => {
	const element = document.createElement(tagName);
	if (className !== "") {
		element.classList.add(...className.split(" "));
	}
	element.innerHTML = html;
	element.textContent = textContent;
	for (const key in attributes) {
		if (attributes.hasOwnProperty(key)) {
			element.setAttribute(key, attributes[key]);
		}
	}
	return element;
};

const createHeader = (): HTMLElement => {
	const header = createElement("header");
	const logoContainer = createElement("div", "logo__container");
	const logo = createElement("img", "", "", "", { src: Logo });
	const menuContainer = createElement("div", "menu__container");
	const menuButton = createElement(
		"button",
		"button__menu",
		`
    <img src=${MenuIcon} alt="menu"/>
  `
	);
	logoContainer.appendChild(logo);
	menuContainer.append(menuButton);
	header.append(logoContainer, menuContainer);
	return header;
};

const createSection = (
	className: string,
	elements: HTMLElement[]
): HTMLElement => {
	const section = createElement("section", className);
	elements.forEach((element) => {
		section.append(element);
	});
	return section;
};

const createDiv = (
	className: string,
	elements: HTMLElement[] = []
): HTMLElement => {
	const div = createElement("div", className);
	if (elements.length !== 0)
		elements.forEach((element) => {
			div.append(element);
		});
	return div;
};

const createButton = (text: string): HTMLElement => {
	const button = createElement("button", "", "", text);
	return button;
};

const createMain = (): HTMLElement => {
	const main = createElement("main");
	const preImg = createElement("img", "", "", "", { src: PreImg });
	const semiCirclebackground = createDiv("semicircle");
	const imgContainer = createDiv("imgPre__container", [
		semiCirclebackground,
		preImg,
	]);
	const titlePre = createElement("h1", "", "", "A Simple Bookmark Manager");
	const descriptionPre = createElement(
		"p",
		"",
		"",
		"A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free."
	);
	const chromeButton = createButton("Get it on Chrome");
	const firefoxButton = createButton("Get it on Firefox");
	const buttonsPreContainer = createDiv("buttonsPre__container", [
		chromeButton,
		firefoxButton,
	]);
	const preInfoContainer = createDiv("preInfo__container", [
		titlePre,
		descriptionPre,
		buttonsPreContainer,
	]);
	const presentation = createSection("presentation__container", [
		imgContainer,
		preInfoContainer,
	]);
	main.append(presentation);
	return main;
};

const header = createHeader();
const main = createMain();
app?.append(header, main);
