"use strict";

/*
TODO: 
Använd: $("#nav-placeholder").load("nav.html"); för att ladda in navbar på alla sidor
*/

$(document).ready(function () {
  $(".event-info-button").click(function () {
    $(".event-description").toggle();
  });

  $(".submit-button").click((event) => {
    event.preventDefault();
    $(".form").hide();
    alert(
      "Thank you for messaging us, we will get back to you as soon as we can!"
    );
  });
});

const btn = document.getElementsById("test");

btn.addEventLisener("click", function () {
  console.log("hello");
});
