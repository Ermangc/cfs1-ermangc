let nombreMedicamento = document.getElementById("nombre");
let bajaStock = document.getElementById("baja_stock");
let altaStock = document.getElementById("alta_stock");
let btnConfirmar = document.getElementById("btn-confirmar");
let divLista = document.getElementById("div_lista");
let itemsLista = document.getElementById("items");

function onFocus(x) {
    x.style.border = "none";
    x.style.borderTop = "solid #999";
    x.style.outline = "none";
    x.style.textDecoration = "none";
    x.style.color = "inherit";
}



function onClick(){
    let nombre = nombreMedicamento.value;
    let bajaStocks = bajaStock.value;
    let altaStocks= altaStock.value;
    console.log(`${nombre} dar de baja ${bajaStocks} unidades y de alta ${altaStocks} unidades.`);
}

function copiar(){
    document.getElementById("copiar").innerHTML = "Copiaste la lista"
}

btnConfirmar.addEventListener("click", ()=>{
    onClick();
    var li = document.createElement("li")
    itemsLista.appendChild(li);
    li.textContent = `${nombreMedicamento.value} dar de baja ${bajaStock.value} unidades y de alta ${altaStock.value} unidades.`;
});