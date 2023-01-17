let drop = document.getElementById("drop");
let mas = document.getElementById("mostrar");

mas.addEventListener("click", mostrar);

function mostrar(){
    if (drop.classList.contains("show")){
        drop.classList.remove("show")
    } else {
        drop.classList.add("show")
    }
}