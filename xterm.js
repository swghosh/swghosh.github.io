var text = "something amazing will fill up this space soon. we're working hard on it. #comingsoon :) _\/\\_";
var counter = 0;
var addText = function () {
    if(counter === text.length) {
        return;
    }
    else {
        $('#xterm').append(text.charAt(counter));
        counter = counter + 1;
    }
};
setInterval(addText, 200);