// Somos da Ouvidoria SUS de Lauro de Freitas.
// Eu falo com o (a) senhor (a) IVANILDE SANTOS ROCHA?


// Estamos entrando em contato para informar a resposta da sua manifestação, protocolo *XXXXXX*, que foi respondida pela (o) *Departamento/Superintendência/Central de XXX*, e informou o seguinte parecer conclusivo:

// ""

// Caso deseje, podemos enviar em PDF o espelho (cópia) da demanda.

// [1 - Whatsapp, 2 - Email] [ 1 - Resposta, 2 Prim Contato]

function wppSelecionado(){
    document.getElementById('whatsappEscolhido').style.display = 'block'
    document.getElementById('emailEscolhido').style.display = 'none'
}
function emlSelecionado(){
    document.getElementById('emailEscolhido').style.display = 'block'
    document.getElementById('whatsappEscolhido').style.display = 'none'
    
}

function infoResposta(){
    document.getElementById('informarResposta').style.display = 'block';
    document.getElementById('primeiroContato').style.display = 'none';
    document.getElementById('EncaminharParaFechamento').style.display = 'block';
}

function primContato(){
    document.getElementById('primeiroContato').style.display = 'block';
    document.getElementById('informarResposta').style.display = 'none';
    document.getElementById('EncaminharParaFechamento').style.display = 'none';
}

function enviarMensagemEmail(){
    if (document.getElementById("enviarRespostaEmail").checked){
        document.getElementById("respostaPorEmail").style.display = 'block';
    }
    else{
        document.getElementById("respostaPorEmail").style.display = 'none';
    }

}


function checarOpcaoMarcada(){

    // limpar o localstorage
    localStorage.clear();
    // copia o valor digitado
    let whatsappOuemail = escolhidoWhatsappOuEmail()
    if (whatsappOuemail === "whatsapp"){
        var textoDigitadoResposta = document.querySelector("#resSubredeWhatsapp");
    } else{
        var textoDigitadoResposta = document.querySelector("#resSubredeEmail");
    }

    

    if (document.getElementById("whatsapp").checked){
        processarTextoResposta();
    }
    else if (!(document.getElementById("enviarRespostaEmail").checked) && !(document.getElementById("enviarPdfEmail").checked)){
        document.getElementById("nennhumItemSelecionado").style.display = 'block';
        setTimeout(() => {
            document.getElementById("nennhumItemSelecionado").style.display = 'none';    
        }, 5000);
        
    }
    else{
        processarTextoResposta();
    }
}


function limparTextoEntradaResposta(btnID){
    if (document.getElementById("whatsapp").checked){
        if(document.getElementById("infoRes").checked){
            document.getElementById("resSubredeWhatsapp").value = '';
            document.getElementById('numeroProtocolo').value = ''
        }
        else if (document.getElementById("primCtt").checked){
            document.getElementById('nomeManifestante').value = '';
            document.getElementById('generoMasculino').checked = false;
            document.getElementById('generoFeminino').checked = false;
        }

    }
    else if (document.getElementById('email').checked){
        document.getElementById('resSubredeEmail').value = '';
        document.getElementById('numeroProtocolo').value = '';
        document.getElementById("numeroProtocoloEmail").value = '';
    }
  
    var deletedSuccessMessage = document.getElementById("textoEntradaLimpado");
  
      // Exibir a mensagem de sucesso
      deletedSuccessMessage.style.display = "block";
  
      // Ocultar a mensagem após alguns segundos
      setTimeout(function () {
        deletedSuccessMessage.style.display = "none";
      }, 3000); // A mensagem desaparecerá após 3 segundos (3000 milissegundos)
    
      // Deselecionar o texto
      window.getSelection().removeAllRanges();
  }

function escolhidoWhatsappOuEmail(){
    if (document.getElementById("whatsapp").checked){
        var meioRespostaEscolhido = 'whatsapp';
        return meioRespostaEscolhido;
    }
    else if (document.getElementById("email").checked){
        var meioRespostaEscolhido = 'email';
        return meioRespostaEscolhido;
    }
}

