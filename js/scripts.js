    const headerbutton = document.querySelector('.header-button');
    const menubutton = document.querySelector('.menu-button');

    headerbutton.addEventListener('click', () => {                                                 // Нажатие на кнопку открытия меню и выдвижение меню
        document.querySelector('.menu').classList.toggle('menu-active');
        document.querySelector('.header-button').classList.toggle('header-button-active');
    });

    headerbutton.addEventListener('mouseover', () => {                                             // Изменение цвета кнопки при наведении мыши
        document.querySelector('.header-button').style.backgroundColor = "#FFFAFA";
        document.querySelector('.h-button-line-first').style.backgroundColor = "#51565C";
        document.querySelector('.h-button-line-second').style.backgroundColor = "#51565C";
        document.querySelector('.h-button-line-third').style.backgroundColor = "#51565C";
    });

    headerbutton.addEventListener('mouseleave', () => {                                            // Изменение цвета кнопки при отведении мыши
        document.querySelector('.header-button').style.backgroundColor = "#51565C";
        document.querySelector('.h-button-line-first').style.backgroundColor = "#FFFAFA";
        document.querySelector('.h-button-line-second').style.backgroundColor = "#FFFAFA";
        document.querySelector('.h-button-line-third').style.backgroundColor = "#FFFAFA";
    });

    menubutton.addEventListener('click', () => {                                                   // Нажатие на кнопку закрытия меню и задвижение меню
        document.querySelector('.menu').classList.toggle('menu-active');
        document.querySelector('.header-button').classList.toggle('header-button-active');
    });

    menubutton.addEventListener('mouseover', () => {                                             // Изменение цвета кнопки при наведении мыши
        document.querySelector('.menu-button').style.backgroundColor = "#51565C";
        document.querySelector('.menu-line-first').style.backgroundColor = "#FFFAFA";
        document.querySelector('.menu-line-second').style.backgroundColor = "#FFFAFA";
    });

    menubutton.addEventListener('mouseleave', () => {                                            // Изменение цвета кнопки при отведении мыши
        document.querySelector('.menu-button').style.backgroundColor = "#FFFAFA";
        document.querySelector('.menu-line-first').style.backgroundColor = "#51565C";
        document.querySelector('.menu-line-second').style.backgroundColor = "#51565C";
    });

    const cataloglink = document.querySelector('.nesting');                                        // Вложенные ссылки в меню
    cataloglink.addEventListener('click', () => {
        document.querySelector('.list-nested').classList.toggle('list-nested-active');
    });


    
