Shery.mouseFollower();
Shery.makeMagnet('.magnet');
Shery.hoverWithMediaCircle(".hvr",{ videos : ['./video/0.mp4','./video/2.mp4','./video/03.mp4']})
Shery.makeMagnet('.featured h1')


gsap.to(".fleftelem",{
    scrollTrigger:{
        trigger:".featuredimages",
        pin :true,
        start:"top top",
        end :"bottom bottom",
        endTrigger:".last",
        scrub:1
    },
    y:"-300%",
    ease:Power1
})

let sections = document.querySelectorAll(".fleftelem")
Shery.imageEffect(".images", {
    style: 4,
    config: { onMouse: { value: 1 } },
    slideStyle: (setScroll) => {
      sections.forEach(function (section, index) {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          scrub: 1,
          onUpdate: function (prog) {
            setScroll(prog.progress + index);
          },
        });
      });
    },
  });