function w3_open() {
  document.getElementById("mySidebar").style.width = "20%";
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

function cadastrar(){
  var nome = document.getElementById("nome").value 
  var data = document.getElementById("data").value 
  var email = document.getElementById("email").value 
  var documento = document.getElementById("documento").value 
  var senha = document.getElementById("senha").value 
  var confsenha = document.getElementById("confsenha").value 
  var filhos = document.getElementById("filhos").value 
  var tipodef = document.getElementById("tipodef").value 

  localStorage.setItem("Nome", nome)
  localStorage.setItem("Data", data)
  localStorage.setItem("Email", email)
  localStorage.setItem("Documento", documento)
  localStorage.setItem("Senha", senha)
  localStorage.setItem("Confsenha", confsenha)
  localStorage.setItem("Filhos", filhos)
  localStorage.setItem("Tipodef", tipodef)

  if (senha == confsenha) {}
  else {
    alert("As senhas precisam ser idênticas!")
  }
  if (filhos <0) {
    alert("Número de filhos inválido!")
  }
  else {}
}
  


