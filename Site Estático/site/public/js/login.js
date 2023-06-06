var email = ''
var senha = ''

toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-bottom-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "3500",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }

function entrar() {
    var emailVar = email_input.value;
    var senhaVar = senha_input.value;

    if (emailVar == "") {
        toastr.error("<b style='font-family: arial;'> Insira um nome válido </b>")
    }
    if (senhaVar == "") {
        toastr.error("<b style='font-family: arial;'> Insira uma senha válida </b>")
    }
    else {
        // setInterval(sumirMensagem, 5000);

        console.log("FORM LOGIN: ", emailVar);
        console.log("FORM SENHA: ", senhaVar);

        fetch("/Jogador/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: emailVar,
                senhaServer: senhaVar
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));

                    sessionStorage.EMAIL_USUARIO = json.Email;
                    sessionStorage.NOME_USUARIO = json.Nome;
                    sessionStorage.ID_USUARIO = json.idUsuario;

                    setTimeout(function () {
                        window.location = "dashboardQN.html";
                    }, 1000); // apenas para exibir o loading

                });

            } else {

                console.log("Houve um erro ao tentar realizar o login!");

                resposta.text().then(texto => {
                    console.error(texto);
                    toastr.error("<b style='font-family: arial;'> Conta não cadastrada </b>")
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })
    }



}


