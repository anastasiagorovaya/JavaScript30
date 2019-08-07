/*FUNCTIONALITY:

✔︎progress bar 

✔︎navigate progress

✔︎play button: 
button class="player__button toggle" title="Toggle Play"
✔︎pause button

go forward 25s

go back 10s

volume slider:
input type="range" name="volume" class="player__slider" min="0" max="1" step="0.05" value="1

speed slider

/*Get our Elements*/

const playButton = document.querySelector('.toggle')
let paused = true;
let progressBar = document.querySelector('.progress__filled');
let video = document.querySelector('.player__video')
const totalProgress = document.querySelector('.progress')

let skipButton = document.querySelectorAll('button[data-skip]');

// let skipButton = document.querySelector('button');


//<button data-skip="25" class="player__button">25s »</button>

/*Build out functions*/



function videoPlaying(e){
    paused = !paused;
   
   if (!paused)
    {   this.innerHTML = "&#10074 &#10074"
        video.play()}
    else {
        this.innerHTML = "►"
        video.pause()
    }
}


//grabbing flex-basis to access percentage of progress__filled

function videoProgress(){
    
    let progress = (video.currentTime/video.duration)*100 + '%'; //current time in seconds
    progressBar.style.flexBasis = progress;       
}

videoProgress();

//function coordToTime relates the current click position to time
function coordToTime(event){
    var curryTime = (event.offsetX/totalProgress.offsetWidth) * video.duration;
    video.currentTime = curryTime;
    console.log(curryTime + " I am curry time")
}

/*Hook up the event listeners*/
playButton.addEventListener('click', videoPlaying)
playButton.addEventListener("keyup", (event) => {
    if(e.keyCode == 32){
        (event.target == document.body) ? event.preventDefault() : videoPlaying}
    })

video.addEventListener('timeupdate', videoProgress)

totalProgress.addEventListener('click', coordToTime)

// skipForwardButton.addEventListener('click', (event) => {
    
//     console.dir(event.target);

// })

// skipButton.forEach(button => { button.addEventListener('click', (event) => {
//     var amountTime = event.target.dataset.skip;
//     console.log(video.currentTime);
//     var currentTime = Math.floor(video.currentTime);
//     resultTime = Math.floor(video.currentTime + amountTime);
//     if (resultTime > video.duration) {
//         video.currentTime = video.duration; 
//     } else if (resultTime < 0) {
//         video.currentTime = 0;
//     } else {
//         video.currentTime = resultTime;
//     }
// })
// });

skipButton.forEach(button => { button.addEventListener('click', (event) => {
        var amountTime = event.target.dataset.skip;
        console.log(video.currentTime);
        var currentTime = parseFloat(video.currentTime);
        resultTime = parseFloat(currentTime + amountTime) 
        if (resultTime > video.duration) {
            currentTime = video.duration; 
        } else if (resultTime < 0) {
            currentTime = 0;
        } else {
           currentTime = resultTime;
        }
    })
    });