document.getElementById("nameError").style.display="none";
   document.getElementById("phoneError").style.display="none"; //error messages hidden by default
   document.getElementById("dateError").style.display="none";
   document.getElementById("completed").style.display="none"; //completed message hidden by default
   var nameElement=document.getElementById("name");
   var phoneElement=document.getElementById("phonenumber");
   var messageElement=document.getElementById("message");
   var dateElement=document.getElementById("date");
$(function(){
  $('a').each(function() {
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('current');
    }
  });
});
  function checkInput(name, phonenumber, date){
    this.name = name;
    this.phonenumber = phonenumber;
    this.date = date;
    if(name ==""){
      nameElement.classList.add("inputInvalid");
      document.getElementById("nameError").style.display="block";
    } if (name !=""){
      nameElement.classList.remove("inputInvalid");
      document.getElementById("nameError").style.display="none";
      document.getElementById("completed").style.display="none";
    } if (phonenumber ==""){
      phoneElement.classList.add("inputInvalid");
      document.getElementById("phoneError").style.display="block";
    } if (phonenumber !=""){
      phoneElement.classList.remove("inputInvalid");
      document.getElementById("phoneError").style.display="none";
      document.getElementById("completed").style.display="none";
    } if (date ==""){
      dateElement.classList.add("inputInvalid");
      document.getElementById("dateError").style.display="block";
    } if (date !=""){
      dateElement.classList.remove("inputInvalid");
      document.getElementById("dateError").style.display="none";
      document.getElementById("completed").style.display="none";
    } if(name != "" && phonenumber != "" && date != "") { //if everything is okay show "completed" div
      document.getElementById("completed").style.display="block";
    }
  }