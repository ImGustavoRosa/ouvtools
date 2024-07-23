// VAR PARA LOCALSTORAGE
var aberturaAnonimoSelecionado;
var aberturaMeioDeContato;
var aberturaProtocolo;
var aberturaChaveAcesso;


// >>>> ABERTURA → SIMPLES

/* PROCESSANDO TEXTO - ABERTURA*/
function processarTexto() {
  // Obter valores das opções selecionadas
  var atendimentoSelect = document.getElementById("atendimento");
  var atendimento = atendimentoSelect.value;

  var anonimoSelect = document.getElementById("anonimo");
  var anonimoValue = anonimoSelect.value;
  function eAnonimo(){
    if (anonimoValue === 'SIM'){
      return ` de forma anônima`
    }
    else{
      return '';
    }
  }

  // Obter o conteúdo do textarea de entrada
  var inputTextArea = document.getElementById("inputText");
  var inputText = inputTextArea.value.toUpperCase();

  // Montar a mensagem de acordo com o atendimento selecionado

  var manifestacaoIntegra = "";
  if(document.getElementById("aberturaManifestacaoIntegra").checked){
    manifestacaoIntegra = "onde transcrevemos na íntegra o teor descrito pelo (a) manifestante, que relata o seguinte:\n\n";
  }
  else{
    manifestacaoIntegra = "onde o (a) manifestante relata ";
  }

  var atendimentoMsg = "";
  if (atendimento === "telefone") {
    atendimentoMsg =
      `recebemos manifestação${eAnonimo()} via telefone nesta Ouvidoria SUS, SMS Lauro de Freitas - BA, ${manifestacaoIntegra}`.toUpperCase();
  } 
  else if (atendimento === "whatsapp") {
    atendimentoMsg =
    `recebemos manifestação${eAnonimo()} via whatsapp nesta Ouvidoria SUS, SMS Lauro de Freitas - BA, ${manifestacaoIntegra}`.toUpperCase();
  } 
  else if (atendimento === "email") {
    atendimentoMsg =
    `recebemos manifestação${eAnonimo()} via e-mail nesta Ouvidoria SUS, SMS Lauro de Freitas - BA, ${manifestacaoIntegra}`.toUpperCase();
  } 
  else if (atendimento === "presencial") {
    atendimentoMsg =
    `manifestante compareceu nesta nesta Ouvidoria SUS, SMS Lauro de Freitas - BA, ${manifestacaoIntegra}`.toUpperCase();
  }

  // Montar o texto processado com as informações selecionadas
  if(document.getElementById("aberturaManifestacaoIntegra").checked){
    var processedText = atendimentoMsg + `"` + inputText + `"` + "\n";
  }
  else{
    var processedText = atendimentoMsg + inputText + "\n";
  }
  
  processedText +=
    "\nDiante do exposto e considerando os princípios e diretrizes do sus, o (a) manifestante solicita análise e providências cabíveis.".toUpperCase();

  // Exibir o texto processado no textarea de saída
  var outputTextArea = document.getElementById("outputText");
  outputTextArea.value = processedText;
}

function aberturaSimplesEncaminharProtocolo(){
  if (document.getElementById('anonimo').value === 'SIM'){
    aberturaAnonimoSelecionado = 'SIM';
    localStorage.setItem('aberturaAnonima', aberturaAnonimoSelecionado);
    
    aberturaMeioDeContato = document.getElementById('atendimento');
    localStorage.setItem('aberturaMeioDeContato', aberturaMeioDeContato)

    AberturaSubContainerSelecionada('aberturaProtocolo');

    setTimeout(() =>{

      document.getElementById('protocoloAnonimo').value = 'SIM';
    // if (localStorage.getItem('aberturaAnonima', aberturaAnonimoSelecionado) === 'SIM'){
    // }
    }, 200)
    
  }
  else{
    aberturaMeioDeContato = document.getElementById('atendimento');
    localStorage.setItem('aberturaMeioDeContato', aberturaMeioDeContato)

    AberturaSubContainerSelecionada('aberturaProtocolo');
    document.getElementById('protocoloAnonimo').value = 'NAO';
  }
}

