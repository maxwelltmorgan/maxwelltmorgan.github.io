//set window heights
let home = document.getElementById('home');
let about = document.getElementById('about');
let aboutInner = document.getElementById('about-inner');
let portfolio = document.getElementById('portfolio');
let contact = document.getElementById('contact');

let height = window.innerHeight;

const sections = [home,about,aboutInner,portfolio];

sections.forEach( section => {section.style.minHeight = `${height}px`;})

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

//image hover effect
let paragraph = document.getElementById('profile-blurb');
let profileArt = document.getElementById('profile-art');

let aboutImages = document.getElementsByClassName('about-images');

for (var i = 0; i < aboutImages.length; i++) {
    aboutImages[i].addEventListener('mouseover', function(e,index) {
            if(this.innerHTML == "incredibly lucky!"){
                profileArt.src = "assets/mike.jpg";
            }
            else if (this.innerHTML == "wonderful wife"){
                profileArt.src = "assets/wife.jpeg";
            }
            else if (this.innerHTML == "energetic little boys"){
                profileArt.src = "assets/russ.jpg";
                profileArt.style.backgroundSize = "contain";
            };
            profileArt.style.boxShadow = "10px 30px 30px darkgrey";
    });
};

for (var i = 0; i < aboutImages.length; i++) {
    aboutImages[i].addEventListener('mouseleave', function(e) {
            profileArt.style.boxShadow = "1px 5px 5px darkgrey";
            profileArt.style.transform = "none";
            profileArt.src = "assets/profile_art.png";
            profileArt.style.backgroundSize = "cover";
    });
};

//recaptcha
function submitUserForm() {
    var response = grecaptcha.getResponse();
    if(response.length == 0) {
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
skills.forEach(function (skill, index){
    progressFill[index].style.width = `${spanPercent[index].textContent}`;
});
