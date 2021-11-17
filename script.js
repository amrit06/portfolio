
function openclosenavbar() {
    const navlink = document.querySelector('.nav-link');
    navlink.classList.toggle('nav-link-open');
}


function showmore(string) {
    const show = document.querySelector(string);
    show.classList.toggle('drop');
}


function openSubMenu() {
    const show = document.querySelector('.sub_nav_list');
    show.classList.toggle('show_sub_menu');
}


let slidePosition = 1;
function movenext() {
    slidePosition = slidePosition += 1;
    moveslide();
}

function moveprev() {
    slidePosition = slidePosition -= 1;
    moveslide();
}


function moveslide() {
    var slide = document.getElementsByClassName('slide');
    var totalslide = slide.length;

    
    if (slidePosition >= totalslide) {
        slidePosition = 0;
    } else if (slidePosition === -1) {
        slidePosition = totalslide - 1;
    }

    for (let eachslide of slide) {
        eachslide.classList.remove('slide_active');
        eachslide.classList.add('slide_hidden');
    }
    
    slide[slidePosition].classList.add('slide_active');   
}


function moveprev2() {
    var slide = document.getElementsByClassName('slide');
    var totalslide = slide.length;

    for (let eachslide of slide) {
        eachslide.classList.remove('slide_active');
    }

    var i;
    for (i = 0; i <= totalslide-1; i++){
        if(i < totalslide-1){
            slide[i+1].after(slide[i]);
        }
        slide[i].style.animation = "moveleft 2s";
    }

    slide[Math.floor(totalslide/2)].classList.add('slide_active'); 
    slide[Math.floor(totalslide/2)].style.animation = "moveleft 2s";
}

function movenext2() {
    var slide = document.getElementsByClassName('slide');
    var totalslide = slide.length;

    for (let eachslide of slide) {
        eachslide.classList.remove('slide_active');
    }

    var i;
    for (i = totalslide-1; i >= 0; i--){
        if(i > 0){
            slide[i-1].before(slide[i]);
        }
        slide[i].style.animation = "moveright 2s";
    }

    slide[Math.floor(totalslide/2)].classList.add('slide_active'); 
    slide[Math.floor(totalslide/2)].style.animation = "moveright 2s";
}












