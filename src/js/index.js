import { initSwiper } from './slider/swiper.js'

import { makeEventOpen, makeEventClose, makeEventShowAndHide, makeEventChangeWidthMenu } from './events/makeEvent.js'

import { buttonClose, buttonOpen, asideMenu, overlay, moreLink, sectionBlockText, brandsList, buttonShowBrands, buttonShowRepair, repairList, buttonCloseModal, modalFeedback, buttonOpenFeedback, buttonOpenCall, modalCall } from './events/vars.js'

import { checkMenu } from './checkMenu.js';

import '../scss/style.scss'

makeEventClose(buttonClose, asideMenu, 'aside-menu--closed', overlay, 'visually-hidden');
makeEventClose(overlay, asideMenu, 'aside-menu--closed', overlay, 'visually-hidden');
makeEventClose(buttonCloseModal, modalFeedback, 'modal--hide', overlay, 'visually-hidden');
makeEventClose(overlay, modalFeedback, 'modal--hide', overlay, 'visually-hidden');
makeEventClose(buttonCloseModal, modalCall, 'modal--hide', overlay, 'visually-hidden');
makeEventClose(overlay, modalCall, 'modal--hide', overlay, 'visually-hidden');

makeEventOpen(buttonOpen, asideMenu, 'aside-menu--closed', overlay, 'visually-hidden');
makeEventOpen(buttonOpenFeedback, modalFeedback, 'modal--hide', overlay, 'visually-hidden');
makeEventOpen(buttonOpenCall, modalCall, 'modal--hide', overlay, 'visually-hidden');

makeEventShowAndHide(moreLink, sectionBlockText, 'section-block__text--show', 'Скрыть', 'Читать далее');
makeEventShowAndHide(buttonShowBrands, brandsList, 'brands__list--show', 'Скрыть', 'Показать все');
makeEventShowAndHide(buttonShowRepair, repairList, 'repair__list--show', 'Скрыть', 'Показать все');

makeEventChangeWidthMenu(asideMenu);

checkMenu();

initSwiper();
