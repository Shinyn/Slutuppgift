"use strict";

$(document).ready(function () {
  $(".event-info-button").click(function (className) {
    $(this).siblings(".event-description").toggle(this);
  });

  $("#form").on("submit", function (event) {
    event.preventDefault();
    $("#form").children().hide();
    $("#form").append(
      "<div class='appended'>Thank you for messaging us, we will get back to you as soon as we can!</div>"
    );
  });

  let hidden = true;
  $("#extra-info-button").click(() => {
    if (hidden) {
      $("#p-hidden").slideDown(300);
      hidden = false;
    } else {
      $("#p-hidden").slideUp(300);
      hidden = true;
    }
  });
});
