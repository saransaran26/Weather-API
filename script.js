var res = fetch("https://restcountries.com/v2/all")
res.then((data)=>data.json()).then((data1)=>{
    for(let i=0;i<data1.length;i++){
        var div = document.createElement("div")
        div.innerHTML = `<div class="row row-cols-1 row-cols-md-3">
        <div class="col mb-4">
          <div class="card">
          <h5 class="card-title">${data1[i].name}</h5>
            <img src="${data1[i].flag}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Capital : ${data1[i].capital}</h5>
            <h5 class="card-title">Region : ${data1[i].region}</h5>
            <h5 class="card-title">latitude : ${data1[i].latlng[0]}</h5>
            <h5 class="card-title">longitude : ${data1[i].latlng[1]}</h5>
            <h5 class="card-title">Country Code :  ${data1[i].alpha3Code}</h5>
            <button type="submit" class="btn btn-primary" id="button" onclick="display(${data1[i].latlng[0]},${data1[i].latlng[1]})">
            Check for weather
             </button>
            </div>
          </div>
        </div>`  
        document.body.append(div)
    }
})



async function display(lat,lon){
  var country = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=322073478f103313604f41cc4639f78a`)
  var result = await country.json()
  console.log(result)
  var ans = "pressure : " + " " +result.main.pressure + "\n" + "temperature : " +" "+ result.main.temp +
             "\n" + "latitude : "+" "+result.coord.lat + "\n" + "longitude : "+" "+result.coord.lon +
             "\n" + "humidity : "+" "+result.main.humidity
  alert(ans)
   
}





