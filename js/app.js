// tabs

const tabContent = document.querySelectorAll('.tabcontent')
const tabs = document.querySelectorAll('.tabheader__item')
const tabsParent = document.querySelector('.tabheader__items')

const hideTabConten = () => {
    tabContent.forEach(item => {
        item.style.display = 'none'
    })
    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active')
    })
}
const showTabContent = (i = 0) => {
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}
hideTabConten()
showTabContent()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tabheader__item')){
        tabs.forEach((item,i)=> {
            if (event.target === item) {
                hideTabConten()
                showTabContent(i)
            }
        })
    }
}
//modal

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('.btn_white')
const closeModalBtn = document.querySelector('.modal__close')

const openModal = () => {
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = ''
    clearInterval(setTimerModal)
}
const closeModal = () => {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
}
modalTrigger.onclick = () => openModal()
closeModalBtn.onclick = () => closeModal()
modal.onclick = (event) => event.target === modal && closeModal()

const setTimerModal = () => {
    setTimeout(openModal, 10000,document.body.style.overflow = ' ')
}
setTimerModal()

window.onscroll = function() {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        openModal()
    }
};
//
// let slideIndex = 0;
// const slides = document.getElementsByClassName("tabcontent");
// setInterval(function () {
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].classList.remove("active");
//     }
//     slideIndex++;
//     if (slideIndex >= slides.length) {
//         slideIndex = 0;
//     }
//     slides[slideIndex].classList.add("active");
// }, 3000);



let images = document.querySelectorAll('.tabcontent')
let i = 0
function nextImg() {
    if (i === images.length - 1) {
        images[i].style.display = 'none'
        i = 0
        images[0].style.display = 'block'
    }   else {
        images[i].style.display = 'none'
        images[i + 1].style.display = 'block'
        i++
    }
}
setInterval(nextImg,3000)
