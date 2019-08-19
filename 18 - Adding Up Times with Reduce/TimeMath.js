//extracts minutes and seconds from an elem

function extractData(elem){
    return elem.dataset.time;
}

function getMinutes(time){
    return time.split(":")[0]
}

function getSeconds(time){
    return time.split(":")[1]
}


function secondsToHms(seconds) {
    var h = Math.floor(seconds / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    
    return hDisplay + mDisplay + sDisplay; 
}