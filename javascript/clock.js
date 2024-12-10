function updateClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12;

    const secondDegrees = (seconds / 60) * 360;
    const minutesDegrees = ((minutes + seconds / 60) / 60) * 360;
    const hoursDegrees = ((hours + minutes / 60) / 12) * 360;

    document.querySelector('.second').style.transform =
        `translateX(-50%) rotate(${secondDegrees}deg)`;
    document.querySelector('.minute').style.transform =
        `translateX(-50%) rotate(${minuteDegrees}deg)`;
    document.querySelector('.hour').style.transform =
        `translateX(-50%) rotate(${hourDegrees}deg)`;
}
setInterval(updateClock, 1000);

updateClock();