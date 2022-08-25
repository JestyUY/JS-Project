/*var characterInformationFirst = document.querySelector("#user1");
var characterInformationSecond = document.querySelector("#user2");
var characterInformationThird = document.querySelector("#user3");
var characterInformationFourth = document.querySelector("#user4");
var characterInformationFifth = document.querySelector("#user5");
var characterInformationSixth = document.querySelector("#user6");
*/

var mainContainer = document.querySelector("#secondContainer");

var botonsubmit = document.querySelector("#btn-add");
fetch("https://reqres.in/api/users")
 .then(function(info) {return info.json()})
 .then(function (data) {  
for (let i = 0; i < (data.data).length; i++) {
    
    

    mainContainer.innerHTML  +='<div class="user-data">' + "<h3 class= 'user.data'>"+ (data.data)[i].first_name +" " + (data.data)[i].last_name +"</h3>" + "<img src= ' " + (data.data)[i].avatar + " ' />" + '</div>';
}
 //characterInformationFirst.innerHTML = "<h3 class= 'user.data'>"+ (data.data)[0].first_name +" " + (data.data)[0].last_name +"</h3>" ;
//characterInformationFirst.innerHTML += "<img src= ' " + (data.data)[0].avatar + " ' />";


 //characterInformationSecond.innerHTML += "<h3 class= 'user.data'>"+ (data.data)[1].first_name +" " + (data.data)[1].last_name +"</h3>" ;
 //characterInformationSecond.innerHTML += "<img src= ' " + (data.data)[1].avatar + " ' />";


 //characterInformationThird.innerHTML += "<h3 class= 'user.data'>"+ (data.data)[2].first_name +" " + (data.data)[2].last_name +"</h3>" ;
 //characterInformationThird.innerHTML += "<img src= ' " + (data.data)[2].avatar + " ' />";


 //characterInformationFourth.innerHTML += "<h3 class= 'user.data'>"+ (data.data)[3].first_name +" " + (data.data)[3].last_name +"</h3>" ;
 //characterInformationFourth.innerHTML += "<img src= ' " + (data.data)[3].avatar + " ' />";


// characterInformationFifth.innerHTML += "<h3 class= 'user.data'>"+ (data.data)[4].first_name +" " + (data.data)[4].last_name +"</h3>" ;
 //characterInformationFifth.innerHTML += "<img src= ' " + (data.data)[4].avatar + " ' />";

 
 //characterInformationSixth.innerHTML += "<h3 class= 'user.data'>"+ (data.data)[5].first_name +" " + (data.data)[5].last_name +"</h3>" ;
// characterInformationSixth.innerHTML += "<img src= ' " + (data.data)[5].avatar + " ' />";
 


   


})
   


 
  
    
   
   
    
 
 


 
.catch(function (error) { alert(error) })

//fetch("https://reqres.in/api/2")
//.then(function(info) {return info.json()})
//.then(function (information) {

//botonsubmit.addEventListener("click",function(information) {
//    characterInformationSeventh.innerHTML  ='<div>' + "<h3 class= 'user.data'>"+ (information.data)[0].first_name +" " + (information.data)[5].last_name +"</h3>" + "<img src= ' " + (information.data)[0].avatar + " ' />" + '</div>';


//})
//.catch(function (error) { alert(error) })
 



 