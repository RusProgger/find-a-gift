const menu = document.querySelector('.burger-menu');
const menuList = document.querySelector('.menu__list');

menu.onclick = function() {
    menuList.classList.toggle('active-menu');
    menu.classList.toggle('active');
};

document.addEventListener('click', function(event) {
    const isClickInsideMenu = menu.contains(event.target);

    // Если клик был сделан вне меню, закрываем его
    if (!isClickInsideMenu) {
        menuList.classList.remove('active-menu');
        menu.classList.remove('active');
    }

    // Если клик был сделан на ссылке с якорем, прокручиваем к соответствующему элементу
    if (event.target.tagName === 'A' && event.target.getAttribute('href').startsWith('#')) {
        event.preventDefault();

        const targetId = event.target.getAttribute('href').substr(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
});