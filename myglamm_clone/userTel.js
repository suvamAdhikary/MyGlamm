var form = document.getElementById("form");

var userData = [];
var getInfo = localStorage.getItem("userInfo");
getInfo = JSON.parse(getInfo);


console.log(getInfo);
form.addEventListener("submit",function(e){

 e.preventDefault();

 var countryCode = document.getElementById("countryCode").value;
 
 var userPhone = document.getElementById("phoneNo").value;

   var tel = (countryCode+"-"+userPhone);
   
   var flag = 0;
 getInfo.forEach(function(p){
     
     if(p.phone == tel){
         window.location.href = ("http://127.0.0.1:5500/projectMyGlamm_clone/testing_stage/popup3.html");
         flag = 1;
     }

 })
   
   if(userPhone.length == 10 && flag ==0){
   localStorage.setItem("userPhone",JSON.stringify(tel));
   window.location.href = ("http://127.0.0.1:5500/projectMyGlamm_clone/testing_stage/popup2.html");
   }
   else if(userPhone.length !=10){
       alert("please enter a valid Phone number");
   }
})

var closeBtn = document.getElementById("closeBtn");
console.log(closeBtn);

closeBtn.addEventListener("click",function(){
 console.log("clicked");
    window.location.href = "";
})