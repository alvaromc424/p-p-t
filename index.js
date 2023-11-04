const botones= document.querySelectorAll('button');
const marcador= document.querySelector('#ronda');
const result= document.querySelector('.resultado');

let partidas=0;
function getChoice(){
    const opciones=['tijera','papel','piedra']
    let index= Math.floor(Math.random()*opciones.length)
    return opciones[index];
}
function juego(user,computer){
    if (user==computer){
        return "Empate!"
    }
    if((user=='tijera' && computer=='papel') || (user=='papel' && computer=='piedra')
    || (user=='piedra' && computer=='tijera')){
            return `Tú ganas! tu elección: ${user}, el ordenador: ${computer}`;
}else{
            return `Tú pierdes :(  tu elección: ${user}, el ordenador: ${computer}`;
}
}
botones.forEach( valor=>{
    valor.addEventListener('click',()=>{
        let computer= getChoice();
        let user= valor.getAttribute('name');
        let resultado=juego(user,computer);
        result.textContent=resultado;
        partidas+=1;
        marcador.textContent= "Ronda: "+ partidas;
    })
})