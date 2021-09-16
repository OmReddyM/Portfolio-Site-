let user = {"Username":"nil", "Password":"nil"};
function getandstore() {
    user.Username = document.getElementById("username").value;
    user.Password = document.getElementById("password").value;
    sessionStorage.setItem("user", JSON.stringify(user));
    location.href='index.html'
}
function getandcheack() {
    user = JSON.parse(sessionStorage.getItem("user"))
    namekey = document.getElementById("name").value;
    passkey = document.getElementById("key").value;
    if (user.Username === namekey && user.Password === passkey) {
        location.href='index.html'
        window.alert("You are now logged in!")
        sessionStorage.setItem("login", "You are now logged in.")
    }
}
location.href='index.html'