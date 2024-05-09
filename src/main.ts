import "normalize.css";
import "./style.sass";
import Logo from "./assets/logo-bookmark.svg";
import MenuIcon from "./assets/icon-hamburger.svg";
import PreImg from "./assets/illustration-hero.svg";
import tab1 from "./assets/illustration-features-tab-1.svg";
import Chrome from "./assets/logo-chrome.svg";
import Firefox from "./assets/logo-firefox.svg";
import Opera from "./assets/logo-opera.svg";

const app = document.querySelector("#app");

const browsers = [
	{ name: "Chrome", version: "62", img: Chrome },
	{ name: "Firefox", version: "55", img: Firefox },
	{ name: "Opera", version: "46", img: Opera },
];

const createElement = (
	tagName: string,
	className: string = "",
	html: string = "",
	attributes: { [key: string]: string } = {}
): HTMLElement => {
	const element = document.createElement(tagName);
	if (className !== "") {
		element.classList.add(...className.split(" "));
	}
	element.innerHTML = html;
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
	const logo = createElement("img", "", "", { src: Logo });
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
	const button = createElement("button", "", text);
	return button;
};

const createCard = (img: string, name: string, version: string) => {
	const logoCard = createElement("img", "", "", { src: img });
	const browserName = createElement("p", "", `Add to ${name}`);
	const browserVersion = createElement(
		"span",
		"",
		`Minimum version ${version}`
	);
	const infoContainer = createDiv("infoCard__container", [
		logoCard,
		browserName,
		browserVersion,
	]);
	const button = createButton("Add & Install Extension");
	const buttonContainer = createDiv("buttonCard__container", [button]);
	const card = createDiv("browser__card", [infoContainer, buttonContainer]);
	return card;
};

const createMain = (): HTMLElement => {
	const main = createElement("main");
	const preImg = createElement("img", "", "", { src: PreImg });
	const semiCirclebackground = createDiv("semicircle");
	const imgContainer = createDiv("imgPre__container", [
		semiCirclebackground,
		preImg,
	]);
	const titlePre = createElement("h1", "", "A Simple Bookmark Manager");
	const descriptionPre = createElement(
		"p",
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
	const titleFeatures = createElement("h2", "", "Features");
	const descriptionFeatures = createElement(
		"p",
		"",
		" Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go."
	);
	const featuresInfoContainer = createDiv("featuresInfo__container", [
		titleFeatures,
		descriptionFeatures,
	]);
	const tabs = createElement(
		"ul",
		"tabs",
		`
		<li class="selected__tab">Simple Bookmarking<div class="line__tab"></div></li>
		<li>Speedy Searching<div class="line__tab"></div></li>
		<li>Easy Sharing<div class="line__tab"></div></li>
	`
	);
	const imgTab = createElement("img", "", "", { src: tab1 });
	const imgContainerTab = createDiv("imgTab__container", [
		imgTab,
		semiCirclebackground,
	]);
	const titleTab = createElement("h3", "", "Bookmark in one click");
	const descriptionTab = createElement(
		"p",
		"",
		"Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
	);
	const informationContainer = createDiv("info__container", [
		titleTab,
		descriptionTab,
	]);
	const infoTab = createDiv("infoTab__container", [
		imgContainerTab,
		informationContainer,
	]);
	const featureTab = createDiv("feature__tab", [tabs, infoTab]);
	const features = createSection("features__container", [
		featuresInfoContainer,
		featureTab,
	]);
	const titleDownloads = createElement("h2", "", "Download the extension");
	const descriptionDownloads = createElement(
		"p",
		"",
		"We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize."
	);
	const downloadsInfoContainer = createDiv("downloadsInfo__container", [
		titleDownloads,
		descriptionDownloads,
	]);
	const browserCards: HTMLElement[] = [];
	browsers.forEach((browser) => {
		const newCard = createCard(browser.img, browser.name, browser.version);
		browserCards.push(newCard);
	});
	const cards = createDiv("cards__container", browserCards);
	const downloads = createSection("downloads__container", [
		downloadsInfoContainer,
		cards,
	]);
	main.append(presentation, features, downloads);
	return main;
};

const header = createHeader();
const main = createMain();
app?.append(header, main);
