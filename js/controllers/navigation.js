window.addEventListener('load', function () {
    const menuButton = document.querySelector('.navbar__mobile i')
    const menu = document.querySelector('.navbar__mobile-menu')
    menuButton.addEventListener('click', function () {
        if (menu.style.visibility == 'hidden') {

            menu.style.visibility = 'visible';
            menu.style.height = 'max-content';
            menu.style.opacity = '1';

        } else {

            menu.style.visibility = 'hidden';
            menu.style.height = '0';
            menu.style.opacity = '0';

        }
        console.log('asd');
    })
})