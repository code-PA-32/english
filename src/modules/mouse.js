const mouse = () => {
  const cursor = document.querySelector(".cursor");
  const innerCursor = document.querySelector(".item");
  const links = document.querySelectorAll('a');
  const buttons = document.querySelectorAll('button');
  const inputs = document.querySelectorAll('input');


  document.addEventListener("mousemove", (e) => {
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
  });
  document.addEventListener("mousemove", (e) => {
    innerCursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
  });

  const mouseOver = () => {
    const arr = [...links, ...buttons, ...inputs];
    arr.forEach(i => {
      i.addEventListener('mouseover', () => {
        cursor.classList.add('white');
        innerCursor.classList.add('inner-white', 'pulse-white');
      });
    });

    arr.forEach(i => {
      i.addEventListener('mouseleave', () => {
        cursor.classList.remove('white');
        innerCursor.classList.remove('inner-white', 'pulse-white')
      })
    })
  }
mouseOver();
  const toggleClass = (outerItem, innerItem) => {
    outerItem.classList.toggle("invis");
    innerItem.classList.toggle("pulse");
  };

  document.addEventListener("mousedown", () => {
    toggleClass(cursor, innerCursor);
  });
  document.addEventListener("click", () => {
    toggleClass(cursor, innerCursor);
  });
};
export default mouse;
