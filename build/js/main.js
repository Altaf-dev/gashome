// const title = document.getElementById('title');
// document.querySelector('.title').onclick = function (){
//     title.classList.toggle('title');
//     title.classList.toggle('title_click');
// }

var acc = document.getElementsByClassName("city-tel");
var i;
for (i = 0; i < acc.length; i++){
    acc[i].onclick = function () {
        this.classList.toggle("show");
        // this.nextElementSibling.classList.toggle("show");
    }
}

// var menu = document.getElementsByClassName("menu");
// var x;
// for (x = 0; x < menu.length; x++){
//     menu[x].onclick = function () {
//         this.classList.toggle("bt");
//
//     }
// }
document.querySelector('.menu-btn').addEventListener('click', function(){
    document.querySelector('.menu-btn').classList.toggle('bt');
    document.querySelector('.nav-menu_block').classList.toggle('open');
});
