var menu = document.getElementById("menu")

menu.style.left = "-110%"

function showMenu(){
    if (menu.style.left === "-110%"){
        menu.style.left = "0"
    }
    else{
        menu.style.left = "-110%"
    }
}