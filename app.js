function digitalclock() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    const time = `${hours}:${minutes}:${seconds}`;
      document.getElementById('clock').textContent = time;
    
}

setInterval(digitalclock, 1000);
digitalclock();