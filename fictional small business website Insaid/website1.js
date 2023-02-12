// Get a reference to the form element
const form = document.querySelector("#contact-form");

// Add a submit event listener to the form
form.addEventListener("submit", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values of the form inputs
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  // Log the form values to the console
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);

  // Clear the form inputs
  form.elements.name.value = "";
  form.elements.email.value = "";
  form.elements.message.value = "";

  // Show a success message
  alert("Your message was sent successfully!");
});
