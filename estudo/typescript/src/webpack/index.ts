import isEmail from "validator/lib/isEmail";

const form = document.querySelector("form") as HTMLFormElement;
const usernameInput = document.querySelector("#username") as HTMLInputElement;
const emailInput = document.querySelector("#email") as HTMLInputElement;
const passwordInput = document.querySelector("#password") as HTMLInputElement;
const confirmPasswordInput = document.querySelector(
  "#password2",
) as HTMLInputElement;

form.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  hideErrorMessages(form);
  checkForEmptyFields(
    usernameInput,
    emailInput,
    passwordInput,
    confirmPasswordInput,
  );
  checkEmail(emailInput);
  checkEqualPasswords(passwordInput, confirmPasswordInput);
  if (shouldSendForm(form)) alert("Formulário enviado!");
});

function checkForEmptyFields(...inputs: HTMLInputElement[]) {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, "Campo não pode ficar vazio.");
  });
}

function checkEmail(emailInput: HTMLInputElement) {
  if (!isEmail(emailInput.value))
    showErrorMessage(emailInput, "Email inválido.");
}

function checkEqualPasswords(
  passwordInput: HTMLInputElement,
  confirmPasswordInput: HTMLInputElement,
) {
  if (passwordInput.value !== confirmPasswordInput.value) {
    showErrorMessage(confirmPasswordInput, "As senhas precisam ser iguais.");
  }
}

function hideErrorMessages(form: HTMLFormElement): void {
  form
    .querySelectorAll(".show-error-message")
    .forEach((item) => item.classList.remove("show-error-message"));
}
function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    ".error-message",
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add("show-error-message");
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;
  const errors = form
    .querySelectorAll(".show-error-message")
    .forEach(() => (send = false));
  return send;
}
