/* Animate the codecrafts logo */
var changeSlashes = function () {
    if (document.querySelector('#slash2').innerHTML === '&lt; \/ &gt;') {
        document.querySelector('#slash2').innerHTML = '&lt; \\ &gt;';
    }
    else if (document.querySelector('#slash2').innerHTML === '&lt; \\ &gt;') {
        document.querySelector('#slash2').innerHTML = '&lt; \/ &gt;';
    }
};
setInterval(changeSlashes, 1000);