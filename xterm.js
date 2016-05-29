var main = function () {
    var text = "Something amazing will fill up this space soon. We're working hard on it. #comingsoon :)                           ";
    var counter = 0;
    $('#xterm').html('');
    var addText = function () {
        if(counter === text.length) {
            $('#xterm').html('');
            counter = 0;
        }
        else {
            $('#xterm').append(text.charAt(counter));
            counter = counter + 1;
        }
    };
    setInterval(addText, 150);
};
$(document).ready(main);