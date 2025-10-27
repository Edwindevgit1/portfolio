// Initialize EmailJS
(function () {
  emailjs.init({
    publicKey: "ZhBB10EqO8FKBRSLi" 
  });
})();

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  const namePattern = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validation
  if (name === "" || !namePattern.test(name)) {
    formMessage.textContent = "Please enter a valid name.";
    formMessage.style.color = "red";
    formMessage.style.display = "block";
    return;
  }

  if (!emailPattern.test(email)) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "red";
    formMessage.style.display = "block";
    return;
  }

  if (message === "") {
    formMessage.textContent = "Message cannot be empty.";
    formMessage.style.color = "red";
    formMessage.style.display = "block";
    return;
  }

  // Send email using EmailJS
  emailjs
    .send("service_a2oycjb", "template_52e5gio", {
      from_name: name,
      from_email: email,
      message: message,
    })
    .then(
      () => {
        formMessage.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
        formMessage.style.color = "green";
        formMessage.style.display = "block";
        document.getElementById("contactForm").reset();

        setTimeout(() => (formMessage.style.display = "none"), 4000);
      },
      (error) => {
        console.error("EmailJS Error:", error);
        formMessage.textContent = "Error sending message. Please try again.";
        formMessage.style.color = "red";
        formMessage.style.display = "block";
      }
    );
});