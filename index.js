let userImage = document.getElementById('userImage');
let tapUl = document.getElementById('tapUl');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let like = document.getElementsByClassName('like');
let tapUlLi = document.getElementsByClassName('tapUlLi');
let count = document.getElementById('count');


minus.addEventListener('click', Minus);
plus.addEventListener('click', Plus);
userImage.addEventListener('click', customOpen);
// like.addEventListener('click', likeSer);

console.log(like);
for (let i = 0; i < tapUlLi.length; i++) {
    tapUlLi[i].addEventListener('click', active);
}
for (let i = 0; i < like.length; i++) {
    like[i].addEventListener('click', likeSer);
}
function customOpen() {
    let dropDown = document.getElementById('dropDown');
    let hasCloseDropDownClass = dropDown.classList.contains('closeDropDown');
    if (hasCloseDropDownClass) {
        dropDown.classList.replace('closeDropDown', 'openDropDown')
    } else {
        dropDown.classList.replace('openDropDown', 'closeDropDown')

    }
}
function active(event) {
    console.log(event.target.parentElement);
    for (let i = 0; i < tapUlLi.length; i++) {
        tapUlLi[i].classList.remove('active');
    }
    let li = event.target.classList.contains('tapUlLi')


    if (li) {
        event.target.classList.add('active');
    } else {
        event.target.parentElement.classList.add('active');
    }
}

function Plus() {
    let num = parseInt(count.innerHTML, 10);
    num += 1;
    count.innerHTML = num

}
function Minus() {
    if (count.innerHTML == 1) {
        count.innerHTML = 1
    }
    else {
        count.innerHTML -= 1
    }
}
function likeSer(event) {



    if (event.target.classList.contains('heart') || event.target.parentElement.classList.contains('heart')) {
        if (event.target.classList.contains('heart')) {
            if (event.target.classList.contains('active')) {
                event.target.classList.remove('active')
                event.target.childNodes[1].classList.replace('bi-heart-fill', 'bi-heart')
            } else {
                event.target.classList.add('active')
                event.target.childNodes[1].classList.replace('bi-heart', 'bi-heart-fill')
            }
        } else {
            if (event.target.parentElement.classList.contains('active')) {
                event.target.parentElement.classList.remove('active')
                event.target.parentElement.childNodes[1].classList.replace('bi-heart-fill', 'bi-heart')
            } else {
                event.target.parentElement.classList.add('active')
                event.target.parentElement.childNodes[1].classList.replace('bi-heart', 'bi-heart-fill')
            }
        }
    }
}