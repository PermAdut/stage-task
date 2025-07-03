const navbarObjects = ['why spring', 'learn', 'projects', 'academy', 'community', 'tanzu spring']
const navbarList = document.querySelectorAll('.navbar_item');
Array.from(navbarList).forEach((el,index) => {
  el.innerHTML = navbarObjects[index];
})


