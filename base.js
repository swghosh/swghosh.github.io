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