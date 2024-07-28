async function getAPIData(){
  var search = document.getElementById("search")
  if(!search.value)
  var name = "bharat"
  else
      var name = search.value

      search.value = ""
      try{
      let response = await fetch("https://restcountries.com/v3.1/name/"+name)
      let data = await response.json()
          data = data[0]
          document.getElementById("name").innerHTML = data.name.official
          document.getElementById("capital").innerHTML = data.capital[0]
          document.getElementById("flags").src = data.flags.png
          document.getElementById("population").innerHTML = data.population
          document.getElementById("area").innerHTML = data.area
          document.getElementById("region").innerHTML = data.region
          document.getElementById("subregion").innerHTML = data.subregion
          document.getElementById("unMember").innerHTML = data.unMember
          document.getElementById("landloked").innerHTML = data.landlocked
          document.getElementById("timezones").innerHTML = data.timezones
          document.getElementById("independent").innerHTML = data.independent
          document.getElementById("maps").href = data.maps.googleMaps
          document.getElementById("borders").innerHTML = data.borders
          document.getElementById("startOfWeek").innerHTML = data.startOfWeek
        }
        catch(error){
        alert("Invalid country Name")

        }
      }        

getAPIData()



// function getAPIData(){
//   var search = document.getElementById("search")
//   if(!search.value)
//   var name = "bharat"
//   else
//       var name = search.value

//       search.value = ""

//       fetch("https://restcountries.com/v3.1/name/"+name)
//       .then((response) =>{
//         response.json()
//         .then((data) =>{
//           data = data[0]
//           document.getElementById("name").innerHTML = data.name.official
//           document.getElementById("capital").innerHTML = data.capital[0]
//           document.getElementById("flags").src = data.flags.png
//           document.getElementById("population").innerHTML = data.population
//           document.getElementById("area").innerHTML = data.area
//           document.getElementById("region").innerHTML = data.region
//           document.getElementById("subregion").innerHTML = data.subregion
//           document.getElementById("unMember").innerHTML = data.unMember
//           document.getElementById("landloked").innerHTML = data.landlocked
//           document.getElementById("timezones").innerHTML = data.timezones
//           document.getElementById("independent").innerHTML = data.independent
//           document.getElementById("maps").href = data.maps.googleMaps
//           document.getElementById("borders").innerHTML = data.borders
//           document.getElementById("startOfWeek").innerHTML = data.startOfWeek
//         })
//         .catch((error)=>{
//           alert("Invalid country Name")
//         })
//       })
//       .catch((error)=>{
//         alert("Invalid country Name")
//       })
// }
// getAPIData()





// function getAPIData(){
//     var search = document.getElementById("search")
//     if(!search.value)
//     var name = "bharat"
//     else
//         var name = search.value

//         search.value = ""

//     var request = new XMLHttpRequest()
//     request.open('GET',"https://restcountries.com/v3.1/name/"+name)
//     request.send()

//   request.addEventListener("load",()=>{
//     let data = JSON.parse(request.responseText)[0]
//     document.getElementById("name").innerHTML = data.name.official
//     document.getElementById("capital").innerHTML = data.capital[0]
//     document.getElementById("flags").src = data.flags.png
//     document.getElementById("population").innerHTML = data.population
//     document.getElementById("area").innerHTML = data.area
//     document.getElementById("region").innerHTML = data.region
//     document.getElementById("subregion").innerHTML = data.subregion
//     document.getElementById("unMember").innerHTML = data.unMember
//     document.getElementById("landloked").innerHTML = data.landlocked
//     document.getElementById("timezones").innerHTML = data.timezones
//     document.getElementById("independent").innerHTML = data.independent
//     document.getElementById("maps").href = data.maps.googleMaps
//     document.getElementById("borders").innerHTML = data.borders
//     document.getElementById("startOfWeek").innerHTML = data.startOfWeek
//    })
// }
// getAPIData()