fetch("menu.html")
    .then(resposta => resposta.text())
    .then(html => {
        document.getElementById("menu").innerHTML =html;
    })