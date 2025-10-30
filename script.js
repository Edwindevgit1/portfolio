(function () {
  emailjs.init({
    publicKey: "ZhBB10EqO8FKBRSLi"
  });
})();

function validateForm() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  // Reset old errors
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  name.classList.remove("is-invalid");
  email.classList.remove("is-invalid");
  message.classList.remove("is-invalid");

  const namePattern = /^[A-Za-z ]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let isValid = true;

  // Name validation
  if (name.value.trim() === "" || !namePattern.test(name.value.trim())) {
    nameError.textContent = "Please enter a valid name.";
    name.classList.add("is-invalid");
    isValid = false;
  }

  // Email validation
  if (email.value.trim() === "" || !emailPattern.test(email.value.trim())) {
    emailError.textContent = "Please enter a valid email address.";
    email.classList.add("is-invalid");
    isValid = false;
  }

  // Message validation (✅ updated)
  if (message.value.trim() === "") {
    messageError.textContent = "Please enter your message.";
    message.classList.add("is-invalid");
    isValid = false;
  }

  return isValid;
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const formMessage = document.getElementById("formMessage");

  if (!validateForm()) return;

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  emailjs
    .send("service_a2oycjb", "template_52e5gio", {
      from_name: name,
      from_email: email,
      message: message,
    })
    .then(() => {
      formMessage.textContent = `✅ Thank you, ${name}! Your message has been sent successfully.`;
      formMessage.style.color = "green";
      formMessage.style.display = "block";
      document.getElementById("contactForm").reset();
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      formMessage.textContent = "❌ Error sending message. Please try again later.";
      formMessage.style.color = "red";
      formMessage.style.display = "block";
    });
});