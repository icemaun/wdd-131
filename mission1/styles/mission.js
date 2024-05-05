const themeSelector = document.getElementById('dark')

function changeTheme() {

const dark = themeSelector.checked;

if (dark === 'dark') {
    
    document.body.classList.add('dark');
    
    document.getElementById('logo').src = "images/byui-logo_white.webp";
} else {
    
    document.body.classList.remove('dark');
    
    document.getElementById('logo').src = "images/byui-logo_blue.webp";
}
}


themeSelector.addEventListener('dark', changeTheme);