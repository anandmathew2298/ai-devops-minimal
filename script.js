document.addEventListener('DOMContentLoaded', () => {
    const themeButtons = document.querySelectorAll('.theme-btn');
    const body = document.body;
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    const infoBoxHeading = document.querySelector('.info-box h2');
    
    // Set default theme
    const defaultTheme = 'theme1';
    const savedTheme = localStorage.getItem('selectedTheme') || defaultTheme;
    
    // Apply saved theme
    applyTheme(savedTheme);
    
    // Handle search submission
    const handleSearchSubmit = () => {
        const searchText = searchInput.value.trim();
        if (searchText) {
            infoBoxHeading.textContent = searchText;
            searchInput.value = '';
        }
    };
    
    // Submit on Enter key
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearchSubmit();
        }
    });
    
    // Submit on tick button click
    searchBtn.addEventListener('click', handleSearchSubmit);
    
    // Add click listeners to theme buttons
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.getAttribute('data-theme');
            applyTheme(theme);
            localStorage.setItem('selectedTheme', theme);
        });
    });
    
    function applyTheme(theme) {
        // Remove all theme classes
        body.classList.remove('theme1', 'theme2', 'theme3', 'theme4');
        
        // Add the selected theme class
        body.classList.add(theme);
        
        // Update active button
        themeButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-theme') === theme) {
                btn.classList.add('active');
            }
        });
    }
});