function processarTextoResposta(){

    // Obetendo o meio de contato escolhido

    if (document.getElementById("whatsapp").checked){
        var meioRespostaEscolhido = 'whatsapp';
    }
    else if (document.getElementById("email").checked){
        var meioRespostaEscolhido = 'email';
    }

    // verificando se vai informar a resposta ou é o primeiro contato por Whatsapp
    
    if (document.getElementById("infoRes").checked){
        var contatoManifestanteEscolhido = 'informarResposta';
    }
    else if (document.getElementById("primCtt").checked){
        var contatoManifestanteEscolhido = 'primeiroContato';
    }

    // Número de Protocolo gerado;
    if (document.getElementById('whatsapp').checked){
        var numeroProtocoloResposta = document.getElementById("numeroProtocolo");
        var numeroProtocoloRespostaValue = numeroProtocoloResposta.value;
    }
    else if (document.getElementById('email').checked){
        var numeroProtocoloResposta = document.getElementById("numeroProtocoloEmail");
        var numeroProtocoloRespostaValue = numeroProtocoloResposta.value;
    }

    // Subrede selecionada
        //WHATSAPP
    var subredeWhatsappSelecionada = document.getElementById("subredeWhatsapp");
    var subredeWhatsappSelecionadaValue = subredeWhatsappSelecionada.value;
        //EMAIL
    var subredeEmailSelecionada = document.getElementById("subredeEmail");
    var subredeEmailSelecionadaValue = subredeEmailSelecionada.value;

    // Nome do Manifestante
    var nomeManifestanteResposta = document.getElementById("nomeManifestante");
    var nomeManifestanteRespostaValue = nomeManifestanteResposta.value;

    // Gênero do manifestante
    var generoManifestanteResposta = '';
    if (document.getElementById("generoMasculino").checked){
        generoManifestanteResposta = "masculino";
    }
    else if (document.getElementById("generoFeminino").checked){
        generoManifestanteResposta = "feminino";
    }

    function obterGeneroManifestante(){
        if (generoManifestanteResposta == 'masculino'){
            generoManifestanteResposta = "o senhor";
        }
        else if (generoManifestanteResposta == 'feminino'){
            generoManifestanteResposta = "a senhora";
        }
        else{
            generoManifestanteResposta = "o (a) senhor (a)";
        }

        return generoManifestanteResposta;
    }

    // Resposta da subrede
        //WHATSAPP
    var subredeRespostaWhatsapp = document.getElementById("resSubredeWhatsapp");
    var subredeRespostaWhatsappValue = subredeRespostaWhatsapp.value;

        //EMAIL
    var subredeRespostaEmail = document.getElementById("resSubredeEmail");
    var subredeRespostaEmailValue = subredeRespostaEmail.value;



    // Obtendo a data atual do usuário
    var horaAtual = new Date();
    var horaAtualHora = horaAtual.getHours();
    var comprimentarManifestante = "";

    if (horaAtualHora < 12){
        comprimentarManifestante = "bom dia";
    }
    else{
        comprimentarManifestante = "boa tarde";
    }



    // /////////////////////////////////////////// //

    var respostaPrincipalSaida = '';

    if (meioRespostaEscolhido === 'whatsapp'){
        if(contatoManifestanteEscolhido === 'informarResposta'){
            respostaPrincipalSaida += `Estamos entrando em contato para informar a resposta da sua manifestação, protocolo *${numeroProtocoloRespostaValue}*, que foi respondida pela (o) *${subredeWhatsappSelecionadaValue}*, e informou o seguinte parecer conclusivo:\n\n"`
            respostaPrincipalSaida += subredeRespostaWhatsappValue.toUpperCase();
            respostaPrincipalSaida += `"\n\nCaso deseje, enviaremos em PDF o espelho (cópia) desta manifestação.`
        }
        else if (contatoManifestanteEscolhido === 'primeiroContato'){
            respostaPrincipalSaida += `Olá, ${comprimentarManifestante}!\n\nSomos da *Ouvidoria SUS de Lauro de Freitas - BA*.\nEu falo com ${obterGeneroManifestante()} ${nomeManifestanteRespostaValue}?`
        }
    }
    else if (meioRespostaEscolhido === 'email'){
        if ((document.getElementById("enviarRespostaEmail").checked) && (document.getElementById("enviarPdfEmail").checked)){
            respostaPrincipalSaida+= `Prezado (a) cidadão (ã)\n\nEstamos entrando em contato para informar a resposta da sua manifestação, protocolo número ${numeroProtocoloRespostaValue}, que foi respondido pelo (a) ${subredeEmailSelecionadaValue} e informou o seguinte parecer conclusivo:\n\n"`
            respostaPrincipalSaida+= subredeRespostaEmailValue.toUpperCase();
            respostaPrincipalSaida+= `"\n\nTambém estamos encaminhado em anexo PDF, a cópia desta manifestação.\n\nNos encontramos à disposição para esclarecimentos.\n\n*Gentileza, confirmar recebimento da mensagem.\n\nCordialmente,\nSEU NOME AQUI\nOuvidoria SUS / SMS Lauro de Freitas - BA\n71 3369-9937`
        }
        else if (document.getElementById("enviarRespostaEmail").checked){
            respostaPrincipalSaida+= `Prezado (a) cidadão (ã)\n\nEstamos entrando em contato para informar a resposta da sua manifestação, protocolo número ${numeroProtocoloRespostaValue}, que foi respondido pelo (a) ${subredeEmailSelecionadaValue} e informou o seguinte parecer conclusivo:\n\n"`
            respostaPrincipalSaida+= subredeRespostaEmailValue.toUpperCase();
            respostaPrincipalSaida+= `"\n\nNos encontramos à disposição para esclarecimentos.\n\n*Gentileza, confirmar recebimento da mensagem.\n\nCordialmente,\nSEU NOME AQUI\nOuvidoria SUS / SMS Lauro de Freitas - BA\n71 3369-9937`
        }
        else if (document.getElementById("enviarPdfEmail").checked){
            respostaPrincipalSaida+= `Prezado (a) cidadão (ã)\n\nEstamos entrando em contato para informar a resposta da sua manifestação, protocolo número ${numeroProtocoloRespostaValue}, que foi respondido pelo (a) ${subredeEmailSelecionadaValue}.\n\n`
            respostaPrincipalSaida+= `Estamos encaminhado em anexo PDF, a cópia desta manifestação.\n\nNos encontramos à disposição para esclarecimentos.\n\n*Gentileza, confirmar recebimento da mensagem.\n\nCordialmente,\nSEU NOME AQUI\nOuvidoria SUS / SMS Lauro de Freitas - BA\n71 3369-9937`
        }

    }
    

    // 

    var textoPrincipalSaidaResposta = respostaPrincipalSaida;
    var SaidaResposta = document.getElementById("outputText");
        SaidaResposta.value = textoPrincipalSaidaResposta;


}

