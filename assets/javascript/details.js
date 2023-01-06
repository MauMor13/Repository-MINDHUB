let cadenaUrl = location.search;

let parametro = new URLSearchParams(cadenaUrl); 

let id = parametro.get("id");

let mainCards= document.getElementById("detalleCards")

let todasLasCards=data.events;

let cardFiltrada= todasLasCards.find(todasLasCards=>todasLasCards._id==id);

function incertarEventos(card,space){
    space.innerHTML=`
    <div class="card m-4 bg-dark text-light" >
    <div class="row">
        <div class="col-md-4 d-flex justify-content-center">
            <img src="${card.image}" class="img-fluid rounded-start imagenCards" alt="${card.name}">
        </div>
      <div class="col-md-8">
        <div class="card-body text-center">
          <h3 class="card-title">${card.name}</h3>
          <p class="card-text">${card.description}</p>
          <div class="row gy-5">
          <p class="card-text col-3">Category: ${card.category}</p>
          <p class="card-text col-3">Place: ${card.place}</p>
          <p class="card-text col-3">Capacity: ${card.capacity}</p>
          <p class="card-text col-3">Asistance: ${card.asistance}</p>
          </div>
          <p class="card-text text-primary">Price: $ ${card.price}</p>
        </div>
      </div>
    </div>
  </div>
    `;
    
}
incertarEventos(cardFiltrada,mainCards)
/*<div class="card-body">
<h5 class="card-title">Card title</h5>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">An item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>
</ul>*/