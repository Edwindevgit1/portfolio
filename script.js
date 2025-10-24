document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  // Only letters and single spaces allowed in name
  const namePattern = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!namePattern.test(name)) {
    formMessage.textContent = "Please enter a valid name (letters and spaces only, no numbers).";
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

  // Success
  formMessage.textContent = `Thank you for your message, ${name}! I’ll get back to you soon.`;
  formMessage.style.color = "green";
  formMessage.style.display = "block";

  this.reset();

  setTimeout(() => {
    formMessage.style.display = "none";
  }, 4000);
});