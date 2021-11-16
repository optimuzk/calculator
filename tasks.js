const btns = document.querySelectorAll("#btn");
const result = document.querySelector("#result-content")
const clearButton = document.querySelector("#clear")
const equalButton = document.querySelector("#equal")

console.log(btns)


for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let valor = document.createTextNode(this.value);
        console.log(this.value)
        result.appendChild(valor)
    });
}

clearButton.addEventListener('click', () => {
    result.innerHTML = '';
})

equalButton.addEventListener('click', () => {
    result.innerHTML = 'Aun no se hacer eso jaja';
})