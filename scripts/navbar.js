import { navbarObjects } from './constants.js'

function generateNavBarItems() {
  const navbarItems = document.getElementsByClassName('navbar_items')
  navbarObjects.forEach((el, index) => {
    let div = document.createElement('div')
    div.className = 'navbar_link'
    navbarItems[0].append(div)
    const title = generateTitle(el.title)
    const subItems = generateSubItemsList(el.subMenuObjects)
    const link = document.querySelectorAll('.navbar_link')
    link[index].innerHTML = `${title}${subItems}`
    const span = div.querySelector('.navbar_item')
    if (span && el.isArrow) {
      span.style.position = 'relative'
      const afterElement = document.createElement('span')
      afterElement.style.content = '" "'
      afterElement.style.right = '15px'
      afterElement.style.top = '20px'
      afterElement.style.width = '0.5rem'
      afterElement.style.height = '0.5rem'
      afterElement.style.borderBottom = '2px solid var(--text-color)'
      afterElement.style.borderLeft = '2px solid var(--text-color)'
      afterElement.style.borderRadius = '1px'
      afterElement.style.transform = 'rotate(-45deg)'
      afterElement.style.marginLeft = '0.5rem'
      afterElement.style.marginTop = '-0.1rem'
      span.appendChild(afterElement)
    }
  })
}

function generateNavBarSubItems() {
  const navbarItems = document.getElementsByClassName('navbar_subitems')
  navbarObjects.forEach((el) => {
    let div = document.createElement('div')
    div.className = 'navbar_subitem'
    navbarItems[0].append(div)
    let secondDiv = document.createElement('div')
    secondDiv.className = 'navbar_subitem_extra'
    div.appendChild(secondDiv)
    const title = generateTitle(el.title, 'navbar_subitem_title')
    secondDiv.innerHTML = `${title}`
    const span = div.querySelector('.navbar_subitem_title')
    if (span && el.isArrow) {
      span.style.position = 'relative'
      const afterElement = document.createElement('span')
      afterElement.style.content = '" "'
      afterElement.style.position = 'absolute'
      afterElement.style.right = '15px'
      afterElement.style.top = '20px'
      afterElement.style.width = '15px'
      afterElement.style.height = '15px'
      afterElement.style.border = 'solid #98afae'
      afterElement.style.borderWidth = '0 2px 2px 0'
      afterElement.style.display = 'block'
      afterElement.style.transform =
        'rotate(-135deg) translate(5px, 15px) scale(-1)'
      afterElement.style.transition = 'transform 0.2s ease-out'
      span.appendChild(afterElement)
    }
  })
}

function generateTitle(title, className = 'navbar_item') {
  return `<span class="${className}">${title}</span>`
}

function generateSubItemsList(
  subMenuObjects,
  ulClassName = 'navbar_dropdown_content',
  linkClassName = 'navbar_dropdown_link'
) {
  if (!subMenuObjects) return ''
  let result = `<ul class=${ulClassName}>`
  subMenuObjects.forEach((el) => {
    if (el.isMargin)
      result += `<li style="margin-bottom: 24px"><a class=${linkClassName} href="#">${el.text}</a></li>`
    else if (!el.isLink)
      result += `<li><div class=${linkClassName}>${el.text}</div></li>`
    else
      result += `<li><a class=${linkClassName}>${el.text}${el?.extraContent ? el.extraContent : ''}</a></li>`
  })
  result += `</ul>`
  return result
}

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

generateNavBarItems()
generateNavBarSubItems()
const navbarSubItem = document.querySelectorAll('.navbar_subitem_extra')
const navbarTitles = document.querySelectorAll('.navbar_subitem_title')
Array.from(navbarSubItem).forEach((el, index) => {
  el.addEventListener('click', () => {
    const subItems = generateSubItemsList(
      navbarObjects[index].subMenuObjects,
      'navbar_subitem_links',
      'navbar_subitem_link'
    )
    navbarTitles.forEach((element, indexEl) => {
      if (element.firstElementChild && index === indexEl) {
        element.firstElementChild.classList.toggle(
          'navbar_subitem_title_active'
        )
      } else if (element.firstElementChild)
        element.firstElementChild.classList.remove(
          'navbar_subitem_title_active'
        )
    })
    const existedSubItems = document.querySelectorAll('.navbar_subitem_links')
    existedSubItems.forEach((item) => {
      if (item !== el.nextSibling) {
        item.remove()
      }
    })

    if (
      el.nextSibling &&
      el.nextSibling.classList.contains('navbar_subitem_links')
    ) {
      el.nextSibling.remove()
    } else {
      const tempDiv = document.createElement('div')
      tempDiv.innerHTML = subItems
      const subItemsElement = tempDiv.firstElementChild
      el.parentNode.insertBefore(subItemsElement, el.nextSibling)
    }
  })
})
