var main = function () {
    var text = "Something amazing will fill up this space soon. We're working hard on it. #comingsoon :)                           ";
    var counter = text.length;
    var times = 0;
    var addText = function () {
        if(counter === text.length) {
            if(times === 2) {
                $('#xterm').html(text);
                return;
            }
            $('#xterm').html('');
            counter = 0;
            times = times + 1;
        }
        else {
            $('#xterm').append(text.charAt(counter));
            counter = counter + 1;
        }
    };
    setInterval(addText, 150);
};
$(document).ready(main);