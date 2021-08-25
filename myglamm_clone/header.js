const header = document.querySelector('header');

let addDiv = document.createElement('div');

let middleDiv = document.createElement('div');

let mainNavbar = document.createElement('nav');

// below is the function for the navigation bar

function showNavbar() {

let makeup = document.createElement('a');
makeup.innerText = "MAKEUP";
makeup.href = 'makeup.html';

let hairCare = document.createElement('a');
hairCare.innerText = "HAIR CARE";
hairCare.href = 'hairCare.html';

let skinCare = document.createElement('a');
skinCare.innerText = "SKINCARE";
skinCare.href = 'skinCare.html';

let sanitizingCare = document.createElement('a');
sanitizingCare.innerText = "SANITIZING CARE";
sanitizingCare.href = 'sanitizingCare.html';

let collection = document.createElement('a');
collection.innerText = "COLLECTION";
collection.href = 'collection.html';

let rewards = document.createElement('a');
rewards.innerText = "REWARDS";
rewards.href = 'rewards.html';

let myglammStudio = document.createElement('a');
myglammStudio.innerText = "MYGLAMM STUDIO";
myglammStudio.href = 'myglammStudio.html';


mainNavbar.append(makeup, hairCare, skinCare, sanitizingCare, collection, rewards, myglammStudio);

header.append(mainNavbar);

}

showNavbar()