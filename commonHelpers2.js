import"./assets/modulepreload-polyfill-3cfb730f.js";const n="feedback-form-state",a={email:"",message:""},l=document.querySelector(".feedback-form");s();l.addEventListener("submit",e=>{e.preventDefault();const t=a.email,o=a.message;if(!t||!o){alert("Fill please all fields");return}localStorage.removeItem(n)});l.addEventListener("input",r);function r(e){const t=e.target.name.trim(),o=e.target.value.trim();a[t]=o,localStorage.setItem(n,JSON.stringify(a)),console.log(t,o)}function s(){const e=JSON.parse(localStorage.getItem(n));if(e)for(const t in e)l.elements[t].value=e[t],a[t]=e[t]}
//# sourceMappingURL=commonHelpers2.js.map
