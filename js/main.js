var a = document.getElementById("PlayPause");
		function playaudio() {
			a.play();
		}

		function stopaudio() {
			a.pause();
			a.currentTime = 0;
		}