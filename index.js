let height = window.innerHeight;

let home = document.getElementById('home');
home.style.minHeight = `${height}px`;

let about = document.getElementById('about');
about.style.minHeight = `${height}px`;

let portfolio = document.getElementById('portfolio');
portfolio.style.minHeight = `${height}px`;


let header = document.getElementById('header');
let scrollTimer = -1;

function bodyScroll() {
    header.style.backgroundColor = "rgba(22,38,67,.2)";
    if (scrollTimer != -1)
        clearTimeout(scrollTimer);
    scrollTimer = window.setTimeout("scrollFinished()", 500);
}

function scrollFinished() {
    header.style.backgroundColor = "transparent";
}

var form = document.getElementById('#1');
honey(form);

function submitUserForm() {
    var response = grecaptcha.getResponse();
    console.log(response.length);
    if(response.length == 0) {
        document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;">This field is required.</span>';
        return false;
    }
    return true;
}

function verifyCaptcha() {
    console.log('verified');
    document.getElementById('g-recaptcha-error').innerHTML = '';
}
