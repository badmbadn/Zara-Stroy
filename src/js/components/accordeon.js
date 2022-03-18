

const headers = document.querySelectorAll('[data-name="accordeon-title"]');
const accordions = document.querySelectorAll('.accordion');

headers.forEach(function(item){
    item.addEventListener('click',headerClick)
})

function headerClick(){
    this.nextElementSibling.classList.toggle('hidden');
  
}


accordions.forEach(el => {
    el.addEventListener("click", (e) => {
        const self = e.currentTarget;
        const control = self.querySelector('.accordion__control');
        const content = self.querySelector('.accordion__content');

        self.classList.toggle('open');

        if (self.classList.contains('open')) {
            content.style.maxHeight = content.scrollHeight + 'px';

        } else {
            content.style.maxHeight = null;
        }
    });
})