/* Pre Loader working */
function endpreloader(element) {
    element.style.display = 'none';
}
window.addEventListener("load", pageFullyLoaded, false);
function pageFullyLoaded(e) {
    // do something again
    endpreloader(document.querySelector('li#preloader'));
}
var rotateLoader = function() {
    if (document.querySelector('section.loader').style.transform === 'rotate(360deg)') {
        document.querySelector('section.loader').style.transform = 'rotate(0deg)';
    }
    else if (document.querySelector('section.loader').style.transform === 'rotate(0deg)') {
        document.querySelector('section.loader').style.transform = 'rotate(360deg)';
    }
};
setInterval(rotateLoader, 2000);