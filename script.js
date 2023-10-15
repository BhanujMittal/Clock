const clock = () => {
    const now = new Date();
    let dayWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    // const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, 0)
    const minutes = now.getMinutes().toString().padStart(2, 0)
    const seconds = now.getSeconds().toString().padStart(2, 0)
    const day = now.getDay();
    const date = now.getDate().toString().padStart(2, 0);
    const month = (now.getMonth() + 1).toString().padStart(2, 0);
    const _clockDate = document.getElementsByClassName('digital-clock')[0]
    const _clock = document.getElementsByClassName('digital-clock')[1];
    _clock.innerHTML = `${dayWeek[day]} ${date}/${month}`
    _clockDate.innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(clock, 1000)