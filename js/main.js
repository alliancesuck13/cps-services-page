import { initSwiper } from "./slider/swiper.js";
import { makeEventOpen, makeEventClose, makeEventShowAndHide, makeEventChangeWidthMenu } from "./events/makeEvent.js";
import {
  buttonClose,
  buttonOpen,
  asideMenu,
  overlay,
  moreLink,
  sectionBlockText,
  brandsList,
  buttonShowBrands,
} from "./events/vars.js";

makeEventClose(buttonClose, asideMenu, "aside-menu--closed", overlay, "visually-hidden");
makeEventClose(overlay, asideMenu, "aside-menu--closed", overlay, "visually-hidden");

makeEventOpen(buttonOpen, asideMenu, "aside-menu--closed", overlay, "visually-hidden");

makeEventShowAndHide(moreLink, sectionBlockText, "section-block__text--show", "Скрыть", "Читать далее");
makeEventShowAndHide(buttonShowBrands, brandsList, "brands__list--show", "Скрыть", "Показать все");

makeEventChangeWidthMenu(asideMenu);

initSwiper();