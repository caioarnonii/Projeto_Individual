
function validarSessao() {
  var nome = sessionStorage.NOME_USUARIO
  var email = sessionStorage.EMAIL_USUARIO

  if (email == null && nome == null) {
    window.location = "./login.html"
  }
}
function limparSessao() {
  sessionStorage.clear()
  window.location = "./login.html"
}

function votoLebron() {

  fetch("/usuarios/cadastrar", {
    method: "fetch",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      nomeServer: nome,
      emailServer: email,
      senhaServer: senha,
    })
  }).then(function (resposta) {

    console.log("resposta: ", resposta);

    if (resposta.ok) {
      cardErro.style.display = "block";

      mensagem_erro.innerHTML = "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

      setTimeout(() => {
        window.location = "login.html";
      }, "2000")

      limparFormulario();
      finalizarAguardar();
    } else {
      throw ("Houve um erro ao tentar realizar o cadastro!");
    }
  }).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
    finalizarAguardar();
  });

  return false;
}

// Gráfico Votos dos Usuários

function atualizarGrafico() {

  fetch("/Jogador/listarVotos", {
    cache: "no-store"
  }).then(function (response) {


    if (response.ok) {
      response.json().then(function (resposta) {
        console.log(`Resposta: ${JSON.stringify(resposta)}`);
        plotarGrafico(resposta)
      })
    } else {
      throw ("Houve um erro ao listar os ados");
    }
  }).catch(function (response) {
    console.log(`#ERRO: ${response}`);
    // finalizarAguardar();
  });
}

var graficoExiste = false;
function plotarGrafico(resposta) {
  if (graficoExiste == true) {
    myChart2.destroy();
  }
  var myChart2 = ''
  let labels = ['Lebron James', 'Stephen Curry', 'Giannis Antetokounmpo']

  let dados = {
    labels: labels,
    datasets: [
      {
        backgroundColor: ['#FFCA00', '#860000', '#440a80'],
        label: 'Número de Votos',
        fill: false,
        data: [],
        borderWidth: 0,
      }]
  }

  console.log(resposta);

  for (let i = 0; i < 3; i++) {
    var registro = resposta[i]
    dados.datasets[0].data.push(registro.jogador);
    console.log(registro.jogador)
  }

  const config = {
    type: 'doughnut',
    data: dados,
  };

  myChart2 = new Chart(
    document.getElementById('myChart2'),
    config
  );

  myChart2.update()
  graficoExiste = true;

}


// Grafico Estatísticas

function atualizarEs() {

  fetch("/Jogador/listarEstatisticas", {
    cache: "no-store"
  }).then(function (response) {


    if (response.ok) {
      response.json().then(function (resposta) {
        console.log(`Resposta: ${JSON.stringify(resposta)}`);
        plotarGrafico(resposta)
      })
    } else {
      throw ("Houve um erro ao listar os ados");
    }
  }).catch(function (response) {
    console.log(`#ERRO: ${response}`);
    // finalizarAguardar();
  });
}

var graficoExiste = false;
function plotarEstatisticas(resposta) {
  if (graficoExiste == true) {
    myChart.destroy();
  }
  var myChart = ''
  let labels = ['1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '10' , '11' , '12' , '13' , '14' , '15' , '16' , '17' , '18' , '19' , '20' , '21' , '22' , '23' , '24' , '25' , '26' , '27' , '28' , '29' , '30' , '31' , '32' , '33' , '34' , '35' , '36' , '37' , '38' , '39' , '40' , '41' , '42' , '43' , '44' , '45' , '46' , '47' , '48' , '49' , '50']

  let dados = {
    labels: labels,
    datasets: [
      {
        backgroundColor: ['#FFCA00', '#860000', '#440a80'],
        label: 'Pontos',
        fill: false,
        data: [],
        borderWidth: 0,
      }]
  }

  console.log(resposta);

  for (let i = 0; i < 50; i++) {
    var registro = resposta[i]
    dados.datasets[0].data.push(registro.pontos);
    console.log(registro.ponto)
  }

  const config = {
    type: 'doughlinenut',
    data: dados,
  };

  myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

  myChart.update()
  graficoExiste = true;
}
