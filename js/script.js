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

var purecookieTitle = "Cookies",
  purecookieDesc =
    "Este site utiliza cookies para melhorar a experiência do utilizador. Ao utilizar o nosso site, você consente com todos os cookies de acordo com a nossa Política de Cookies.",
  purecookieLink =
    '<a href="https://www.cssscript.com/privacy-policy/" target="_blank">Politica</a>',
  purecookieButton = "Aceitar";
function pureFadeIn(e, o) {
  var i = document.getElementById(e);
  (i.style.opacity = 0),
    (i.style.display = o || "block"),
    (function e() {
      var o = parseFloat(i.style.opacity);
      (o += 0.02) > 1 || ((i.style.opacity = o), requestAnimationFrame(e));
    })();
}
function pureFadeOut(e) {
  var o = document.getElementById(e);
  (o.style.opacity = 1),
    (function e() {
      (o.style.opacity -= 0.02) < 0
        ? (o.style.display = "none")
        : requestAnimationFrame(e);
    })();
}
function setCookie(e, o, i) {
  var t = "";
  if (i) {
    var n = new Date();
    n.setTime(n.getTime() + 24 * i * 60 * 60 * 1e3),
      (t = "; expires=" + n.toUTCString());
  }
  document.cookie = e + "=" + (o || "") + t + "; path=/";
}
function getCookie(e) {
  for (
    var o = e + "=", i = document.cookie.split(";"), t = 0;
    t < i.length;
    t++
  ) {
    for (var n = i[t]; " " == n.charAt(0); ) n = n.substring(1, n.length);
    if (0 == n.indexOf(o)) return n.substring(o.length, n.length);
  }
  return null;
}
function eraseCookie(e) {
  document.cookie = e + "=; Max-Age=-99999999;";
}
function cookieConsent() {
  getCookie("purecookieDismiss") ||
    ((document.body.innerHTML +=
      '<div class="cookieConsentContainer" id="cookieConsentContainer"><div class="cookieTitle"><a>' +
      purecookieTitle +
      '</a></div><div class="cookieDesc"><p>' +
      purecookieDesc +
      " " +
      purecookieLink +
      '</p></div><div class="cookieButton"><a onClick="purecookieDismiss();">' +
      purecookieButton +
      "</a></div></div>"),
    pureFadeIn("cookieConsentContainer"));
}
function purecookieDismiss() {
  setCookie("purecookieDismiss", "1", 7), pureFadeOut("cookieConsentContainer");
}
window.onload = function () {
  cookieConsent();
};
