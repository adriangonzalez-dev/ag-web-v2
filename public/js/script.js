window.addEventListener('DOMContentLoaded', function(){
    const spinner = document.getElementById('spinner');
    const content = document.getElementById('content');

    spinner.style.display = 'none';
    content.style.display = 'block';
})

let active = true;
const button = document.getElementById('burger-menu');
const nav = document.getElementById('navbar-multi-level');

button.addEventListener('click', function() {
    if (!active) {
        active = true;
        nav.classList.add('hidden');
    } else {
        active = false;
        nav.classList.remove('hidden');
    }
});