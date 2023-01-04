let cadenaUrl = location.search;

let parametro = new URLSearchParams(cadenaUrl); 

let id = parametro.get("id");

let mainCards= document.getElementById("detalleCards")

let todasLasCards=data.events;

let cardFiltrada= todasLasCards.find(todasLasCards=>todasLasCards._id==id);

function incertarEventos(card,space){
    space.innerHTML=`
    <div class="card m-4" >
    <div class="row">
        <div class="col-md-6">
            <img src="${card.image}" class="img-fluid" alt="${card.name}">
        </div>
      <div class="col-md-6">
        <div class="card-body text-center">
          <h3 class="card-title">${card.name}</h3>
          <p class="card-text">${card.description}</p>
          <p class="card-text">${card.category}</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
    `;
    
}
incertarEventos(cardFiltrada,mainCards)
