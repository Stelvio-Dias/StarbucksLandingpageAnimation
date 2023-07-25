$(document).ready(function(){
    const img1 = document.querySelector('#img1')
    const img2 = document.querySelector('#img2')
    const img3 = document.querySelector('#img3')
    const imgSpot = document.querySelector('#img-spot')
    const divSpot = document.querySelector('.img-spot')
    const boll = document.querySelector('.boll')

    img1.addEventListener('click', ()=> {
        imgSpot.setAttribute('src', 'assets/img1.png')
        boll.style.background = 'rgb(5, 85, 55)'
    })
    img2.addEventListener('click', ()=> {
        imgSpot.setAttribute('src', 'assets/img2.png')
        boll.style.background = 'rgb(142, 34, 24)'
    })
    img3.addEventListener('click', ()=> {
        imgSpot.setAttribute('src', 'assets/img3.png')
        boll.style.background = 'rgb(140, 25, 108)'
    })

    VanillaTilt.init(document.querySelectorAll(".img-spot"), {
        max: 55,
        speed: 1600,
        perspective: 450,
        scale: 1.2,
		reverse: false
    })
})