const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


const splitTextIntoSpans = (selector) => {
    let elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
        let text = element.innerText;
        let splitText = text
            .split("")
            .map(function (char) {
                return `<span>${char === " " ? " " : char}</span>`;
            })
            .join("");
        element.innerHTML = splitText;
    });
};

const split1 = new SplitType('#ltext h1');
const split2 = new SplitType('.heading h1');






let mm = gsap.matchMedia();


mm.add("(min-width: 769px)", () => {
    function homepageanime() {
        gsap.set("#slidesm", {
            scale: 7
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#home",
                start: "top top",
                end: "bottom top",
                scrub: 1,
                pin: true
            }
        });

        tl.to("#vdodiv", {
            '--clip': "2.3%",
            duration: 2,
            ease: Power2,
        }, 'a');

        tl.to("#slidesm", {
            scale: 1,
            duration: 2,
            ease: Power2
        },'a');

        tl.to(split2.chars, {
            opacity: 1,
            stagger: 0.1,
            duration: 2,
            ease: Power2.out
        }, 'a');

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#craft",
                start: "top bottom",
                end: "top top",
                scrub: 2,
            }
        })


        tl2.to(".lft", {
            xPercent: -60,
            ease: Power2,
        },'b');

        tl2.to("#vdodiv", {
            xPercent: -60,
            ease: Power2
        },'b');

        tl2.to(".rgt", {
            xPercent: 20,
            ease: Power2
        },'b');


        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: "#home",
                start: "bottom 80%",
                scrub: true
            }
        })

        tl3.to("#home", {
            backgroundColor: "#80becc",
            duration: 0.5
        }, 'c');

        tl3.to("#craft", {
            backgroundColor: "#80becc",
            duration: 0.5
        }, 'c');

        tl3.to("nav", {
            color: "black"
        }, 'c');

        const tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".first",
                start: "top 40%",
                scrub: true
                // end: "top 70%"
            }
        })


        tl4.to(".first", {
            backgroundColor: "black"
        }, 'd');

        tl4.to(".first h1", {
            color: "#80becc"
        }, 'd');

        tl4.to(".first p", {
            color: "#80becc"
        }, 'd');

        const tl5 = gsap.timeline({
            scrollTrigger: {
                trigger: ".second",
                start: "top 40%",
                // end: "top 70%",
                scrub: true
            }
        })


        tl5.to(".second", {
            backgroundColor: "black"
        }, 'd');

        tl5.to(".second h1", {
            color: "#80becc"
        }, 'd');

        tl5.to(".second p", {
            color: "#80becc"
        }, 'd');


        const tl6 = gsap.timeline({
            scrollTrigger: {
                trigger: ".third",
                start: "top 40%",
                // end: "top 70%",
                scrub: true
            }
        })


        tl6.to(".third", {
            backgroundColor: "black"
        }, 'd');

        tl6.to(".third h1", {
            color: "#80becc"
        }, 'd');

        tl6.to(".third p", {
            color: "#80becc"
        }, 'd');

        const tl7 = gsap.timeline({
            scrollTrigger: {
                trigger: ".fourth",
                start: "top 40%",
                // end: "top 70%",
                scrub: true
            }
        })


        tl7.to(".fourth", {
            backgroundColor: "black"
        }, 'd');

        tl7.to(".fourth h1", {
            color: "#80becc"
        }, 'd');

        tl7.to(".fourth p", {
            color: "#80becc"
        }, 'd');
        


        const tl8 = gsap.timeline({
            scrollTrigger: {
                start: "top 50%",
                trigger: "#ltext",
                scrub: true
            }
        })


        tl8.from(split1.chars , {
            y: 50,
            opacity: 0,
            duration: 0.2,
            stagger: 0.01,
            ease: Power2.out
        });


        // document.querySelector("#ltext").addEventListener("mouseenter", function(){
        //     gsap.to("#ltext h1 span", {
        //         y: -100,
        //         stagger: 0.1
        //     });
        // })
        

        

    }


    // const tl9 = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: "#page4",
    //         start: "top 100%",
    //         end: "bottom bottom",
    //         scrub: 1
    //     }
    // });

    // tl9.to(".slide", {
    //     xPercent: -105,
    //     ease: Power4
    // });

    gsap.to(".slide", {
            scrollTrigger: {
                trigger: "#page4",
                start: "top 100%",
                end: "bottom bottom",
                scrub: 1
            },
            xPercent: -105,
            ease: Power4
        });

        const tl9 = gsap.timeline({
            scrollTrigger: {
                trigger: "#craft",
                start: "top -300%",
                scrub: true
            }
        });

        tl9.to(".slide", {
            backgroundColor: "salmon",
            duration: 0.5
        }, 'g');

        tl9.to("#craft", {
            backgroundColor: "salmon",
            transition: "all ease-out 0.3s",
            duration: 0.5
        }, 'g');


        ScrollTrigger.create({
            trigger: "#page4",
            start: "top 100%",
            end: "bottom bottom",
            // markers: true,
            scrub: true,
            onUpdate: (self) => {
                const progress = self.progress;
                const yvalue = -65 * (1 - progress);
                gsap.set(".imgslide", {
                x: `${yvalue}%`
                });
            }
        });

        ScrollTrigger.create({
            trigger: "#page4",
            start: "top 100%",
            end: "bottom bottom",
            // markers: true,
            scrub: true,
            onUpdate: (self) => {
                const progress = self.progress;
                const yvalue = -45 * (1 - progress);
                gsap.set("#imag1", {
                x: `${yvalue}%`
                });
            }
        });

        ScrollTrigger.create({
            trigger: "#page4",
            start: "top 100%",
            end: "bottom bottom",
            // markers: true,
            scrub: true,
            onUpdate: (self) => {
                const progress = self.progress;
                const yvalue = -45 * (1 - progress);
                gsap.set("#imag2", {
                x: `${yvalue}%`
                });
            }
        });

        ScrollTrigger.create({
            trigger: "#page4",
            start: "top 100%",
            end: "bottom bottom",
            // markers: true,
            scrub: true,
            onUpdate: (self) => {
                const progress = self.progress;
                const yvalue = -45 * (1 - progress);
                gsap.set("#imag4", {
                x: `${yvalue}%`
                });
            }
        });
    
    



    homepageanime()

    // Cleanup when this media query is no longer active
    return () => {
        if (tl.scrollTrigger) tl.scrollTrigger.kill();
        if (tl2.scrollTrigger) tl2.scrollTrigger.kill();
        tl.kill();
        tl2.kill();
    }

});



