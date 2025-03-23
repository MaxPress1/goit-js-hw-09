const form = document.querySelector("form");
const LOCAL_STORAGE_KEY = "feedback-form-state";

let savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
let formData = savedData ? JSON.parse(savedData) : { email: "", message: "" };

form.elements.email.value = formData.email || "";
form.elements.message.value = formData.message || "";

form.addEventListener("input", (event) => {
    const { name, value } = event.target;
    formData[name] = value.trim()
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }
    
    console.log('Form Data Submitted:', formData);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    form.reset();
    formData = { email: "", message: "" };
});