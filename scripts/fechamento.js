function showHiddenDivResposta(resSelec, naoConsegiuSelec, element){
    document.getElementById(resSelec).style.display = element.value == "resInformada" ? 'block' : 'none';
    document.getElementById(naoConsegiuSelec).style.display = element.value == "naoConseguiuContato" ? 'block' : 'none';
}

let dataHoje = new Date();
let dataAtualDia = dataHoje.getDate().toString().padStart(2, '0');
let dataAtualMes = ('0' + (dataHoje.getMonth()+1)).slice(-2)
let dataAtualAno = dataHoje.getFullYear();
let dataAtualHora = dataHoje.getHours();
let dataAtualMinutos = dataHoje.getMinutes();
let dataAtualFechamento = `${dataAtualAno}-${dataAtualMes}-${dataAtualDia}`

// HORA ATUAL

    // var currentTime = dataHoje.getHours() + ':' + (dataHoje.getMinutes() < 10 ? '0' : '') + dataHoje.getMinutes();
    // setTimeout(() => {
    //     document.getElementById('horaDaResposta').value = currentTime;
    // }, 50);

    function obeterHoraAtual(){
        let currentTime = (dataHoje.getHours() == 0 ? '00' : '') + ':' + (dataHoje.getMinutes() < 10 ? '0' : '') + dataHoje.getMinutes();
        setTimeout(() => {
            document.getElementById('horaDaResposta').value = currentTime;
        }, 250);
    }


// LIMPAR O TEXTO DE ENTRADA DO FECHAMENTO
function limparTextoEntradaFechamento(){
    document.getElementById("respostaSubrede").value = ''
    limparTextoSaida();
}


// COPIAR O TEXTO DA PÁGINA "RESPOSTA" - INICIO

 function getBtn(){
    document.getElementById('respostaSubrede').value = localStorage.getItem('textoSalvo', valor);
    var subredeEscolhidaResposta = document.getElementById('subrede');
    var subredeEscolhidaRespostaValue = subredeEscolhidaResposta.value;
    var meioCttEscolhido = localStorage.getItem('meioDeContatoEscolhidoEncaminhar', meioContatoEscolhidoEncaminhamento);
    subredeEscolhidaRespostaValue = localStorage.getItem('SubRedeEncaminharFechamento', subRedeEscolhidaTexto);

    //var subredeEscolhidaRespostaEscolhido = subredeEscolhidaResposta.options[subredeEscolhidaResposta.selectedIndex].text;
    for (let i = 0; i < subredeEscolhidaResposta.length; i++){
        if (subredeEscolhidaResposta.options[i].text === subredeEscolhidaRespostaValue){
            subredeEscolhidaResposta.options.selectedIndex = i;
            break;
        }
    }
    
    if (meioCttEscolhido === 'email'){
        document.getElementById('email').checked = true;
    }
 
    //deleta todo o localstorage
    localStorage.clear();
    meioCttEscolhido = '';
}

// COPIAR O TEXTO DA PÁGINA "RESPOSTA" - FIM


function selection(){
	var selected=document.getElementById("select1").value;
  if(selected==0){
  	document.getElementById("input1").removeAttribute("hidden");
  }
}

// COLOCA A DATA ATUAL NA OPÇÃO
function dAtual(){
    document.getElementById('dataDaResposta').value = dataAtualFechamento;
}

function limparCampoDataHora(){
    document.getElementById('select1').options[0].textContent = `${dataAtualDia}/${dataAtualMes}/${dataAtualAno}`
    document.getElementById('select1').value = '1';
    document.getElementById("input1").setAttribute("hidden", "hidden");
    document.getElementById("horaDaResposta").value = "";
}

