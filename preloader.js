/* Pre Loader working */
function endpreloader(element) {
    element.className = "no preloader";
}

// displays the preloader to off when the window has finished loading

window.addEventListener("load", pageFullyLoaded);

function pageFullyLoaded(e) {
    endpreloader(document.querySelector('div.preloader'));
}

var rotateLoader = function() {
//    if (document.querySelector('section.loader').style.transform === 'rotate(360deg)') {
//        document.querySelector('section.loader').style.transform = 'rotate(0deg)';
//    }
//    else if (document.querySelector('section.loader').style.transform === 'rotate(0deg)') {
//        document.querySelector('section.loader').style.transform = 'rotate(360deg)';
//    }
    var a = document.querySelector('section.loader').style.transform;
    a = a.split("(")[1].split("deg")[0];
    var i = parseInt(a) + 360;
    document.querySelector('section.loader').style.transform = 'rotate(' + i.toString() + 'deg)';
};

rotateLoader();
var rotateLoaders = setInterval(rotateLoader, 2000);

// clears the rotating loader
function clearIntervalRotate() {
    clearInterval(rotateLoaders);
}

document.querySelector('div.preloader').ontransitionend = clearIntervalRotate;

/* Horizontal Scrolling Progress Bar working */
function scrollProgressBarUpdate() {
    var scrollProgressDiv = document.querySelector('div.scrollprogressbar');
    var currentScrollPos = document.body.scrollTop;
    var maxScroll = document.body.scrollHeight;
	var percent = (currentScrollPos/maxScroll) * 100;
	scrollProgressDiv.style.width = percent + '%';
}

window.addEventListener('scroll',scrollProgressBarUpdate);