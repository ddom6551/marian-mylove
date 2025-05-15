const moods = ["Devastated","Sad","Neutral","Happy","Glorious"];
const form = document.getElementById('grievance-form');
const formBox = document.getElementById("form-box");

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = {
    title: document.getElementById('title').value,
    description: document.getElementById('description').value,
    mood: form.mood.value,
    severity: form.severity.value,
    timestamp: new Date().toLocaleString()
  };
  fetch('https://script.google.com/macros/s/AKfycbzCScHdC9A89s6sbf5en8SCjfspdM9mlnNWMn9_LjqkgJqPGoOgYEk1fomBJsZebKxjVg/exec', {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(() => {
    document.body.classList.add("thankyou-mode");
    formBox.innerHTML = `
      <div id="thank-you-message">
        <h2>💖 Thank you for sharing, my love.</h2>
        <p>I promise to listen, understand, and grow with you.</p>
      </div>
    `;
  });
});