function aberturaSimplesEncaminharPlanilha(){
  aberturaMeioDeContato = document.getElementById('atendimento').value;
  localStorage.setItem('aberturaMeioDeContato', aberturaMeioDeContato);

  AberturaSubContainerSelecionada('aberturaPlanilha');

  setTimeout(() => {
    if (localStorage.getItem('aberturaMeioDeContato', aberturaMeioDeContato) === 'whatsapp' || localStorage.getItem('aberturaMeioDeContato', aberturaMeioDeContato) === 'telefone'){
      document.getElementById('planilha-meio-de-atendimento').value = 'TELEFONE';
    }
    else if (localStorage.getItem('aberturaMeioDeContato', aberturaMeioDeContato) === 'presencial'){
      document.getElementById('planilha-meio-de-atendimento').value = 'PRESENCIAL';
    }
    else{
      document.getElementById('planilha-meio-de-atendimento').value = 'E-MAIL';
    }
  }, 300);
}

// >>>> ABERTURA → AVANÇADA


// >>>> ABERTURA → PROTOCOLO

function processarProtocolo(){
  setTimeout(() => {

    //Checa se a subrede foi informada

    //Checa se a tipificação foi informada
    // if (document.getElementById('protocoloTIpificacao').value != 'opcional'){
    //   let tipificacaoSelecionada = document.getElementById('protocoloTIpificacao').value === 'opcional';
    // }

    var protocolModeloGerado = "Prezado(a) manifestante,\n"
    if (document.getElementById('protocoloTipificacao').value != 'opcional'){
        protocolModeloGerado+= 'A sua manifestação de ' + document.getElementById('protocoloTipificacao').value + ' foi registrada com sucesso e será encaminhada para ';
    }
    else{
      protocolModeloGerado+= 'A sua manifestação foi registrada com sucesso e será encaminhada para ';
    }
      
    if (document.getElementById('protocoloSubrede').value != 'opcional'){
      if (document.getElementById('protocoloSubrede').value == 'REGULAÇÃO'){
        protocolModeloGerado += '*' + 'COODENAÇÃO DA CENTRAL DE REGULAÇÃO' + '*.';
      }
      else if (document.getElementById('protocoloSubrede').value == 'ATENÇÃO BÁSICA'){
        protocolModeloGerado += '*' + 'SUPERINTENDÊNCIA DE ATENÇÃO BÁSICA (SAB)' + '*.';
      }
      else if (document.getElementById('protocoloSubrede').value == 'ATENÇÃO ESPECIALIZADA'){
        protocolModeloGerado += '*' + 'SUPERINTENDÊNCIA DE ATENÇÃO ESPECIALIZADA (SAE)' + '*.';
      }
      else if (document.getElementById('protocoloSubrede').value == 'FARMACÊUTICA'){
        protocolModeloGerado += '*' + 'COORDENAÇÃO DE ASSISTÊNCIA FARMACÊUTICA (CAF)' + '*.';
      }
      else if (document.getElementById('protocoloSubrede').value == 'VIGILÂNCIA EM SAÚDE'){
        protocolModeloGerado += '*' + 'SUPERINTENDÊNCIA DE VIGILÂNCIA EM SAÚDE' + '*.';
      }
      else if (document.getElementById('protocoloSubrede').value == 'VIGILÂNCIA SANITÁRIA'){
        protocolModeloGerado += '*' + 'SUPERINTENDÊNCIA DE VIGILÂNCIA SANITÁRIA (SUVISA)' + '*.';
      }
      else if (document.getElementById('protocoloSubrede').value == 'CCZ'){
        protocolModeloGerado += '*' + 'CENTRO DE CONTROLE DE ZOONOSES' + '*.';
      }
      else if (document.getElementById('protocoloSubrede').value == 'SAÚDE BUCAL'){
        protocolModeloGerado += '*' + 'DEPARTAMENTO DE SAÚDE BUCAL' + '*.';
      }
      else if (document.getElementById('protocoloSubrede').value == 'GABINETE'){
        protocolModeloGerado += '*' + 'GABINETE DO SECRETÁRIO' + '*.';
      }
      else if (document.getElementById('protocoloSubrede').value == 'MINISTÉRIO DA SAÚDE'){
        protocolModeloGerado += '*' + 'OUVIDORIA GERAL DO SUS/MINISTÉRIO DA SAÚDE' + '*.';
      }
      else if (document.getElementById('protocoloSubrede').value == 'OUVIDORIA SUS DO ESTADO DA BAHIA'){
        protocolModeloGerado += '*' + 'OUVIDORIA SUS DO ESTADO DA BAHIA' + '*.';
      }
      else if (document.getElementById('protocoloSubrede').value == 'SESAB'){
        protocolModeloGerado += '*' + 'SECRETARIA ESTADUAL DE SAÚDE DA BAHIA' + '*.';
      }

        /*
        <option value="Centro de Controle de Zoonososes (CCZ)">CCZ</option>
        <option value="Departamento de Transporte">TRANSPORTE</option>
        <option value="Gabinete do Secretário">GABINETE</option>
        <option value="Recursos Humanos (RH)">RECURSOS HUMANOS</option> */
    }
    else{
      protocolModeloGerado+= "o setor, departamento ou superintendência competente.";
    }
    if (document.getElementById('protocoloAnonimo').value === 'NAO'){
      protocolModeloGerado+= " Assim que obtivermos um parecer conclusivo, entraremos em contato para informar a resposta.";
    }
    else{
      protocolModeloGerado+= "\nPor se tratar de uma manifestação anônima, não entraremos em contato para informar a resposta desta manifestação. Mas você poderá acompanhar através do nosso Telefone/WhatsApp (71) 3369-9937 (será necessário informar o número de protocolo)."
    }
    
    var numProtocoloInformado = document.getElementById('texto-protocolo').value;
    var numProtocoloInformadoLowerCase = numProtocoloInformado.toLowerCase();


    // FUNÇÃO PARA PEGAR OS 15 NÚMEROS DE PROTOCOLO
    function tem15digitos(protoc) {

      // USA O ANO ATUAL
      const dataAtualProtocolo = new Date().getFullYear().toString();

      // Regex para encontrar exatamente 15 dígitos consecutivos
      const regex = new RegExp(`\\b${dataAtualProtocolo}\\d{11}\\b`);
      const matches = protoc.match(regex);
      
      return matches ? matches[0] : null;
    }
    
  //if (numProtocoloInformadoLowerCase.includes("protocolo")){
    // aberturaProtocolo = ((numProtocoloInformadoLowerCase.split('protocolo: ')[1]).split('\n')[0].trim())
    if(tem15digitos(numProtocoloInformadoLowerCase)){
      aberturaProtocolo = tem15digitos(numProtocoloInformadoLowerCase);
      protocolModeloGerado += '\n\n*Protocolo:* ' + aberturaProtocolo;
      if (numProtocoloInformadoLowerCase.includes('chave de acesso')){
        aberturaChaveAcesso = ((numProtocoloInformadoLowerCase.split('chave de acesso:')[1]).split(' ')[1].trim());
        protocolModeloGerado += '\n\n*Chave de Acesso:* ' + aberturaChaveAcesso.toUpperCase();
        protocolModeloGerado+= '\n\nVocê também pode acompanhar ou complementar novas informações e anexos nesta manifestação, basta acessar o site: \nhttps://ouvidor.saude.gov.br/public/form-web/consultar, e digite o número de protocolo, a chave de acesso e o texto solicitado (CAPTCHA).'
      }
    }

    document.getElementById('texto-gerado-protocolo').value = protocolModeloGerado;
  
  }, 200);
  
}

