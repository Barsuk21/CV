// scripts.js
window.onscroll = function() {
    let sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if(isScrolledIntoView(section)) {
            let headings = section.querySelectorAll('h2');
            headings.forEach(heading => heading.classList.add('fadeInDown'));
        }
    });
};

function isScrolledIntoView(elm) {
    return elm.getBoundingClientRect().top >= 0 && elm.getBoundingClientRect().bottom <= window.innerHeight;
}


document.querySelectorAll('.social-icons a').forEach(link => {
    link.addEventListener('click', event => {
        try {
            event.preventDefault();
            window.open(event.currentTarget.href, "_blank");
        } catch(e) {
            console.error("Ошибка открытия ссылки:", e.message);
        }
    });
});