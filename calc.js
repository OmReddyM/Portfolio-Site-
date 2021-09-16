function add() {
    var sum =
        Number(document.getElementById("num1").value) +
        Number(document.getElementById("num2").value);
    window.alert("Your answer is " + sum);
}
function sub() {
    var diff =
        Number(document.getElementById("num1").value) -
        Number(document.getElementById("num2").value);
    window.alert("Your answer is " + diff);
}
function times() {
    var prod =
        Number(document.getElementById("num1").value) *
        Number(document.getElementById("num2").value);
    window.alert("Your answer is " + prod);
}
function by() {
    var q =
        Number(document.getElementById("num1").value) /
        Number(document.getElementById("num2").value);
    window.alert("Your answer is " + q);
}
function tothepowerof() {
    var power = Math.pow(
        Number(document.getElementById("num1").value),
        Number(document.getElementById("num2").value));
    window.alert("Your answer is " + power);
}
function rootof() {
    var root =
        Math.pow(
            Number(document.getElementById("num1").value), 1 / Number(document.getElementById("num2").value));
    window.alert("Your answer is " + root);
}
function showπ() {
    var display = 3.14159265359;
    window.alert("The value requested is " + display);
}
function show_e() {
    var display = 2.718281828459045;
    window.alert("The value requested is " + display);
}
function show_phi() {
    var display = 1.61803398875;
    window.alert("The value requested is " + display);
}