//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function showCart(array) {
    let mostrar = document.getElementById("mostrarInfo");


    let nombre = array.articles[0].name;
    let img = array.articles[0].src;
    let cantidad = array.articles[0].count;
    let costo = array.articles[0].unitCost;
    let moneda = array.articles[0].currency;

    mostrar.innerHTML += `
    <h1>Nombre Prodcuto</h1>
    <div id="nombreProducto"> ` + nombre + `</div>
    <h2>cantidad</h2>
    <div id="cantidad">` + cantidad + `</div>
    <h2>Precio por unidad</h2>
    <div id="precio">` + moneda + `  ` + costo + `</div>
    <img id="imagenProducto" src="` + img + `" alt="">
    `


}


document.addEventListener("DOMContentLoaded", function(e) {

    getJSONData(CART_INFO_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            var info = resultObj.data;
            //showProductsRelated(products);
            showCart(info);

        }
    });

});