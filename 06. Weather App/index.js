const api = {
    key: "28fd15358cdecbc1a1dfef367e71acef",
    // https://api.openweathermap.org/data/2.5/weather?q=Dhaka,BD&appid=YOUR_API_KEY&units=metric
    base: "https://api.openweathermap.org/data/2.5/"
}


let search = document.querySelector('.search')
let btn = document.querySelector('.btn')


btn.addEventListener('click', getData)



function getDate() {
    const d = new Date();
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `${day}, ${month} ${date} ${year},`
}


function getData() {
    fetch(`${api.base}weather?q=${search.value}&units=metric&appid=${api.key}`)
        .then(res => {
            console.log(res.status);
            return res.json()
        })
        .then(displayData);
}



function displayData(res) {
    console.log(res);
    if (res.cod === "404") {
        let error = document.querySelector('.error')
        error.textContent = "Please enter a valid city"
        search.value = "";
    } else {
        let city = document.querySelector('.city')
        city.innerHTML = `${res.name}, ${res.sys.country}`;


        const date = document.querySelector(".date");
        date.innerText = getDate();


        const temp = document.querySelector(".temp");
        temp.innerHTML = `Temp: ${Math.round(res.main.temp)} <span>°C</span>`;

        const weather = document.querySelector(".weather");
        weather.innerText = `Weather: ${res.weather[0].main}`;

        const tempRange = document.querySelector(".temp-range");
        tempRange.innerText = `Temp Range: ${Math.round(res.main.temp_min)}°C / ${Math.round(res.main.temp_max)}°C`;

        const weatherIcon = document.querySelector(".weather-icon");
        const iconURL = "http://openweathermap.org/img/w/";
        weatherIcon.src = iconURL + res.weather[0].icon + ".png";

        search.value = "";
    }
}