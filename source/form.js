function submitFormAndRedirect(formId) {
  const form = document.getElementById(formId);
  const formAction = form.getAttribute("action");
  const redirectUrl = form.getAttribute("_next");
  form.onsubmit = function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Submit the form data using AJAX
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, formAction);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        // Redirect to the specified URL
        window.location.href = redirectUrl;
      }
    };
    xhr.send(new FormData(form));
  };
}
