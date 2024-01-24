document.addEventListener('DOMContentLoaded', function() {

    const toggle = document.getElementById('toggle');

    var root = document.documentElement;

    toggle.addEventListener('change', (e) => {
        root.style.setProperty('--main-color-text', e.target.checked ? 'hsl(230, 17%, 14%)' : 'hsl(0, 0%, 100%)');
        root.style.setProperty('--main-color-BG', e.target.checked ? 'hsl(0, 0%, 100%)' : 'hsl(230, 17%, 14%)');
        root.style.setProperty('--top-color-BG', e.target.checked ? 'hsl(225, 100%, 98%)' : 'hsl(232, 19%, 15%)');
        root.style.setProperty('--card-color-BG', e.target.checked ? 'hsl(227, 47%, 96%)' : 'hsl(228, 28%, 20%)');
    });
});