gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({
    markers: false,
    invalidateOnRefresh: true,
});

let sections = gsap.utils.toArray("section");
var global_global_tl = gsap.timeline();

sections.forEach(section => {
  let scrollTween = gsap.to(section, {
      ease: "none", // <-- IMPORTANT!
      scrollTrigger: {
        trigger: section,
        onEnter: () => {  enter(section); },
        onLeave: () => {  leave(section); },
        onLeaveBack: () => {  leaveBack(section); },
        onEnterBack: () => {  enterBack(section); },
        toggleActions: "play none none reverse",
        pin: false,
        scrub: 1,
        start: "top 100%",
        end: "bottom 99.9%" // fix zodat op de eerste section de box zichtbaar is
      }
    });
});

function start(method) {

}

function end(method) {

}

function enter(section) {
  var fnName = section.id;
  showbox(section);
  if(fnName) {
    section.init = false;
    section.tl = gsap.timeline({
      scrollTrigger : {
        trigger: section,
        scrub: 1,
        start: "top 100%",
        end: "bottom 100%",
        toggleActions: "play none none reverse",

      }
    });
    window[fnName]('enter');
  }
}

function leave(section) {
  var fnName = section.id;
  hidebox(section);
  if(fnName) {
    window[fnName]('leave');
  }
}

function leaveBack(section) {
  var fnName = section.id;
  hidebox(section);
  if(fnName) {
    window[fnName]('leaveBack');
  }
}
function enterBack(section) {
  var fnName = section.id;
  showbox(section);
  if(fnName) {
    window[fnName]('enterBack');
  }
}

function showbox(section) {
  if(section.id) {
    let box = document.querySelector("#" + section.id + " .box");
    box.style.visibility = "visible";
  }
}
function hidebox(section) {
  if(section.id) {
    let box = document.querySelector("#" + section.id + " .box");
    box.style.visibility = "hidden";
  }
}
