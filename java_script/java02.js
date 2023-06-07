function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  var country = document.getElementById("country").value;
  var occupation = document.getElementById("occupation").value;

  if (name === "" || email === "" || phone === "" || subject === "" || message === "" || country === "" || occupation === "") {
    alert("Por favor, preencha todos os campos.");
    return false;
  }
  if (!/^\d+$/.test(phone)) {
    alert("O campo de telefone aceita apenas números.");
    return false;
  }
  alert("Formulário enviado com sucesso!");
  return true;
}
