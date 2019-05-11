var menuActive = '';

const secTion = document.querySelectorAll('.section');
secTion[0].addEventListener('click', ()=>{document.querySelector('.dropdown-content').classList.add('dropdown-hidden')});
secTion[1].addEventListener('click', ()=>{document.querySelector('.dropdown-content').classList.add('dropdown-hidden')});


class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = document.querySelector('.dropdown');
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.dropdown-button');
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = document.querySelector('.dropdown-content');
    
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => {this.toggleContent()})
  }

  toggleContent() {
    
    // Toggle the ".dropdown-hidden" class off and on
   
      // document.querySelector('.dropdown-content').classList.toggle('dropdown-hidden');
      console.log(menuActive);
      if (!menuActive) {
        document.querySelector('.dropdown-content').classList.remove('dropdown-hidden');
        TweenMax.to(".dropdown-content", .2, {top:50,});
        menuActive = true;
      }
      else if (menuActive) {
        TweenMax.to(".dropdown-content", .2, {top:-225,});
        menuActive = false;
        document.querySelector('.dropdown-content').classList.add('dropdown-hidden');
        // setTimeout(()=>{document.querySelector('.dropdown-content').classList.toggle('dropdown-hidden');}, 100)
      }
  }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));