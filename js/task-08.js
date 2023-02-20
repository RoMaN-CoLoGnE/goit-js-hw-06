const formRef = document.querySelector(".login-form");
formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;
  if (!email || !password) {
    alert("Enter full data please!");
  } else {
    console.log({ email, password });
    event.target.reset();
  }
}
