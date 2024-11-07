function message(params) {
    alert("Me gusta")
}
// Llamada desde HTML

function login(element) {
    if (element.innerText == "Login"){
        element.innerText = "Logout"
    } else {
        element.innerText = "Login"
    }
}

function hide(el) {
    el.remove();
}