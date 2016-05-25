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
var navStick = function () {
    if(document.body.scrollTop > parseInt($('.header').height())) {
        document.querySelector('.navbar').style.position = 'fixed';
        document.querySelector('.navbar').style.top = '0';
        document.querySelector('#flogo').style.display = 'block';
    }
    else {
        document.querySelector('.navbar').style.position = null;
        document.querySelector('.navbar').style.top = null;
        document.querySelector('#flogo').style.display = 'none';
    }
};
document.onscroll = navStick;
var navFloatMobile = function () {
    var navbarWidth = $(document.querySelectorAll('.navbar li')[0]).width() + $(document.querySelectorAll('.navbar li')[1]).width() + $(document.querySelectorAll('.navbar li')[2]).width() + $(document.querySelectorAll('.navbar li')[3]).width() + $(document.querySelectorAll('.navbar li')[4]).width();
    if($(document).width() < navbarWidth) {
        var li = document.querySelectorAll('.navbar li');
        li[0].style.float = 'none';
        li[1].style.float = 'none';
        li[2].style.float = 'none';
        li[3].style.float = 'none';
        li[4].style.float = 'none';
    }
};
navFloatMobile();