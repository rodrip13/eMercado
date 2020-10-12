//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

const CART_INFO_URL2 = "https://japdevdep.github.io/ecommerce-api/cart/654.json";


function showCart(array) {
    let mostrar = document.getElementById("mostrarInfo");

    for (let i = 0; i < array.length; i++) {
        const article = array[i];
        var subTotal = article.unitCost * article.count;
        if (article.currency == "UYU") {
            article.currency = "USD";
            article.unitCost /= 40;
        }

        mostrar.innerHTML += `
        <div class="">
        
        <div class="row justify-content-between text-center">
            <div class="col-md-3 align-self-center">
                <img src="` + article.src + `" alt="` + article.name + `" class="img-rounded" width=125>
            </div>
            <div class="col align-self-center">
                <p>` + article.name + `</p>
            </div>
            <div class="col-md-2 align-self-center">
                <p><span class="currency">` + article.currency + `</span> <span id="unitCost_${i}">` + article.unitCost + `</p>
            </div>
            <div class="col-md-1 align-self-center">
                <input type="number" class="form-control cantidad" id="cantidad` + i + `" onchange="showSubtotal(${i})" value="` + article.count + `" min="0">
            </div>
            <div class="col-md-1 align-self-center">
                <p class="subTotal" id="subtotal_` + i + `" change="showSubtotalTotal(${i})">` + article.unitCost * article.count + `</p>
            </div>
        </div>
        <hr>
        </div>
        `;
    }

    /*     let html = document.getElementById("subTotal");
        html.innerHTML = subTotal; */
}

function showSubtotal(i) {
    let cantidad = document.getElementById("cantidad" + i).value;
    let precioUnit = document.getElementById("unitCost_" + i).innerHTML;
    subtotal = cantidad * precioUnit
    let sub = document.getElementById(`subtotal_${i}`);

    sub.innerHTML = subtotal;
    showSubtotalTotal();
}


let Total;


function showSubtotalTotal() {
    let subtotal = document.getElementsByClassName("subTotal");
    let totalSubtotal = 0;
    for (let i = 0; i < subtotal.length; i++) {
        var element = subtotal[i].innerHTML;
        totalSubtotal = totalSubtotal + (+element);
    }
    document.getElementById("subTotal").innerHTML = "USD " + totalSubtotal;
}




document.addEventListener("DOMContentLoaded", function(e) {

    getJSONData(CART_INFO_URL2).then(function(resultObj) {
        if (resultObj.status === "ok") {
            var info = resultObj.data;
            showCart(info.articles);
            showSubtotalTotal();

        }
    });

});