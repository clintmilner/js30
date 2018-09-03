// get our elements
const player = document.querySelector('.player'),
    video = player.querySelector('.viewer'),
    progress = player.querySelector('.progress'),
    progressBar = player.querySelector('.progress__filled'),
    toggle = player.querySelector('.toggle'),
    skipButtons = player.querySelectorAll('[data-skip]'),
    ranges = player.querySelectorAll('.player__slider');

let mouseDown = false;


// build our functions
function togglePlay() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}
function updateButton(){
    let icon = this.paused ? 'PLAY' : 'PAUSE';
    toggle.textContent = icon;
}
function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
}
function handleRangeUpdate(){
    video[this.name] = this.value;
}

function handleProgress(){
    const pct = video.currentTime / video.duration * 100;
    progressBar.style.flexBasis = `${pct}%`;
}

function scrub(e){
    const scrubTime = e.offsetX / progress.offsetWidth * video.duration;
    video.currentTime = scrubTime;
}

// hook up event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e));
progress.addEventListener('mousedown', () => mouseDown = true );
progress.addEventListener('mouseup', () => mouseDown = false );

toggle.addEventListener('click', togglePlay);

skipButtons.forEach( (btn) => {
    btn.addEventListener('click', skip);
});

ranges.forEach( (range) => {
    range.addEventListener('change', handleRangeUpdate);
});
ranges.forEach( (range) => {
    range.addEventListener('mousemove', handleRangeUpdate);
});