window.addEventListener('load', function () {
    const menuButton = document.querySelector('.navbar__mobile i')
    const menu = document.querySelector('.navbar__mobile-menu')

    menuButton.addEventListener('click', () => {

        if (menu.style.display == 'flex') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'flex';
        }
    })
})