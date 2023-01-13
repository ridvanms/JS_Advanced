function timeToWalk(steps, lengthInMeters, speedPerKM) {
    let distanceInMeters = steps * lengthInMeters;
    let speedInMetersPerSecond = speedPerKM / 3.6;
    let rest = Math.floor(distanceInMeters / 500) * 60;
    let time = distanceInMeters / speedInMetersPerSecond + rest;
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let seconds = Math.round(time % 60);

    console.log(`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`)
}
timeToWalk(4000, 0.60, 5);
//00:32:48
timeToWalk(2564, 0.70, 5.5);
//00:22:35