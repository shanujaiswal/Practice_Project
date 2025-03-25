function updateClock() {
    const now = new Date();

    // Update analog clock
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12;

    const secondDegrees = (seconds / 60) * 360;
    const minutesDegrees = ((minutes + seconds / 60) / 60) * 360;
    const hoursDegrees = ((hours + minutes / 60) / 12) * 360;

    document.querySelector('.second').style.transform =
        `translateX(-50%) rotate(${secondDegrees}deg)`;
    document.querySelector('.minute').style.transform =
        `translateX(-50%) rotate(${minutesDegrees}deg)`;
    document.querySelector('.hour').style.transform =
        `translateX(-50%) rotate(${hoursDegrees}deg)`;

    // Update digital clock
    const time = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('time').textContent = time;
}

setInterval(updateClock, 1000);
updateClock();


// function updateClock() {
//     const now = new Date();

//     const seconds = now.getSeconds();
//     const minutes = now.getMinutes();
//     const hours = now.getHours() % 12;

//     const secondDegrees = (seconds / 60) * 360;
//     const minutesDegrees = ((minutes + seconds / 60) / 60) * 360;
//     const hoursDegrees = ((hours + minutes / 60) / 12) * 360;

//     document.querySelector('.second').style.transform =
//         `translateX(-50%) rotate(${secondDegrees}deg)`;
//     document.querySelector('.minute').style.transform =
//         `translateX(-50%) rotate(${minutesDegrees}deg)`;
//     document.querySelector('.hour').style.transform =
//         `translateX(-50%) rotate(${hoursDegrees}deg)`;
// }

// setInterval(updateClock, 1000);

// updateClock();

// function updateClock() {
//     const now = new Date();
//     const time = now.toLocaleTimeString('en-US', {
//         hour12: false,
//         hour: '2-digit',
//         minute: '2-digit',
//         second: '2-digit'
//     });
//     document.getElementById('time').textContent = time;

// }

// setInterval(updateClock, 1000);

// updateClock();