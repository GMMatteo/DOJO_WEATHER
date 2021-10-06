var spans = [
    document.querySelector(".city-1"),
    document.querySelector(".city-2"),
    document.querySelector(".city-3")
];

function checkCity(i) {
    console.log(spans[i].innerText);
    alert("Loading " + [spans[i].innerText] + " weather report...");
}

function removePolicy() {
    let accept = document.querySelector("#cookie_policy");
    accept.remove()
}

var tempVal = document.querySelector('#whatTemp');

function showTemp() {
    let degree = document.querySelectorAll('.degree');

if (tempVal.value == 'c') {
    for (let i=0; i<degree.length; i++) {
        let temp = parseInt(degree[i].innerText)
        temp = (Math.round(((temp - 32) * (5 / 9))))
        degree[i].innerText = temp + ("°");
    }
} 

else {
    for (let i=0; i<degree.length; i++) {
        let temp = parseInt(degree[i].innerText)
        temp = (Math.round(((temp * 1.8) + 32 )))
        degree[i].innerText = temp + ("°");
    }
}
}
    




