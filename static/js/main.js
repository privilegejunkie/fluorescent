document.addEventListener('DOMContentLoaded', function() {
    const rwx = "-rwxrwxrwx";
    let title = document.title;

    if (title === rwx) {
        let reset = 0;
        setInterval(function() {
            const titleElement = document.getElementById(
                'site-title');
            if (reset !== 7) {
                const i1 = Math.floor(
                    Math.random() * (11 - 5) + 4);
                title = title.substring(0, i1) +
                    (title[i1] === '-' ? rwx[i1] : '-') +
                    title.substring(i1 + 1);
                reset++
            } else {
                title = rwx;
                reset = 0;
            }

            titleElement.textContent = title;
        }, 2000);
    }
});