/*FUNCTIONALITY:

progress bar 

navigate progress

play button:
button class="player__button toggle" title="Toggle Play"
pause button

go forward 25s

go back 10s

volume slider:
input type="range" name="volume" class="player__slider" min="0" max="1" step="0.05" value="1

speed slider

/*Get our Elements*/

const playButton = document.querySelector('.player__button')
let paused = true;

/*Build out functions*/
function videoPlaying(e){
    paused = !paused;
   
   const video = document.querySelector('.player__video')
   if (!paused)
    {   this.innerHTML = "&#10074 &#10074"
        video.play()}
    else {
        this.innerHTML = "►"
        video.pause()
    }
}



/*Hook up the event listeners*/

playButton.addEventListener('click', videoPlaying)
