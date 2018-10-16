document.addEventListener('DOMContentLoaded', function() {

/* ---------------------------------------------------- */
/* ----- TOGGLE HEADER MENU ----- */
/* ---------------------------------------------------- */

    const btn = document.querySelector('#btnToggle');
    btn.addEventListener('click', function(e) {
    	e.preventDefault();
    	document.body.classList.toggle('nav-show');
	    this.classList.toggle('btn-toggle--toggled');
    });


/* ---------------------------------------------------- */
/* ----- TOGGLE HEADER SUBMENU ----- */
/* ---------------------------------------------------- */

    const dropdownSubmenu = document.querySelectorAll('.nav--submenu');

    function closeOpenItems() {
        openDropmenus = document.querySelectorAll('.nav__list--submenu');
        openDropmenus.forEach(function(dropmenus) {
            dropmenus.classList.remove('show--submenu');
        });
    }

    dropdownSubmenu.forEach(function(submenu) {

        submenu.addEventListener('click', function(e) {

            const dropContent = submenu.querySelector('.nav__list--submenu');
            const shouldOpen = !dropContent.classList.contains('show--submenu');
            e.preventDefault();

            closeOpenItems();


            if (shouldOpen) {
                dropContent.classList.add('show--submenu');
            }
            e.stopPropagation();
        });

    });

    window.addEventListener('click', function(event) {

        if (event.target != dropdownSubmenu) {
            closeOpenItems();
        }
    });


/* ---------------------------------------------------- */
/* ----- TOGGLE FOOTER MENU ----- */
/* ---------------------------------------------------- */

    let footertoggle = document.querySelectorAll('.toggle--footer--menu');

    for (let i = 0; i < footertoggle.length; i++) {
        footertoggle[i].addEventListener('click', menus, false);
    }

    function menus() {

        let menu = this.querySelector('.toggle--footer');
        menu.classList.toggle('is--visible');
    }

/* ---------------------------------------------------- */
/* ----- CHEVRON ANIMATION ----- */
/* ---------------------------------------------------- */

    const active = document.querySelectorAll('.menu__item');

    for (let i = 0; i < active.length; i++) {
        active[i].addEventListener('click', toggleChevron, false);
    }

    function toggleChevron() {

        let chevron = this.querySelector('.menu__link');
        chevron.classList.toggle('rotate');
    }


/* ---------------------------------------------------- */
/* ----- HIGHLIGHT CURRENT PAGE ACTIVE MENU ITEM ----- */
/* ---------------------------------------------------- */

    const selector = '.nav__link';
    const elems = Array.from( document.querySelectorAll(selector));
    const navigation = document.querySelector('nav');

    function makeActive(evt) {
      const target = evt.target;
      
        if ( !target || !target.matches(selector)) {
          return;
        }
      
        elems.forEach(elem => elem.classList.remove('active'));
        evt.target.classList.add('active');
    };

    navigation.addEventListener('mousedown', makeActive);
    
});