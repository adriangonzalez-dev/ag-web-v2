
    let active = false;
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

