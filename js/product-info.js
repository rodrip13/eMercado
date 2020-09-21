//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var prod_relacionados = {};


function showImagesGallery(array) {
    let htmlContentToAppend = "";
    htmlContentToAppend += `
                <div id="carouselExampleControls" class="carousel slide shadow-lg p-3 mb-5 bg-white rounded" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img class="d-block w-100" src="` + array[0] + `" alt="First slide">
            </div>
            <div class="carousel-item">
            <img class="d-block w-100" src="` + array[1] + `" alt="Second slide">
            </div>
            <div class="carousel-item">
            <img class="d-block w-100" src="` + array[2] + `" alt="Third slide">
            </div>
            <div class="carousel-item">
            <img class="d-block w-100" src="` + array[3] + `" alt="Third slide">
            </div>
            <div class="carousel-item">
            <img class="d-block w-100" src="` + array[4] + `" alt="Third slide">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        </div>
        `
    document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
}

function showInfoProducto(array) {
    let product = array;
    let title = document.getElementById("name-prod");
    let category = document.getElementById("category");
    let description = document.getElementById("description");
    let soldcount = document.getElementById("sold-count");

    title.innerHTML = `
                        <div class="row justify-content-between align-items-center">
                            <div class="col-8">
                                <p class="font-weight-light text-muted">` + product.category + `</p>
                                <h1>` + product.name + `</h1>
                            </div>
                            <div class="col-4">
                                <div class="h1 shadow p-3 mb-5 bg-white rounded">
                                    <div class="">` + product.currency + ` ` + product.cost + `</div>
                                </div>
                            </div>
                        </div>              
                    `;

    description.innerHTML = product.description;
    soldcount.innerHTML = product.soldCount + ` vendidos`;

    prod_relacionados = product.relatedProducts;
    return prod_relacionados;

}

function showProductsRelated(array) {
    let relatedProd = document.getElementById("img-related");
    let products = array;

    let htmlContentToAppend = "";
    for (let i = 0; i < prod_relacionados.length; i++) {
        let id = prod_relacionados[i];
        htmlContentToAppend += `
            <div class="col-md-3 col-sm-6 mb-4">
                <a href="#" text-decoration-none>
                    <div class="card shadow-lg p-3 mb-5 bg-white rounded">
                        <img src=` + products[id].imgSrc + ` class="card-img-top" alt=` + products[id].name + `>
                        <div class="card-body">
                            <h5 class="card-title text-black-50">` + products[id].currency + ` - ` + products[id].cost + `</h5>
                            <p class="card-text text-dark">` + products[id].name + `</p>
                        </div>
                    </div>
                </a>
            </div>

            `
        relatedProd.innerHTML = htmlContentToAppend;

    }
}

function showComments(array) {
    //Muestra el promedio de comentario y estrelllas
    let commentario = document.getElementById("commentsUser");
    let comentariosUsuarios = "";


    for (let i = 0; i < array.length; i++) {
        let comment = array[i];
        var estrella = `<span class="fas fa-star checked"></span>`;
        var Noestrella = `<span class="fas fa-star"></span>`


        comentariosUsuarios += `
        <div class="row justify-content-between align-items-center">
            <div class="col-9">
                <p class="text-monospace">` + comment.user + `
                    <small class"font-weight-light"> ` + comment.dateTime + `
                    </small></p>          
                <p>` + comment.description + `</p>
            </div>
            <div class="col-3">
            ` + estrella.repeat(comment.score) + Noestrella.repeat(5 - comment.score) + `
            </div>
        </div>
       <hr>
        `


        commentario.innerHTML = comentariosUsuarios;
        //console.log(document.getElementsByClassName("estrellas"));

    }

};

function estrellita(num) {
    for (let i = 0; i < num; i++) {
        estrellas += `<span class="fas fa-star checked"></span>`
    };
    for (let i = 0; i < num - 5; i++) {
        estrellas += `<span class="fas fa-star"></span>`
    };
}





function commentUser() {
    //Obteniendo los valores del comentario
    let user = localStorage.getItem("Usuario");
    let hora = new Date();
    let mostrarHora = hora.getFullYear() + `-` +
        (hora.getMonth() + 1) + `-` +
        hora.getDate() + `   ` +
        hora.getHours() + `:` +
        hora.getMinutes() + `:` +
        hora.getSeconds();
    let nuevoComentario = document.getElementById('comentario').value;
    // tomar las estrellas elegidas
    let ratingDOM = document.getElementsByName("rating");
    let rating = "";
    for (let i = 0; i < ratingDOM.length; i++) {
        let rate = ratingDOM[i];
        if (rate.checked) {
            rating = rate.value;
        }
    }

    //Mostrar
    let estre = parseInt(rating);
    const comment = {
        "score": estre,
        "description": nuevoComentario,
        "user": user,
        "dateTime": mostrarHora
    };

    localStorage.setItem("comentario", JSON.stringify(comment))


    let commentario = document.getElementById("commentsUser");
    let comentariosUsuarios = "";
    var estrella = `<span class="fas fa-star checked"></span>`;
    var Noestrella = `<span class="fas fa-star"></span>`
    comentariosUsuarios += `
    <div class="row justify-content-between align-items-center">
        <div class="col-9">
            <p class="text-monospace">` + comment.user + `
                <small class"font-weight-light"> ` + comment.dateTime + `
                </small></p>          
            <p>` + comment.description + `</p>
        </div>
        <div class="col-3">
        ` + estrella.repeat(comment.score) + Noestrella.repeat(5 - comment.score) + `
        </div>
    </div>
   <hr>
    `
    commentario.innerHTML += comentariosUsuarios;
    nuevoComentario.textContent = "";
}

function obtenerComentarios() {
    if (localStorage.getItem("comentario")) {
        let comentarios = JSON.parse(localStorage.getItem("comentario"));
    } else {
        console.log("No hay entradas e  localStorage")
    }
}



document.addEventListener("DOMContentLoaded", function(e) {

    getJSONData(PRODUCT_INFO_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            var productInfo = resultObj.data;
            showImagesGallery(productInfo.images);
            showInfoProducto(productInfo);

        }
    });
    getJSONData(PRODUCTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            var products = resultObj.data;
            showProductsRelated(products);

        }
    });
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            var comments = resultObj.data;
            showComments(comments);
            console.log(comments);
        }
    });

    document.getElementById("btnComentar").addEventListener("click", function() {
        commentUser()
    });
});







//Debemos conectar conn la API del product con ID


/* var consultarProducto = function(id) {
    var result = {};
    fetch(`https://japdevdep.github.io/ecommerce-api/product/${id}.json`)
        .then(function(response) {
            response.json()
                .then(function(producto) {
                    console.log(producto);

                    console.log(producto.name);
                    console.log(producto.description);
                    console.log(producto.cost);
                    console.log(producto.category);
                    console.log(producto)
                })
            return response.json();
        })
        .catch(function(error) {
            result.status = 'error';
            result.data = error;
            hideSpinner();
            return result;
        });
}
consultarProducto(5678);
var res = response.json()
console.log(res.images);
 */