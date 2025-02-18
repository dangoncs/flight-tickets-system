// Script para alternar o menu hambúrguer
const menuIcon = document.getElementById('menuIcon');
const sidebar = document.getElementById('sidebar');

menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Script para alternar os dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const dropdownLink = dropdown.querySelector('a');
    dropdownLink.addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.classList.toggle('active');
    });
    if (dropdown.querySelector('.current-page')) {
        dropdown.classList.add('active');
    }
});
