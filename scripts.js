let count = 0
let num = document.querySelector(".box-num")
let btnmais = document.querySelector(".btnMais")
let btnmenos = document.querySelector(".btnMenos")
let btnReset = document.querySelector(".btnReset")

num.innerHTML = `${count}`

function updateValue() {
    num.textContent = count;
}

btnmais.addEventListener("click", () => {
    count++;
    updateValue();
    console.log(count)
})

btnmenos.addEventListener("click", () => {
    count--;
    updateValue();
    console.log(count)
})

btnReset.addEventListener("click", () => {
    count = 0;
    updateValue();
    console.log(count)
})



