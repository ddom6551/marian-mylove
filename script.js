const moods = ["💔 - really really hurt","😭 - really sad","😢 - sad","😞 - overthinking","😑 - bruh","☹️ - unhappy","😒 - annoyed",
               "😠 - angry","😡 - really angry","🤬 - you want me to kms"];
const form = document.getElementById('grievance-form');
const moodInput = document.getElementById('mood');
const moodLabel = document.getElementById('mood-label');
const severityInput = document.getElementById('severity');
const severityLabel = document.getElementById('severity-label');
const responseSelect = document.getElementById('response');
const otherInput = document.getElementById('other');
const thankYou = document.getElementById('thank-you');
const newBtn = document.getElementById('new');

// Initialize
moodLabel.textContent = moods[moodInput.value];
severityLabel.textContent = severityInput.value;

moodInput.addEventListener('change', ()=> moodLabel.textContent = moods[moodInput.value]);
severityInput.addEventListener('change', ()=> severityLabel.textContent = severityInput.value);
responseSelect.addEventListener('change', ()=> otherInput.style.display = responseSelect.value==='other'?'block':'none');

form.addEventListener('submit', e=>{
  e.preventDefault();
  const data = { title:form.title.value, description:form.description.value,
    mood:moods[moodInput.value], severity:severityInput.value,
    response:responseSelect.value==='other'?otherInput.value:responseSelect.value,
    timestamp:new Date().toLocaleString() };
  fetch('https://script.google.com/macros/s/AKfycbzCScHdC9A89s6sbf5en8SCjfspdM9mlnNWMn9_LjqkgJqPGoOgYEk1fomBJsZebKxjVg/exec',{
    method:'POST',mode:'no-cors',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)
  }).then(()=>{ form.classList.add('hidden'); thankYou.classList.remove('hidden'); });
});

newBtn.addEventListener('click',()=>{
  form.reset(); moodLabel.textContent=moods[0]; severityLabel.textContent=severityInput.options[0].text;
  otherInput.style.display='none'; thankYou.classList.add('hidden'); form.classList.remove('hidden');
});
