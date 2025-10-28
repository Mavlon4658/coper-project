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

// accordion
const accordions = document.querySelectorAll(".accordion-header");

accordions.forEach((header) => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector(".accordion-icon");

        document.querySelectorAll(".accordion-content").forEach((c) => {
        if (c !== content) {
            c.style.maxHeight = null;
            c.previousElementSibling
            ?.querySelector(".accordion-icon")
            ?.classList.remove("rotate-180");
        }
        });

        if (content.style.maxHeight) {
        content.style.maxHeight = null;
        icon.classList.remove("rotate-180");
        } else {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.classList.add("rotate-180");
        }
    });
});
// accordion

// comment
    var swiper = new Swiper(".commentSwiper", {
    slidesPerView: 1.3,
    spaceBetween: 24,
    breakpoints: {
        640: {
            slidesPerView: 1.5,
            spaceBetween: 24,
        },
        768: {
            slidesPerView: 2.6,
            spaceBetween: 24,
        },
        1024: {
            slidesPerView: 2.8,
            spaceBetween: 32,
        },
    },
});
// comment

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
