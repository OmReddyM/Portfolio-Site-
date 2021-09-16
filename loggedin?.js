var loggedin = false;

window.onload = function check() {
    if (!sessionStorage.getItem("user")) {
        window.location = 'signup.html';
    } else if (!loggedin) {
        window.location = 'login.html';
    }
}