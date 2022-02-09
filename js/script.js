function resetTemp1() {
  let accept = document.querySelector(".d1");
  accept.remove()
}
function resetTemp2() {
  let accept = document.querySelector(".d2");
  accept.remove()
}
function resetTemp3() {
  let accept = document.querySelector(".d3");
  accept.remove()
}
function resetTemp4() {
  let accept = document.querySelector(".d4");
  accept.remove()
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
        degree[i].innerText = temp;
    }
}

else {
    for (let i=0; i<degree.length; i++) {
        let temp = parseInt(degree[i].innerText)
        temp = (Math.round(((temp * 1.8) + 32 )))
        degree[i].innerText = temp;
    }
}
}

///////////////////////////////////

// burbank = {"lon":-118.309,"lat":34.1808}
// chicago = {"lon":-87.65,"lat":41.85}
// dallas = {"lon":-96.7836,"lat":32.7668}
// san jose = {"lon": -121.893028,"lat":37.335480}
// lat=40.9445&lon=-74.0754

const apiKey = "855d19633e0f8beecd90b7be980732e3";

// const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=imperial`;

//https://api.openweathermap.org/data/2.5/forecast?${inputVal}&appid=${apiKey}&units=imperial

//https://www.unixtimestamp.com/index.php

var cardsDiv = document.querySelector(".forecast");
var currentLocation ="";

function getCity(element) {
  if (element.innerText == 'Burbank') {
    currentLocation = 'lat=34.1808&lon=-118.309'
  } else if (element.innerText == 'Chicago'){
    currentLocation = 'lat=41.85&lon=-87.65'
  } else if (element.innerText == 'Dallas'){
    currentLocation = 'lat=32.7668&lon=-96.7836'
  }
    else {
      currentLocation = 'lat=37.335480&lon=-121.893028'
    }
    console.log(element.innerText);
    console.log(currentLocation);
}

async function checkCity() {
    let inputVal = currentLocation;
    const url = `https://api.openweathermap.org/data/2.5/onecall?${inputVal}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=metric`;
    var response = await fetch(url);
    var weatherData = await response.json();
    cardsDiv.innerHTML = getWeatherData(weatherData) + cardsDiv.innerHTML;
}


function getWeatherData(data) {
  const day1 = `${data.daily[0].dt}`;
  const day2 = `${data.daily[1].dt}`;
  const day3 = `${data.daily[2].dt}`;
  const day4 = `${data.daily[3].dt}`;
  var dayname1 = new Date(day1*1000).toLocaleString('en-us', {  weekday: 'long' });
  var dayname2 = new Date(day2*1000).toLocaleString('en-us', {  weekday: 'long' });
  var dayname3 = new Date(day3*1000).toLocaleString('en-us', {  weekday: 'long' });
  var dayname4 = new Date(day4*1000).toLocaleString('en-us', {  weekday: 'long' });
  let temp1max = `${data.daily[0].temp.max}`
  var t1max = Math.round(temp1max)
  let temp1min = `${data.daily[0].temp.min}`
  var t1min = Math.round(temp1min)
  let temp2max = `${data.daily[1].temp.max}`
  var t2max = Math.round(temp2max)
  let temp2min = `${data.daily[1].temp.min}`
  var t2min = Math.round(temp2min)
  let temp3max = `${data.daily[2].temp.max}`
  var t3max = Math.round(temp3max)
  let temp3min = `${data.daily[2].temp.min}`
  var t3min = Math.round(temp3min)
  let temp4max = `${data.daily[3].temp.max}`
  var t4max = Math.round(temp4max)
  let temp4min = `${data.daily[3].temp.min}`
  var t4min = Math.round(temp4min)
  var res = `<div class="day-forecast d1">
                  <h3>${dayname1}</h3>
                  <img src="http://openweathermap.org/img/w/${data.daily[0].weather[0].icon}.png" alt="some rain" class="center"></img>
                  <p>${data.daily[0].weather[0].description}</p>
                      <span class="temp">
                          <p class="hi degree">${t1max}</p>
                          <p class="low degree">${t1min}</p>
                      </span>
             </div>
             <div class="day-forecast d2">
                  <h3>${dayname2}</h3>
                  <img src="http://openweathermap.org/img/w/${data.daily[1].weather[0].icon}.png" alt="some rain" class="center"></img>
                  <p>${data.daily[1].weather[0].description}</p>
                      <span class="temp">
                          <p class="hi degree">${t2max}</p>
                          <p class="low degree">${t2min}</p>
                      </span>
             </div>
             <div class="day-forecast d3">
                  <h3>${dayname3}</h3>
                  <img src="http://openweathermap.org/img/w/${data.daily[2].weather[0].icon}.png" alt="some rain" class="center"></img>
                  <p>${data.daily[2].weather[0].description}</p>
                      <span class="temp">
                          <p class="hi degree">${t3max}</p>
                          <p class="low degree">${t3min}</p>
                      </span>
             </div>
             <div class="day-forecast d4">
                  <h3>${dayname4}</h3>
                  <img src="http://openweathermap.org/img/w/${data.daily[3].weather[0].icon}.png" alt="some rain" class="center"></img>
                  <p>${data.daily[3].weather[0].description}</p>
                      <span class="temp">
                          <p class="hi degree">${t4max}</p>
                          <p class="low degree">${t4min}</p>
                      </span>
             </div>`
  return res;
}
