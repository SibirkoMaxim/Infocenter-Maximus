    const headerbutton = document.querySelector('.header-button');
    const menu = document.querySelector('.menu');
    headerbutton.addEventListener('click', () => {
        document.querySelector('.menu').classList.toggle('menu-active');
        document.querySelector('.header-button').classList.toggle('header-button-active');
        document.querySelector('.menu-button').classList.toggle('menu-button-active');
    });

    const menubutton = document.querySelector('.menu-button');
    menubutton.addEventListener('click', () => {
        document.querySelector('.menu').classList.toggle('menu-active');
        document.querySelector('.header-button').classList.toggle('header-button-active');
        document.querySelector('.menu-button').classList.toggle('menu-button-active');
    });


    const cataloglink = document.querySelector('.nesting');
    cataloglink.addEventListener('click', () => {
        document.querySelector('.list-nested').classList.toggle('list-nested-active');
    });


    
