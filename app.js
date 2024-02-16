const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransitions(){
  //Active Class for Button CLick
  for(let i = 0; i < sectBtn.length; i++){
    sectBtn[i].addEventListener('click', function(){
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
      this.className += 'active-btn'
    })
  }
  //Active Class for Section switch
  allSections.addEventListener('click', (e) =>{
    const id = e.target.dataset.id;
    if(id){
      //remove selected from separate buttons
      sectBtns.forEach((btn) =>{
        btn.classList.remove('active');
      })
      e.target.classList.add('active');

      //hide sections during active sections
      sections.forEach((section) =>{
        section.classList.remove('active');
      })
    }
  })
}
PageTransitions();