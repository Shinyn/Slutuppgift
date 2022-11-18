"use strict";

/*
TODO: lägg till alt på alla bilder

Använd: $("#nav-placeholder").load("nav.html"); för att ladda in navbar på alla sidor
*/

$(document).ready(function () {
  $(".event-info-button").click(function () {
    $(".event-description").toggle();
  });
});

const btn = document.getElementsById("test");

btn.addEventLisener("click", function () {
  console.log("hello");
});
