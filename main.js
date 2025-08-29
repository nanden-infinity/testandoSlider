

const buttonMenu = document.getElementById("menu--btn");

const eventTarget = "click";
buttonMenu.addEventListener(eventTarget, openMenu)

function openMenu(ev) {

  const menuOpen = this.querySelector(".menu");
  
  document.body.classList.toggle("class--menu");
 const ul = document.querySelector("ul").classList.toggle("ativo")

 console.log(ul);
}

 function pegar(href) {
  const dados =  href

  console.log("results", dados);
}

// console.log("ola mundo");

const url = "https://pokeapi.co/api/v2/pokemon?limit=10";

onload = function () {
  pegarApi(url)
};
const container =  document.querySelector(".wrapper")
async function pegarApi(dados) {
  const dadosApi = await (await fetch(dados)).json();
  const {results} = dadosApi
results.map(async({name,url}) => {
  const resultApi = await (await fetch(url)).json()
  const {
    sprites: { front_default:images },
  } = resultApi;
  const html = `
   <figure class"border">
              
              <div class="circlo--img"><img src="${images}" alt=""></div>
              <h1>${name}</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nesciunt aliquid delectus!</p>
              <button class="btn rounded">Find More</button>
            </figure>`;

            container.insertAdjacentHTML("afterbegin", html)
})


 
}