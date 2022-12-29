let lugar = document.getElementById("cardsPast");

function upcomingEvents1(events,dat){
    let template=[];
    for (let comp of events) {
        if (comp.date<dat){
            template=template.concat(comp)
        }
    }
    return template;
}

function eventosString(card,space){
    let template="";
    for(let dato of card){
    template+=`<div class="card col-6 mb-3 p-1" style="width: 12rem;">
                        <img src="${dato.image}" class="card-img-top" alt="${dato.name}">
                        <div class="card-body p-0 text-center d-flex flex-column justify-content-between">
                          <div>
                            <h5 class="card-title m-0 pt-2">${dato.name}</h5>
                            <p class="card-text m-0 pt-2 pb-2">${dato.description}</p>
                          </div>
                          <div class="d-flex justify-content-around align-items-center">
                            <p class="m-0">Price $${dato.price}</p>
                            <a href="./description.html" class="btn btn-primary p-1">See more</a>
                          </div>
                        </div>
                      </div>`;
    }
    space.innerHTML=template;
  }
//llamada de funciones
let arrEvents=upcomingEvents1(data.events,data.currentDate)
eventosString(arrEvents,lugar);