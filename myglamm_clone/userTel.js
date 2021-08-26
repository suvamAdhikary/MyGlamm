let users;

// localStorage.setItem('glammUsers', JSON.stringify([]));

if(localStorage.getItem('glammUsers' == null)) {
    localStorage.setItem('glammUsers', JSON.stringify([]));
} else {
    users = JSON.parse(localStorage.getItem('glammUsers'));
}
users.push()

// user address prototype

// let address = {
//     name: "",
//     mobile: "",
//     email: "",
//     pincode: "",
//     city: "",
//     state: "",
//     address: "",
//     landmark: "",
// }

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
        
            }
            users.push(user_object);
            localStorage.setItem('glammUsers', JSON.stringify(users));
            window.location.href = "signup.html";
        } else if (checkExistence(userPhone) == false) {

            const user_object = {

                countryCode: document.getElementById("country__code").value,
                mobile: document.getElementById("mobile__no").value,
        
            }
            users.push(user_object);
            localStorage.setItem('glammUsers', JSON.stringify(users));
            window.location.href = "signup.html";

        } else {

            window.location.href = "login.html";

        }

    } else {

        let msg = document.getElementById("show__alert")

        msg.innerText = 'Please enter valid mobile number';

    }
    

    // const user_object = {

    //     countryCode: document.getElementById("country__code").value,
    //     mobile: document.getElementById("mobile__no").value,

    // };
    // console.log(user_object);
    // var movie_json = JSON.stringify(movie_object);
    // localStorage.setItem('myFavMovie', movie_json);
}








// let mobileInfo = document.getElementById("mobile__info");

// localStorage.setItem("myglammUserData", JSON.stringify([]));

// let codeArray = [];
// let telArray = [];

// let flagNow = localStorage.getItem("flag");
// flagNow = JSON.parse(flagNow);

// var userData = localStorage.getItem("myglammUserData");
// userData = JSON.parse(userData);

// userData.forEach(function(ele) {
//     codeArray.push(ele.code);
//     telArray.push(ele.phone);
// })

// function submitTel(e) {
//     e.preventDefault();

//     let countryCode = document.getElementById("country__code").value;
    
//     let userPhone = document.getElementById("mobile__no").value;
      
//     if(userPhone.length == 10 && (userPhone[0] == 9 || userPhone[0] == 8 || userPhone[0] == 7 || userPhone[0] == 6)) {

//         if(check.includes(userPhone) == true) {

//             flagNow = true;
               
//             localStorage.setItem("flag", JSON.stringify(flagNow));
       
//             window.location.href = "login.html";

//         } else {

//             const newUser = {
//                 phone: userPhone,
//                 country_code: countryCode,
//             };

//             userData.push(newUser);
//             // let newUserLocl = JSON.stringify(products);
            
            
//             window.location.href = "signup.html";
//         }

//         // userData.forEach(function(ele) {
        
//         //     if(ele.phone == userPhone) {
               
//         //        flagNow = true;
               
//         //        localStorage.setItem("flag", JSON.stringify(flagNow));
       
//         //         window.location.href = "login.html";
       
//         //     } else {
                
//         //         const newUser = {
//         //             phone: document.getElementById("mobile__no").value,
//         //             country_code: document.getElementById("country__code").value,
//         //         };
//         //         console.log(newUser);
//         //         userData.push(newUser);
//         //         // let newUserLocl = JSON.stringify(products);
//         //         localStorage.setItem('myglammUserData', JSON.stringify(userData));
            
//         //         document.getElementById("user__tel").value = '';
        
//         //         window.location.href = "signup.html";
    
//         //     }
//         // })
                
//       } else {

//             alert("Please enter a valid Phone number");

//       }
// }
// localStorage.setItem('myglammUserData', JSON.stringify(userData));


// // var closeBtn = document.getElementById("cross__button");

// // closeBtn.addEventListener("click", function(){

// //     window.location.href = "index.html";
    
// // })