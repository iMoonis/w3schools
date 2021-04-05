var body = document.querySelector('body')
var header = document.querySelector('header')
var mainTitle = document.querySelector('.mainTitle')
var htmlEx = document.querySelector('.html__slider__right__example')
var htmlArea = document.querySelector('.html__slider__right__example__area')
var htmlLeft = document.querySelector('.html__slider__left ')
var bgc = document.querySelector('.bgc')
var cssRight = document.querySelector('.css__slider__right')
var cssTitle = document.querySelector('.css__example__title')
var cssAreaTitle = document.querySelector('.css__slider__left__example__title')
var cssArea = document.querySelector('.css__slider__left__example__area')
var jsLeft = document.querySelector('.js__slider__left')
var jsAreaTitle = document.querySelector('.js__slider__right__example__title')
var jsArea = document.querySelector('.js__slider__right__example__area')
var jsEx = document.querySelector('.js__slider__right__example')
var pythonSlider = document.querySelector('.python__slider')
var scrollBtn = document.querySelector('.scrollBtn')
var modal = document.querySelector('.down__modal.show')

function myFunction() {
    var btn = document.querySelector('.darkMode')
    btn.classList.toggle("on")
    body.classList.toggle("night")
        
        // jsArea.style.backgroundColor = '#181a1b'
        // jsArea.style.color = '#fff'
        // pythonSlider.style.backgroundColor = '#202324'
        // pythonSlider.style.color = 'rgb(232, 230, 227)'
        // modal.style.backgroundColor = '#202324'
}

var btns = document.querySelectorAll('.btn')
btns.forEach(item=>{
    item.addEventListener('click', ()=>{
        item.classList.toggle('show')
        item.nextElementSibling.classList.toggle('show')
        
    })
})

// function scrollFast() {
//     console.log('hereee');
//     window.scrollTo({ top: 0, behavior: 'smooth' })
// } 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.bottom = "50px"
    } else {
    scrollBtn.style.bottom = "-100px"
    }
}


function topFunction() {
    console.log('asdads');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop= 0;
}