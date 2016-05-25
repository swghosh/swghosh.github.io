/* Mobile view init */
var navbarTotalWidth = $(document.querySelectorAll('.navbar li')[0]).width() + $(document.querySelectorAll('.navbar li')[1]).width() + $(document.querySelectorAll('.navbar li')[2]).width() + $(document.querySelectorAll('.navbar li')[3]).width() + $(document.querySelectorAll('.navbar li')[4]).width();
var mobileView = $(document).width() < navbarTotalWidth;
/* Navigation bar stick init */
var navStick = false;
/* Animate the codecrafts logo */
var changeSlashes = function () {
    if (document.querySelector('#slash').innerHTML === '&lt; \/ &gt;') {
        document.querySelector('#slash').innerHTML = '&lt; \\ &gt;';
        document.querySelector('#slash2').innerHTML = '&lt; \\ &gt;';
    }
    else if (document.querySelector('#slash').innerHTML === '&lt; \\ &gt;') {
        document.querySelector('#slash').innerHTML = '&lt; \/ &gt;';
        document.querySelector('#slash2').innerHTML = '&lt; \/ &gt;';
    }
};
setInterval(changeSlashes, 1000);
/* Stick navigation bar to top on scrolling */
var navStickScroll = function () {
    if(document.body.scrollTop > parseInt($('.header').height())) {
        document.querySelector('.navbar').style.position = 'fixed';
        document.querySelector('.navbar').style.top = '0';
        document.querySelector('#flogo').style.display = 'block';
        navStick = true;
    }
    else {
        document.querySelector('.navbar').style.position = null;
        document.querySelector('.navbar').style.top = null;
        document.querySelector('#flogo').style.display = 'none';
        navStick = false;
    }
};
document.onscroll = navStickScroll;
/* Make navigation bar links float vertically to fit contents if mobileView*/
var navFloatMobile = function () {
    if(mobileView) {
        var li = document.querySelectorAll('.navbar li');
        li[0].style.float = 'right';
        for(var i = 1; i < li.length; i++) {
            li[i].style.float = 'none';
        }
        document.querySelector('#togglemenu').style.display = 'block';
    }
};
navFloatMobile();
/* Navigation bar menu toggle button */
var menuView = false;
var hideMenu = function () {
    var li = document.querySelectorAll('.navbar li');
    for(var i = 2; i < li.length; i++) {
        li[i].style.display = 'none';
    }
    menuView = false;
};
var showMenu = function () {
    var li = document.querySelectorAll('.navbar li');
    for(var i = 2; i < li.length; i++) {
        li[i].style.display = 'block';
    }
    menuView = true;
};
if(mobileView) { 
    hideMenu();
}
document.querySelector('a#menubutton').onclick = function () {
    if(menuView) {
        document.querySelector('a#menubutton').innerHTML = 'MENU';
        hideMenu();
    }
    else {
        document.querySelector('a#menubutton').innerHTML = 'X';
        showMenu();
    }
};
