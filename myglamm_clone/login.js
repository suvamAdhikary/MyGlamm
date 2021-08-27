let user = localStorage.getItem("glammUsers");
user = JSON.parse(user);

let Flag = JSON.parse(localStorage.getItem('flag'))


        var otp = Math.floor(Math.random()*(10000 - 1001) + 1001);

        setTimeout(function otpGen() {
            alert("your four digit OTP is = "+otp);
        }, 2000);
        
        

        function displayUserTel() {
            
            let displayBox = document.getElementById("login__display--phone");
            
            user.forEach(function(ele) {

                if(ele.mobile == Flag) {
                    displayBox.innerHTML = `ENTER OTP SENT ON <span><u>+${ele.countryCode} ${ele.mobile}</u></span>`;
                }
            })
        }
        displayUserTel();


        let verifyBtn = document.getElementById("login__verify");


        verifyBtn.addEventListener("click", function() {

            let otpGet = document.getElementById("login__otp").value;

            if(otpGet == otp){

                user.forEach(function(ele, n) {

                    if(ele.mobile == Flag) {

                        window.location.assign("index.html");

                    }
                })

            } else {

                alert("OTP is not corret");

            }

        });