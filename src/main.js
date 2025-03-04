import gsap from "gsap"
import Lenis from "lenis"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
})
function raf(time){
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf)

const tl = gsap.timeline()

tl.from('nav', {
    width: 0
})

tl.from('nav h3', {
    opacity: 0,
    stagger: 0.2
})

tl.from('.page:nth-child(1) span', {
    y: 30,
    stagger: 0.2,
    opacity: 0,
    scale: 1.08,
    rotate: '-2deg'
})

gsap.to('.scrollbar', {
    height: '95%',
    scrollTrigger: {
        trigger: 'main',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
    }
})

gsap.to('.page:nth-child(2)', {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    scrollTrigger: {
        trigger: '.page:nth-child(2)',
        start: 'top top+=100%',
        end: 'top top',
        scrub: true
    }
})

gsap.from('.page:nth-child(2)', {
    backgroundColor: '#1f1f1f',
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.page:nth-child(2)',
        start: 'top bottom',
        end: 'top center',
        scrub: true
    }
})


gsap.from('.page:nth-child(2) h1 span', {
    y: 30,
    stagger: 0.07,
    opacity: 0,
    rotate: '-3deg',
    scale: 0.95,
    scrollTrigger: {
        trigger: '.page:nth-child(2)',
        start: 'top top+=100',
        end: 'top top'
    }
})

const page2tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.page:nth-child(2)',
        start: 'top top+=100',
        end: 'top top',
        scrub: 1.67
    }
})

page2tl.to('.img:nth-child(2)', {
    right: '3.5%',
    top: '18%',
    opacity: 1,
}, 'a')

page2tl.to('.img:nth-child(3)', {
    left: '3.5%',
    bottom: '18%',
    opacity: 1
}, 'a')

const page3tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.page:nth-child(3)',
        start: 'top 20%',
        end: 'top 50%',
        scrub: 1
    }
})

page3tl.from('.projects-title span', {
    y: 30,
    opacity: 0,
    stagger: 0.15
});

const projects = document.querySelectorAll('.project');

projects.forEach(project => {
    const media = project.querySelector('img, video'); 
    const title = project.querySelector('h2');

    gsap.set(title, { color: '#ffffff00' }); // Ensures title starts transparent

    media.addEventListener('mouseenter', () => {
        gsap.to(title, { color: '#fff', duration: 0.3, y: 5, scale: 1});
    });

    media.addEventListener('mouseleave', () => {
        gsap.to(title, { color: '#ffffff00', duration: 0.3, y: -5, scale: 1.02});
    });
});

gsap.utils.toArray('.project').forEach(project => {
    gsap.from(project, {
        x: 80,
        y: 20,
        rotate: '-2deg',
        stagger: 1.5,
        scrollTrigger: {
            trigger: project,
            start: 'top 90%',
            end: 'top 50%',
            scrub: 2
        }
    })
});

gsap.from('footer .top h1', {
    y: 30,
    opacity: 0,
    scale: 1.02,
    rotate: '-5deg',
    scrollTrigger: {
        trigger: 'footer .top h1',
        start: 'top 110%',
        end: 'top 60%',
        scrub: true
    }
})

gsap.from('footer .top h2', {
    y: 30,
    opacity: 0,
    scale: 1.02,
    rotate: '-5deg',
    scrollTrigger: {
        trigger: 'footer .top h1',
        start: 'top 110%',
        end: 'top 60%',
        scrub: true
    }
})