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
          <div class="row gy-5">
          <p class="card-text col-3"> ${card.category}</p>
          <p class="card-text col-3">${card.place}</p>
          <p class="card-text col-3">${card.capacity}</p>
          <p class="card-text col-3">${card.asistance}</p>
          </div>
          <p class="card-text"><small class="text-muted">${card.price}</small></p>
        </div>
      </div>
    </div>
  </div>
    `;
    
}
incertarEventos(cardFiltrada,mainCards)
