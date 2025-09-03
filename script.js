function toggleMenu() {
    const body = document.body;
    const menu = document.querySelector('nav ul');
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    menu.classList.toggle('ativo');
    menuHamburguer.classList.toggle('ativo');

    // Adiciona ou remove a classe no-scroll do body
    body.classList.toggle('no-scroll', menu.classList.contains('ativo'));
}

function closeMenuOnClick() {
    const menuItems = document.querySelectorAll('nav ul li');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const body = document.body;
            const menu = document.querySelector('nav ul');
            const menuHamburguer = document.querySelector('.menu-hamburguer');
            // Verifica se o menu está ativo antes de tentar fechá-lo
            if(menu.classList.contains('ativo')) {
                menu.classList.remove('ativo');
                menuHamburguer.classList.remove('ativo');
                body.classList.remove('no-scroll');
            }
        });
    });
}


