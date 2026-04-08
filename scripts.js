class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);

mobileNavbar.init();


// 👁 MOSTRAR / OCULTAR SENHA
const senha = document.querySelector("#senha");
const toggleSenha = document.querySelector("#toggleSenha");

if (toggleSenha && senha) {
  toggleSenha.addEventListener("click", function () {
    if (senha.type === "password") {
      senha.type = "text";
      this.classList.remove("bi-eye");
      this.classList.add("bi-eye-slash");
    } else {
      senha.type = "password";
      this.classList.remove("bi-eye-slash");
      this.classList.add("bi-eye");
    }
  });
}


// ==============================
// 📄 MÁSCARAS CPF E TELEFONE
// ==============================

const cpfInput = document.querySelector("#cpf");
const telInput = document.querySelector("#telefone");


// 🔹 CPF (000.000.000-00)
if (cpfInput) {
  cpfInput.addEventListener("input", () => {

    let valor = cpfInput.value.replace(/\D/g, ""); // só números
    valor = valor.substring(0, 11); // limite

    if (valor.length > 9) {
      valor = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
    } else if (valor.length > 6) {
      valor = valor.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
    } else if (valor.length > 3) {
      valor = valor.replace(/(\d{3})(\d{1,3})/, "$1.$2");
    }

    cpfInput.value = valor;
  });
}


// 🔹 TELEFONE ((99) 99999-9999)
if (telInput) {
  telInput.addEventListener("input", () => {

    let valor = telInput.value.replace(/\D/g, ""); // só números
    valor = valor.substring(0, 11); // limite (com DDD)

    if (valor.length > 10) {
      // celular com 9 dígitos
      valor = valor.replace(/(\d{2})(\d{5})(\d{1,4})/, "($1) $2-$3");
    } else if (valor.length > 6) {
      // telefone fixo
      valor = valor.replace(/(\d{2})(\d{4})(\d{1,4})/, "($1) $2-$3");
    } else if (valor.length > 2) {
      valor = valor.replace(/(\d{2})(\d{1,5})/, "($1) $2");
    }

    telInput.value = valor;
  });
}