var valor;
var subRedeEscolhidaTexto;
var meioContatoEscolhidoEncaminhamento;
var subRedeEscolhida;





async function EncaminharParaFechamento(){
    // Função para obter a hora atual

    if (document.getElementById("whatsapp").checked){
        subRedeEscolhida = document.getElementById("subredeWhatsapp");
        valor = document.getElementById('resSubredeWhatsapp').value;
    }
    else if (document.getElementById("email").checked){
        subRedeEscolhida = document.getElementById("subredeEmail");
        valor = document.getElementById('resSubredeEmail').value;
    }
    
    subRedeEscolhidaTexto = subRedeEscolhida.options[subRedeEscolhida.selectedIndex].text;
  
  localStorage.setItem('textoSalvo', valor);
  localStorage.setItem('SubRedeEncaminharFechamento', subRedeEscolhidaTexto);
  
  if (escolhidoWhatsappOuEmail() === 'email'){
    meioContatoEscolhidoEncaminhamento = 'email';
  }
  else{
    meioContatoEscolhidoEncaminhamento = 'whatsapp';
    }
  localStorage.setItem('meioDeContatoEscolhidoEncaminhar', meioContatoEscolhidoEncaminhamento)

  
 


  //var textoRespostaParaEncaminhamento = document.getElementById('resSubredeWhatsapp').value;
  //textoRespostaParaEncaminhamento += document.getElementById('resSubredeEmail').value;

  //window.postMessage({ type: 'transferirTexto', data: textoRespostaParaEncaminhamento }, '*')

  MainContainerSelecionada('fechamento');
  await loadContent("fechamento");
  setTimeout(() => {
    getBtn();
  }, 500);
  
}