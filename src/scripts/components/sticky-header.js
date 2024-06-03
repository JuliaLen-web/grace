window.addEventListener('load', () => {
  if (!document.querySelector('.header')) {
    return false
  }

  const header = document.querySelector('.header')
  const main = document.querySelector('.main')
  const footer = document.querySelector('.footer')

  const listener = () => {
    let notSmallContent = main.getBoundingClientRect().height > footer.getBoundingClientRect().y * 2
    let nearFooter = footer.getBoundingClientRect().y / 2 < footer.getBoundingClientRect().height

    if (nearFooter && notSmallContent) {
      header.classList.add('out')
    } else {
      header.classList.remove('out')
    }
  }

  window.addEventListener('scroll', listener)
  listener()
})
