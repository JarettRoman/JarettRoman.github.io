function setDarkMode(isDark) {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('darkMode', isDark);
    updateToggleButton(isDark);
}

function updateToggleButton(isDark) {
    const toggleButton = document.getElementById('darkModeToggle');
    toggleButton.textContent = isDark ? '☀️' : '🌙';
}

function toggleDarkMode() {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(!isDark);
}

function initDarkMode() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedDarkMode = localStorage.getItem('darkMode');
    
    if (storedDarkMode !== null) {
        setDarkMode(storedDarkMode === 'true');
    } else {
        const currentHour = new Date().getHours();
        const isDarkHours = currentHour < 6 || currentHour >= 18;
        setDarkMode(isDarkHours || prefersDark);
    }
}

document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);

// Initialize dark mode
initDarkMode();

// Listen for system preference changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    setDarkMode(e.matches);
});