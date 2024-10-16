    function loadGsap(){
        const box = document.querySelector('#movebox');
    const tl = gsap.timeline({scrollTrigger:{
         trigger: box,
         start: 'top center',
         end: 'bottom top',
         scrub: 2,
        markers: true
}});
    tl.to(box, {
        x: 800,
        duration: 5
    })

console.log('sweet' + box);
    }
