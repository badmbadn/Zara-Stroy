 const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
 const tabsItem = document.querySelectorAll('.tabs__item');

 tabsBtn.forEach(function(item) {
    item.addEventListener("click", function(){
       let currentBtn = item;
       let tabId = currentBtn.getAttribute("data-tab");
       let currentTab = document.querySelector(tabId);

            if(! currentBtn.classList.contains('active')) {
                tabsBtn.forEach(function(item){
                item.classList.remove('active');
            });
 
            tabsItem.forEach(function(item){
                 item.classList.remove('active');
            });
 
            currentBtn.classList.add('active');
            currentTab.classList.add('active')
       }
     
    })
 })
 document.querySelector('.tabs__nav-btn:nth-child(1)').click();


 const tabsSliderBtn = document.querySelectorAll('.tabs-slider__nav-btn');
const tabsSliderItem = document.querySelectorAll('.tabs-slider__item');

tabsSliderBtn.forEach(function(item) {
   item.addEventListener("click", function(){
      let currentSliderBtn = item;
      let tabSliderId = currentSliderBtn.getAttribute("data-tab-slider");
      let currentSliderTab = document.querySelector(tabSliderId);

           if(! currentSliderBtn.classList.contains('active')) {
               tabsSliderBtn.forEach(function(item){
               item.classList.remove('active');
           });

           tabsSliderItem.forEach(function(item){
                item.classList.remove('active');
           });

           currentSliderBtn.classList.add('active');
           currentSliderTab.classList.add('active')
      }
    
   })
})
document.querySelector('.tabs-slider__nav-btn:nth-child(2)').click();