// ENCAMINHAR PARA PLANILHA
function aberturaProtocoloEncaminharPlanilha(){
  AberturaSubContainerSelecionada('aberturaPlanilha');
  
  setTimeout(() => {
    if (aberturaProtocolo){
      document.getElementById('planilha-protocolo').value = aberturaProtocolo;
    }
    
    if (aberturaChaveAcesso){
      document.getElementById('planilha-chave-acesso').value = aberturaChaveAcesso.toUpperCase();
    }
    if (document.getElementById('protocoloSubrede').value != 'opcional'){
      document.getElementById('planilha-subrede').value = document.getElementById('protocoloSubrede').value.toUpperCase();
    }
    if (document.getElementById('protocoloTipificacao').value != 'opcional'){
      document.getElementById('planilha-tipificacao').value = document.getElementById('protocoloTipificacao').value.toUpperCase();
    }
  }, 300)
}

/* COPIAR O TEXTO DO TEXTAREA PROTOCOLO */
function copiarTextoProtocolo() {
  var outputTextArea = document.getElementById("texto-gerado-protocolo");
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

/* LIMPAR O TEXTO DE ENTRADA E SAÍDA DO TEXTAREA PROTOCOLO */
function LimparProtocolo(btns){
  if (btns === 'limparTextoEntradaProtocolo'){
    var btnLimpar = document.getElementById('texto-protocolo');
  }
  else{
    var btnLimpar = document.getElementById('texto-gerado-protocolo');
  }
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



//>>>> ABERTURA → PLANILHA

setTimeout(() => {
  let planilhaDataAtual = new Date();
  document.getElementById('planilha-data').valueAsDate = planilhaDataAtual;
  document.getElementById('planilha-prazo').valueAsDate = new Date(new Date().setDate(planilhaDataAtual.getDate() + 30));
}, 200)

function modeloPlanilha(){
  let tabulacao = '\t';
  let planilhaProtocolo = document.getElementById('planilha-protocolo').value;
  let planilhaChaveAcesso = document.getElementById('planilha-chave-acesso').value.toUpperCase();
  let planilhaTipificacao = document.getElementById('planilha-tipificacao').value;
  let planilhaSubrede = document.getElementById('planilha-subrede').value;
  let planilhaServico = document.getElementById('planilha-servico').value;
  let planilhaData = document.getElementById('planilha-data').value;
  let planilhaPrazo = document.getElementById('planilha-prazo').value;
  let planilhaStatus = document.getElementById('planilha-status').value;
  let planilhaConclusao = document.getElementById('planilha-conclusao').value;
  let planilhaUnidade = document.getElementById('planilha-unidade').value;
  let planilhaProfissional = document.getElementById('planilha-profissional').value;
  let planilhaOuvidoriaDeOrigem = document.getElementById('planilha-ouvidoria-de-origem').value;
  let planilhaMeioDeAtendimento = document.getElementById('planilha-meio-de-atendimento').value
  let planilhaServicoAtendimento = document.getElementById('planilha-servico-atendimento').value;
  let planilhaObservacao = document.getElementById('planilha-observacao').value.toUpperCase();

  
  let planilhaModelo = document.getElementById('planilhaGerada');
    
  planilhaModelo.value = planilhaProtocolo + tabulacao + planilhaChaveAcesso + tabulacao + planilhaTipificacao + tabulacao + planilhaSubrede + tabulacao + planilhaServico + 
  tabulacao + planilhaData + tabulacao + planilhaPrazo + tabulacao + planilhaStatus + tabulacao + planilhaConclusao + tabulacao + planilhaUnidade + tabulacao + planilhaProfissional
  + tabulacao + planilhaObservacao + tabulacao + planilhaOuvidoriaDeOrigem + tabulacao + planilhaMeioDeAtendimento + tabulacao + planilhaServicoAtendimento;
}

// COPIAR MODELO PLANILHA
function planilhaCopiarModelo() {
  var outputTextArea = document.getElementById("planilhaGerada");
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

// LIMPAR MODELO PLANILHA

function planilhaLimparModelo(){
    var btnLimpar = document.getElementById('planilhaGerada');
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