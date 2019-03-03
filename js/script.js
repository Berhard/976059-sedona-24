var link = document.querySelector(".link-hidden-form");
var popup = document.querySelector(".hidden-search-form");

var form = popup.querySelector("form");
var dateon = popup.querySelector("[name=date_on]");
var dateoff = popup.querySelector("[name=date_off]");
var valuelittle = popup.querySelector("[name=number_little]");
var valuebig = popup.querySelector("[name=number_big]");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
    popup.classList.remove("modal-error");
  dateon.focus();
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
form.addEventListener("submit", function (evt) {
    if (!dateon.value || !dateoff.value|| !valuelittle.value|| !valuebig.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
      console.log("Нужно заполнить все поля");
      }
  });
