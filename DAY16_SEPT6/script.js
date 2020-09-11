fetch("https://restcountries.eu/rest/v2/all")
.then(function(response){
    return response.json();
}).then(function(data)
{
    country(data)
}).catch(function(err)
{console.error(err)})

function country(data)
{

    for(i=0;i<data.length;i++)
    {
       
      displayData(data[i]);
    }
}

// CREATING CONTAINER 

/*let pContainer= document.createElement("div");
pContainer.classList.add("row")
pContainer.classList.add("pContainer")
document.body.append(pContainer)*/
let container = document.createElement("div");
container.classList.add("row");
container.classList.add("container");
let heading = document.createElement("div");
heading.classList.add("col","col-lg-12","col-sm-12","col-md-12","heading")
container.append(heading)
let content = document.createElement("h1");
content.innerText = "WEATHER FORCASTING"
heading.append(content)
document.body.append(container)

function displayData(data)
{
    let col = document.createElement("div");
    col.classList.add("col-lg-4");
    col.classList.add("col-sm-12");
    col.classList.add("col-md-6")
    let card = document.createElement("div");
    card.classList.add("cardList","card","card-flex", "border", "mb-3")
    card.style.background = "linear-gradient(to left, #3F5151 , black )"
    let header = document.createElement("div");
    header.classList.add("card-header","headerList");
    header.innerText = data.name;  
    let img = document.createElement("img")
    img.classList.add("image","mt-3", "mb-3");
    img.classList.add("card-img-top")
    let body = document.createElement("div");
    body.classList.add("card-body","bodyList");
    img.setAttribute("src", data.flag);
    let capital = document.createElement("p");
    capital.innerText = "Capital : " + data.capital;
    let code = document.createElement("p");
    code.innerText = "Coutry Code : "+data.cioc;
    let region = document.createElement("p");
    region.innerText = "Region : "+data.region;
    let timezone = document.createElement("p");
    timezone.innerText = "TimeZone : "+data.timezones[0];
    let lat = document.createElement("p");
    lat.innerText = "Latitude : "+ data.latlng[0];
    let lan = document.createElement("p");
    lan.innerText = "Langitude : "+ data.latlng[1];
    let button = document.createElement("button");
    button.classList.add("btn-info","mt-3","mb-1")
    button.innerText = "Click for Weather"

    button.addEventListener("click",  function()
    {
        getWeather(data,card,header,body,img);
    });

    body.append(capital,code,region,lat,lan,timezone,button)
    card.append(header,img,body)
    col.append(card)

    container.append(col);
}


async function getWeather(countryData,card,header,body,image)
{
    let key = "997134bae6ac1c21293c016f47979c30";
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${countryData.capital}&appid=${key}`;
    console.log(url)
    fetch(url)
    .then((resp) =>{
        return resp.json()
    }).then((data)=>{
            console.log(data)
           showWeather(data,card,header,body,image)
    }).catch((err)=>{
        console.error(err);
    })
}

 async function showWeather(data,card,header,body,image)
{


    card.removeChild(body);
    card.removeChild(header);
    card.removeChild(image);
    let newHeader = document.createElement("div");
    newHeader.classList.add("card-header","headerList");
    newHeader.innerText = "Weather Details"
    let newBody = document.createElement("div");
    newBody.classList.add("card-body","bodyList");
    let img = document.createElement("img");
    let url = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    img.setAttribute("src",url)
    let status = document.createElement("p");
    status.innerText = `Status : ${data.weather[0].main}(${data.weather[0].description})`;
    let temp = document.createElement("p");
    temp.innerText = `Temperature : ${(data.main.temp  - 273.15).toFixed(2)}\xB0c`;
    let humidity = document.createElement("p");
    humidity.innerText = `Humidity : ${data.main.humidity}%`;
    let pressure = document.createElement("p");
    pressure.innerText = `Pressure : ${data.main.pressure} mBar`;
    let button = document.createElement("button");
    button.classList.add("btn-primary","mt-2");
    button.innerText ="Go Back";
    button.addEventListener("click",function(){
        card.removeChild(newBody),
        card.removeChild(newHeader);
        card.append(header,image,body);
    })
    newBody.append(img,status,temp,humidity,pressure,button);
    card.append(newHeader,image,newBody);

}