function tipoEncaminhamento() {
  var tipoSolecionado = document.getElementById("encaminhar");
  var encaminhar = tipoSolecionado.value;
  var textoEncaminhamento;

  if (encaminhar === "rec-den-sol") {
    textoEncaminhamento =
      `ENCAMINHAMOS A PRESENTE MANIFESTAÇÃO PARA ANÁLISE E PROVIDÊNCIAS CABÍVEIS. SOLICITAMOS A GENTILEZA DE INFORMAR A ESTA OUVIDORIA O QUE HOUVER A RESPEITO NO PRAZO ESTIPULADO EM LEI, NOS ENVIANDO O PARECER CONCLUSIVO DAS PROVIDÊNCIAS TOMADAS, QUE DEVERÁ SER INFORMADO NA ÍNTEGRA AO (A) CIDADÃO (Ã).

ATENCIOSAMENTE,

OUVIDORIA SUS/SMS LAURO DE FREITAS - BA.`.toUpperCase();
  } else if (encaminhar === "sug-elo") {
    textoEncaminhamento =
      `Encaminhamos demanda para conhecimento e pronunciamento.

ATENCIOSAMENTE,

OUVIDORIA SUS/SMS LAURO DE FREITAS - BA.`.toUpperCase();
  } else {
    textoEncaminhamento =
      `Estamos encaminhando a demanda para conhecimento, análise e providências cabíveis. Ressaltamos que de acordo com disposto na lai - lei de acesso à informação - nº12.527, de 18/11/2011, demandas de informação precisam ser respondidas no prazo máximo de 20 dias corridos, caso contrário, o portador da informação poderá sofrer sanção penal, conforme artigos 32º e 33º da referida lei.

ATENCIOSAMENTE,

OUVIDORIA SUS/SMS LAURO DE FREITAS - BA.`.toUpperCase();
  }

  var textoEncaminhamentoProcessado = textoEncaminhamento;

  // Exibir o texto processado no textarea de saída
  var encaminhamentoArea = document.getElementById("outputText");
  encaminhamentoArea.value = textoEncaminhamentoProcessado;
  //   var copiarSelecionado = document.getElementById("encaminhamentos");
  //   copiarTextoProcessado(copiarSelecionado);
}


/* COPIAR O TEXTO DO TEXTAREA - RECLAMAÇÃO, DENÚNCIA, SOLICITAÇÃO */
function copiarTextoProcessado_rec_den_sol() {
  var outputTextArea_rec_den_sol = document.getElementById("rec_den_sol");
  var copySuccessMessage_rec_den_sol = document.getElementById("copySuccessMessage_rec_den_sol");

  // Selecionar e copiar o conteúdo do textarea de saída
  outputTextArea_rec_den_sol.select();
  outputTextArea_rec_den_sol.setSelectionRange(0, 99999); // Para dispositivos móveis
  document.execCommand("copy");

  // Exibir a mensagem de sucesso
  copySuccessMessage_rec_den_sol.style.display = "block";

  // Ocultar a mensagem após alguns segundos
  setTimeout(function () {
    copySuccessMessage_rec_den_sol.style.display = "none";
  }, 3000); // A mensagem desaparecerá após 3 segundos (3000 milissegundos)

  // Deselecionar o texto
  window.getSelection().removeAllRanges();
}

/* COPIAR O TEXTO DO TEXTAREA - INFORMAÇÃO */
function copiarTextoProcessado_sug_elo() {
  var outputTextArea = document.getElementById("sug_elo");
  var copySuccessMessage = document.getElementById("copySuccessMessage_sug_elo");

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

/* COPIAR O TEXTO DO TEXTAREA - ELOGIO-SUGESTÃO */
function copiarTextoProcessado_info() {
  var outputTextArea = document.getElementById("info");
  var copySuccessMessage = document.getElementById("copySuccessMessage_info");

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