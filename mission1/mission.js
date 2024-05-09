
const themeSelector = document.getElementById('click')

function changeTheme() {

const selectedOption = themeSelector.value;

if (selectedOption === 'click') {
    
    document.body.classList.add('click');
    
    document.getElementById('byui-logo').src = "images/byui-logo_white.webp";
} else {
    
    document.body.classList.remove('click');
    
    document.getElementById('byui-logo').src = "images/byui-logo_blue.webp";
}
}


themeSelector.addEventListener('change', changeTheme);