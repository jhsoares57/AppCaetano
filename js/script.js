function adicionaLinha(idTabela) {

    var tabela = document.getElementById(idTabela);
    var numeroLinhas = tabela.rows.length;
    var linha = tabela.insertRow(numeroLinhas);
    var celula1 = linha.insertCell(0);
    var celula2 = linha.insertCell(1);   
    var celula3 = linha.insertCell(2); 
    var celula4 = linha.insertCell(3); 
    var celula5 = linha.insertCell(4); 
    var celula6 = linha.insertCell(5); 
    var celula7 = linha.insertCell(6); 

    var musculo =  document.getElementById('musculo').value;
    var tecnica =  document.getElementById('tecnica').value;
    var series =  document.getElementById('series').value;
    var repeticoes =  document.getElementById('repeticoes').value;
    var intervalo =  document.getElementById('intervalo').value;
    var obs =  document.getElementById('obs').value;

    celula1.innerHTML = musculo; 
    celula2.innerHTML =  tecnica; 
    celula3.innerHTML =  series; 
    celula4.innerHTML =  repeticoes; 
    celula5.innerHTML =  intervalo; 
    celula6.innerHTML =  obs; 
    celula7.innerHTML =  "<button onclick='removeLinha(this)'>Remover</button>";
}

// funcao remove uma linha da tabela
function removeLinha(linha) {
    var i=linha.parentNode.parentNode.rowIndex;
    document.getElementById('tbl').deleteRow(i);
  } 



function dadosAluno(){
    var nome = document.getElementById('iNome').value;
    document.getElementById('Aluno').innerHTML = 'Nome do aluno: ' + nome;

    var tipoTreino = document.getElementById('iTipoTreino').value;
    document.getElementById('TipoTreino').innerHTML = 'Tipo do treinamento: ' + tipoTreino;

    var objgeral = document.getElementById('iObjgeral').value;
    document.getElementById('Objgeral').innerHTML = 'Objetivo geral: ' + objgeral;

    var vigencia = document.getElementById('iVigencia').value;
    document.getElementById('vigencia').innerHTML = 'Período de vigência: ' + vigencia;

    var divTreinamento = document.getElementById('iDivTreinamento').value;
    document.getElementById('divTreinamento').innerHTML = 'Divisão de treinamento: ' + divTreinamento;
  };

  function imprimir(){
    var conteudo = document.getElementById('Imprimir').innerHTML,
    tela_impressao = window.open('about:blank');
 
    tela_impressao.document.write('<!DOCTYPE html>');
    tela_impressao.document.write('<html lang="pt-br">');
    tela_impressao.document.write('<head>');
    tela_impressao.document.write('<meta charset="UTF-8">');
    tela_impressao.document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
    tela_impressao.document.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">');
    tela_impressao.document.write('<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>');
    tela_impressao.document.write('<title>Document</title>');
    tela_impressao.document.write('</head>');
    tela_impressao.document.write('<body>');
    tela_impressao.document.write(conteudo);
    tela_impressao.document.write('</body></html>');
    tela_impressao.window.print();
    tela_impressao.window.close();
  }