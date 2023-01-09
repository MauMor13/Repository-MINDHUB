const eventosEstaticos=document.getElementById("eventosEstaticos");
const eventosPorVenir=document.getElementById("eventosPorVenir");
const eventosPasados=document.getElementById("eventosPasados");

let dataDeCars;

fetch("https://mindhub-xj03.onrender.com/api/amazing")//recuperar data por fetch
.then(data=>data.json())
.then(datos=>{
    dataDeCars=datos;
    let todasLasEstadisticas=[];
    for (const card of dataDeCars.events) {
        todasLasEstadisticas.push(
            {
                esti_asis : card.date < dataDeCars.currentDate ? 'assistance':'estimate',
                nombreEvento : card.name,
                categoria : card.category,
                capasidad : card.capacity,
                fecha : card.date <dataDeCars.currentDate ? 'past':'upcoming',
                porcentaje : Math.round(Number( card[card.date < dataDeCars.currentDate ? 'assistance':'estimate'] / (card.capacity / 100))),
                ganancias : Number(card.price * card[card.date < dataDeCars.currentDate ? 'assistance':'estimate']),
            }
        );
    }
    let cardsPasadas=todasLasEstadisticas.filter(card=>card.fecha=='past').sort();
    let cardsPorVenir=todasLasEstadisticas.filter(card=>card.fecha=='upcoming').sort();
    
    console.log(cardsPasadas);
    console.log(todasLasEstadisticas);
    imprimirSeccionUno(menor_mayorAsistencia(todasLasEstadisticas),eventosEstaticos);
    imprimirSeccionesDosTres(cardsPasadas,eventosPasados);
    imprimirSeccionesDosTres(cardsPorVenir,eventosPorVenir);
})
.catch(err=>console.log(err));
function menor_mayorAsistencia(todasLasEstadisticas){
    todasLasEstadisticas.sort((mayor,menor)=>mayor.porcentaje-menor.porcentaje);
    return todasLasEstadisticas;
}
function imprimirSeccionUno(estadisticas,lugarEnTabla){
    lugarEnTabla.innerHTML+=`<tr class="table-active color_td" >
                            <td>${estadisticas[estadisticas.length-1].nombreEvento}: ${estadisticas[estadisticas.length-1].porcentaje}%</td>
                            <td>${estadisticas[0].nombreEvento}: ${estadisticas[0].porcentaje}%</td>
                            <td>${estadisticas.sort((menor,mayor)=>mayor.capasidad-menor.capasidad)[0].nombreEvento}: ${estadisticas.sort((menor,mayor)=>mayor.capasidad-menor.capasidad)[0].capasidad} people</td>
                            </tr>`;
}
function imprimirSeccionesDosTres(cards,lugarEnTabla){
    let template='';
    for (const card of cards) {
        template+= `<tr class="table-active color_td">
                    <td>${card.categoria}</td>
                    <td>$ ${card.ganancias}</td>
                    <td>${card.porcentaje}%</td>
                    </tr>`
    }
    lugarEnTabla.innerHTML+=template;
}