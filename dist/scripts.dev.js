"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MobileNavbar =
/*#__PURE__*/
function () {
  function MobileNavbar(mobileMenu, navList, navLinks) {
    _classCallCheck(this, MobileNavbar);

    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
  }

  _createClass(MobileNavbar, [{
    key: "animateLinks",
    value: function animateLinks() {
      this.navLinks.forEach(function (link, index) {
        link.style.animation ? link.style.animation = "" : link.style.animation = "navLinkFade 0.5s ease forwards ".concat(index / 7 + 0.3, "s");
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  }, {
    key: "addClickEvent",
    value: function addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  }, {
    key: "init",
    value: function init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }

      return this;
    }
  }]);

  return MobileNavbar;
}();

var mobileNavbar = new MobileNavbar(".mobile-menu", ".nav-list", ".nav-list li");
mobileNavbar.init(); // 👁 MOSTRAR / OCULTAR SENHA

var senha = document.querySelector("#senha");
var toggleSenha = document.querySelector("#toggleSenha");

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
} // ==============================
// 📄 MÁSCARAS CPF E TELEFONE
// ==============================


var cpfInput = document.querySelector("#cpf");
var telInput = document.querySelector("#telefone"); // 🔹 CPF (000.000.000-00)

if (cpfInput) {
  cpfInput.addEventListener("input", function () {
    var valor = cpfInput.value.replace(/\D/g, ""); // só números

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
} // 🔹 TELEFONE ((99) 99999-9999)


if (telInput) {
  telInput.addEventListener("input", function () {
    var valor = telInput.value.replace(/\D/g, ""); // só números

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
//# sourceMappingURL=scripts.dev.js.map
