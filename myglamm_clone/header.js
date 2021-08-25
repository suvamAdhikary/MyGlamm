const header = document.querySelector('header');

let addDiv = document.createElement('div');
addDiv.setAttribute('id', 'add__div');

let middleDiv = document.createElement('div');
middleDiv.setAttribute('id', 'middle__div');

let mainNavbar = document.createElement('nav');

// below is the function for the navigation bar

function showNavbar() {

let makeup = document.createElement('a');
makeup.setAttribute('id', 'makeup__link')
makeup.innerText = "MAKEUP";
makeup.href = 'makeup.html';

let hairCare = document.createElement('a');
hairCare.setAttribute('id', 'hair__care');
hairCare.innerText = "HAIR CARE";
hairCare.href = 'hairCare.html';

let skinCare = document.createElement('a');
skinCare.setAttribute('id', 'skin__care');
skinCare.innerText = "SKINCARE";
skinCare.href = 'skinCare.html';

let sanitizingCare = document.createElement('a');
sanitizingCare.setAttribute('id', 'sanitizing__care');
sanitizingCare.innerText = "SANITIZING CARE";
sanitizingCare.href = 'sanitizingCare.html';

let collection = document.createElement('a');
collection.setAttribute('id', 'collection');
collection.innerText = "COLLECTION";
collection.href = 'collection.html';

let rewards = document.createElement('a');
rewards.setAttribute('id', 'rewards');
rewards.innerText = "REWARDS";
rewards.href = 'rewards.html';

let myglammStudio = document.createElement('a');
myglammStudio.setAttribute('id', 'myglamm__studio');
myglammStudio.innerText = "MYGLAMM STUDIO";
myglammStudio.href = 'myglammStudio.html';


mainNavbar.append(makeup, hairCare, skinCare, sanitizingCare, collection, rewards, myglammStudio);

header.append(mainNavbar);

}

showNavbar()

// below is the function for middle div of header

function showMiddleDiv() {

    let mainLogo = document.createElement('a');
    mainLogo.setAttribute('id', 'main__logo');
    mainLogo.href = 'index.html';
    mainLogo.innerHTML = `<img src="https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg" alt="myglamm logo">`;

    let searchBar = document.createElement('input');
    searchBar.setAttribute('id', 'search__bar')
    searchBar.type = 'text';
    searchBar.placeholder = 'Find Lipstick, Eyeliner, Makeup Tutorial, etc';
    searchBar.setAttribute('autocomplete', 'on');
    searchBar.oninput = searchFunction;

    let bagLink = document.createElement('a');
    bagLink.setAttribute('id', 'bag__link');
    bagLink.href = 'cart.html';
    bagLink.innerHTML = `My Bag`;

    let profile = document.createElement('a');
    profile.setAttribute('id', 'profile');
    profile.onclick = profileFunction;
    profile.innerHTML = `Profile`;

    middleDiv.append(mainLogo, searchBar, bagLink, profile);
    header.append(middleDiv);
    header.insertBefore(middleDiv, mainNavbar);
}
showMiddleDiv();


// below is the function for search input

function searchFunction() {

}

// below is the function for profile button

function profileFunction() {

}