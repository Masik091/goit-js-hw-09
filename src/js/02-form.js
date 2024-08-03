let formData = {email: "", message: "" };

const formClass = document.querySelector('.feedback-form');
const errorDiv = formClass.querySelector('.error');

formClass.addEventListener("submit", (e) => {

    e.preventDefault();
    const email = e.target[0].value;
    const message = e.target[1].value;
    if(email && message) {
        formData.email = email;
        formData.message = message;
    
        console.log(formData);
        errorDiv.style.display  = "none";
        localStorage.setItem("feedback-form-stat", JSON.stringify(formData));
    } else {
       
        errorDiv.style.display  = "block";
    }

})

const localData = localStorage.getItem("feedback-form-stat");
if (!!localData) {
    formData = JSON.parse(localData);
    const emailHTML = formClass.querySelector(".email");
    const messageHTML = formClass.querySelector(".message");

    emailHTML.value = formData.email;
    messageHTML.value = formData.message;
}
let formData = {email: "", message: "" };

const formClass = document.querySelector('.feedback-form');
const errorDiv = formClass.querySelector('.error');

formClass.addEventListener("submit", (e) => {

    e.preventDefault();
    const email = e.target[0].value;
    const message = e.target[1].value;
    if(email && message) {
        formData.email = email;
        formData.message = message;
    
        console.log(formData);
        errorDiv.style.display  = "none";
        localStorage.setItem("feedback-form-stat", JSON.stringify(formData));
        // formClass.reset
    } else {
       
        errorDiv.style.display  = "block";
    }

})

const localData = localStorage.getItem("feedback-form-stat");
if (!!localData) {
    formData = JSON.parse(localData);
    const emailHTML = formClass.querySelector(".email");
    const messageHTML = formClass.querySelector(".message");

    emailHTML.value = formData.email;
    messageHTML.value = formData.message;
}
