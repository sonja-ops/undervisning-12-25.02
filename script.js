const userName = "Sonja";
const userAge = 48;
const userPresent = true;

function myFunction() {
    console.log("Beskjed fra inni en funksjon")
}
myFunction();

const buttonElement = document.querySelector("#pushButton");
console.log(buttonElement);

buttonElement.addEventListener("click", function () {
    console.log("Hei fra arrow function")
})