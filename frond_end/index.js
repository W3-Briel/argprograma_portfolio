const menuIcon = document.getElementById("menu-icon-responsive");
const menuUI = document.getElementById("menu-responsive");
const closeMenuResponsive = document.getElementById("closeMenu-r");

menuIcon.addEventListener("click", showMenu); //* mostrar menu
closeMenuResponsive.addEventListener("click", closeMenu);

function showMenu (){
    if (menuUI.classList.contains("closeMenu")){
        menuUI.classList.replace("closeMenu", "showMenu");
    }
};

function closeMenu (){
    if (menuUI.classList.contains("showMenu")){
        menuUI.classList.replace("showMenu", "closeMenu");
    }
};