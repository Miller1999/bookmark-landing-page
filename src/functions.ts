import tab1 from "./assets/illustration-features-tab-1.svg";
import tab2 from "./assets/illustration-features-tab-2.svg";
import tab3 from "./assets/illustration-features-tab-3.svg";
export const initFunctions = () => {
	const handleMenu = () => {
		menu?.classList.toggle("menu__mobile-hidden");
	};
	const handleTab = (
		tab: HTMLElement,
		imgTab: HTMLImageElement | null,
		titleTab: HTMLElement | null,
		descriptionTab: HTMLElement | null
	) => {
		const tabText = tab.textContent;
		tab.classList.add("selected__tab");
		arrayTabs.forEach((item) => {
			if (item !== tab) {
				item.classList.remove("selected__tab");
			}
		});
		if (imgTab && titleTab && descriptionTab)
			switch (tabText) {
				case "Simple Bookmarking":
					imgTab.src = tab1;
					titleTab.textContent = "Bookmark in one click";
					descriptionTab.textContent =
						"Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
					break;
				case "Speedy Searching":
					imgTab.src = tab2;
					titleTab.textContent = "Intelligent search";
					descriptionTab.textContent =
						"Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
					break;
				case "Easy Sharing":
					imgTab.src = tab3;
					titleTab.textContent = "Share your bookmarks";
					descriptionTab.textContent =
						"Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
					break;
				default:
					break;
			}
	};
	const initTabs = (
		tabs: NodeListOf<HTMLElement>,
		imgTab: HTMLImageElement | null,
		titleTab: HTMLElement | null,
		descriptionTab: HTMLElement | null
	) => {
		const arrayTabs = Array.from(tabs);
		arrayTabs.forEach((tab) => {
			tab.addEventListener("click", () => {
				handleTab(tab, imgTab, titleTab, descriptionTab);
			});
		});
	};
	//Header
	const hamburguerButton: HTMLElement | null =
		document.querySelector(".button__menu");
	const menu: HTMLElement | null = document.querySelector(".menu-mobile");
	hamburguerButton?.addEventListener("click", handleMenu);
	//Menu
	const closeButton: HTMLElement | null = document.querySelector(
		".headerMenu__mobile button"
	);
	closeButton?.addEventListener("click", handleMenu);
	//Tabs
	const tabs: NodeListOf<HTMLElement> = document.querySelectorAll(".tabs li");
	const arrayTabs: Element[] = Array.from(tabs);
	const imgTab: HTMLImageElement | null = document.querySelector(
		".imgTab__container img"
	);
	const titleTab: HTMLElement | null = document.querySelector(
		".info__container h3"
	);
	const descriptionTab: HTMLElement | null =
		document.querySelector(".info__container p");

	initTabs(tabs, imgTab, titleTab, descriptionTab);
	// FAQS
	const faqButtons = document.querySelectorAll(
		".faq__container .question__container img"
	);

	faqButtons.forEach((button) => {
		button.addEventListener("click", (e: any) => {
			button.classList.toggle("arrow-red");
			e.target.parentElement.nextSibling.classList.toggle("hidden-answer");
		});
	});
	// Form
	const regEx =
		/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
	const form: HTMLFormElement | null = document.querySelector("form");
	const inputForm: HTMLInputElement | null =
		document.querySelector("form input");
	const inputContainer: HTMLElement | null =
		document.querySelector(".input__container");
	const formButton: HTMLButtonElement | null =
		document.querySelector("form button");

	form?.addEventListener("submit", (e) => {
		e.preventDefault();
		formButton?.addEventListener("click", (e) => {
			e.preventDefault();
			if (inputForm) {
				const email = inputForm.value.trim();
				if (!regEx.test(email)) {
					inputContainer?.classList.add("error");
					inputForm.focus();
					return false;
				} else {
					inputContainer?.classList.remove("error");
					alert("Form sent");
					return true;
				}
			}
		});
	});
};
