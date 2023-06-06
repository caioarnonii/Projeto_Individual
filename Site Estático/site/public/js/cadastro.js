// fetch("/usuarios/cadastrar", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         // crie um atributo que recebe o valor recuperado aqui
//         // Agora vá para o arquivo routes/usuario.js
//         nomeServer: nome,
//         loginServer: login,
//         senhaServer: senha,
//     })
//   }).then(function (resposta) {
  
//     console.log("resposta: ", resposta);
  
//     if (resposta.ok) {
//         cardErro.style.display = "block";
  
//         mensagem_erro.innerHTML = "Cadastro realizado com sucesso! Redirecionando para tela de Login...";
  
//         setTimeout(() => {
//             window.location = "login.html";
//         }, "2000")
  
//         limparFormulario();
//         finalizarAguardar();
//     } else {
//         throw ("Houve um erro ao tentar realizar o cadastro!");
//     }
//   }).catch(function (resposta) {
//     console.log(`#ERRO: ${resposta}`);
//     finalizarAguardar();
//   });
  
//   return false; 

// function sumirMensagem() {
// cardErro.style.display = "none"
// }


// var nome = '';
// var email = '';
// var senha = '';
// var confirmar = '';

// toastr.options = {
//     "closeButton": false,
//     "debug": false,
//     "newestOnTop": false,
//     "progressBar": true,
//     "positionClass": "toast-bottom-right",
//     "preventDuplicates": false,
//     "onclick": null,
//     "showDuration": "300",
//     "hideDuration": "1000",
//     "timeOut": "3500",
//     "extendedTimeOut": "1000",
//     "showEasing": "swing",
//     "hideEasing": "linear",
//     "showMethod": "fadeIn",
//     "hideMethod": "fadeOut"
// }

// function cadastrar() {
//     nome = nome_input.value
//     email = email_input.value
//     senha = senha_input.value
//     confirmar = confirmar_input.value
//     var erro = false
//     if (nome == '' || nome == undefined) {
//         toastr.error("<b style='font-family: arial;'> Nome Inválido </b>")
//         erro = true
//     } if (email == '' || email == undefined) {
//         toastr.error("<b style='font-family: arial;'> Email Inválido </b>")
//         erro = true
//     } if (senha == '' || senha == undefined) {
//         toastr.error("<b style='font-family: arial;'> Senha Inválida </b>")
//         erro = true
//     } else if (senha.length < 6) {
//         toastr.error("<b style='font-family: arial;'> Senha deve ter mais de 6 caracteres </b>")
//         erro = true
//     }
//     if (confirmar == '' || confirmar == undefined) {
//         toastr.error("<b style='font-family: arial;'> Confirmar Senha Inválido </b>")
//         erro = true
//     } if (confirmar != senha) {
//         toastr.error("<b style='font-family: arial;'> Senhas Diferentes </b>")
//         erro = true
//     } if (erro == false) {
//         toastr.success("<b style='font-family: arial;'> Cadastrado realizado </b>")
//     }
// } 
