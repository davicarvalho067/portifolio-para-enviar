function site() {
    let nome = prompt("Qual seu nome?");
    let mostrar = document.getElementById('mostrar');
    let background = document.body;
 
    if (nome === "enzo") {
        mostrar.innerHTML = `<h1> Olá Rei Enzo, Em que posso servir vossa majestade? Seja bem vindo! </h1>`;
        background.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoWAOcEyCXQ1k8PJzxgTy8ca48hHOONoBemGrSnMHfDQ&s=10')";
    } else {
        mostrar.innerHTML = `<h1> Olá ${nome}! Seja bem vindo </h1>`;
    }
}
