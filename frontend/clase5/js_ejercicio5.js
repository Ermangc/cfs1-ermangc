let nombreMedicamento = document.getElementById("nombre");
let bajaStock = document.getElementById("baja_stock");
let altaStock = document.getElementById("alta_stock");
let btnConfirmar = document.getElementById("btn-confirmar");
let divLista = document.getElementById("div_lista");

function onFocus(x) {
  x.style.border = "none";
  x.style.borderTop = "solid #999";
  x.style.outline = "none";
  x.style.textDecoration = "none";
  x.style.color = "inherit";
}

function onClick(){
    let nombre = nombreMedicamento.value;
    let bajaStock = bajaStock.value;
    let altaStock = altaStock.value;
}

btnConfirmar.addEventListener("click", ()=>{
    onClick();
    divLista = document.createElement("ul");
    divLista.appendChild(ul) = document.createElement("li");
    li.innerHTML = `${nombre} + ${bajaStock} + ${altaStock}`;
})
