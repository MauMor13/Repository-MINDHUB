const lugar = document.getElementById("cardsUpcoming");//donde van las cards
const checkBox=document.getElementById("checkBox");//id de contenedor de checkbox´s
const buscarCards=document.getElementById("buscar");//id de contenedor de busqueda
const todasLasCards=data.events;//todas las cardas referenciadas 

//funcion para checkbox dinamico
incertarCheckbox(checkBox,todasLasCards);
function incertarCheckbox(lugarDelDom,todasLasCards){
  let template="";
  let categorias=todasLasCards.map((todasLasCards)=>todasLasCards.category);
  let categoriasFiltradas=categorias.filter((ele,pos)=>categorias.indexOf(ele) == pos);
  console.log(categoriasFiltradas);
  for(let catego of categoriasFiltradas){
  template+=`
  <div class="form-check form-check-inline" >
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="${catego}">
  <label class="form-check-label" for="inlineCheckbox1">${catego}</label>
</div>
  `;
  }
  lugarDelDom.innerHTML=template;
}

//escucha eventos
checkBox.addEventListener('change',filtroCrusados);
buscarCards.addEventListener('input',filtroCrusados);

//funcion para filtrar por categoria-tema
function filtroPorCategoria(cardsFiltradas){
  let checkbox = Array.from(document.querySelectorAll( 'input[type="checkbox"]:checked' ));
  let arrayDeCheck = checkbox.map((check)=>check.value);
  return cardsFiltradas.filter(cards=>arrayDeCheck.includes(cards.category)||arrayDeCheck.length==0);
}
//funcion de filtrado por entrada de busqueda
function filtroPorBuscar(entradaDeBusqueda,todasLasCards){
  return todasLasCards.filter(cards=>cards.name.toLowerCase().includes(entradaDeBusqueda.value.toLowerCase()))
}
//llamado de funcion para iniciar con 14 cards
filtroCrusados();
//funcion de filtrado crusado
function filtroCrusados(){
  let filtroPorBusqueda=filtroPorBuscar(buscarCards,todasLasCards);
  //console.log(filtroPorBusqueda);
  let filtrados=filtroPorCategoria(filtroPorBusqueda);
  //console.log(filtrados)
  incertarEventos((filtrarCardPorFecha(filtrados,data.currentDate)),lugar);
}
//funcion para filtrar por las fechas
function filtrarCardPorFecha(events,dat){
    let template=[];
    for (let comp of events) {
        if (comp.date>dat){
            template=template.concat(comp)
        }
    }
    return template;
}
//funcion para incertar las cards antes filtradas
function incertarEventos(cards,lugarDeCards){
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
  if(template=="")
  template='<h3 class="text-center mt-4">No Matches Found<h3>';

  lugarDeCards.innerHTML=template;
}
