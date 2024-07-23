// Função para carregar conteúdo na div

function loadContent(divName) {
  var contentDiv = document.getElementById("content");

  fetch("/pages/" + divName + ".html")
    .then((response) => response.text())
    .then((data) => {
      contentDiv.innerHTML = data;
    })
    .catch((error) => {
      console.error("Erro ao carregar o conteúdo: ", error);
    });
}



// Carregar o conteúdo da div "abertura" por padrão
loadContent("abertura");
document.getElementById("abertura").style.backgroundColor = "#F79D83";

// Adicionar o evento de clique para cada div
document.getElementById("abertura").addEventListener("click", function () {
  loadContent("abertura");
});

document
  .getElementById("encaminhamento")
  .addEventListener("click", function () {
    loadContent("encaminhamento");
  });

document.getElementById("resposta").addEventListener("click", function () {
  loadContent("resposta");
});

document.getElementById("fechamento").addEventListener("click", function () {
  loadContent("fechamento");
});


////////////////////////////

/* COPIAR O TEXTO DO TEXTAREA */
function copiarTextoProcessado() {
  var outputTextArea = document.getElementById("outputText");
  var copySuccessMessage = document.getElementById("copySuccessMessage");

  // Selecionar e copiar o conteúdo do textarea de saída
  outputTextArea.select();
  outputTextArea.setSelectionRange(0, 99999); // Para dispositivos móveis
  document.execCommand("copy");

  // Exibir a mensagem de sucesso
  copySuccessMessage.style.display = "block";

  // Ocultar a mensagem após alguns segundos
  setTimeout(function () {
    copySuccessMessage.style.display = "none";
  }, 3000); // A mensagem desaparecerá após 3 segundos (3000 milissegundos)

  // Deselecionar o texto
  window.getSelection().removeAllRanges();
}

////////////////////////////

/* LIMPAR O TEXTO DE ENTRADA DO TEXTAREA */

function limparTextoEntrada(){
  var btnLimpar = document.getElementById("inputText");
  btnLimpar.value = "";

  var deletedSuccessMessage = document.getElementById("textoEntradaLimpado");

    // Exibir a mensagem de sucesso
    deletedSuccessMessage.style.display = "block";
    deletedSuccessMessage.style.marginTop = "0.75rem";
    deletedSuccessMessage.style.marginRight = "auto";
    deletedSuccessMessage.style.marginBottom = "0";
    deletedSuccessMessage.style.marginLeft = "auto";

    // Ocultar a mensagem após alguns segundos
    setTimeout(function () {
      deletedSuccessMessage.style.display = "none";
    }, 3000); // A mensagem desaparecerá após 3 segundos (3000 milissegundos)
  
    // Deselecionar o texto
    window.getSelection().removeAllRanges();
}

/* LIMPAR O TEXTO DE SAÍDA DO TEXTAREA */

function limparTextoSaida(){
  var btnLimpar = document.getElementById("outputText");
  btnLimpar.value = "";

  var deletedSuccessMessage = document.getElementById("textoSaidaLimpado");

    // Exibir a mensagem de sucesso
    deletedSuccessMessage.style.display = "block";
    deletedSuccessMessage.style.marginTop = "0.75rem";
    deletedSuccessMessage.style.marginRight = "auto";
    deletedSuccessMessage.style.marginBottom = "0";
    deletedSuccessMessage.style.marginLeft = "auto";

    // Ocultar a mensagem após alguns segundos
    setTimeout(function () {
      deletedSuccessMessage.style.display = "none";
    }, 3000); // A mensagem desaparecerá após 3 segundos (3000 milissegundos)
  
    // Deselecionar o texto
    window.getSelection().removeAllRanges();
}

/* FUNÇÃO DATA ATUAL*/
function dataAtual(){
  date = new Date();
  year = date.getFullYear();
  month = date.getMonth() + 1;
  day = date.getDate();
  document.getElementById("dataAtual").innerHTML = day + "/" + month + "/" + year;
}

function dataAtualHoje(id){
  date = new Date();
  year = date.getFullYear();
  month = date.getMonth() + 1;
  day = date.getDate();
  id.value = document.getElementById(id).innerHTML = day + "/" + month + "/" + year;
}


// MAIN CONTAINER SELECIONADO

