function toggleReadMore(button) {
  const wrapper = button.parentElement;
  const content = wrapper.querySelector(".read-more-content");
  const icon = button.querySelector(".read-more-arrow");
  const span = button.querySelector("span");

  if (content.classList.contains("show")) {
    content.style.maxHeight = null;
    content.classList.remove("show");
    icon.classList.remove("rotate");
    span.textContent = "Read More";
  } else {
    content.classList.add("show");
    content.style.maxHeight = content.scrollHeight + "px";
    icon.classList.add("rotate");
    span.textContent = "Read Less";
  }

  wrapper.appendChild(button);
}

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

  document.querySelectorAll(".read-more-btn").forEach((button) => {
    button.onclick = function () {
      toggleReadMore(button);
    };
  });

  // Adjust max-height on window resize
  window.addEventListener("resize", function () {
    document.querySelectorAll(".read-more-content.show").forEach((content) => {
      content.style.maxHeight = content.scrollHeight + "px";
    });
  });

  function handleRadioButtonClick(event) {
    const wrapper = event.target.closest(
      ".pay-type, .pay-type-equal-payments-header"
    );
    if (wrapper) {
      const radioButton = wrapper.querySelector("pr-radio-button");
      if (radioButton) {
        radioButton.checkRadioButton();
      }
    }
  }

  document.body.addEventListener("click", handleRadioButtonClick);

  // Handle payment type radio buttons
  const radioButtons = document.querySelectorAll('input[name="pay-type"]');
  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("change", function () {
      if (radioButton.checked) {
        if (radioButton.id === "pay-installments") {
          const wrapper = radioButton.closest(".pay-type-equal-payments");
          const readMoreButton = wrapper.querySelector(".read-more-btn");
          const isContentShow = wrapper.querySelector(
            ".read-more-content.show"
          );

          if (readMoreButton && !isContentShow) {
            toggleReadMore(readMoreButton);
          }
        } else {
          console.log("fd");
          const wrapper = document.querySelector(".pay-type-equal-payments");
          const content = wrapper.querySelector(".read-more-content.show");
          if (content) {
            content.classList.remove("show");
            content.style.maxHeight = 0;
          }
        }
      }
    });
  });
});
