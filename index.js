document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const moduleContent = button.nextElementSibling;
        button.classList.toggle('active');
        if (moduleContent.style.maxHeight) {
            moduleContent.style.maxHeight = null;
        } else {
            moduleContent.style.maxHeight = moduleContent.scrollHeight + "px";
        }
    });
});