function processarTextoFechamento() {
    // subredes da Ouvidoria
    var subredeSelecionada = document.getElementById("subrede");
    var subredeValue = subredeSelecionada.value;
  
    // Resposta Informada, anonimo, não conseguiu contato
    var posRespostaSelecionada = document.getElementById("posResposta");
    var posRespostaValue = posRespostaSelecionada.value;

    // ******************** hiddenDiv INICIO ******************** //

    // ======= RESPOSTA INFORMADA INICIO ======= //

    // Resposta informada: telefone, whatsapp, e-mail
    var respostaInformadaOptSelecionada = document.querySelector(".respostaInformadaOpt:checked") //document.getElementsByClassName("respostaInformadaOpt")[0];
    var respostaInformadaOptValue = respostaInformadaOptSelecionada.value;
    //console.log(respostaInformadaOptValue)

    //// ===

    // data da Resposta
    if (document.getElementById("select1").value == 1){
        var dataRespostaInformada = document.getElementById("dataDaResposta");
        var dataDigitado = dataAtualDia;
        var mesDigitado = dataAtualMes;
        var anoDigitado = dataAtualAno;
    }
    else{
        var dataRespostaInformada = document.getElementById("input1");
        var dataRespostaInformadaDataValue = dataRespostaInformada.value;
        var dataResposta = new Date(dataRespostaInformadaDataValue.replace(/-/g, '\/').replace(/T.+/, ''));

        var dataDigitado = dataResposta.getDate().toString().padStart(2, '0');
        var mesDigitado = (dataResposta.getMonth() + 1).toString().padStart(2, '0');
        var anoDigitado = dataResposta.getFullYear();
    }

    //// ===

    // HORA DA RESPOSTA
    var horaRespostaInformada = document.getElementById("horaDaResposta");
    var horaRespostaInformadaHoraValue = horaRespostaInformada.value;
    var horaResposta = new Date("1970-01-01T" + horaRespostaInformadaHoraValue)

    var horasDigitado = horaResposta.getHours().toString().padStart(2, '0');
    var minutosDigitado = horaResposta.getMinutes().toString().padStart(2, '0');

    // ======= RESPOSTA INFORMADA FIM ======= //

    // ======= NÃO CONSEGUIU RESPOSTA INICIO ======= //
    
    // Quantas vezes tentou contato
    var quantasVezesTentouContato = document.querySelector("#vezesTentouContato option:checked");
    var VezesTentouContatoValue = quantasVezesTentouContato.value == 1 ? quantasVezesTentouContato.value + ' VEZ' : quantasVezesTentouContato.value + ' VEZES';
    
    // meios utilizados para contato
    //var meiosTentouContato = document.getElementById("tentouContato");
    //var meiosTentouContatoValue = meiosTentouContato.value;

    //datas em que foram feitas as tentativas de contato
    var primeiraDataTentouContato = document.getElementById("primeiraData");
    var ultimaDataTentouContato = document.getElementById("ultimaData");

    var primeiraDataTentouContatoValue = primeiraDataTentouContato.value.split('-');
    var ultimaDataTentouContatoValue = ultimaDataTentouContato.value.split('-');
    
    var primeiraDataTentouContatoNewDate =  new Date(primeiraDataTentouContatoValue);
    var ultimaDataTentouContatoNewDate =  new Date(ultimaDataTentouContatoValue);

    var primeiraDataTentouContatoDia = primeiraDataTentouContatoNewDate.getDate().toString().padStart(2, '0');
    var primeiraDataTentouContatoMes = (primeiraDataTentouContatoNewDate.getMonth() + 1).toString().padStart(2, '0');
    var primeiraDataTentouContatoAno = primeiraDataTentouContatoNewDate.getFullYear();
    var ultimaDataTentouContatoDia = ultimaDataTentouContatoNewDate.getDate().toString().padStart(2, '0');
    var ultimaDataTentouContatoMes = (ultimaDataTentouContatoNewDate.getMonth() + 1).toString().padStart(2, '0');
    var ultimaDataTentouContatoAno = ultimaDataTentouContatoNewDate.getFullYear();


    // ======= NÃO CONSEGUIU RESPOSTA FIM ======= //


    // ******************** hiddenDiv FIM ******************** //


    // ********************> INICIO PROCESSO <******************** //

    // Obter o conteúdo do textarea de entrada
    var textoDeEntradaDigitadoFechamento = document.getElementById("respostaSubrede");
    var textoDeEntradaFechamento = textoDeEntradaDigitadoFechamento.value.toUpperCase();

    var textoPrincipalFechamento = "";

    // SEPARAR A SUBREDE

        if (subredeValue === "regulacao"){
            textoPrincipalFechamento = "Demanda trabalhada pela Ouvidoria SUS/SMS LAURO DE FREITAS - BA que obteve o seguinte parecer conclusivo da COORDENAÇÃO DA CENTRAL DE REGULAÇÃO:\n"
        }
        else if(subredeValue === "atBasica"){
            textoPrincipalFechamento = "Demanda trabalhada pela Ouvidoria SUS/SMS LAURO DE FREITAS - BA que obteve o seguinte parecer conclusivo da SUPERINTENDÊNCIA DE ATENÇÃO BÁSICA (SAB):\n"
        }
        else if(subredeValue === "atEspecializada"){
            textoPrincipalFechamento = "Demanda trabalhada pela Ouvidoria SUS/SMS LAURO DE FREITAS - BA que obteve o seguinte parecer conclusivo da SUPERINTENDÊNCIA DE ATENÇÃO ESPECIALIZADA (SAE):\n"
        }
        else if(subredeValue === "sesab"){
            textoPrincipalFechamento = "Demanda trabalhada pela Ouvidoria SUS/SMS LAURO DE FREITAS - BA que obteve o seguinte parecer conclusivo da OUVIDORIA SUS DO ESTADO (SESAB):\n"
        }
        else if(subredeValue === "farmaceutica"){
            textoPrincipalFechamento = "Demanda trabalhada pela Ouvidoria SUS/SMS LAURO DE FREITAS - BA que obteve o seguinte parecer conclusivo do COORDENAÇÃO DE ASSISTÊNCIA FARMACÊUTICA (CAF):\n"
        }
        else if(subredeValue === "supVisa"){
            textoPrincipalFechamento = "Demanda trabalhada pela Ouvidoria SUS/SMS LAURO DE FREITAS - BA que obteve o seguinte parecer conclusivo da SUPERINTENDÊNCIA DE VIGILÂNCIA SANITÁRIA (VISA):\n"
        }
        else if(subredeValue === "supVisau"){
            textoPrincipalFechamento = "Demanda trabalhada pela Ouvidoria SUS/SMS LAURO DE FREITAS - BA que obteve o seguinte parecer conclusivo da SUPERINTENDÊNCIA DE VIGILÂNCIA EM SAÚDE (SUVISA):\n"
        }
        else if(subredeValue === "saudeBucal"){
            textoPrincipalFechamento = "Demanda trabalhada pela Ouvidoria SUS/SMS LAURO DE FREITAS - BA que obteve o seguinte parecer conclusivo do DEPARTAMENTO DE SAÚDE BUCAL:\n"
        }
        else if(subredeValue === "ccz"){
            textoPrincipalFechamento = "Demanda trabalhada pela Ouvidoria SUS/SMS LAURO DE FREITAS - BA que obteve o seguinte parecer conclusivo do CENTRO DE CONTROLE DE ZOONOSES (CCZ):\n"
        }
        else if(subredeValue === "depTransporte"){
            textoPrincipalFechamento = "Demanda trabalhada pela Ouvidoria SUS/SMS LAURO DE FREITAS - BA que obteve o seguinte parecer conclusivo do DEPARTAMENTO DE TRANSPORTE:\n"
        }
        else if(subredeValue === "gabSec"){
            textoPrincipalFechamento = "Demanda trabalhada pela Ouvidoria SUS/SMS LAURO DE FREITAS - BA que obteve o seguinte parecer conclusivo do GABIENTE DO SECRETÁRIO:\n"
        }
        else if(subredeValue === "rh"){
            textoPrincipalFechamento = "Demanda trabalhada pela Ouvidoria SUS/SMS LAURO DE FREITAS - BA que obteve o seguinte parecer conclusivo do DEPARTAMENTO DE RECURSOS HUMANOS (RH):\n"
        }
    //}

    textoPrincipalFechamento += `\n"`;
    textoPrincipalFechamento += `${textoDeEntradaFechamento}`;
    textoPrincipalFechamento += `"\n`;

    
    if (posRespostaValue === "resInformada"){
        if (respostaInformadaOptValue === undefined){
            if (isNaN(dataDigitado) || isNaN(mesDigitado)|| isNaN(anoDigitado)){
                textoPrincipalFechamento += `\nApós contato com o (a) manifestante para fornecer parecer conclusivo DA MANIFESTAÇÃO, a mesma será encerrada. Agradecemos seu contato e nos colocamos à disposição nos telefones 0800 284 0011, opção 1, saúde (SESAB) ou (71) 3369-9937 - Ouvidoria SUS / SMS Lauro de Freitas - BA.`
            }
            else if ( isNaN(horasDigitado) || isNaN(minutosDigitado)){
                textoPrincipalFechamento += `\nApós contato com o (a) manifestante em ${dataDigitado}/${mesDigitado}/${anoDigitado} para fornecer parecer conclusivo DA MANIFESTAÇÃO, a mesma será encerrada. Agradecemos seu contato e nos colocamos à disposição nos telefones 0800 284 0011, opção 1, saúde (SESAB) ou (71) 3369-9937 - Ouvidoria SUS / SMS Lauro de Freitas - BA.`
            }
            else{
                textoPrincipalFechamento += `\nApós contato com o (a) manifestante em ${dataDigitado}/${mesDigitado}/${anoDigitado} às ${horasDigitado}:${minutosDigitado} para fornecer parecer conclusivo DA MANIFESTAÇÃO, a mesma será encerrada. Agradecemos seu contato e nos colocamos à disposição nos telefones 0800 284 0011, opção 1, saúde (SESAB) ou (71) 3369-9937 - Ouvidoria SUS / SMS Lauro de Freitas - BA.`
            }
        }
        else{
            if(isNaN(dataDigitado) || isNaN(mesDigitado) || isNaN(anoDigitado)){
                textoPrincipalFechamento += `\nApós contato com o (a) manifestante via ${respostaInformadaOptValue} para fornecer parecer conclusivo DA MANIFESTAÇÃO, a mesma será encerrada. Agradecemos seu contato e nos colocamos à disposição nos telefones 0800 284 0011, opção 1, saúde (SESAB) ou (71) 3369-9937 - Ouvidoria SUS / SMS Lauro de Freitas - BA.`
            }
            else if ( isNaN(horasDigitado) || isNaN(minutosDigitado)){
                textoPrincipalFechamento += `\nApós contato com o (a) manifestante via ${respostaInformadaOptValue} em ${dataDigitado}/${mesDigitado}/${anoDigitado} para fornecer parecer conclusivo DA MANIFESTAÇÃO, a mesma será encerrada. Agradecemos seu contato e nos colocamos à disposição nos telefones 0800 284 0011, opção 1, saúde (SESAB) ou (71) 3369-9937 - Ouvidoria SUS / SMS Lauro de Freitas - BA.`
            }
            else{
                textoPrincipalFechamento += `\nApós contato com o (a) manifestante via ${respostaInformadaOptValue} em ${dataDigitado}/${mesDigitado}/${anoDigitado} às ${horasDigitado}:${minutosDigitado} para fornecer parecer conclusivo DA MANIFESTAÇÃO, a mesma será encerrada. Agradecemos seu contato e nos colocamos à disposição nos telefones 0800 284 0011, opção 1, saúde (SESAB) ou (71) 3369-9937 - Ouvidoria SUS / SMS Lauro de Freitas - BA.`
            }

        }
    }
    else if (posRespostaValue === "anonimo"){
        textoPrincipalFechamento+= "\nPOR SE TRATAR DE UMA MANIFESTAÇÃO ANÔNIMA, NÃO CONSEGUIMOS ENTRAR EM CONTATO PARA FORNECER PARECER CONCLUSIVO. A MANIFESTAÇÃO SERÁ ENCERRADA POR HAVER UMA RESPOSTA CONCLUSIVA. Agradecemos seu contato e nos colocamos à disposição nos telefones 0800 284 0011, opção 1, saúde (SESAB) ou (71) 3369-9937 - Ouvidoria SUS / SMS Lauro de Freitas - BA."
    }
    else{
        if (isNaN(primeiraDataTentouContatoDia) || isNaN(primeiraDataTentouContatoMes) || isNaN(primeiraDataTentouContatoAno) || isNaN(ultimaDataTentouContatoDia) || isNaN(ultimaDataTentouContatoMes) || isNaN(ultimaDataTentouContatoAno)){
            textoPrincipalFechamento+= `\nTENTAMOS CONTATO COM MANIFESTANTE ${VezesTentouContatoValue} PARA FORNECER PARECER CONCLUSIVO ATRAVÉS DOS MEIOS DE CONTATO FORNECIDOS, MAS NÃO OBTIVEMOS SUCESSO. DIANTE DISSO, A MANIFESTAÇÃO SERÁ FINALIZADA POR HAVER UMA RESPOSTA CONCLUSIVA. Agradecemos seu contato e nos colocamos à disposição nos telefones 0800 284 0011, opção 1, saúde (SESAB) ou (71) 3369-9937 - Ouvidoria SUS / SMS Lauro de Freitas - BA.`
        }
        else{
            textoPrincipalFechamento+= `\nTENTAMOS CONTATO COM MANIFESTANTE ${VezesTentouContatoValue} ENTRE OS DIAS ${primeiraDataTentouContatoDia}/${primeiraDataTentouContatoMes}/${primeiraDataTentouContatoAno} E ${ultimaDataTentouContatoDia}/${ultimaDataTentouContatoMes}/${ultimaDataTentouContatoAno} PARA FORNECER PARECER CONCLUSIVO ATRAVÉS DOS MEIOS DE CONTATO FORNECIDOS, MAS O TELEFONE CHAMA E NÃO ATENDE. DIANTE DISSO, A MANIFESTAÇÃO SERÁ FINALIZADA COM POR HAVER UMA RESPOSTA CONCLUSIVA. Agradecemos seu contato e nos colocamos à disposição nos telefones 0800 284 0011, opção 1, saúde (SESAB) ou (71) 3369-9937 - Ouvidoria SUS / SMS Lauro de Freitas - BA.`
        }
        
    }

  
    // Montar o texto processado com as informações selecionadas
    var textoPrincipalSaidaFechamento = textoPrincipalFechamento;

    // Exibir o texto processado no textarea de saída
    var SaidaFechamento = document.getElementById("outputText");
    SaidaFechamento.value = textoPrincipalSaidaFechamento.toUpperCase();
  }

