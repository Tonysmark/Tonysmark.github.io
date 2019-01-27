// function showBody(which) {
//     console.log(which);
//     let bro = which.nextElementSibling
//     if (bro.getAttribute('style')) {
//         bro.removeAttribute('style')
//     } else {
//         bro.setAttribute('style', 'display:block')
//     }
// }

let bold = document.querySelector('.collapsible').childNodes;
for (let i = 0; i < bold.length; i++) {
    bold[i].onclick = () => {
        if (bold[i].classList.contains('active')) {
            bold[i].classList.remove('active')
            bold[i].childNodes[3].removeAttribute('style')  //FIXME: 这里是写死的  有没有什么更加优雅的方法
            // console.log(bold[i].childNodes)
        } else {
            bold[i].classList.add('active')
            bold[i].childNodes[3].setAttribute('style', 'display:block')
        }
    }
}

$(document).ready(function () {
    $('.tooltipped').tooltip();
})