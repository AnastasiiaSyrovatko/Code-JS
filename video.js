var myVideo = document.getElementById("vidos");
var volumeBar = document.getElementById("volume-bar");
var muteButton = document.getElementById("mute");
var fullScreenButton = document.getElementById("full-screen");
var timePicker = document.getElementById("timer");
var progBar = document.getElementById("progress-bar");
	
function playVideo() {
  myVideo.play();
};

function pauseVideo() {
  myVideo.pause();
};

function playPause() {
  if (myVideo.paused) {
      myVideo.play();
  } else {
	   myVideo.pause();
    }
};

function mutePlayStop() {
  if (myVideo.muted == false) {
    myVideo.muted = true;
	  muteButton.innerHTML = "Unmute";
  } else {
	   myVideo.muted = false;
	   muteButton.innerHTML = "Mute";
    }
}; 

function setHalfVolume() { 
  rangeButton.volume = 0.5;
};

function controllFullScreen() { 
  if (myVideo.requestFullScreen) {
    myVideo.requestFullScreen();
    myVideo.width = 1000;
  } else if (myVideo.webkitRequestFullScreen()) {
      myVideo.webkitRequestFullScreen();
    }
};

var muteButton = document.getElementById("mute");
muteButton.addEventListener("click", mutePlayStop);

fullScreenButton.addEventListener("click", controllFullScreen);

volumeBar.addEventListener("change", function() {
  vidos.volume = volumeBar.value;
});

timePicker.addEventListener('timeupdate', function () {
  timePicker.innerHTML = secondsToTime(myVideo.currentTime);
});

vidos.addEventListener('timeupdate', function() {
  var percentage = Math.floor((100 / myVideo.duration) * myVideo.currentTime);
  
  progBar.value = percentage;
  progBar.innerHTML = percentage + '% played';
});


