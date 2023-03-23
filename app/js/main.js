const button = document.querySelector("#button");
const modal = document.querySelector("#modal");
const close = document.querySelector("#close");
const menu = document.querySelector(".mobile");
const closeBtn = document.querySelector(".menu-close");
const openBtn = document.querySelector(".menu-icon");
const cancelBtn = document.querySelector("#cancel");
const overlay = document.querySelector(".overlay");

openBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
modal.addEventListener("click", closeModalAll);
button.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
cancelBtn.addEventListener("click", closeModal);

function openModal() {
  overlay.style.display = "block";
  modal.style.display = "block";
  overlay.classList.add("modal-show");
  setTimeout(() => {
    modal.classList.add("show");
    modal.classList.add("modal-show");
  }, 300);
  modal.classList.add("show");
}
function closeModal() {
  modal.classList.remove("modal-show");
  modal.classList.remove("show");

  setTimeout(() => {
    overlay.classList.remove("modal-show");
    overlay.style.display = "none";
    modal.style.display = "none";
  }, 300);
}

function openMenu() {
  menu.classList.add("open");
}
function closeMenu() {
  menu.classList.remove("open");
}
function closeModalAll(e) {
  const eClass = e.target.classList;
  if (eClass.contains("modal") || eClass.contains("close")) {
    modal.classList.remove("modal-show");
    modal.classList.remove("show");
    setTimeout(() => {
      overlay.classList.remove("modal-show");
      overlay.style.display = "none";
      modal.style.display = "none";
    }, 300);
  }
}

document.addEventListener("click", (e) => {
  if (!e.target.closest(".mobile") && !e.target.closest(".menu-icon")) {
    menu.classList.remove("open");
  }
});
