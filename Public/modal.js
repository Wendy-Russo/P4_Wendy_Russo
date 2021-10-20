function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg   = document.querySelector(".bground");
const modalBtn  = document.querySelectorAll(".modal-btn");
const form      = document.getElementById("form");
const formData  = document.querySelectorAll(".formData");
const closeBtn  = document.querySelectorAll(".close");
const firstName = document.getElementById("first");
const lastName  = document.getElementById("last");
const email     = document.getElementById("email");
const birthDate = document.querySelectorAll("#birthdate");
const quantity  = document.getElementById("quantity");
const checkUse  = document.getElementById("checkbox1");

const submitBtn = document.querySelectorAll(".btn-submit");
var wordPattern = /^[A-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.'--]{2,}$/
var mailPattern = /^[A-z0-9@._-]{1,}$/
var numPattern  = /^[0-9]{1,2}$/
//var errorP      = document.createElement('p')
//var nameError   = document.createTextNode("invalid");

// launch modal event


modalBtn.forEach((btn) => btn.addEventListener("click",function(){
  modalbg.style.display = "block"
}));

closeBtn.forEach((btn) => btn.addEventListener("click",function(){
  modalbg.style.display = "none"
}));

//location.style.border = 'solid red'

form.addEventListener('submit',(e) => {

  let errors = []
  let nameError = "name error"

  if (!firstName.value.trim().match(wordPattern)){
    errors.push(nameError)
    firstName.style.border = 'solid red'

    firstName.insertAdjacentElement("afterend", nameError)
    //errorP.appendChild(nameError);
    firstName.style.color = "red"
  }
  else{
    firstName.style.border = 'solid white'
  }

  if (!lastName.value.trim().match(wordPattern)){
    errors.push(nameError)
    lastName.style.border = 'solid red'
  }
  else{
    lastName.style.border = 'solid white'
  }

 if (!email.value.trim().match(mailPattern)){
    errors.push(nameError)
    email.style.border = 'solid red'
  }
  else{
    email.style.border = 'solid white'
  }

  if (!quantity.value.trim().match(numPattern)){
    errors.push(nameError)
    quantity.style.border = 'solid red'
  }
  else{
    quantity.style.border = 'solid white'
  }
  if (checkUse.value != true){
    errors.push(nameError)
    checkUse.nextElementSibling.style.border = 'solid red'
  }
  if (errors.length > 0 ){
    e.preventDefault()
  }

})
//submitBtn.forEach((btn) => btn.addEventListener('click', validateForm));
