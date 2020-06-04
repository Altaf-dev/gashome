var acc = document.getElementsByClassName("city-tel");
var i;
for (i = 0; i < acc.length; i++){
    acc[i].onclick = function () {
        this.classList.toggle("show");
        // this.nextElementSibling.classList.toggle("show");
    }
}


document.querySelector('.menu-btn').addEventListener('click', function(){
    document.querySelector('.menu-btn').classList.toggle('bt');
    document.querySelector('.nav-menu_block').classList.toggle('open');
});
