function initListeners(){
  $("#login").on("click", (e) => {
    $("#modal").toggle();
  });

  $(".close").on("click", (e) => {
    $("#modal").toggle();
  });

  $(".login-button").on("click", (e) => {
    alert("Logged In!");
  });
}

$(document).ready(function () {
  initListeners();
});