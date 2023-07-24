export default function timer(timerSelector, deadlineString) {
    const deadline = Date.parse(deadlineString)

    function getRemainingTime() {
        const left = new Date(deadline - Date.now())

        const total = left.getTime(),
              days = Math.floor(total / (1000 * 60 * 60 * 24)),
              hours = Math.floor(total / (1000 * 60 * 60) % 24),
              minutes = Math.floor(total / (1000 * 60) % 60),
              seconds = Math.floor(total / 1000 % 60)

        return {total, days, hours, minutes, seconds}
    }

    function setUpTimer() {
        const timer = document.querySelector(timerSelector),
              daysContainer = timer.querySelector('#days'),
              hoursContainer = timer.querySelector('#hours'),
              minutesContainer = timer.querySelector('#minutes'),
              secondsContainer = timer.querySelector('#seconds')

        daysContainer.textContent = 0
        hoursContainer.textContent = 0
        minutesContainer.textContent = 0
        secondsContainer.textContent = 0

        const intervalId = setInterval(updateTimer, 1000)

        function updateTimer() {
            const {total, days, hours, minutes, seconds} = getRemainingTime()
            
            if (total <= 0) {
                clearInterval(intervalId)
            } else {
                daysContainer.textContent = formatDigit(days)
                hoursContainer.textContent = formatDigit(hours)
                minutesContainer.textContent = formatDigit(minutes)
                secondsContainer.textContent = formatDigit(seconds)
            }
        }
    }

    function formatDigit(num) {
        return (num > 9 || num < 0) ? num : '0' + num
    }

    setUpTimer()
}