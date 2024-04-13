// осторожно, проходят работы.. многое подлежит изменению
// на десктопах я умышленно оставил возможность закрывать меню

let asideMenu = document.querySelector(".aside-menu");
let overlay = document.querySelector(".overlay");
let buttonClose = document.querySelector(".aside-menu__close-button");
let buttonOpen = document.querySelector(".b-block__button-open");
let moreLink = document.querySelector(".section-block__link");
let sectionBlockText = document.querySelector(".section-block__text");
let brandsList = document.querySelector(".brands__list");
let buttonShowBrands = document.querySelector('.show-brands__button');

buttonClose.addEventListener("click", (evt) => {
  asideMenu.classList.add("aside-menu--closed");
  overlay.classList.add("visually-hidden");
});

buttonOpen.addEventListener("click", (evt) => {
  asideMenu.classList.remove("aside-menu--closed");
  overlay.classList.remove("visually-hidden");
});

moreLink.addEventListener("click", (evt) => {
  evt.preventDefault();
  sectionBlockText.classList.toggle("section-block__text--show");
  moreLink.textContent = "Скрыть";
  if (!document.querySelector('.section-block__text--show')) {
    moreLink.textContent = "Читать далее";
  }
});

buttonShowBrands.addEventListener("click", (evt) => {
  evt.preventDefault();
  brandsList.classList.toggle('brands__list--show');
  buttonShowBrands.textContent = "Скрыть";
  if (!document.querySelector('.brands__list--show')) {
    buttonShowBrands.textContent = "Показать все";
  }
})
