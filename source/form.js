// const form = document.getElementById("contactform");
// const redirectUrl = "https://rsmith9999.github.io/example/thanks.html";

// form.addEventListener("submit", function (event) {
//   // Prevent the default form submission
//   event.preventDefault();

//   // Submit the form using AJAX
//   const formData = new FormData(form);
//   fetch(form.action, {
//     method: form.method,
//     body: formData,
//   })
//     .then((response) => {
//       // Check if the form submission was successful
//       if (response.ok) {
//         // Redirect to the specified URL after the form is submitted
//         window.location.href = redirectUrl;
//       } else {
//         console.error("Form submission failed with status " + response.status);
//         // Handle errors here
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//       // Handle errors here
//     });
// });

// const form = document.getElementById("contactform");
// const redirectUrl = "https://rsmith9999.github.io/example/thanks.html";

// form.addEventListener("submit", function (event) {
//   // Prevent the default form submission
//   event.preventDefault();

//   // Submit the form using AJAX
//   const formData = new FormData(form);
//   fetch(form.action, {
//     method: form.method,
//     body: formData,
//   })
//     .then((response) => {
//       // Check if the form submission was successful
//       if (response.ok) {
//         // Redirect to the specified URL after the form is submitted
//         window.location.href = redirectUrl;
//       } else {
//         console.error("Form submission failed with status " + response.status);
//         // Handle errors here
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//       // Handle errors here
//     });
// });

function submitForm() {
  const form = document.getElementById("contactform");
  const redirectUrl = "https://rsmith9999.github.io/example/thanks.html";

  const formData = new FormData(form);
  fetch(form.action, {
    method: form.method,
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        window.location.href = redirectUrl;
      } else {
        console.error("Form submission failed with status " + response.status);
        // Handle errors here
      }
    })
    .catch((error) => {
      console.error(error);
      // Handle errors here
    });
}
