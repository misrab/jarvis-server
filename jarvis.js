$(function() {
	console.log('running jarvis...');



	var contentDiv = $('#contentDiv');
	var interimDiv = $('#interimDiv');
	function handleNewUserInput(text) {
		contentDiv.prepend('<div>'+text+'</div>');
	}



	/*
		speech
	*/
	var recognition = new webkitSpeechRecognition();
	recognition.lang = "en-GB";
	recognition.continuous = true;
	recognition.interimResults = true;
	// recognition.onresult = function(event) {
	//   console.log(event.results);
	// }

	recognition.onresult = function(event) {
		var final_transcript = '';
		var interim_transcript = '';

		// console.log(event);
		interimDiv.html('');

		for (var i = event.resultIndex; i < event.results.length; ++i) {
			if (event.results[i].isFinal) {
				final_transcript += event.results[i][0].transcript;
			}
			else {
				interim_transcript += event.results[i][0].transcript;
				interimDiv.html(interim_transcript);
			}
		}


		// handle final
		var cleaned = final_transcript.trim();
		if (cleaned !== '') {
			handleNewUserInput(cleaned);
		}

		// console.log(interim_transcript);
		
		// final_transcript = capitalize(final_transcript);
		// final_span.innerHTML = linebreak(final_transcript);
		// interim_span.innerHTML = linebreak(interim_transcript);
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