const scriptURL = "https://script.google.com/macros/s/PASTE_YOUR_WEB_APP_URL_HERE/exec"; // Replace this with your actual script URL
const form = document.getElementById("grievance-form");
const formBox = document.getElementById("form-box");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then(response => {
      if (!response.ok) throw new Error(`Status ${response.status}`);
      return response.text();
    })
    .then(() => {
      document.body.classList.add("thankyou-mode");
      formBox.innerHTML = `
        <div id="thank-you-message">
          <h2>💖 Thank you for sharing, my love.</h2>
          <p>I promise to listen, understand, and grow with you.</p>
        </div>
      `;
    })
    .catch((error) => {
      alert("Something went wrong. Please check your scriptURL and network connection.");
      console.error("Submission Error:", error);
    });
