var user = localStorage.getItem("glammUsers");
console.log(user);
         
        var otp = Math.floor(Math.random()*(10000 - 1001) + 1001);

        setTimeout(function otpGen() {
            alert("your four digit OTP is = "+otp);
        }, 2000);
        
        function displayUserTel(){
            var mainDiv = document.getElementById("main");
            var text = document.createElement("h5");
            text.innerText = "ENTER OTP SENT ON "+tel;
            text.style.textAlign = "center";
            mainDiv.append(text,);  
        }
        displayUserTel();

        var userData = [];
        tel = JSON.parse(tel);
        console.log(tel);

        var nameValue = document.getElementById("verify");
        nameValue.addEventListener("click",function(e){

            e.preventDefault();

            var name = document.getElementById("name1").value;
            var email = document.getElementById("email1").value;
            var otpGet = document.getElementById("otp").value;
            if(otpGet == otp){
              if(name.length >= 2 && email.includes("@")&&email.length>5){
            var obj = {};
            obj.name  = name;
            obj.email = email;
            obj.phone = tel;
            
            userData.push(obj);
            console.log(obj);
            localStorage.setItem("userInfo", JSON.stringify(userData));
              }
              else{
                  alert("please enter a valid name and valid email address");
              }}
              else{
                  alert("OTP is not corret");
              }
        });