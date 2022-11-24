"use strict";

/*
TODO: 
Använd: $("#nav-placeholder").load("nav.html"); för att ladda in navbar på alla sidor
*/

$(document).ready(function () {
  $(".event-info-button").click(function (className) {
    const product = $(this).parent();
    console.log(product);
    const description = $(".event-description", product);
    console.log(description.text());

    $(this).siblings(".event-description").toggle(this);
    // $(".event-description").toggle(this);
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

// form.style.display = "none";
