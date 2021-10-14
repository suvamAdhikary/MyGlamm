import {htmlfileAbout} from "./aboutExport.js";


let main = document.getElementById("aboutMain");


main.innerHTML = (htmlfileAbout());


let mainBackground = document.getElementById("mainAboutDiv");
          let firstBtn = document.getElementById("firstButton");
            
          let secondBtn = document.getElementById("secondButton");
         

          let thirdBtn = document.getElementById("thirdButton");
      

          let fourthBtn = document.getElementById("fourthButton");
         

          let p1 = document.getElementById("paragraph1");
          p1.setAttribute("id","p1");

          let p2 = document.getElementById("paragraph2");
          p2.setAttribute("id","p2");

          let p3 = document.getElementById("paragraph3");
          p3.setAttribute("id","p3");

          let p4 = document.getElementById("paragraph4");
          p4.setAttribute("id","p4");

          let l1 = document.getElementById("list1");
          let l2 = document.getElementById("list2");
          let l3 = document.getElementById("list3");
          let l4 = document.getElementById("list4");
  
         
          firstBtn.classList.add("inactiveEventBtn");
          secondBtn.classList.add("inactiveEventBtn");
          thirdBtn.classList.add("inactiveEventBtn");
          fourthBtn.classList.add("inactiveEventBtn");
          p1.classList.add("inactiveP");
          p2.classList.add("inactiveP");
          p3.classList.add("inactiveP");
          p4.classList.add("inactiveP");
          list1.classList.add("inactiveList");
          list2.classList.add("inactiveList");
          list3.classList.add("inactiveList");
          list4.classList.add("inactiveList");


          firstBtn.classList.remove("activeEventBtn");
          secondBtn.classList.remove("activeEventBtn");
          thirdBtn.classList.remove("activeEventBtn");
          fourthBtn.classList.remove("activeEventBtn");
          p1.classList.remove("activeP");
          p2.classList.remove("activeP");
          p3.classList.remove("activeP");
          p4.classList.remove("activeP");
          list1.classList.remove("activeList");
          list2.classList.remove("activeList");
          list3.classList.remove("activeList");
          list4.classList.remove("activeList");
          


          



       
        mainBackground.classList.add("activeMainBackground1");
        fourthBtn.classList.add("activeEventBtn");
        list4.classList.add("activeList");
        p1.classList.add("activeP");

  
          fourthBtn.addEventListener("click", function(){

            mainBackground.classList.remove("activeMainBackground1");
            mainBackground.classList.remove("activeMainBackground2");
            mainBackground.classList.remove("activeMainBackground3");
            mainBackground.classList.remove("activeMainBackground4");



                    
                    firstBtn.classList.add("inactiveEventBtn");
                       secondBtn.classList.add("inactiveEventBtn");
                       thirdBtn.classList.add("inactiveEventBtn");
                       fourthBtn.classList.add("inactiveEventBtn");
                       p1.classList.add("inactiveP");
                       p2.classList.add("inactiveP");
                       p3.classList.add("inactiveP");
                       p4.classList.add("inactiveP");
                       list1.classList.add("inactiveList");
                       list2.classList.add("inactiveList");
                       list3.classList.add("inactiveList");
                       list4.classList.add("inactiveList");


                       firstBtn.classList.remove("activeEventBtn");
                       secondBtn.classList.remove("activeEventBtn");
                       thirdBtn.classList.remove("activeEventBtn");
                       fourthBtn.classList.remove("activeEventBtn");
                       p1.classList.remove("activeP");
                       p2.classList.remove("activeP");
                       p3.classList.remove("activeP");
                       p4.classList.remove("activeP");
                       list1.classList.remove("activeList");
                       list2.classList.remove("activeList");
                       list3.classList.remove("activeList");
                       list4.classList.remove("activeList");
                       


                       



                    
                     mainBackground.classList.add("activeMainBackground4");
                     fourthBtn.classList.add("activeEventBtn");
                     list4.classList.add("activeList");
                     p1.classList.add("activeP");

                  })
  
                thirdBtn.addEventListener("click", function(){
                   
                    mainBackground.classList.remove("activeMainBackground1");
                    mainBackground.classList.remove("activeMainBackground2");
                    mainBackground.classList.remove("activeMainBackground3");
                    mainBackground.classList.remove("activeMainBackground4");
                    firstBtn.classList.add("inactiveEventBtn");
                    secondBtn.classList.add("inactiveEventBtn");
                    thirdBtn.classList.add("inactiveEventBtn");
                    fourthBtn.classList.add("inactiveEventBtn");
                    p1.classList.add("inactiveP");
                    p2.classList.add("inactiveP");
                    p3.classList.add("inactiveP");
                    p4.classList.add("inactiveP");
                    list1.classList.add("inactiveList");
                    list2.classList.add("inactiveList");
                    list3.classList.add("inactiveList");
                    list4.classList.add("inactiveList");

                    firstBtn.classList.remove("activeEventBtn");
                    secondBtn.classList.remove("activeEventBtn");
                    thirdBtn.classList.remove("activeEventBtn");
                    fourthBtn.classList.remove("activeEventBtn");
                    p1.classList.remove("activeP");
                    p2.classList.remove("activeP");
                    p3.classList.remove("activeP");
                    p4.classList.remove("activeP");
                    list1.classList.remove("activeList");
                    list2.classList.remove("activeList");
                    list3.classList.remove("activeList");
                    list4.classList.remove("activeList");
                    


                    
                    
                     mainBackground.classList.add("activeMainBackground3");
                     thirdBtn.classList.add("activeEventBtn");
                     list3.classList.add("activeList");
                     p2.classList.add("activeP");

                  })
  
          secondBtn.addEventListener("click", function(){
            mainBackground.classList.remove("activeMainBackground1");
            mainBackground.classList.remove("activeMainBackground2");
            mainBackground.classList.remove("activeMainBackground3");
            mainBackground.classList.remove("activeMainBackground4");
                    
                    firstBtn.classList.add("inactiveEventBtn");
                    secondBtn.classList.add("inactiveEventBtn");
                    thirdBtn.classList.add("inactiveEventBtn");
                    fourthBtn.classList.add("inactiveEventBtn");
                    p1.classList.add("inactiveP");
                    p2.classList.add("inactiveP");
                    p3.classList.add("inactiveP");
                    p4.classList.add("inactiveP");
                    list1.classList.add("inactiveList");
                    list2.classList.add("inactiveList");
                    list3.classList.add("inactiveList");
                    list4.classList.add("inactiveList");

                    firstBtn.classList.remove("activeEventBtn");
                       secondBtn.classList.remove("activeEventBtn");
                       thirdBtn.classList.remove("activeEventBtn");
                       fourthBtn.classList.remove("activeEventBtn");
                       p1.classList.remove("activeP");
                       p2.classList.remove("activeP");
                       p3.classList.remove("activeP");
                       p4.classList.remove("activeP");
                       list1.classList.remove("activeList");
                       list2.classList.remove("activeList");
                       list3.classList.remove("activeList");
                       list4.classList.remove("activeList");
                       


                 
                 
                  mainBackground.classList.add("activeMainBackground2");
                  secondBtn.classList.add("activeEventBtn");
                  list2.classList.add("activeList");
                  p3.classList.add("activeP");
                
                })
  
          firstBtn.addEventListener("click", function(){
            mainBackground.classList.remove("activeMainBackground1");
            mainBackground.classList.remove("activeMainBackground2");
            mainBackground.classList.remove("activeMainBackground3");
            mainBackground.classList.remove("activeMainBackground4");
                    
                    firstBtn.classList.add("inactiveEventBtn");
                       secondBtn.classList.add("inactiveEventBtn");
                       thirdBtn.classList.add("inactiveEventBtn");
                       fourthBtn.classList.add("inactiveEventBtn");
                       p1.classList.add("inactiveP");
                       p2.classList.add("inactiveP");
                       p3.classList.add("inactiveP");
                       p4.classList.add("inactiveP");
                       list1.classList.add("inactiveList");
                       list2.classList.add("inactiveList");
                       list3.classList.add("inactiveList");
                       list4.classList.add("inactiveList");
                       
                       firstBtn.classList.remove("activeEventBtn");
                       secondBtn.classList.remove("activeEventBtn");
                       thirdBtn.classList.remove("activeEventBtn");
                       fourthBtn.classList.remove("activeEventBtn");
                       p1.classList.remove("activeP");
                       p2.classList.remove("activeP");
                       p3.classList.remove("activeP");
                       p4.classList.remove("activeP");
                       list1.classList.remove("activeList");
                       list2.classList.remove("activeList");
                       list3.classList.remove("activeList");
                       list4.classList.remove("activeList");
                       

                    
                    
                     mainBackground.classList.add("activeMainBackground1");
                     firstBtn.classList.add("activeEventBtn");
                     list1.classList.add("activeList");
                     p4.classList.add("activeP");
                      
                  })
    
    

                 