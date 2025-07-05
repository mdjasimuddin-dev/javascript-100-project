const username = document.querySelector("#username");
const dob = document.querySelector("#dob");
const btn = document.querySelector(".btn");
const showName = document.querySelector(".u-name");
const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

btn.addEventListener('click', calculatorAge);

function calculatorAge(e) {
    e.preventDefault()

    let dobInput = new Date(dob.value)
    let birthMonth, birthDate, birthYear;

    let birthDetails = {
        date: dobInput.getDate(),
        month: dobInput.getMonth() + 1,
        year: dobInput.getFullYear(),
    }



    let today = new Date()
    let currentDate = today.getDate()
    let currentMonth = today.getMonth() + 1
    let currentYear = today.getFullYear()



    if (birthDetails.year > currentYear ||
        birthDetails.month > currentMonth && birthDetails.year == currentYear ||
        birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear
    ) {

        alert("Invalid Birth Day")
    }

    birthYear = currentYear - birthDetails.year
    console.log(birthYear);



    if (currentMonth > birthDetails.month) {
        let birthMonth = currentMonth - birthDetails.month
        console.log(birthMonth);
    } else {
        birthYear--
        birthMonth = 12 + currentMonth - birthDetails.month
        console.log(birthMonth);
    }

    if (currentDate > birthDetails.date) {
        let birthDate = currentDate - birthDetails.date
        console.log(birthDate);
    } else {
        birthMonth--
        let prevMonth = currentMonth - 2
        if (prevMonth < 0) prevMonth = 11

        birthDate = month[prevMonth] + currentDate - birthDetails.date

        console.log(birthDate);

    }


    displayResult(birthYear, birthMonth, birthDate)


    function displayResult(bYear, bMonth, bDate) {
        showName.textContent = username.value;
        document.querySelector(".age-year").textContent = bYear + " Years";
        document.querySelector(".age-month").textContent = bMonth + " Months";
        document.querySelector(".age-day").textContent = bDate + " Day";

    }




}


