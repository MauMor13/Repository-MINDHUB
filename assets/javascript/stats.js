const eventosEstaticos=document.getElementById("eventosEstaticos");
const eventosPorVenir=document.getElementById("eventosPorVenir");
const eventosPasados=document.getElementById("eventosPasados");

let dataDeCars;

fetch("https://mindhub-xj03.onrender.com/api/amazing")//recuperar data por fetch
.then(data=>data.json())
.then(datos=>{
    dataDeCars=datos;
    // dataDeCars.events.push({
    //     assistance: 42756,
    //     capacity: 45000,
    //     category: "Food Fair",
    //     date: "2021-12-12",
    //     description: "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
    //     image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
    //     name: "Collectivities Party",
    //     place: "Room A",
    //     price: 5,
    //     __v: 0,
    //     _id: "5639c723b992482e5f2834be9",
    // });
    let todasLasEstadisticas=[];//nuevo array con datos necesarios ya calculados
    for (const card of dataDeCars.events) {
        todasLasEstadisticas.push(
            {
                aux_incremento:1,
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
    let cardsPasadas=todasLasEstadisticas.filter(card=>card.fecha=='past').sort();//filtrar pasadas
    let cardsPorVenir=todasLasEstadisticas.filter(card=>card.fecha=='upcoming').sort();//filtrar futuras
    imprimirSeccionUno(cardsPasadas,eventosEstaticos);//llamado de imprecion staticas
    imprimirSeccionesDosTres(reductora(cardsPasadas),eventosPasados);//llamado de impresion pasadas
    imprimirSeccionesDosTres(reductora(cardsPorVenir),eventosPorVenir);//llamado de impresion futuras
})
.catch(err=>console.log(err));
function imprimirSeccionUno(estadisticas,lugarEnTabla){
    estadisticas.sort((mayor,menor)=>mayor.porcentaje-menor.porcentaje);
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
function reductora(reducirCards){
    let reducidas={};
    for(let card of reducirCards) {
        if (!Object.hasOwn(reducidas,card.categoria))
        {
        reducidas[card.categoria]={...card};}
        else
        {
        reducidas[card.categoria].porcentaje+=card.porcentaje;
        reducidas[card.categoria].ganancias+=card.ganancias;
        reducidas[card.categoria].aux_incremento++;
        }
    };
    reducidas=Object.values(reducidas);
    reducidas.forEach(card=>{
        card.porcentaje/=card.aux_incremento;
    })
    return reducidas;
}