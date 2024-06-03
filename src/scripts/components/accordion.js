window.addEventListener('load', () => {
  if (!document.querySelector('.accordion')) {
    return false
  }

  let accordions = document.querySelectorAll('.accordion')

  const open = (accordion, accordionContent) => {
    closeAllDrops(accordion);

    accordion.classList.add('active');
    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
  };

  const close = (accordion, accordionContent) => {
    accordion.classList.remove('active');
    accordionContent.style.maxHeight = '';
  };

  const closeAllDrops = (accordion) => {
    accordions.forEach((elem) => {
      if (elem !== accordion) {
        close(elem, elem.children[1]);
      }
    })
  }

  open(accordions[0], accordions[0].children[1])

  accordions.forEach(elem => {
    let accordionHead = elem.querySelector('.accordion__head')
    let accordionContent = elem.querySelector('.accordion__content')

    accordionHead.addEventListener('click', () => {

      elem.classList.contains('active') ?
        close(elem, accordionContent) :
      open(elem, accordionContent)
    })
  })

})
