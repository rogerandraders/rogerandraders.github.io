// MENU MOBILE
function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "assets/img/hamburguer-menu-icon.png";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src =
      "assets/img/hamburguer-menu-close-icon.png";
  }
}
// ABRIR WHATSAPP CONTATO
const botaoContato = document.getElementById("btn-contato");

function enviarMsg() {
  const nome = document.querySelector("#nome");
  const sobrenome = document.querySelector("#sobrenome");
  const cargo = document.querySelector("#cargo");
  const telefone = document.querySelector("#telefone");
  const email = document.querySelector("#email");
  const mensagem = document.querySelector("#mensagem");
  if (
    nome.value &&
    sobrenome.value &&
    cargo.value &&
    telefone.value &&
    email.value &&
    mensagem.value
  ) {
    window.open(
      `https://wa.me/5551999108099?text=Nome:%20${nome.value}%0ASobrenome:%20${sobrenome.value}%0AProfissão:%20${cargo.value}%0ATelefone:%20${telefone.value}%0AE-mail:%20${email.value}%0AMensagem:%20${mensagem.value}`
    );
  } else {
    alert("Preencha todos os campos");
  }
}

botaoContato.addEventListener("click", enviarMsg);