function MainContainerSelecionada(idClicado){
  var mainContainers = document.querySelectorAll(".box");
  
  mainContainers.forEach( function(mainContainer){
    mainContainer.style.backgroundColor = "";
  })
  
  document.getElementById(idClicado).style.backgroundColor = "#F79D83";
  
  if(idClicado == 'fechamento'){
    temporaryDate = new Date();
    let currentTime = (temporaryDate.getHours() == 0 ? '00' : '') + temporaryDate.getHours() + ':' + (temporaryDate.getMinutes() < 10 ? '0' : '') + temporaryDate.getMinutes();
    setTimeout(() => {
      document.getElementById('horaDaResposta').value = currentTime;
    }, 500);
    
    //obeterHoraAtual();
  }
  if(idClicado == 'abertura'){
    bgSubMenuAbertura();
    setTimeout(() => {
      document.querySelector(".abertura-simples").style.display = "block";
      document.querySelector(".abertura-avancada").style.display = "none";
      document.querySelector(".abertura-protocolo").style.display = "none";
      document.querySelector(".abertura-planilha").style.display = "none";
    }, 300);
  }
}

// >>>> SUB ABERTURA INÍCIO <<<

// SUB-MAIN CONTAINER SELECIONADO
function AberturaSubContainerSelecionada(subidClicado){
  var mainContainers = document.querySelectorAll(".aberturaMenu");

  mainContainers.forEach( function(mainContainer){
    mainContainer.style.backgroundColor = "";
  })

  document.getElementById(subidClicado).style.backgroundColor = "#F79D83";

  if (subidClicado === 'aberturaSimples'){
    document.querySelector(".abertura-simples").style.display = "block";
    document.querySelector(".abertura-avancada").style.display = "none";
    document.querySelector(".abertura-protocolo").style.display = "none";
    document.querySelector(".abertura-planilha").style.display = "none";
  }
  else if (subidClicado === 'aberturaAvancada'){
    document.querySelector(".abertura-avancada").style.display = "block";
    document.querySelector(".abertura-simples").style.display = "none";
    document.querySelector(".abertura-protocolo").style.display = "none";
    document.querySelector(".abertura-planilha").style.display = "none";
  }
  
  else if (subidClicado === 'aberturaProtocolo'){
    document.querySelector(".abertura-protocolo").style.display = "block";
    document.querySelector(".abertura-avancada").style.display = "none";
    document.querySelector(".abertura-simples").style.display = "none";
    document.querySelector(".abertura-planilha").style.display = "none";
  }
  
  // else (subidClicado === 'aberturaPlanilha'){
  else{
    document.querySelector(".abertura-planilha").style.display = "block";
    document.querySelector(".abertura-protocolo").style.display = "none";
    document.querySelector(".abertura-avancada").style.display = "none";
    document.querySelector(".abertura-simples").style.display = "none";
  }
  
}

  setTimeout(() => {
    document.querySelector(".abertura-protocolo").style.display = "none";
  }, 300);


// FUNÇÃO PARA COLOCAR A COR DE FUNDO NO SUB-MENU DE ABERTURA
function bgSubMenuAbertura(){
  setTimeout(() => {
    document.getElementById("aberturaSimples").style.backgroundColor = "#F79D83";
  }, 200);
}

bgSubMenuAbertura()


setTimeout(() => {
  
  document.querySelector(".abertura-avancada").style.display = "none";
  document.querySelector(".abertura-protocolo").style.display = "none";
  document.querySelector(".abertura-planilha").style.display = "none";

}, "300");



// Função para carregar conteúdo na div

function loadContent(divName) {
  var contentDiv = document.getElementById("content");

  fetch("/pages/" + divName + ".html")
    .then((response) => response.text())
    .then((data) => {
      contentDiv.innerHTML = data;
    })
    .catch((error) => {
      console.error("Erro ao carregar o conteúdo: ", error);
    });
}



document
  .getElementById("encaminhamento")
  .addEventListener("click", function () {
    loadContent("encaminhamento");
  });

document.getElementById("resposta").addEventListener("click", function () {
  loadContent("resposta");
});

document.getElementById("fechamento").addEventListener("click", function () {
  loadContent("fechamento");
});









  function recebendoParaEncaminhar(novaKey){
    var nKey = novaKey;
  }

  // ENCAMINHAR PARA FECHAMENTO


