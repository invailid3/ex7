// function calculate (){
//   let quantityEl = document.getElementById("calc-quantity");
//   let quantity = parseInt(quantityEl.value);
//   let resultEl = document.getElementById("calc-out");
//   let idEl =  document.getElementById("calc-opt");
//   let selectEl = idEl[0];
//   let select = parseInt(selectEl.value)-1;
//   let prices = getPrices();
//   let prise = 0;
//   if(select>=0){
//     prise = prices.prodTypes[select];
//   }


//   let result = quantity * price;

//   if(isNaN(result) || result < 0){
//       resultEl.innerHTML = "PLEASE SELECT";
//   }
//   else{
//       resultEl.innerHTML = "Result: " +  result;    
//   }

//   let radioDiv = document.getElementById("radios");
//   radioDiv.style.display = (select.value == "3" ? "block" : "none");

//   let radios = document.getElementsByName("prodOptions");
//   radios.forEach(function(radio) {
//     if (radio.checked) {
//       let optionPrice = prices.prodOptions[radio.value];
//       if (optionPrice !== undefined) {
//         result += optionPrice;
//       }
//     }
//   });
// }

const product = {
  "type1": {
    "subproduct": true,
    "checkbox": false
  },
  "type2":{
    "subproduct": true,
    "checkbox": false
  },
  "type3":{
    "subproduct": false,
    "checkbox": true
  }
} 

function calculate(){

}

function changeType(){
  console.log("change type");
  let productTypeEls = document.getElementsByName("prodType");
  let productType;
  productTypeEls.forEach(child => {
    if(child.checked){
      productType = child.value;
    }
  });
  console.log(productType);

  if(product[productType]["subproduct"]) {
    let selectEl = document.getElementById("calc-subproduct-select-outter");
    selectEl.removeAttribute("disabled");
    selectEl.style = "opacity: 1";
  }
  else {
    let selectEl = document.getElementById("calc-subproduct-select-outter");
    selectEl.setAttribute("disabled", "");
    selectEl.style = "opacity: 0";
  }

  if(product[productType]["checkbox"]){
    let checkboxSelect = document.getElementById("checkboxes");
    checkboxSelect.removeAttribute("disabled");
    checkboxSelect.style = "opacity: 1";
  }
  else{
    let checkboxSelect = document.getElementById("checkboxes");
    checkboxSelect.setAttribute("disabled", "");
    checkboxSelect.style = "opacity: 0";
  }
}


document.addEventListener("DOMContentLoaded", () => {
  let buttonEl = document.getElementById("calc-butt");
  buttonEl.addEventListener("click", calculate);

  let productTypeEl = document.getElementById("product-type");
  productTypeEl.addEventListener("change", changeType);

});
