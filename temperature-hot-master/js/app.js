const API_KEY = `e1fc518d22cf22bf59196fc03fc88ac0`;
const searchButton = () => {
    const city = document.getElementById('input')
    const cityValue = city.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => temprature(data));
}

const tempratureInnerText = (city, text) => {
    document.getElementById(city).innerText = text;
}
const temprature = weather => {
    tempratureInnerText('city', weather.name);
    tempratureInnerText('temp', weather.main.temp);
    tempratureInnerText('cloud', weather.weather[0].main);
    const url = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('icone-image');
    imgIcon.setAttribute('src', url);
    console.log(weather);
}