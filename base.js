var changeSlash1 = function () {
    document.querySelector('#slash').innerHTML = '&lt; \\ &gt;';
    document.querySelector('#slash2').innerHTML = '&lt; \\ &gt;';
};
var changeSlash2 = function () {
    document.querySelector('#slash').innerHTML = '&lt; \/ &gt;';
    document.querySelector('#slash2').innerHTML = '&lt; \/ &gt;';
};
var changeSlashRepeatedly = function () {
    if(document.querySelector('#slash').innerHTML === '&lt; \/ &gt;') {
        changeSlash1();
    }
    else if(document.querySelector('#slash').innerHTML = '&lt; \\ &gt;') {
        changeSlash2();
    }
};
setInterval(changeSlashRepeatedly, 1000);
document.onscroll = function () {
    if(document.body.scrollTop === 0) {
        document.querySelector('.header').style.backgroundColor = '#222';
    }
    else {
        document.querySelector('.header').style.backgroundColor = '#456';
    }
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