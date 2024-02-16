function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
locoScroll()

function cursorEffect(){
    var page1Content = document.querySelector("#pg1_content")
    var cursor = document.querySelector("#cursor")
    const variable1 = document.querySelector("#pg1_content h4")
    const variable2 = document.querySelector("#pg1_content h3")
    var tl = gsap.timeline()

    tl.from("#page1 #cursor",{
        x: "50%", 
        y: "50%", 
        opacity:0,
        stagger:0.1,
        duration:0.5,
        delay:-4.9
    })

    variable1.addEventListener('mouseover', () => {
        cursor.style.opacity = 0;
    });
    
    variable1.addEventListener('mouseout', () => {
        cursor.style.opacity = 1;
    });  
    variable2.addEventListener('mouseover', () => {
        cursor.style.opacity = 0;
    });
    
    variable2.addEventListener('mouseout', () => {
        cursor.style.opacity = 1;
    });  
page1Content.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x: dets.x, 
        y: dets.y
    })
})
page1Content.addEventListener("mouseenter", function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
page1Content.addEventListener("mouseleave", function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
}
cursorEffect()

function page2Animation(){
    gsap.from("#seperatorbelow span", {
        opacity: 0,
        // y:150,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 47%", 
            end: "bottom 46%", 
            // marrkers: true
        }
    });
}
page2Animation()


// function anotherCursor(){
//     const page2 = document.getElementById("page2");
//     const circles = page2.querySelectorAll(".circle");

//     const coords = { x: 0, y: 0 };

//     const colors = [
//       "#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e",
//       "#ec805d", "#e36e5c", "#df685c", "#d5585c", "#d1525c",
//       "#c5415d", "#c03b5d", "#b22c5e", "#ac265e", "#9c155f",
//       "#950f5f", "#830060", "#7c0060", "#680060", "#60005f",
//       "#48005f", "#3d005e"
//     ];

//     circles.forEach(function (circle, index) {
//       circle.x = 0;
//       circle.y = 0;
//       circle.style.backgroundColor = colors[index % colors.length];
//     });

//     window.addEventListener("mousemove", function(e){
//       coords.x = e.clientX;
//       coords.y = e.clientY;
//     });

//     function animateCircles() {
//       let x = coords.x;
//       let y = coords.y;

//       circles.forEach(function (circle, index) {
//         circle.style.left = x - 12 + "px";
//         circle.style.top = y - 12 + "px";
        
//         circle.style.transform = `scale(${(circles.length - index) / circles.length})`;
        
//         circle.x = x;
//         circle.y = y;

//         const nextCircle = circles[index + 1] || circles[0];
//         x += (nextCircle.x - x) * 0.3;
//         y += (nextCircle.y - y) * 0.3;
//       });

//       requestAnimationFrame(animateCircles);
//     }

//     animateCircles();

// }
// anotherCursor()

// function cursorEffect1() {
//     var page4Content = document.querySelector("#page4");
//     var cursor2 = document.querySelector("#cursor2");
//     var cursorWidth = cursor2.offsetWidth;
//     var cursorHeight = cursor2.offsetHeight;

//     page4Content.addEventListener("mousemove", function(detss) {
//         gsap.to(cursor2, {
//             x: detss.x - cursorWidth / 2,
//             y: detss.y - cursorHeight / 2,
//             ease: "power4.out"
//         });
//     });

//     page4Content.addEventListener("mouseenter", function() {
//         gsap.to(cursor2, {
//             scale: 1,
//             opacity: 1,
//             ease: "power4.out"
//         });
//     });

//     page4Content.addEventListener("mouseleave", function() {
//         gsap.to(cursor2, {
//             scale: 0,
//             opacity: 0,
//             ease: "power4.out"
//         });
//     });
// }
// cursorEffect1();

function sliderAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
          },
      });
}
sliderAnimation()

