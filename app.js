let listaDeAmigos = [];

amigo.addEventListener("keydown", function (press) {
  if (press.key === "Enter") {
    adicionarAmigo();
  }
});

function adicionarAmigo() {
  let inputNome = document.getElementById("amigo").value.trim();
  if (inputNome == "") {
    alert("Para prosseguir, escreva um nome.");
  } else {
    if (listaDeAmigos.includes(inputNome)) {
      alert(
        "O nome já está na lista. Para prosseguir, escreva um nome diferente."
      );
    } else {
      listaDeAmigos.push(inputNome);
      let amigosListados = document.getElementById("listaAmigos");
      amigosListados.innerHTML += `<li>${inputNome}</li>`;
      document.querySelector("#botaoDeSortear").removeAttribute("disabled");
      document.querySelector("#botaoDeRecomecarSorteio").removeAttribute("disabled");
    }
    limparCampo();
  }
}

function limparCampo() {
  campoSujo = document.getElementById("amigo");
  campoSujo.value = "";
}

function sortearAmigo() {
  numeroAleatorio = parseInt(Math.random() * listaDeAmigos.length);
  let listaResultado = document.getElementById("resultado");
  listaResultado.innerHTML = `Seu amigo secreto é: ${listaDeAmigos[numeroAleatorio]}!`;
}

function recomecarSorteio() {
  listaDeAmigos = [];
  limparCampo();
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";
  let listaResultado = document.getElementById("resultado");
  listaResultado.innerHTML = "";
  document.querySelector("#botaoDeSortear").setAttribute("disabled", true);
  document.querySelector("#botaoDeRecomecarSorteio").setAttribute("disabled", true);
}