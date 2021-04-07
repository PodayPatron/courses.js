
const accordionItemHeaders = document.getElementsByClassName('accordion-item-header');
var i;

for (i = 0; i <  accordionItemHeaders.length; i++) {
  accordionItemHeaders[i].addEventListener('click', function() {
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}

var accordionItemHeaders2 = document.querySelectorAll('.accordion-item-header2');
console.log(accordionItemHeaders2);

for(item of accordionItemHeaders2) {
  item.addEventListener('click', function() {

    if(this.classList.contains('active')) {
      this.classList.remove('active');
    } else {
      for (el of accordionItemHeaders2) {
        el.classList.remove('active');
      }
      this.classList.add('active');
    }
  });
}
