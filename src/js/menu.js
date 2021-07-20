import menu from '../menu.json';
import menuTemplate from '../templates/menu.hbs';
console.log("menu");
console.log(menu);

 const menuRef = document.querySelector('.js-menu');


 const markup = menuTemplate(menu);
 menuRef.insertAdjacentHTML('beforeend', markup);