// Get the theme toggle button
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('i');

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.add(savedTheme);
    updateButton(savedTheme);
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
        updateButton('dark-mode');
    } else {
        localStorage.removeItem('theme');
        updateButton('light-mode');
    }
});

// Update button icon and text
function updateButton(theme) {
    if (theme === 'dark-mode') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        themeToggle.innerHTML = `<i class="fas fa-sun"></i> Light Mode`;
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        themeToggle.innerHTML = `<i class="fas fa-moon"></i> Dark Mode`;
    }
}