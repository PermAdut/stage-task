import { navbarObjects } from './constants.js'
const navbarList = document.querySelectorAll('.navbar_item')
Array.from(navbarList).forEach((el, index) => {
  el.innerHTML = navbarObjects[index]
})
const navbarSubItemList = document.querySelectorAll('.navbar_subitem_title')
Array.from(navbarSubItemList).forEach((el, index) => {
  el.innerHTML = navbarObjects[index]
})
const navbarSubItem = document.querySelectorAll('.navbar_subitem')
const navbarSubItemTitle = document.querySelectorAll('.navbar_subitem_title')
Array.from(navbarSubItem).forEach((el, index) => {
  navbarSubItemTitle[index].addEventListener('click', () => {
    const navbarSubitemTitle = el.querySelector('.navbar_subitem_title')
    navbarSubitemTitle.classList.toggle('navbar_subitem_title_active')
    const navbarSubitemsLinks = document.querySelectorAll(
      '.navbar_subitem_links'
    )
    Array.from(navbarSubitemsLinks).forEach((el) => {
      el.classList.add('navbar_subitem_links')
    })
    const elementNavbarSubitemLink = el.querySelector('ul')
    if (elementNavbarSubitemLink) {
      elementNavbarSubitemLink.classList.toggle('navbar_subitem_links')
    }
  })
})
let isToogeled = false
const navbarBurger = document.querySelector('.navbar_burger')
navbarBurger.addEventListener('click', () => {
  if (!isToogeled) {
    isToogeled = true
    navbarBurger.classList.toggle('navbar_burger_active')
    const navbarWrapper = document.querySelector('.navbar_wrapper')
    navbarWrapper.classList.toggle('navbar_wrapper_active')
    const navbarBurgerLine = document.querySelectorAll('.navbar_burger_line')
    Array.from(navbarBurgerLine).forEach((el) => {
      el.classList.toggle('navbar_burger_line_active')
    })
  } else {
    isToogeled = false
    navbarBurger.classList.toggle('navbar_burger_active')
    const navbarWrapper = document.querySelector('.navbar_wrapper')
    navbarWrapper.classList.toggle('navbar_wrapper_active')
    const navbarBurgerLine = document.querySelectorAll('.navbar_burger_line')
    Array.from(navbarBurgerLine).forEach((el) => {
      el.classList.toggle('navbar_burger_line_active')
    })
  }
})
