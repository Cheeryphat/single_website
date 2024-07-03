document.addEventListener('DOMContentLoaded', function() {
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayOfWeek = days[now.getUTCDay()];

        document.getElementById('utc-time').textContent = utcTime;
        document.getElementById('current-day').textContent = dayOfWeek;
    }

    updateTime();
    setInterval(updateTime, 1000);
});
