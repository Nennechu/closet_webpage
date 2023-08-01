const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.navi_menu');

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});