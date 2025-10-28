gsap.registerPlugin(ScrollTrigger);

// /* <!-- main --> */
// /* <!-- main --> */

// /* <!-- overview --> */
let tl_1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".overview",
    start: "top 30%", 
    toggleActions: "play none none none" ,  
    // markers: true 
  }
});

tl_1.to(".overv_text-box p", {
  y: 0,     
  opacity: 1,
  duration: .7,
  ease: "power2.out"
});
// /* <!-- overview --> */

// /* <!-- Background --> */
let tl_2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".Background",
    start: "top 50%", 
    toggleActions: "play none none none" ,  
    // markers: true 
  }
});

tl_2.to(".backg_text-box", {
  y: 0,     
  opacity: 1,
  duration: .7,
  ease: "power2.out"
});
// /* <!-- Background --> */

// /* <!-- Usability Testing --> */
let tl_3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".Usability-Testing",
    start: "top 40%", 
    toggleActions: "play none none none" ,  
    // markers: true 
  }
});

tl_3.to(".c-line-box", {
  x: 0,     
  opacity: 1,
  duration: .7,
  ease: "power2.out"
});

tl_3.to(".tobe-item", {
  opacity: 1,
  duration: .7,
  ease: "power2.out"
});

tl_3.to(".tobe-item span", {
  y: 0,     
  opacity: 1,
  duration: .7,
  ease: "power2.out"
}, "-=.6");
// /* <!-- Usability Testing --> */

// /* <!-- Design Cencept --> */
let tl_4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".Design-Cencept",
    start: "top 40%", 
    toggleActions: "play none none none" ,  
    // markers: true 
  }
});

tl_4.to(".Circle-1 span", {
  y: 0,     
  opacity: 1,
  duration: .7,
  ease: "power2.out"
});

tl_4.to(".Circle-2 span", {
  y: 0,     
  opacity: 1,
  duration: .7,
  ease: "power2.out"
});

tl_4.to(".Circle-3 span", {
  y: 0,     
  opacity: 1,
  duration: .7,
  ease: "power2.out"
});

tl_4.to(".de_cent_item h5", {
  y: 0,     
  opacity: 1,
  duration: .7,
  ease: "power2.out"
});

tl_4.to(".de_cent_item p", {
  y: 0,     
  opacity: 1,
  duration: .7,
  ease: "power2.out"
});
// /* <!-- Design Cencept --> */

// /* <!-- Design System --> */
let tl_5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".Design-System",
    start: "top 40%", 
    toggleActions: "play none none none" ,  
    // markers: true 
  }
});

tl_5.to(".de-sys-title h1", {
  y: 0,     
  opacity: 1,
  duration: 1,
  ease: "power2.out"
}, "-=.2");


// /* <!-- Design System --> */

// /* <!-- Design Output --> */
let tl_6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".Design-Output",
    start: "top 70%", 
    toggleActions: "play none none none" ,  
    // markers: true 
  }
});

tl_6.to(".de-outp_text-box1 h5", {
  x: 0,     
  opacity: 1,
  duration: 1,
  ease: "power2.out"
}, "-=.2");

tl_6.to(".de-outp_text-box1 p", {
  y: 0,     
  opacity: 1,
  duration: 1,
  ease: "power2.out"
}, "-=.2");

let tl_7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".de-outp_img-box1",
    start: "top 80%", 
    toggleActions: "play none none none" ,  
    // markers: true 
  }
});

tl_7.to(".de-outp_img-box1 img", {
  x: 0,     
  opacity: 1,
  duration: 1,
  ease: "power2.out"
});

let tl_8 = gsap.timeline({
  scrollTrigger: {
    trigger: ".de-outp_img-box2",
    start: "top 80%", 
    toggleActions: "play none none none" ,  
    // markers: true 
  }
});

tl_8.to(".de-outp_img-box2 img", {
  x: 0,     
  opacity: 1,
  duration: 1,
  ease: "power2.out"
});

tl_8.to(".de-outp_text-box2 h5", {
  x: 0,     
  opacity: 1,
  duration: 1,
  ease: "power2.out"
}, "-=.2");

tl_8.to(".de-outp_text-box2 p", {
  y: 0,     
  opacity: 1,
  duration: 1,
  ease: "power2.out"
}, "-=.2");

let tl_9 = gsap.timeline({
  scrollTrigger: {
    trigger: ".de-outp_img-box3",
    start: "top 80%", 
    toggleActions: "play none none none" ,  
    // markers: true 
  }
});

tl_9.to(".de-outp_img-box3 img", {
  x: 0,     
  opacity: 1,
  duration: 1,
  ease: "power2.out"
});

tl_9.to(".de-outp_text-box3 h5", {
  x: 0,     
  opacity: 1,
  duration: 1,
  ease: "power2.out"
}, "-=.2");

tl_9.to(".de-outp_text-box3 p", {
  y: 0,     
  opacity: 1,
  duration: 1,
  ease: "power2.out"
}, "-=.2");

let tl_10 = gsap.timeline({
  scrollTrigger: {
    trigger: ".de-outp_img-box4",
    start: "top 80%", 
    toggleActions: "play none none none" ,  
    // markers: true 
  }
});

tl_10.to(".de-outp_img-box4 img", {
  x: 0,     
  opacity: 1,
  duration: 1,
  ease: "power2.out"
});

tl_10.to(".de-outp_text-box4 h5", {
  x: 0,     
  opacity: 1,
  duration: 1,
  ease: "power2.out"
}, "-=.2");

tl_10.to(".de-outp_text-box4 p", {
  y: 0,     
  opacity: 1,
  duration: 1,
  ease: "power2.out"
}, "-=.2");
// /* <!-- Design Output --> */


// /* <!-- full --> */
// /* <!-- full --> */