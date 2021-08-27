let user = localStorage.getItem("glammUsers");
user = JSON.parse(user);

let Flag = JSON.parse(localStorage.getItem('flag'))


        var otp = Math.floor(Math.random()*(10000 - 1001) + 1001);

        setTimeout(function otpGen() {
            alert("your four digit OTP is = "+otp);
        }, 2000);
        
        
        // displayUserTel.innerHTML = `ENTER OTP SENT ON <span><u>+${user.countryCode} ${user.mobile}</u></span>`;

        function displayUserTel() {
            
            let displayBox = document.getElementById("signup__display--phone");
            
            user.forEach(function(ele) {

                if(ele.mobile == Flag) {
                    displayBox.innerHTML = `ENTER OTP SENT ON <span><u>+${ele.countryCode} ${ele.mobile}</u></span>`;
                }
            })
        }
        displayUserTel();


        let verifyBtn = document.getElementById("signup__verify");


        verifyBtn.addEventListener("click", function(e) {

            e.preventDefault();

            let userName = document.getElementById("signup__name").value;

            let userEmail = document.getElementById("signup__email").value;

            let otpGet = document.getElementById("signup__otp").value;

            if(otpGet == otp){

                if(userName.length >= 2 && userEmail.includes("@") && userEmail.length > 5) {

                    user.forEach(function(ele, n) {

                        if(ele.mobile == Flag) {
                            ele.address.name = userName;
                            ele.address.email = userEmail;
                            ele.address.mobile = Flag;
                        }
                    })

                    localStorage.setItem("glammUsers", JSON.stringify(user));

                    window.location.assign("index.html");

                } else {

                    alert("Please enter a valid name and valid email address");

                }

            } else {

                alert("OTP is not corret");

            }

        });