mm.add("(max-width: 768px)", () => {
    gsap.set("#slidesm", {
        scale: 6
    })

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#home",
            start: "top top",
            end: "bottom top",
            scrub: 2,
            pin: true
        }
    });

    tl.to("#vdodiv", {
        '--clip': "1.3%",
        duration: 2,
        ease: Power2,
    }, 'a');

    tl.to("#slidesm", {
        scale: 1,
        duration: 2,
        ease: Power2
    },'a');

    tl.to(split2.chars, {
            opacity: 1,
            stagger: 0.1,
            duration: 1,
            ease: Power2.out
        }, 'a');

    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#craft",
            start: "top bottom",
            end: "top top",
            scrub: 2,
        }
    })


    tl2.to(".lft", {
        xPercent: -10,
        ease: Power2,
    },'b');

    tl2.to("#vdodiv", {
        xPercent: -10,
        ease: Power2
    },'b');

    tl2.to(".rgt", {
        xPercent: 10,
        ease: Power2
    },'b');

    const tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#home",
            start: "bottom 60%",
            scrub: true
        }
    })

    tl3.to("#home", {
        backgroundColor: "#80becc",
        duration: 0.5
    }, 'c');

    tl3.to("#craft", {
        backgroundColor: "#80becc",
        duration: 0.5
    }, 'c');


    const tl10 = gsap.timeline({
        scrollTrigger: {
            trigger: "#cards",
            start: "top 55%",
            end: "top -10%",
            scrub: true
        }
    })

    tl10.to("#cards", {
        xPercent: -120,
        ease: Power4
    });


    const tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".first",
                start: "top 88%",
                scrub: true
                // end: "top 70%"
            }
        })    


    tl4.to(".first", {
            backgroundColor: "black",
            duration: 0.2
        }, 'd');

        tl4.to(".first h1", {
            color: "#80becc"
        }, 'd');

        tl4.to(".first p", {
            color: "#80becc"
        }, 'd');

        const tl5 = gsap.timeline({
            scrollTrigger: {
                trigger: ".second",
                start: "top 84%",
                // end: "top 70%",
                scrub: true
            }
        })


        tl5.to(".second", {
            backgroundColor: "black",
            duration: 0.2
        }, 'd');

        tl5.to(".second h1", {
            color: "#80becc"
        }, 'd');

        tl5.to(".second p", {
            color: "#80becc"
        }, 'd');


        const tl6 = gsap.timeline({
            scrollTrigger: {
                trigger: ".third",
                start: "top 84%",
                // end: "top 70%",
                scrub: true
            }
        })


        tl6.to(".third", {
            backgroundColor: "black",
            duration: 0.2
        }, 'd');

        tl6.to(".third h1", {
            color: "#80becc"
        }, 'd');

        tl6.to(".third p", {
            color: "#80becc"
        }, 'd');

        const tl7 = gsap.timeline({
            scrollTrigger: {
                trigger: ".fourth",
                start: "top 84%",
                // end: "top 70%",
                scrub: true
            }
        })


        tl7.to(".fourth", {
            backgroundColor: "black",
            duration: 0.2
        }, 'd');

        tl7.to(".fourth h1", {
            color: "#80becc"
        }, 'd');

        tl7.to(".fourth p", {
            color: "#80becc"
        }, 'd');


        gsap.to(".slide", {
            scrollTrigger: {
                trigger: "#page4",
                start: "top 200%",
                end: "top 60%",
                scrub: 1
            },
            xPercent: -107,
            ease: Power4
        });


        ScrollTrigger.create({
            trigger: "#page4",
            start: "top 200%",
            end: "top bottom",
            // markers: true,
            scrub: true,
            onUpdate: (self) => {
                const progress = self.progress;
                const yvalue = -45 * (1 - progress);
                gsap.set(".imgslide", {
                x: `${yvalue}%`
                });
            }
        });

        ScrollTrigger.create({
            trigger: "#page4",
            start: "top 200%",
            end: "top bottom",
            // markers: true,
            scrub: true,
            onUpdate: (self) => {
                const progress = self.progress;
                const yvalue = -45 * (1 - progress);
                gsap.set("#imag1", {
                x: `${yvalue}%`
                });
            }
        });

        ScrollTrigger.create({
            trigger: "#page4",
            start: "top 200%",
            end: "top bottom",
            // markers: true,
            scrub: true,
            onUpdate: (self) => {
                const progress = self.progress;
                const yvalue = -45 * (1 - progress);
                gsap.set("#imag2", {
                x: `${yvalue}%`
                });
            }
        });

        ScrollTrigger.create({
            trigger: "#page4",
            start: "top 200%",
            end: "top bottom",
            // markers: true,
            scrub: true,
            onUpdate: (self) => {
                const progress = self.progress;
                const yvalue = 35 * (1 - progress);
                gsap.set("#imag4", {
                x: `${yvalue}%`
                });
            }
        });


        const tl9 = gsap.timeline({
            scrollTrigger: {
                trigger: "#page4",
                start: "top 250%",
                // end: "top 200%",
                scrub: true
            }
        });

        tl9.to(".slide", {
            backgroundColor: "salmon",
            duration: 0.5
        }, 'g');

        tl9.to("#craft", {
            backgroundColor: "salmon",
            transition: "all ease-out 0.3s",
            duration: 0.5
        }, 'g');


    return () => {
        if (tl.scrollTrigger) tl.scrollTrigger.kill();
        if (tl2.scrollTrigger) tl2.scrollTrigger.kill();
        tl.kill();
        tl2.kill();
    }
});

