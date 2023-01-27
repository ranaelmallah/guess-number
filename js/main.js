let btn    = document.querySelector('.submit')
let result = document.querySelector(".result")
let remain = document.querySelector(".remain")
let main   = document.querySelector(".main")
let inp    = document.querySelector("input")

let secretNum = Math.trunc(Math.random() * 10) + 0
let count = 3
remain.innerText = count;
console.log(secretNum)
btn.onclick = function () {
    let input = parseInt(inp.value)
    if (input == secretNum) {
        result.innerText = "well done :)"
        btn.style.backgroundColor = " rgb(236, 186, 229)"
        inp.setAttribute("disabled", "disabled")
        btn.setAttribute("disabled", "disabled")
        result.style.fontSize="25px"
    }
    if (input != secretNum) {
        result.innerText = "try again!"
        count--;
        remain.innerText = count;
        if (count === 0) {
            main.style.border = " 2px solid red"
            result.innerText = "GAME OVER :)"
            btn.style.backgroundColor = " rgb(236, 186, 229)"

            inp.setAttribute("disabled", "disabled")
            btn.setAttribute("disabled", "disabled")


        }

    }
}