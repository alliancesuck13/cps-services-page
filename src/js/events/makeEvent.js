"use strict";

export const makeEventClose = (element, variable, selector, overlayVariable, hideSelector) => {
  element.addEventListener("click", (evt) => {
    variable.classList.add(selector);

    if (overlayVariable) {
      overlayVariable.classList.add(hideSelector);
    }
  });
};

export const makeEventOpen = (element, variable, selector, overlayVariable, hideSelector) => {
  element.addEventListener("click", (evt) => {
    variable.classList.remove(selector);

    if (overlayVariable) {
      overlayVariable.classList.remove(hideSelector);
    }
  });
};

export const makeEventShowAndHide = (element, variable, selector, textShow, textHide) => {
  element.addEventListener("click", (evt) => {
    evt.preventDefault();
    variable.classList.toggle(selector);
    element.textContent = textShow;
    if (!document.querySelector("." + selector)) {
      element.textContent = textHide;
    }
  });
}

export const makeEventChangeWidthMenu = (variable) => {
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 320 && window.innerWidth <= 360) {
      variable.style.width = window.innerWidth + "px";
    }
    if (window.innerWidth >= 768) {
      variable.style.width = "320px";
    }
  });
}