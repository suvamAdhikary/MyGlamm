import {htmlfileAbout} from "./aboutExport.js";


let main = document.getElementById("aboutMain");


main.innerHTML = (htmlfileAbout());


var mainBackground = document.getElementById("mainAboutDiv");
          var firstBtn = document.getElementById("firstButton");
          var secondBtn = document.getElementById("secondButton");
          var thirdBtn = document.getElementById("thirdButton");
          var fourthBtn = document.getElementById("fourthButton");
          var p1 = document.getElementById("paragraph1");
          var p2 = document.getElementById("paragraph2");
          var p3 = document.getElementById("paragraph3");
          var p4 = document.getElementById("paragraph4");
          var l1 = document.getElementById("list1");
          var l2 = document.getElementById("list2");
          var l3 = document.getElementById("list3");
          var l4 = document.getElementById("list4");
  
  
  
          fourthBtn.addEventListener("click", function(){
                      mainBackground.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)),url('https://s3-ap-southeast-1.amazonaws.com/myglamm.com/content/file-1505123624624-blobid1505123691780.jpg')";
                      
                      fourthBtn.style.border = "none";
                      thirdBtn.style.border = "none";
                      secondBtn.style.border = "none";
                      firstBtn.style.border = "none";
                      fourthBtn.style.border = "2.5px solid rgb(255,20,147,0.4)";
                      p1.style.display = "none";
                      p2.style.display = "none";
                      p3.style.display = "none";
                      p4.style.display = "none";
                      p1.style.display = "block";
                      list1.style.color = "rgb(255, 255, 255,0.6)";
  
                      list2.style.color = "rgb(255, 255, 255,0.6)";
                      list3.style.color = "rgb(255, 255, 255,0.6)";
                      list4.style.color =  "rgb(255, 255, 255,0.6)";
                      list4.style.color = "white";
                       
                     
                  })
  
          thirdBtn.addEventListener("click", function(){
                      mainBackground.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)),url('https://s3-ap-southeast-1.amazonaws.com/myglamm.com/content/file-1505123709999-blobid1505123775162.jpg')";
                      fourthBtn.style.border = "none";
                      thirdBtn.style.border = "none";
                      secondBtn.style.border = "none";
                      firstBtn.style.border = "none";
                      thirdBtn.style.border = "2.5px solid rgb(255,20,147,0.4)";
  
                      p1.style.display = "none";
                      p2.style.display = "none";
                      p3.style.display = "none";
                      p4.style.display = "none";
                      p2.style.display = "block";
  
                      list1.style.color = "rgb(255, 255, 255,0.6)";
  
                      list2.style.color = "rgb(255, 255, 255,0.6)";
                      list3.style.color = "rgb(255, 255, 255,0.6)";
                      list4.style.color =  "rgb(255, 255, 255,0.6)";
                      list3.style.color = "white";
  
                  })
  
          secondBtn.addEventListener("click", function(){
                      mainBackground.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)),url('https://s3-ap-southeast-1.amazonaws.com/myglamm.com/content/file-1505124062574-blobid1505124131185.jpg')";
                      fourthBtn.style.border = "none";
                      thirdBtn.style.border = "none";
                      secondBtn.style.border = "none";
                      firstBtn.style.border = "none";
                      secondBtn.style.border = "2.5px solid rgb(255,20,147,0.4)";
  
                      p1.style.display = "none";
                      p2.style.display = "none";
                      p3.style.display = "none";
                      p4.style.display = "none";
                      p3.style.display = "block";
  
                      list1.style.color = "rgb(255, 255, 255,0.6)";
  
                      list2.style.color = "rgb(255, 255, 255,0.6)";
                      list3.style.color = "rgb(255, 255, 255,0.6)";
                      list4.style.color =  "rgb(255, 255, 255,0.6)";
                      list2.style.color = "white";
                  })
  
          firstBtn.addEventListener("click", function(){
                      mainBackground.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)),url('https://s3-ap-southeast-1.amazonaws.com/myglamm.com/content/file-1505124076895-blobid1505124145750.jpg')";
                      fourthBtn.style.border = "none";
                      thirdBtn.style.border = "none";
                      secondBtn.style.border = "none";
                      firstBtn.style.border = "none";
                      firstBtn.style.border = "2.5px solid rgb(255,20,147,0.4)";
  
                      p1.style.display = "none";
                      p2.style.display = "none";
                      p3.style.display = "none";
                      p4.style.display = "none";
                      p4.style.display = "block";
  
                      list1.style.color = "rgb(255, 255, 255,0.6)";
  
                      list2.style.color = "rgb(255, 255, 255,0.6)";
                      list3.style.color = "rgb(255, 255, 255,0.6)";
                      list4.style.color =  "rgb(255, 255, 255,0.6)";
                      list1.style.color = "white";
                      
                  })
    
    

                 