// $(document).ready(function () {
const $form = document.querySelector("#form");
const $buttonMailto = document.querySelector("#truc");

$form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  $buttonMailto.setAttribute(
    "href",
    `mailto:fjoliveri.wb@gmail.com?subject=contact me: ${form.get("firstname")} ${form.get("lastname")} ${form.get("email")}&body=${form.get(
      "message"
    )}`
  );
  $buttonMailto.click();
}
// });
