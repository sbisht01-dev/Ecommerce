// barba.init({
//   transition: [
//     {
//       name: "opacity-transition",
//       leave(data) {
//         return gsap.to(data.current.container, {
//           opacity: 0,
//         });
//       },
//       enter(data) {
//         return gsap.from(data.next.container, {
//           opacity: 0,
//         });
//       },
//     },
//   ],
// });
function pageTransition() {
  let tl = gsap.timeline();
  tl.from(".transition", {
    duration: 1,
    scaleY: 0,
    transformOrigin: "bottom",
    ease: "power4.inout",
  });

  tl.to(".transition", {
    duration: 1,
    scaleY: 1,
    transformOrigin: "top",
    ease: "power4.inout",
    delay: 0.2,
  });
}

function contentAnimaiton() {
  let tl = gsap.timeline();
  tl.to(".hero", {
    top: 0,
    duration: 1,
    ease: "power3.inout",
    delay: 0.75,
  });
}

function delay(n) {
  n = n || 0;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

barba.init({
  sync: true,
  transition: [
    {
      async leave(data) {
        const done = this.async();
        pageTransition();
        await delay(1000);
        done();
      },
      async enter(data) {
        contentAnimaiton();
      },
      async once(data) {
        contentAnimaiton();
      },
    },
  ],
});
