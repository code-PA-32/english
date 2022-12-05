const tabletBurger = () => {
    const linkMenu = document.querySelector('.table-burger');
    const tabletWrapper = document.querySelector('.burger-tablet-wrapper');
    const burgerActivation = document.querySelector('.tablet-burger')

    burgerActivation.addEventListener('touchend', () => {
        burgerActivation.classList.toggle('tablet-burger-rotate');
        linkMenu.classList.toggle('table-burger-active');
        tabletWrapper.classList.toggle('burger-tablet-wrapper-active')
        if (tabletWrapper.classList.contains("burger-tablet-wrapper-active")) {
            document.body.style.overflow = "hidden";
          } else {
            document.body.style.overflow = "";
          }
    })
    tabletWrapper.addEventListener('touchend', () => {
        burgerActivation.classList.toggle('tablet-burger-rotate');
        linkMenu.classList.toggle('table-burger-active');
        tabletWrapper.classList.toggle('burger-tablet-wrapper-active')
        if (tabletWrapper.classList.contains("burger-tablet-wrapper-active")) {
            document.body.style.overflow = "hidden";
          } else {
            document.body.style.overflow = "";
          }
    })

    tabletWrapper.style.height = window.visualViewport.height + 'px';
    tabletWrapper.style.width = window.visualViewport.width + 'px';
    linkMenu.style.height = window.visualViewport.height + 'px'; 
}

export default tabletBurger;