var inputvalue=document.querySelector('#cityinput');
var btn=document.querySelector('#add');
var city=document.querySelector('#cityoutput');
var descrip=document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind =document.querySelector('#wind');
apik="1daa0d08f2b6b3ae1f353bb4f10a186c"

function convertion(val)
{
    return(val - 273).toFixed(3)
}

btn.addEventListener('click', function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
    .then(res => res.json())

    .then(data =>
        {
            var nameval=data['name'];
            var description=data['weather'][0]['description'];
            var tempature = data['main']['temp'];
            var wndspeed = data['wind']['speed'];

            city.innerHTML=`Weather of <span>${nameval}<span>`;
            temp.innerHTML= `Temperature: <span>${convertion(tempature)} C</span>`;
            descrip.innerHTML=`Sky Conditions: <span>${description}<span>`
            wind.innerHTML= `Wind Speed: <span>${wndspeed} km/h<span>`;
        })
        .catch(err => alert('You entered Wrong city name'));
    
});