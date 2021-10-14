let makeup = document.getElementById('makeup__link');
makeup.href = '../makeup.html'

let hairCare = document.getElementById('hair__care');
hairCare.href = '../hairCare.html';

let skinCare = document.getElementById('skin__care');
skinCare.href = '../skinCare.html';

let sanitizingCare = document.getElementById('sanitizing__care');
sanitizingCare.href = '../sanitizingCare.html';

let collection = document.getElementById('collection');
collection.href = '../termsAndConditions.html';

let rewards = document.getElementById('rewards');
rewards.href = '../referandearn.html';

let aboutNav = document.getElementById('about');
aboutNav.href = '../about.html';

let mainLogo = document.getElementById('main__logo');
mainLogo.href = '../index.html';

// let searchBar = document.getElementById('search__bar');

let refer = document.getElementById('refer__earn');
refer.href = '../referandearn.html';

let bagLink = document.getElementById('bag__link');
bagLink.href = '../cart.html';

let profile = document.getElementById('profile');

    let temp = JSON.parse(localStorage.getItem('flag'));

    if (temp == null) {
        // profile.innerText = 'Signup / Login';
        profile.href = `../user_tel.html`;
    } else {
        // profile.innerText = 'Logout';
        profile.href = `../index.html`;
    }

// if(profile.href == `user_tel.html`) {
//     profile.href = `../user_tel.html`;
// } else if (profile.href == `index.html`) {
//     profile.href = `../index.html`;
// }

let topLeft = document.getElementById('shop__now');
topLeft.href = '../comingsoon.html';

let topRight = document.getElementById('myglamm__store');
topRight.href = '../myglammStoreLocator.html';
