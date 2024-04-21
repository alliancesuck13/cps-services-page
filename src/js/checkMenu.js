export const checkMenu = () => {
  if (!document.querySelector('.aside-menu--closed')) {
    let buttonFeedback = document.querySelectorAll('.feedback-button');
    let buttonCall = document.querySelectorAll('.call-button');
  
    for (let i = 0; i < buttonFeedback.length; i++) {
      buttonFeedback[i].addEventListener("click", (evt) => {
        asideMenu.classList.add('aside-menu--closed');
      })
      buttonCall[i].addEventListener("click", (evt) => {
        asideMenu.classList.add('aside-menu--closed');
      })
    }
  }
}