function mouseOverlay(delay) {
  document.addEventListener("DOMContentLoaded", () => {
    let mousePosX = 0,
      mousePosY = 0,
      mouseCircle = document.getElementById("mouse-circle");

    document.onmousemove = (e) => {
      mousePosX = e.pageX;
      mousePosY = e.pageY;
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
