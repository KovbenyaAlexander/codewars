function humanReadable(time){
    let hour = Math.floor(time / 3600);
    time = time - (hour * 3600);
    let min = Math.floor(time / 60);
    time = time - (min * 60);

    if(String(hour).split(``).length === 1){
        hour = String(hour).split(``);
        hour.unshift(`0`);
        hour = hour.join(``);
    }

    if(String(min).split(``).length === 1){
        min = String(min).split(``);
        min.unshift(`0`);
        min = min.join(``);
    }

    if(String(time).split(``).length === 1){
        time = String(time).split(``);
        time.unshift(`0`);
        time = time.join(``);
    }
    
    return (`${hour}:${min}:${time}`);
}

humanReadable(3601);

/*
    https://www.codewars.com/kata/human-readable-time/javascript
*/