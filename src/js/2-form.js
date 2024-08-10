const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const formData = {
    email: "",
    message: ""
};

populateForm ()

form.addEventListener('input', handleFormInput)
form.addEventListener('submit', handleFormSubmit)


function handleFormInput(event) {
    const value = event.target.value.trim();
    const key = event.target.name.trim();

    formData[key] = value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))

    console.log(key, value);

}
function populateForm() {
    const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!savedFormData) {
        return
    }
    for (const key in savedFormData) {
        form.elements[key].value = savedFormData[key];
        formData[key] = savedFormData[key];
    }
}

function handleFormSubmit(event) {
    event.preventDefault();
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }
    localStorage.removeItem(STORAGE_KEY)

    event.currentTarget.reset()
}
