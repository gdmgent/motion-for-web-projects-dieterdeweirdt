console.log('app.js loaded');

let timeline = gsap.timeline({ repeat: -1, yoyo: true });

timeline.to('h1', {duration:.2, x: 300, y:200, rotation:360, backgroundColor: "blue" });
timeline.to('.box' , {duration:1, x: 300, y:200, rotation:360, backgroundColor: "red", ease: "back", borderRadius: "50%" });
timeline.from('li', {duration: .5, x: "-300px", opacity: 0, stagger: .5});
