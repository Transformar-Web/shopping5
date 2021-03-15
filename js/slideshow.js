

// ----------------------------------------------------------

const images = document.querySelectorAll('.sectionContent__img');
let contador = 2;

function next() {
    images[contador].classList.remove('active-slide');
    if(contador != images.length -1){
        contador++;
    }else{
        contador = 0; 
    }
    setTimeout("next()",10000);
    images[contador].classList.add('active-slide');
}
window.onload = next;

// -------------------------------------------------------------------


// ver products
const showProducts = document.querySelector(".selectModal");
const btnShow = document.querySelector(".sectionContent__btn");
btnShow.addEventListener("click",()=>{
    showProducts.classList.add("selectModal--active");
});

const close = document.querySelector(".containerSelect__imgClose");
close.addEventListener("click", ()=>{
   showProducts.classList.remove("selectModal--active")
});

// ---------------------------------------------------------------

// select products
const allImagesLinks = document.querySelectorAll(".containerSelect__image");
allImagesLinks.forEach((actionImage,index) => {
    let indice = index;
    actionImage.addEventListener("click", ()=>{
        switch(indice){
            case 0 : 
                location.href = "ropa.html";
            break;
            case 1 : 
                location.href = "zapatos.html";
            break;
            case 2 : 
                location.href = "reloj.html";
            break;
            case 3 : 
                location.href = "telefonos.html";
            break;
        }
    })
})