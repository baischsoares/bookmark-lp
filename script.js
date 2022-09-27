const menuMobile = document.querySelector('.hamburguer');

function ativarClasse(event){
  if (event.type === 'touchstart');
  const nav = document.querySelector('.navegacao');
  nav.classList.toggle('ativo');
}
menuMobile.addEventListener('click', ativarClasse);


function activeTabContent(){

const tabNav = document.querySelectorAll('.js-lista-tab li a');
const tabContent = document.querySelectorAll('.js-tabs .tab-content');

if(tabNav.length && tabContent.length) {

  tabNav[0].classList.add('ativo');
  tabContent[0].classList.add('ativo');


  function addClass(index) {
    tabNav.forEach((nav) => {
      nav.classList.remove('ativo')
    })
    tabContent.forEach((content) => {
      content.classList.remove('ativo')
    })
    tabNav[index].classList.add('ativo');
    tabContent[index].classList.add('ativo');
  }

  tabNav.forEach((link, index) => {
    link.addEventListener('click', function (event){
      event.preventDefault();
      addClass(index)
    });
  })
  }
}
activeTabContent()


function accordionLista(){

  const perguntas = document.querySelectorAll('.js-accordion dt');
  if(perguntas.length){

    function showResposta(){
      this.nextElementSibling.classList.toggle('ativo')
      this.classList.toggle('ativo');
     
   }
  
    perguntas.forEach((pergunta) => {
      pergunta.addEventListener('click', showResposta)
  });
  }
}
accordionLista()


const btnContato = document.querySelector('.botao-contato');
let email = document.querySelector('.email')
btnContato.addEventListener('click', enviarForm)

function enviarForm(event){
  event.preventDefault()
  if(!email.value){
    email.setAttribute('placeholder', 'O e-mail é obrigatório')
    email.classList.toggle('emailVazio')
  }
}
email.addEventListener('keyup', function() {this.classList.remove('emailVazio')})
