let lugar = document.getElementById("cardsHome");
let checkBox=document.getElementById("checkbox");
let buscarCards=document.getElementById("buscar");

function incertarEventos(cards,space){
  let template="";
  for(let dato of cards){
  template+=`<div class="card col-6 mb-3 p-1" style="width: 12rem;">
                      <img src="${dato.image}" class="card-img-top" alt="${dato.name}">
                      <div class="card-body p-0 text-center d-flex flex-column justify-content-between">
                        <div>
                          <h5 class="card-title m-0 pt-2">${dato.name}</h5>
                          <p class="card-text m-0 pt-2 pb-2">${dato.description}</p>
                        </div>
                        <div class="d-flex justify-content-around align-items-center">
                          <p class="m-0">Price $${dato.price}</p>
                          <a href="./details.html?id=${dato._id}" class="btn btn-primary p-1">See more</a>
                        </div>
                      </div>
                    </div>`;
  }
  space.innerHTML=template;
}
incertarEventos(data.events,lugar);