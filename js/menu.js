// desplegar menu
const iconMenu = document.querySelector('.logoMenu__item');
iconMenu.addEventListener('click',function() {
    const barra = document.querySelector(".containerLinks");
    barra.classList.toggle('desplazamiento');
})

// menu dropdown
const btnDrop = document.querySelector('#btnDrop');
btnDrop.addEventListener('click', function(){
   const dropdown = document.querySelector('.containerLinks__sublist');
   const downUp = document.querySelector('.down');
   dropdown.classList.toggle('sublist-active');
   downUp.classList.toggle('down-active');
});