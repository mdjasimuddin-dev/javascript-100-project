btnGroup = document.querySelector('.btn-group')
showResult = document.querySelector('.result')


btnGroup.addEventListener('click', calc)

function calc(e) {
    let text = showResult.innerHTML
    let currentValue = parseInt(text.split(':')[1])

    if (isNaN(currentValue)) {
        currentValue = 0
    }

    if (e.target.classList.contains('btnAdd')) {
        currentValue += 1
    }

    if (e.target.classList.contains('btnSub')) {
        currentValue -= 1
    }

    if (e.target.classList.contains('btnReset')) {
        currentValue = 0
    }

    showResult.innerHTML = `Count : ${currentValue}`

    console.log(currentValue);
}