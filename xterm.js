var main = function () {
    var text = "A few project and their source codes! Hosted on GitHub!                           ";
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
