const botaoMenu = document.getElementById("btnmenu");
const menuLinks = document.getElementById("menu-links");

btnmenu.addEventListener("click", function () {
    
    menuLinks.classList.toggle("aberto");
    
    btnmenu.classList.toggle("aberto");
});

const links = menuLinks.querySelectorAll("a");
links.forEach(function (link) {
    link.addEventListener("click", function () {
        menuLinks.classList.remove("aberto");
        btnmenu.classList.remove("aberto");
    });
});

document.addEventListener("click", function (evento) {
    
    const clicouNoBotao = btnmenu.contains(evento.target);
    const clicouNoMenu = menuLinks.contains(evento.target);

    if (!clicouNoBotao && !clicouNoMenu) {
        menuLinks.classList.remove("aberto");
        btnmenu.classList.remove("aberto");
    }
});