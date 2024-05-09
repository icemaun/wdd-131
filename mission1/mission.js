
const themeSelector = document.getElementById('click')

function changeTheme() {

const selectedOption = themeSelector.value;

if (selectedOption === 'dark') {
    
    document.body.classList.add('dark');
    
    document.getElementById('byui-logo').src = "images/byui-logo_white.webp";
} else {
    
    document.body.classList.remove('dark');
    
    document.getElementById('byui-logo').src = "images/byui-logo_blue.webp";
}
}


themeSelector.addEventListener('change', changeTheme);