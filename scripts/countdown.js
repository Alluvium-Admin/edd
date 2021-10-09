// Countdown clock
const fireworks = document.querySelector('.fireworks');

function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
}
  
function initializeClock(endtime) {
    // const clock = document.querySelector(clockClass);
    const daysValues = document.querySelectorAll('.days-value');
    const hoursValue = document.querySelector('.hours-value');
    const minutesValue = document.querySelector('.minutes-value');
    const secondsValue = document.querySelector('.seconds-value');
    const totalHoursValue = document.querySelector('.total-hours-value');

    function updateClock() {
        const t = getTimeRemaining(endtime);

        daysValues.forEach(daysValue => {
            daysValue.innerHTML = t.days;
        })
        hoursValue.innerHTML = ('0' + t.hours).slice(-2);
        minutesValue.innerHTML = ('0' + t.minutes).slice(-2);
        secondsValue.innerHTML = ('0' + t.seconds).slice(-2);
        totalHoursValue.innerHTML = Math.ceil(t.hours + (t.minutes / 60) + (t.seconds / 3600));

        // if (t.total <= 0) {
        //     clearInterval(timeinterval);
        // } 
            
    }

    updateClock();
    // const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date("Oct 10, 2021 15:00:00");


initializeClock(deadline);

const today = new Date().toLocaleString();
console.log(today);

// Display fireworks
if (today === "10/10/2021, 3:00:00 PM") {
    fireworks.style.display = "block";

    setTimeout(() => {
        fireworks.style.display = "none";
    }, 6000);
}


console.log(deadline);