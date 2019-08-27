let countdown;
const displayTimeLeft =  document.querySelector('.display__time-left')
const beBack = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll('[data-time]')
const custom = document.customForm;

function timer(seconds){
    clearInterval(countdown);

    const now = Date.now();
    const future = now + seconds*1000;
    displayTime(seconds)
    displayEndTime(future)
    countdown = setInterval(()=> {
        const secondsLeft = Math.round((future - Date.now())/1000);
        if (secondsLeft == 0){
            clearInterval(countdown);
            return;
        }
        displayTime(secondsLeft)
    }, 1000   
    )
}

function displayTime(seconds){
    const minutes = Math.floor(seconds/60);
    const remSeconds = seconds % 60;
    const toDisplay = `${minutes}:${remSeconds > 10 ? '' : '0'}${remSeconds}`
    document.title = toDisplay;
    displayTimeLeft.innerHTML = toDisplay;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    const pm = (hour >= 12);
    const diplayMins = `${minutes < 10 ? '0' : ''}${minutes}`
    beBack.textContent = 
    `I will return at ${ pm ? hour - 12 : hour}:${diplayMins} ${pm ? 'pm' : 'am'}`;
}

function handlePreSetTimer (){
    const secondsPreSet = this.dataset.time;
    timer(secondsPreSet)
}

function handleCustomTimer(e){
    e.preventDefault();
    timer(this.minutes.value * 60)
    this.reset;
}

buttons.forEach(button => button.addEventListener('click', handlePreSetTimer))
document.customForm.addEventListener('submit', handleCustomTimer)
