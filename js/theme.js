// Theme switching functionality
document.addEventListener('DOMContentLoaded', function () {
    // Check if user has a theme preference stored
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Apply the theme
    document.body.classList.toggle('dark', currentTheme === 'dark');

    // Update the toggle button initially
    updateThemeToggle(currentTheme === 'dark');

    // Create theme toggle function
    window.toggleTheme = function () {
        const isDark = document.body.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        // Update toggle button
        updateThemeToggle(isDark);
    };

    // Helper function to update the theme toggle appearance
    function updateThemeToggle(isDark) {
        const themeIcon = document.getElementById('theme-icon');
        const themeText = document.getElementById('theme-text');

        if (themeIcon) {
            // Use simpler icon classes that are definitely supported
            if (isDark) {
                themeIcon.className = '';
                themeIcon.classList.add('fas', 'fa-sun');
            } else {
                themeIcon.className = '';
                themeIcon.classList.add('fas', 'fa-moon');
            }
        }

        if (themeText) {
            themeText.textContent = isDark ? 'Light Mode' : 'Dark Mode';
        }
    }
}); 