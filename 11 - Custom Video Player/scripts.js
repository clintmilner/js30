// get our elements
const player = document.querySelector('.player'),
      video = player.querySelector('.viewer'),
      progress = player.querySelector('.progress'),
      progressBar = player.querySelector('.progress__filled'),
      toggle = player.querySelector('.toggle'),
      skipButtons = player.querySelectorAll('[data-skip]'),
      ranges = player.querySelectorAll('.player_slider');


// build our functions
function togglePlay(){
    if( video.paused ){
        video.play(); console.log('playing');
    } else {
        video.pause(); console.log('pausing');
    }
}

// hook up event listeners
video.addEventListener('click', togglePlay);