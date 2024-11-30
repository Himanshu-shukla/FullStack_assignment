document.querySelectorAll('.header.box').forEach(box => {
    box.addEventListener('click', () => {
        document.querySelectorAll('.header.box').forEach(otherBox => {
            if (otherBox !== box) {
                otherBox.parentElement.classList.remove('expanded');
            }
        });

        box.parentElement.classList.toggle('expanded');
    });
});
