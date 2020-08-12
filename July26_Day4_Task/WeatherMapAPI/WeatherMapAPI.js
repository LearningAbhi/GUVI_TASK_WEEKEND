var url_string = 'https://api.openweathermap.org/data/2.5/weather?q=Mumbai,India&appid=469d74de12a1da7c0a2d87bc4b3d2738';


fetch(url_string)
.then(res=>res.json())
.then(data=>console.log(data))