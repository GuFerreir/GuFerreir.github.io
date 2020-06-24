var barraNav = document.querySelector(".header__menuNavegacao");
var abrirMenu = document.querySelector(".menu-abrir");

abrirMenu.addEventListener("click", function(){
    barraNav.classList.add("menu-ativo");
});

var fecharMenu = document.querySelector(".menu-fechar");

fecharMenu.addEventListener("click", function(){
    barraNav.classList.remove("menu-ativo");
});


var clicarEmLinkdoMenu = document.querySelectorAll(".menuNavegacao__botao");

for(let i = 0; i < clicarEmLinkdoMenu.length; i++){
    clicarEmLinkdoMenu[i].addEventListener("click", function(){
        barraNav.classList.remove("menu-ativo");
    });
}


const go = (elem) => {
    window.scroll({       // 1
        top: document
      .querySelector( elem )
        .offsetTop,       // 2
        left: 0,
        behavior: 'smooth'// 3
     });
  }