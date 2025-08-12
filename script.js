
const menuCloseBtn = document.querySelector('#menu-close-btn');
const menuOpenBtn = document.querySelector('#menu-open-btn');

menuOpenBtn.addEventListener('click', ()=> {
    document.body.classList.toggle('show-mobile-menu')
});
menuCloseBtn.addEventListener('click', ()=> {
    menuOpenBtn.click();
})
