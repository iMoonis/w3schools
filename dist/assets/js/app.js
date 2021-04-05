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


function myFunction() {
    var btn = document.querySelector('.darkMode')
    btn.classList.toggle("on")
    if (btn.classList.contains("on")) {
        body.style.backgroundColor = '#181a1b'
        header.style.backgroundColor = '#181a1b'
        header.style.color = 'rgb(232, 230, 227)'
        mainTitle.style.color = '#B2ACA2'
        htmlEx.style.backgroundColor = '#202324'
        htmlEx.style.color = 'rgb(232, 230, 227)'
        htmlLeft.style.color = 'rgb(232, 230, 227)'
        htmlArea.style.backgroundColor = '#181a1b'
        bgc.style.backgroundColor = '#202324'
        cssRight.style.color = 'rgb(232, 230, 227)'
        cssArea.style.backgroundColor = '#181a1b'
        cssArea.style.color = 'rgb(232, 230, 227)'
        cssAreaTitle.style.color = 'rgb(232, 230, 227)'
        jsLeft.style.color = 'rgb(232, 230, 227)'
        jsAreaTitle.style.color = 'rgb(232, 230, 227)'
        jsEx.style.backgroundColor = '#202324'
        jsArea.style.backgroundColor = '#181a1b'
        jsArea.style.color = '#fff'
        pythonSlider.style.backgroundColor = '#202324'
        pythonSlider.style.color = 'rgb(232, 230, 227)'
    } else{
        body.style.backgroundColor = '#fff'
        header.style.backgroundColor = '#fff'
        header.style.color = '#000'
        mainTitle.style.color = '#555555'
        htmlEx.style.backgroundColor = '#f1f1f1'
        htmlEx.style.color = '#000'
        htmlLeft.style.color = '#4E4E4E'
        htmlArea.style.backgroundColor = '#fff'
        bgc.style.backgroundColor = '#F1F1F1'
        cssRight.style.color = '#4E4E4E'
        cssArea.style.backgroundColor = '#fff'
        cssAreaTitle.style.color = '#000'
        jsLeft.style.color = '#4E4E4E'
        jsAreaTitle.style.color = '#000'
        jsEx.style.backgroundColor = '#f1f1f1'
        jsArea.style.backgroundColor = '#fff'
        jsArea.style.color = '#000'
        pythonSlider.style.backgroundColor = '#fff'
        pythonSlider.style.color = '#4E4E4E'
    }
}

var btns = document.querySelectorAll('.header_bottom_left button.btn')

btns.forEach(item => {
    item.addEventListener('click',()=>{
        item.classList.toggle('show')
    })
})


function scrollFast() {
    console.log('hereee');
    window.scrollTo({ top: 0, behavior: 'smooth' })
} 