function loaderAnimation(){
    var tl = gsap.timeline()

tl.from("#loader h3",{
    x:40,
    opacity: 0,
    duration:0.7,
    stagger:0.1
})
tl.to("#loader h3",{
    x:-10,
    opacity: 0,
    duration:0.7,
    stagger:0.1
})
tl.to("#loader",{
    opacity:0
})
tl.from("#pg1_content h1 span",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    delay:-0.5
})
tl.from("#pg1_content h3",{
    x:100,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    delay:-0.5
})
tl.from("#pg1_content h4",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    delay:-0.5
})


tl.to("#loader",{
    display:"none"
})
}
loaderAnimation()

function page6Animation(){
    var crsr = document.querySelector("#page6 #crsr")
var page6 = document.querySelector("#page6")

page6.addEventListener("mousemove",function(detss){
    crsr.style.left = detss.x + "px"
    crsr.style.top = detss.y + "px"
})

document.querySelector("#page6 #overlay1").addEventListener("mousemove",function(detss){
    document.querySelector("#page6 #elem1 img").style.scale = 1
    document.querySelector("#page6 #elem1 img").style.opacity = 1
    crsr.style.opacity = 0
    document.querySelector("#page6 #elem1 img").style.left = (detss.x - 330) +"px"
    document.querySelector("#page6 #elem1 img").style.top = (detss.y - 400) +"px"
})
document.querySelector("#page6 #overlay1").addEventListener("mouseleave",function(detss){
    document.querySelector("#page6 #elem1 img").style.scale = 0
    document.querySelector("#page6 #elem1 img").style.opacity = 0
    crsr.style.opacity = 1
})
document.querySelector("#page6 #overlay2").addEventListener("mousemove",function(detss){
    document.querySelector("#page6 #elem2 img").style.scale = 1
    document.querySelector("#page6 #elem2 img").style.opacity = 1
    crsr.style.opacity = 0
    document.querySelector("#page6 #elem2 img").style.left = (detss.x - 760) +"px"
    document.querySelector("#page6 #elem2 img").style.top = (detss.y - 400) +"px"
})
document.querySelector("#page6 #overlay2").addEventListener("mouseleave",function(detss){
    document.querySelector("#page6 #elem2 img").style.scale = 0
    document.querySelector("#page6 #elem2 img").style.opacity = 0
    crsr.style.opacity = 1
})
document.querySelector("#page6 #overlay3").addEventListener("mousemove",function(detss){
    document.querySelector("#page6 #elem3 img").style.scale = 1
    document.querySelector("#page6 #elem3 img").style.opacity = 1
    crsr.style.opacity = 0
    document.querySelector("#page6 #elem3 img").style.left = (detss.x - 1100) +"px"
    document.querySelector("#page6 #elem3 img").style.top = (detss.y - 425) +"px"
})
document.querySelector("#page6 #overlay3").addEventListener("mouseleave",function(detss){
    document.querySelector("#page6 #elem3 img").style.scale = 0
    document.querySelector("#page6 #elem3 img").style.opacity = 0
    crsr.style.opacity = 1
})
}
page6Animation()


function page7Animation(){
    var myDraggable = Draggable.create("#dragme",{
        type: 'x',
        bounds: "#container",
    });
    
    function checkOverlap() {
        var div1 = document.querySelector(".end");
        var div2 = document.getElementById('dragme');
        var rect1 = div1.getBoundingClientRect();
        var rect2 = div2.getBoundingClientRect();
    
        if (
          rect1.left < rect2.right
        ) {
        document.querySelector("#video1").style.opacity= 0;
        document.querySelector("i").style.opacity= 0;
        document.querySelector(".on-cir").style.backgroundColor= "#fff";
        console.log('Divs are overlapping!');
        }
        else{
            document.querySelector("#video1").style.opacity= 1;
            document.querySelector("i").style.opacity= 1;
            document.querySelector(".on-cir").style.backgroundColor= "orange";
        }
      }
    window.addEventListener('mousemove', checkOverlap);
}
page7Animation()




