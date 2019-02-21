//set window heights
let home = document.getElementById('home');
let about = document.getElementById('about');
let aboutInner = document.getElementById('about-inner');
let portfolio = document.getElementById('portfolio');
let contact = document.getElementById('contact');

let height = window.innerHeight;

const sections = [home, about, aboutInner, portfolio];

sections.forEach(section => {
    section.style.minHeight = `${height}px`;
})

let contactHeight = window.innerHeight - 50;
contact.style.minHeight = `${contactHeight}px`;

//scroll event
let header = document.getElementById('header');
let scrollTimer = -1;

window.addEventListener('scroll', function(e) {
    header.style.backgroundColor = "rgba(22,38,67,.2)";

    if (scrollTimer != -1)
        clearTimeout(scrollTimer);
    scrollTimer = window.setTimeout("scrollFinished()", 500);

    scrollFinished = () => {
        header.style.backgroundColor = "transparent";
    }
});

//image carousel

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("profile-art");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 9000);
}

//recaptcha
function submitUserForm() {
    var response = grecaptcha.getResponse();
    if (response.length == 0) {
        document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;">This field is required.</span>';
        return false;
    }
    return true;
};

function verifyCaptcha() {
    document.getElementById('g-recaptcha-error').innerHTML = '';
}

//skills bar graph
let spanPercent = document.getElementsByClassName('span-percent');
let progressFill = document.getElementsByClassName('progress-fill');


let skills = [...spanPercent];
skills.forEach(function(skill, index) {
    progressFill[index].style.width = `${spanPercent[index].textContent}`;
});
