const contentSelect = document.querySelector(".contentSelect");
const selectFilter = Array.from(document.querySelectorAll("[data-filtro]"));

contentSelect.addEventListener("click", (e)=>{ 
    let indice = selectFilter.indexOf(e.target);
    selectFilter.map(itemFilter => 
    itemFilter.classList.remove("contentSelect__itemSelect--active"));
    selectFilter[indice].classList.add("contentSelect__itemSelect--active");

const products = document.querySelectorAll(".containerProducts__product");
const atributoSelect = selectFilter[indice].getAttribute("data-filtro");

for(let i = 0; i < products.length; i++){
    
    products[i].classList.add("active-effect");

    if(products[i].getAttribute("data-product") == atributoSelect){
        products[i].classList.remove("active-effect");
        // products[i].classList.add("active-effect-show");
    }

    if(atributoSelect == 'todo'){
        products[i].classList.remove("active-effect");
        // products[i].classList.add("active-effect-show");
    }
}


});