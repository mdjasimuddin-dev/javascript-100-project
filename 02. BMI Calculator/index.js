let username = document.getElementById('username')
let inputFeet = document.getElementById('feet')
let inputInch = document.getElementById('inch')
let inputWeight = document.getElementById('weight')
let btn = document.querySelector('.btn')

let showName = document.querySelector('.u-name')


btn.addEventListener('click', calculateBmi)

// BMI Theory
// BMI = weight (kg) / meter * meter

function calculateBmi(e) {
    e.preventDefault()
    let feet = parseFloat(inputFeet.value) * 0.3048
    let inch = parseFloat(inputInch.value) * 0.0254
    let totalHeight = feet + inch
    let weight = parseInt(inputWeight.value)

    let BMI = weight / (totalHeight * totalHeight)

    displayResult(BMI)

    function displayResult(BMI) {
        showName.textContent = username.value;
        document.querySelector('.bmi').textContent = 'BMI : ' + BMI

    }



}


