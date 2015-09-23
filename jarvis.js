$(function() {
    console.log('running jarvis...');


    /*
        speech
    */
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.onresult = function(event) { 
      console.log(event) 
    }
    recognition.start();


    /*
        search bar
    */

    var GO_MUTEX = false;

    // go handle
    function go() {
        if (GO_MUTEX) return;
        GO_MUTEX = true;
        console.log('go!');



        GO_MUTEX = false;
    }


    // enter button
    $(document).keypress(function (e) {
        if (e.which == 13) {
            go()
            return false;
        }
    });

    $('#go').click(function(e) {
        e.preventDefault();
        go()
    });

    $('#go_input').focus();
});