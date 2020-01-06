const botao = document.querySelector('#menu');
const menu = document.querySelector('#main-menu');

menu.classList.toggle('hide');

botao.addEventListener('click',function(){
    menu.classList.toggle('hide');
});
menu.addEventListener('click',function(){
    menu.classList.toggle('hide');
});