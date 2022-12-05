const burgerMobile = () => {
  const wrapper = document.querySelector(".burger-wrapper");
  const linkMenu = document.querySelector(".burger-menu");
  const burgerList = document.querySelector(".burger-touch");

  burgerList.addEventListener("touchend", () => {
    burgerList.classList.toggle("rotate");
    wrapper.classList.toggle("burger-wrapper-active");
    linkMenu.classList.toggle("burger-menu-active");
    if (wrapper.classList.contains("burger-wrapper-active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });
  wrapper.addEventListener("touchend", () => {
    burgerList.classList.remove("rotate");
    wrapper.classList.remove("burger-wrapper-active");
    linkMenu.classList.remove("burger-menu-active");
    if (wrapper.classList.contains("burger-wrapper-active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  wrapper.style.width = window.visualViewport.width + "px";
  linkMenu.style.height = wrapper.style.height =
    window.visualViewport.height + "px";
};
export default burgerMobile;
