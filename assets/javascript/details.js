let mainCards= document.getElementById("detalleCards");
let cadenaUrl = location.search;//lee la url actual
let parametro = new URLSearchParams(cadenaUrl); 
let id = parametro.get("id");
let todasLasCards;
fetch("https://mindhub-xj03.onrender.com/api/amazing")//recuperar data por fetch
.then(data=>data.json())
.then(res=>{
  todasLasCards=res;
  let cardFiltrada= todasLasCards.events.find(card=>card._id==id);
  if(cardFiltrada.assistance!=undefined){
    mainCards.innerHTML=`
    <div class="card m-4 bg-dark text-light" >
    <div class="row">
        <div class="col-md-4 d-flex justify-content-center">
            <img src="${cardFiltrada.image}" class="img-fluid rounded-start imagenCards" alt="${cardFiltrada.name}">
        </div>
      <div class="col-md-8">
        <div class="card-body text-center">
          <h3 class="card-title">${cardFiltrada.name}</h3>
          <p class="card-text">${cardFiltrada.description}</p>
          <div class="row gy-5">
          <p class="card-text col-3">Category: ${cardFiltrada.category}</p>
          <p class="card-text col-3">Place: ${cardFiltrada.place}</p>
          <p class="card-text col-3">Capacity: ${cardFiltrada.capacity}</p>
          <p class="card-text col-3">Asistance: ${cardFiltrada.assistance}</p>
          </div>
          <p class="card-text text-primary">Price: $ ${cardFiltrada.price}</p>
        </div>
      </div>
    </div>
  </div>
    `;}
    else if(cardFiltrada.estimate!=undefined){
      mainCards.innerHTML=`
      <div class="card m-4 bg-dark text-light" >
      <div class="row">
          <div class="col-md-4 d-flex justify-content-center">
              <img src="${cardFiltrada.image}" class="img-fluid rounded-start imagenCards" alt="${cardFiltrada.name}">
          </div>
        <div class="col-md-8">
          <div class="card-body text-center">
            <h3 class="card-title">${cardFiltrada.name}</h3>
            <p class="card-text">${cardFiltrada.description}</p>
            <div class="row gy-5">
            <p class="card-text col-3">Category: ${cardFiltrada.category}</p>
            <p class="card-text col-3">Place: ${cardFiltrada.place}</p>
            <p class="card-text col-3">Capacity: ${cardFiltrada.capacity}</p>
            <p class="card-text col-3">Estimate: ${cardFiltrada.estimate}</p>
            </div>
            <p class="card-text text-primary">Price: $ ${cardFiltrada.price}</p>
          </div>
        </div>
      </div>
    </div>
      `;}
      else{
        mainCards.innerHTML=`
        <div class="card m-4 bg-dark text-light" >
        <div class="row">
            <div class="col-md-4 d-flex justify-content-center">
                <img src="${cardFiltrada.image}" class="img-fluid rounded-start imagenCards" alt="${cardFiltrada.name}">
            </div>
          <div class="col-md-8">
            <div class="card-body text-center">
              <h3 class="card-title">${cardFiltrada.name}</h3>
              <p class="card-text">${cardFiltrada.description}</p>
              <div class="row gy-5">
              <p class="card-text col-4">Category: ${cardFiltrada.category}</p>
              <p class="card-text col-4">Place: ${cardFiltrada.place}</p>
              <p class="card-text col-4">Capacity: ${cardFiltrada.capacity}</p>
              </div>
              <p class="card-text text-primary">Price: $ ${cardFiltrada.price}</p>
            </div>
          </div>
        </div>
      </div>
        `;}

})