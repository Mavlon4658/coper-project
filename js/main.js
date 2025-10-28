const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const phoneInp = document.querySelectorAll('input[type="tel"]');

if (phoneInp.length) {
    phoneInp.forEach(el => {
        IMask(el, {
            mask: '+{7}(000) 000-00-00',
        })
    });
}

const bars = document.querySelector('.header .bars');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu .menu-close');
const menuBg = document.querySelector('.menu .menu-bg');

if (bars) {
    bars.onclick = () => {
        menu.classList.remove('hidden');
    }
    menuClose.onclick = () => {
        menu.classList.add('hidden');
    }
    menuBg.onclick = () => {
        menu.classList.add('hidden')
    }
}