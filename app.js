// Countdown clock
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
        totalHoursValue.innerHTML = Math.ceil( t.hours + (t.minutes/60) + (t.seconds/3600) )

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date()) + 5 * 24.42 * 60 * 60 * 1000);
initializeClock(deadline);

console.log(deadline)