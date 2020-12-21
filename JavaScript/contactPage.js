var mymap = L.map('mapid').setView([40.743430, -73.972652], 13); //Leaflet map
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'jenni12345/ckf0qm9v42aeq1at0o98xxtm1',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiamVubmkxMjM0NSIsImEiOiJja2JuZ2N3N2UwNnc3MnFwbmY5NzRwdWwxIn0.UkX_nmKzMyPubx66rWw1PA'
}).addTo(mymap);
var marker = L.marker([40.743430, -73.972652]).addTo(mymap);

   document.getElementById("nameError").style.display="none";
   document.getElementById("phoneError").style.display="none"; //error messages hidden by default
   document.getElementById("messageError").style.display="none";
   document.getElementById("completed").style.display="none"; //completed message hidden by default
   var nameElement=document.getElementById("name");
   var phoneElement=document.getElementById("phonenumber");
   var messageElement=document.getElementById("message");

$(function(){
  $('a').each(function() {
    if ($(this).prop('href') == window.location.href) { //shows current page on the navigation bar
      $(this).addClass('current');
    }
  });
});

  function checkInput(name, phonenumber, message){
    this.name = name;
    this.phonenumber = phonenumber;
    this.message = message;
    
    if(name==""){
      let name = document.getElementById("name");
      name.classList.add("inputInvalid");
      document.getElementById("nameError").style.display="inline-block";
    } if (name!=""){
      nameElement.classList.remove("inputInvalid");
      document.getElementById("nameError").style.display="none";
      document.getElementById("completed").style.display="none";
    } if (phonenumber==""){
      phoneElement.classList.add("inputInvalid");
      document.getElementById("phoneError").style.display="block";
    } if (phonenumber!=""){
      phoneElement.classList.remove("inputInvalid");
      document.getElementById("phoneError").style.display="none";
      document.getElementById("completed").style.display="none";
    } if (phonenumber.length < 4){
      phoneElement.classList.add("inputInvalid");
      document.getElementById("phoneError").style.display="block";
    } if (message==""){
      messageElement.classList.add("inputInvalid");
      document.getElementById("messageError").style.display="block";
    } if (message!=""){
      messageElement.classList.remove("inputInvalid");
      document.getElementById("messageError").style.display="none";
      document.getElementById("completed").style.display="none";
    } if(name != "" && phonenumber != "" & message != "" && phonenumber.length >= 4) { //if everything is okay show "completed" div
      document.getElementById("completed").style.display="block";
    }
  }