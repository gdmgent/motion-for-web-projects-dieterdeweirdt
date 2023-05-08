gsap.registerPlugin(ScrollTrigger);

let articles = gsap.utils.toArray('article');

articles.forEach(article => {

    gsap.from(article, {
        scrollTrigger: {
            trigger: article,
            markers: true,
            toggleActions: "play reverse play reset",
            start: "top 80%",
            end: "bottom 20%",
        },
        duration: .5, 
        x: -300, 
        opacity: 0});
 });


