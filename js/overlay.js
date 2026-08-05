console.log(document.readyState);
console.log(document.getElementById("seal"));

const overlay = document.getElementById("overlay");
const envelope = document.querySelector(".envelope");
const letter = document.querySelector(".letter");
const flapTop = document.querySelector(".flap-top");
const seal = document.getElementById("seal");

// se existir um áudio no site
const musica = document.getElementById("musica");

let opened = false;

seal.addEventListener("click", abrirEnvelope);

function abrirEnvelope() {
  if (opened) return;
  opened = true;

  // impede novos cliques
  seal.disabled = true;

  // efeito de apertar o selo
  seal.classList.add("pressed");

  // vibração leve
  setTimeout(() => {
    seal.classList.add("shake");
  }, 120);

  // remove selo
  setTimeout(() => {
    seal.classList.remove("shake");
    seal.classList.add("broken");
  }, 350);

  // abre a aba do envelope
  setTimeout(() => {
    flapTop.classList.add("opened");
  }, 550);

  // carta sobe
  setTimeout(() => {
    letter.classList.add("show");
  }, 900);

  // carta sai totalmente
  setTimeout(() => {
    letter.classList.add("leave");
  }, 2200);

  // envelope desaparece
  setTimeout(() => {
    envelope.classList.add("fade");
  }, 2700);

  // remove overlay
  setTimeout(() => {
    overlay.classList.add("hidden");

    setTimeout(() => {
      overlay.remove();
    }, 900);
  }, 3400);

  // toca música
  if (musica) {
    musica.play().catch(() => {});
  }
}
