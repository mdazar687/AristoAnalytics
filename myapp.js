let bannerCaption = document.getElementById('banner-caption');
let captionValue = 1;
const captions = ['!!! Nutritionists to Guide You !!!', '!!! No Dish Repeated for 4 Weeks !!!', '!!! Calorie Counted For You !!!'];

function changeCaption() {
    bannerCaption.textContent = captions[captionValue];
    captionValue += 1;
    if (captionValue === captions.length) {
        captionValue = 0;
    }
}
const myTimeOut = setInterval(changeCaption, 2000);

let ketoMenu = document.getElementById('keto-menu');
let lcMenu = document.getElementById('lc-menu');
let balancedMenu = document.getElementById('balanced-menu');
let veganMenu = document.getElementById('vegan-menu');

let ketoMenuContainer = document.getElementById('k-meals-cards');
let lcMenuContainer = document.getElementById('lc-meals-cards');
let balancedMenuContainer = document.getElementById('b-meals-cards');
let veganMenuContainer = document.getElementById('v-meals-cards');

ketoMenu.onclick = function() {
    ketoMenu.classList.add('menu-heading-active');
    lcMenu.classList.remove('menu-heading-active');
    balancedMenu.classList.remove('menu-heading-active');
    veganMenu.classList.remove('menu-heading-active');
    lcMenuContainer.classList.add('display-menus')
    balancedMenuContainer.classList.add('display-menus')
    veganMenuContainer.classList.add('display-menus')
    ketoMenuContainer.classList.remove('display-menus')
};
lcMenu.onclick = function() {
    lcMenu.classList.add('menu-heading-active');
    ketoMenu.classList.remove('menu-heading-active');
    balancedMenu.classList.remove('menu-heading-active');
    veganMenu.classList.remove('menu-heading-active');
    lcMenuContainer.classList.remove('display-menus')
    balancedMenuContainer.classList.add('display-menus')
    veganMenuContainer.classList.add('display-menus')
    ketoMenuContainer.classList.add('display-menus')
};
balancedMenu.onclick = function() {
    balancedMenu.classList.add('menu-heading-active');
    ketoMenu.classList.remove('menu-heading-active');
    lcMenu.classList.remove('menu-heading-active');
    veganMenu.classList.remove('menu-heading-active');
    lcMenuContainer.classList.add('display-menus')
    balancedMenuContainer.classList.remove('display-menus')
    veganMenuContainer.classList.add('display-menus')
    ketoMenuContainer.classList.add('display-menus')
};
veganMenu.onclick = function() {
    veganMenu.classList.add('menu-heading-active');
    ketoMenu.classList.remove('menu-heading-active');
    lcMenu.classList.remove('menu-heading-active');
    balancedMenu.classList.remove('menu-heading-active');
    lcMenuContainer.classList.add('display-menus')
    balancedMenuContainer.classList.add('display-menus')
    veganMenuContainer.classList.remove('display-menus')
    ketoMenuContainer.classList.add('display-menus')
};