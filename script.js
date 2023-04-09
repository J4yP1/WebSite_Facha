function sendEmail(){
    Email.send({
      SecureToken : "d34ee866-7a51-44d1-8283-b7e2b0c13d0c",
      To : 'jocacerqueira17@gmail.com',
      From : document.getElementById("email").value,
      Subject : "Formulario - Website Freguesia da Facha",
      Body : "Nome: " + document.getElementById("name").value
        + "<br> E-mail: " + document.getElementById("email").value
        + "<br> Numero de Telemovel: " + document.getElementById("phone").value
        + "<br> Mensagem: " + document.getElementById("mensagem").value
  }).then(
    message => alert(message)
  );
  }