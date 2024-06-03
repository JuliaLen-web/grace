
window.addEventListener('load', () => {
  if (!document.querySelector('.burger')) {
    return false
  }

  const body = document.querySelector('body')

  const menuBtn = document.querySelector('.burger__icon')
  const hiddenMenu = document.querySelector('.burger')

  const toggleMenu = () => {
    hiddenMenu.classList.toggle('active')

    if (hiddenMenu.classList.contains('active')) {
      body.classList.add('overflow-all')
    } else {
      body.classList.remove('overflow-all')
    }
  }

  const closeMenu = () => {
    body.classList.remove('overflow-all')

    setTimeout(() => {
      hiddenMenu.classList.remove('active')
    }, 400)
  }

  const menuNav = document.querySelectorAll('.burger__menu .navigation__wrap li a')
  const menuSocial = document.querySelectorAll('.burger__menu .social-links a')
  const menuLogo = document.querySelector('.burger__menu .logo')

  menuBtn.addEventListener('click', toggleMenu)
  menuLogo.addEventListener('click', closeMenu)
  menuNav.forEach(el => el.addEventListener('click', closeMenu))
  menuSocial.forEach(el => el.addEventListener('click', closeMenu))

})
