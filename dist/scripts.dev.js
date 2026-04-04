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
mobileNavbar.init(); // 👁 FUNÇÃO PARA MOSTRAR / OCULTAR SENHA

var senha = document.querySelector("#senha");
var toggleSenha = document.querySelector("#toggleSenha");
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
//# sourceMappingURL=scripts.dev.js.map
