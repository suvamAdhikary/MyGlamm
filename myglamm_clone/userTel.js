if(localStorage.getItem("flag") === null) {
    localStorage.setItem("flag", JSON.stringify(null));
}
  
  
if(localStorage.getItem("glammUsers") === null) {
    localStorage.setItem("glammUsers", JSON.stringify([]));
}
  


let users = JSON.parse(localStorage.getItem('glammUsers'));


let Flag = JSON.parse(localStorage.getItem('flag'));


function checkExistence(tel) {
    let temp = false;

    let userData = JSON.parse(localStorage.getItem('glammUsers'));

    for(let i = 0; i < userData.length; i++) {
        if(userData[i].mobile == tel) {
            temp = true;
            break;
        }
    }

    return temp;
}

function submitTel(e) {
    e.preventDefault();


    let userPhone = document.getElementById("mobile__no").value;

    if (userPhone.length == 10 && (userPhone[0] == 9 || userPhone[0] == 8 || userPhone[0] == 7 || userPhone[0] == 6)) {

        if(users.length < 1) {
            
            const user_object = {

                countryCode: document.getElementById("country__code").value,
                mobile: document.getElementById("mobile__no").value,
                cart: [],
                wishlist: [],
                address: {
                    name: "",
                    mobile: "",
                    email: "",
                    pincode: "",
                    city: "",
                    state: "",
                    address: "",
                    landmark: "",
                }
            }


            users.push(user_object);
            localStorage.setItem('glammUsers', JSON.stringify(users));

            Flag = userPhone;
            localStorage.setItem('flag', JSON.stringify(Flag));

            window.location.href = "signup.html";
        } else if (checkExistence(userPhone) == false) {

            const user_object = {

                countryCode: document.getElementById("country__code").value,
                mobile: document.getElementById("mobile__no").value,
                cart: [],
                wishlist: [],
                address: {
                    name: "",
                    mobile: "",
                    email: "",
                    pincode: "",
                    city: "",
                    state: "",
                    address: "",
                    landmark: "",
                }
            }


            users.push(user_object);
            localStorage.setItem('glammUsers', JSON.stringify(users));

            Flag = userPhone;
            localStorage.setItem('flag', JSON.stringify(Flag));

            window.location.href = "signup.html";

        } else {

            Flag = userPhone;
            localStorage.setItem('flag', JSON.stringify(Flag));

            window.location.href = "login.html";

        }

    } else {

        let msg = document.getElementById("show__alert")

        msg.innerText = 'Please enter valid mobile number';

    }
}