
import {sortAZ, 
    sortZA, 
    filterStatus,
    filterGender, 
    filterSpecies,
    filterPesquisar,
    calcular
 }from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

// Mostrar os cards
function showCards(data) {
    document.getElementById('resultado').innerHTML = data.map((item)=>` 
    <div class = "cardes">
          <div class = "image">
             <img id = "imagem-card" src="${item.image}"></img>
              <div class="name">${item.name}</div>
              </div>     
              <ul class="texto-card">
             <li> Status: ${item.status} </li>
              <li> Gênero: ${item.gender} </li>
              <li> Espécie: ${item.species} </li>
             </ul>       
             </div>         
  </div>
     ` )
     .join("")
}
showCards(data.results);

// Comando para ordenar (A-Z / Z-A)
document.getElementById("btn-AZ").addEventListener("click",printCharacterAZ);
document.getElementById("btn-ZA").addEventListener("click",printCharacterZA);

function printCharacterAZ(){
    return showCards(sortAZ(data.results));
}
function printCharacterZA(){
    return showCards(sortZA(data.results));
}

const filtroPesquisar = document.getElementById('pesquisar');
const filtroEspecie = document.getElementById("especie");
const filtroGenero = document.getElementById("genero");
const filtroStatus = document.getElementById("status");
const porcentagem = document.getElementById("filtroPorcentagem");
const subir = document.querySelector('.subir-pagina')

// BUSCAR POR NOME
function buscarPorNome(event){
    const buscar = filterPesquisar(data.results, event.target.value)
    return showCards(buscar);
}
filtroPesquisar.addEventListener("keyup", buscarPorNome);

// BOTÃO VOLTAR AO TOPO
function subirPagina(){
    window.scroll({top:0, behavior:'smooth'})
}
window.onscroll = () =>{
    scroll()
}
subir.addEventListener('click',subirPagina)

// ESPÉCIE
function mostrarEspecies(e){
    const resultadoEspecie = filterSpecies(data.results, e.target.value);
    const porcentagemEspecie = 
    ` ${calcular(data.results.length, resultadoEspecie.length)}% dos personagens!`;
    mostrarPorcentagem(porcentagemEspecie)
    return showCards(resultadoEspecie);
}
filtroEspecie.addEventListener("change", mostrarEspecies)

// GÊNERO
function mostrarGenero(e){
    const resultadoGenero = filterGender(data.results, e.target.value);
    const porcentagemGenero = 
    `${calcular(data.results.length, resultadoGenero.length)}% dos personagens!`;
    mostrarPorcentagem(porcentagemGenero)
    return showCards(resultadoGenero);
}
filtroGenero.addEventListener("change",mostrarGenero)

// STATUS
function mostrarStatus(e){
    const resultadoStatus = filterStatus(data.results, e.target.value);
    const porcentagemStatus = 
    ` ${calcular(data.results.length, resultadoStatus.length)}% dos personagens!`;
    mostrarPorcentagem(porcentagemStatus)
    return showCards(resultadoStatus);
}
 filtroStatus.addEventListener("change", mostrarStatus)  
 
 // ESTATÍSTICAS
 function mostrarPorcentagem(data){
     porcentagem.innerHTML = ` ${data}`
     porcentagem.style.display ="flex";
 }
