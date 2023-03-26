const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkForm();
});

email.addEventListener("blur", () => {
  checkInputEmail();
});

username.addEventListener("blur", () => {
  checkInputUserName();
});

password.addEventListener("blur", () => {
  checkPassword();
});

passwordConfirmation.addEventListener("blur", () => {
  checkPasswordConfirmation();
});

function checkInputUserName() {
  const userNameValue = username.value;

  if (userNameValue === "") {
    errorInput(username, "O nome é obrigatório.");
  } else {
    const formItem = username.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputEmail() {
  const emailValue = email.value;

  if (emailValue === "") {
    errorInput(email, "O email é obrigatório.");
  } else {
    const formItem = email.parentElement;
    formItem.className = "form-content";
  }
}

function checkPassword() {
  const passwordValue = password.value;

  if (passwordValue === "") {
    errorInput(password, "Senha é obrigatória.");
  } else if (passwordValue.length < 8) {
    errorInput(password, "A senha precisa ter no mínimo 8 caracteres.");
  } else {
    const formItem = password.parentElement;
    formItem.className = "form-content";
  }
}

function checkPasswordConfirmation() {
  const passwordValue = password.value;
  const confirmationPasswordValue = passwordConfirmation.value;

  if (confirmationPasswordValue === "") {
    errorInput(passwordConfirmation, "A confirmação de senha é obrigatória.");
  } else if (confirmationPasswordValue !== passwordValue) {
    errorInput(passwordConfirmation, "As senhas não são iguais.");
  } else {
    const formItem = passwordConfirmation.parentElement;
    formItem.className = "form-content";
  }
}

function checkForm() {
  checkInputUserName();
  checkInputEmail();
  checkPassword();
  checkPasswordConfirmation();

  const formItems = form.querySelectorAll(".form-content");

  const isValid = [...formItems].every((item) => {
    return item.className === "form-content";
  });

  if (isValid) {
    alert("CADASTRADO COM SUCESSO!");
  }
}

function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a");

  textMessage.innerText = message;

  formItem.className = "form-content error";
}
