function mouseOverlay(delay) {
  document.addEventListener("DOMContentLoaded", () => {
    let mousePosX = 0,
      mousePosY = 0,
      mouseCircle = document.getElementById("mouse-circle");

    document.onmousemove = (e) => {
      mousePosX = e.pageX + 15;
      mousePosY = e.pageY + 15;
    };

    (this.delay = delay), (revisedMousePosX = 0), (revisedMousePosY = 0);

    function delayMouseFollow() {
      requestAnimationFrame(delayMouseFollow);

      revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
      revisedMousePosY += (mousePosY - revisedMousePosY) / delay;

      mouseCircle.style.top = revisedMousePosY + "px";
      mouseCircle.style.left = revisedMousePosX + "px";
    }
    delayMouseFollow();
  });
}

new mouseOverlay(2);

{
  let screenWidth = window.innerWidth;
  console.log(screenWidth);
  if (screenWidth < 650) {
    let navbar = document.getElementById("navbar");
    navbar.remove();
  }
}
