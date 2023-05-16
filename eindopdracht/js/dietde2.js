const moveCursor = (e)=> {
    const shuttle = document.querySelector('.shuttle');
    const mouseY = e.clientY;
    const mouseX = e.clientX - 24;

    const shuttleX = shuttle.offsetLeft;
    const shuttleY = shuttle.offsetTop;

    const dist = Math.abs(mouseX - shuttleX +mouseY - shuttleY);

    let deg = Math.atan2(mouseY - shuttleY, mouseX - shuttleX) * 180 / Math.PI;

    if(mouseX < shuttleX) {
        deg = deg-180; //andere richting draaien
    } 
    scale = Math.floor(1 + dist/200);
    
    gsap.to(shuttle, {
        left: `${mouseX}px`,
        top: `${mouseY}px`,
        rotation: deg,
        duration: 1,
        scale: scale,
    });
}

function dietde2(action) {
    let section = document.getElementById("dietde2");
    const shuttle = document.querySelector('.shuttle');

    if(action == "enter" || action == "enterBack") {
        shuttle.style.display = "block";
        section.addEventListener('mousemove', moveCursor);
    } else {
        shuttle.style.display = "none";
        window.removeEventListener('mousemove', moveCursor);
    }

    if( ! section.init) {
        section.init = true;
        section.tl
        .add("makeGlobe")
            .to("#dietde2 .earth span", {
                opacity: 1,
                borderRadius: "50%",
            }, "makeGlobe")
            .to("#dietde2 .earth", {
                borderRadius: "50%",
                boxShadow: "0 0 2rem rgba(255,255,255,0.5)",
                rotation: 360,
            }, "makeGlobe")
        .add("size")
            .to("#dietde2 .earth", {
                width: "80vh", height: "80vh", left: "calc(50vw-40vh)", top: "10vh"
            }, "size")
        .add("solar")
            .to("#dietde2 .earth span", {
            }, "solar")
            .to("#dietde2 .earth", {
                width: "40vw", height: "40vw", left: "30vw", top: "40vh",
            }, "solar")
            .to("#dietde2 .sun", { x: "-180vw", y: "-140vh", rotation: 20 },    "solar")
            .to("#dietde2 .mercury", { x: "10vw", y: "50vh" },    "solar")
            .to("#dietde2 .venus", { x:"18vw",  y:"49vh" },    "solar")
            .to("#dietde2 .mars", { x: "60vw", y: "60vh" },    "solar")
        .add("speed")
            .to("#dietde2 .earth", {
                width: "40vw", height: "40vw", left: "30vw", top: "calc(50vh - 20vw)"
            }, "speed")
            .to("#dietde2 .earth .map", {
                animationDuration: "20s"
            }, "speed")
            //.from("#dietde2 div.info-speed", { y: 400 },    "speed")
            .to("#dietde2 .sun", { x: "180vw", y: "-180vh", rotation: 80, ease: "power2.easeIn" },    "speed")
            .to("#dietde2 .mercury", { x: "170vw", y: "30vh", rotation: 180, ease: "power2.easeIn" },    "speed")
            .to("#dietde2 .venus", { x: "130vw", y: "30vh", rotation: 180, ease: "power2.easeIn" },    "speed")
            .to("#dietde2 .mars", { x: "-140vw", y: "60vh", rotation: 180, ease: "power2.easeIn" },    "speed")
        .add("shuttle")
            .to("#dietde2 .earth", { width: "70vw", height: "70vw", left: "15vw", top: "70vh", borderRadius: "50%" }, "shuttle")
            .to("#dietde2 .earth .map", {
                animationDuration: "60s"
            }, "shuttle")
            .to("#dietde2 .info #shuttle", { y: "-120vh", ease: "power1.easeIn", scale: 2 },    "shuttle")
            .to("#dietde2 #satellites", { opacity: 1, top: "48vh", ease: "power2.easeIn" },    "shuttle")
        .add("author")
            .to("#dietde2 .earth", { width: "70vw", height: "70vw", left: "15vw", top: "70vh", borderRadius: "50%" }, "author")
        .add("reset")
            .to("#dietde2 #satellites", { opacity: 0, top: "48vh" },    "reset")
            .to("#dietde2 .earth", { width: "20vw", height: "20vw", left: "40vw", top: "calc(50vh - 10vw)", borderRadius: "0" }, "reset")
            .to("#dietde2 .earth span", { opacity: 0, borderRadius: "0" }, "reset")
        ;

    }
}