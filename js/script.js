
//Dark Mode
const swithBtn = document.getElementById("modoOscuro");
swithBtn.addEventListener("click", e =>{
    swithBtn.classList.toggle("active");
    document.body.classList.toggle("active");
})


//Mensajes personalizados
const form = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const mensajeExito = document.getElementById("mensajeExito");


//nombre
nombre.addEventListener("input", () =>{
if (nombre.validity.valueMissing) { 
    nombre.setCustomValidity("El nombre es obligatorio");
    } else if (nombre.validity.patternMismatch) {
        nombre.setCustomValidity("El nombre debe contener solo letras (sin números ni símbolos)");
    } else {
        nombre.setCustomValidity("");
    }

});

nombre.addEventListener("blur", () => {
    nombre.reportValidity(); 
});

//apellido  
apellido.addEventListener("input", () =>{
    if (apellido.validity.valueMissing) { 
        apellido.setCustomValidity("El apellido es obligatorio");
    } else if (apellido.validity.patternMismatch)   {
        apellido.setCustomValidity("El apellido debe contener solo letras (sin números ni símbolos)");
    } else {
        apellido.setCustomValidity("");
    }   
});

apellido.addEventListener("blur", () => {
    apellido.reportValidity(); 
});

//email
const dominiosValidos = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];

email.addEventListener("input", () => {
  const valor = email.value;
  const patron = /^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

  if (email.validity.valueMissing) {    
    email.setCustomValidity("El email es obligatorio");

  } else if (!patron.test(valor)) {
    email.setCustomValidity("El email no es válido. Ej: nombre@gmail.com");

  } else {
    
    const dominio = valor.split("@")[1];

    if (!dominiosValidos.includes(dominio)) {
      email.setCustomValidity("Este dominio no está permitido. Ingresá otro (ej: gmail.com)");
    } else {
      email.setCustomValidity("");
    }
  }
});


email.addEventListener("blur", () => {
    email.reportValidity(); 
});

form.addEventListener("submit", e =>{
    if (!form.checkValidity()) {
        e.preventDefault();
        form.reportValidity();
    }
});

//mensaje de exito 

form.addEventListener("submit", function(e) {

    e.preventDefault();

    if (!form.checkValidity()) {
        form.reportValidity();
    } else {
        mensajeExito.style.display = "block";
    }

});