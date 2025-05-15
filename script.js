const form = document.getElementById('grievance-form');
const formBox = document.getElementById("form-box");

form.addEventListener('submit', e => {
  e.preventDefault();
  const other = form.response.value === "other" ? form.otherResponse.value : "";
  const data = {
    title: document.getElementById('title').value,
    description: document.getElementById('description').value,
    mood: form.mood.value,
    severity: form.severity.value,
    response: form.response.value === "other" ? other : form.response.value,
    timestamp: new Date().toLocaleString()
  };
  fetch('https://script.google.com/macros/s/AKfycbzCScHdC9A89s6sbf5en8SCjfspdM9mlnNWMn9_LjqkgJqPGoOgYEk1fomBJsZebKxjVg/exec', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(() => {
    document.body.classList.add("thankyou-mode");
    formBox.innerHTML = `
      <div id="thank-you-message">
        <div class="heart-sparkle"></div>
        <div class="heart-sparkle" style="top: 50px; left: 80%;"></div>
        <div class="heart-sparkle" style="top: 80%; left: 40%;"></div>
        <h2>💖 Thank you for sharing, my love.</h2>
        <p>I promise to listen, understand, and grow with you.</p>
      </div>
    `;
    document.getElementById("thank-you-message").style.display = 'block';
  });
});
