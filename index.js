let height = window.innerHeight;

let home = document.getElementById('home');
home.style.height = `${height}px`;

let about = document.getElementById('about');
about.style.height = `${height}px`;

let contact = document.getElementById('contact');
let contactHeight = window.innerHeight - 50;
contact.style.height = `${contactHeight}px`;


let header = document.getElementById('header');
let scrollTimer = -1;

function bodyScroll() {
    header.style.backgroundColor = "rgba(22,38,67,.2)";
    if (scrollTimer != -1)
        clearTimeout(scrollTimer);
    scrollTimer = window.setTimeout("scrollFinished()", 0);
}

function scrollFinished() {
    header.style.backgroundColor = "transparent";
}
