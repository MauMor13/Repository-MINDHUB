
let todasLasCards;
fetch("https://mindhub-xj03.onrender.com/api/amazing")//recuperar data por fetch
.then(data=>data.json())
.then(res=>{
    todasLasCards=res;
    
})