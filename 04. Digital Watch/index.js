


function getDay() {

    let d = new Date()
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const days = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
    ];

    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    console.log(day);
    console.log(month);
    console.log(year);


    return `${day} , ${date} , ${month} , ${year}`

}


document.querySelector('.flex').innerHTML = getDay()



function getTime() {
    let d = new Date()
    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()


    let ampm = h > 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;


    const time = `${h} : ${m} : ${s} ${ampm}`

    document.querySelector('.time').innerHTML = time
}

setInterval(getTime, 1000)