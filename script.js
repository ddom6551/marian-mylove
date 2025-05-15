const scriptURL = "https://script.google.com/macros/s/AKfycbzCScHdC9A89s6sbf5en8SCjfspdM9mlnNWMn9_LjqkgJqPGoOgYEk1fomBJsZebKxjVg/exec";
const form = document.getElementById("grievance-form");
const formBox = document.getElementById("form-box");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(() => {
      // Switch background image
      document.body.classList.add("thankyou-mode");

      // Replace form with thank you message
      formBox.innerHTML = `
        <div id="thank-you-message">
          <h2>💖 Thank you for sharing, my love.</h2>
          <p>I promise to listen, understand, and grow with you.</p>
        </div>
      `;
    })
    .catch((error) => {
      alert("Something went wrong. Please try again later.");
      console.error("Error:", error);
    });
});