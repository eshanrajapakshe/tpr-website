// Accordion
document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    const button = accordion.querySelector(".accordion-button");
    const body = accordion.querySelector(".accordion-body");
    const icon = button.querySelector(".accordion-icon");

    button.addEventListener("click", function () {
      if (body.classList.contains("show")) {
        body.style.maxHeight = null;
        body.classList.remove("show");
        icon.classList.remove("rotate");
      } else {
        body.classList.add("show");
        body.style.maxHeight = body.scrollHeight + "px";
        icon.classList.add("rotate");
      }
    });

    window.addEventListener("resize", function () {
      if (body.classList.contains("show")) {
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
  });

  // Read more
  const readMoreButtons = document.querySelectorAll(".read-more-btn");

  readMoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const content = button.nextElementSibling;
      const icon = button.querySelector(".read-more-arrow");

      if (content.classList.contains("show")) {
        content.style.maxHeight = null;
        content.classList.remove("show");
        icon.classList.remove("rotate");
      } else {
        content.classList.add("show");
        content.style.maxHeight = content.scrollHeight + "px";
        icon.classList.add("rotate");
      }
    });
  });


  // Radio Button
  window.addEventListener("resize", function () {
    document.querySelectorAll(".read-more-content.show").forEach((content) => {
      content.style.maxHeight = content.scrollHeight + "px";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".pay-type").forEach((wrapper) => {
    wrapper.addEventListener("click", function () {
      const radioButton = this.querySelector("pr-radio-button");
      if (radioButton) {
        radioButton.checkRadioButton();
      }
    });
  });
});
