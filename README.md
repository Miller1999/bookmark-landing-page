# Frontend Mentor - Bookmark landing page solution

This is a solution to the [Bookmark landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly

### Screenshot

![imagen](https://github.com/Miller1999/bookmark-landing-page/assets/22383830/7c3581c8-a84e-4b27-a220-2d0bd234af3a)
![imagen](https://github.com/Miller1999/bookmark-landing-page/assets/22383830/89f05663-80d7-4836-b03d-269dbbf9bcc7)
![imagen](https://github.com/Miller1999/bookmark-landing-page/assets/22383830/2306c2c3-2048-49d8-833b-f6628c7f1237)

### Links

- Solution URL: [Github Repository](https://github.com/Miller1999/bookmark-landing-page)
- Live Site URL: [Bookmarks landing page](https://bookmark-landing-page-black-pi.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- SASS variables
- TypeScript
- Modular functions
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [SASS](https://sass-lang.com/)

### What I learned

In this project i decided to think in modular code, i love it. This was the first time i wrote modular code and i am very proud of my code. This code was the base of all ui functions

```js
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
}
```

### Continued development

I want to work more with typescript and continue with this modular code

## Author

- Website - [Miller Arias](https://miller-arias-dev.vercel.app/)
- Frontend Mentor - [@Miller1999](https://www.frontendmentor.io/profile/Miller1999)
- Twitter - [@miller_arias](https://twitter.com/miller_arias)
- Github - [@Miller1999](https://github.com/Miller1999)

