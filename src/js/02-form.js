const STORAGE_KEY = "feedback-form-state";
const formData = {email: "", message: "" };
const formClass = document.querySelector('.feedback-form');

formChange();

formClass.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = formData.email;
    const message = formData.message;
    if(!email || !message) {
        alert('Fill please all fields');
        return;
    }
    localStorage.removeItem(STORAGE_KEY);
})
formClass.addEventListener("input", handleFormInput)
function handleFormInput(event){
const key = event.target.name.trim();
const value = event.target.value.trim();
formData[key] = value;
localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
console.log(key, value)
}
function formChange () {
    const localData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!localData) {
        return;
    }
    for (const key in localData){
        formClass.elements[key].value = localData[key];
        formData[key] = localData[key]
    }
    }


