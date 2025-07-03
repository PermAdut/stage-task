import { navbarObjects } from "./constants.js";
const navbarList = document.querySelectorAll('.navbar_item');
Array.from(navbarList).forEach((el,index) => {
  el.innerHTML = navbarObjects[index];
})


