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
//const submitBtn = document.getElementById("submit-btn");
const form      = document.getElementById("form");
const formData  = document.querySelectorAll(".formData");
const closeBtn  = document.querySelectorAll(".close");
const firstName = document.getElementById("first");
const lastName  = document.getElementById("last");
const email     = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity  = document.getElementById("quantity");
//var radio     = document.getElementsByClassName("checkbox-input");
var radio1 = document.getElementById("location1");
var radio2 = document.getElementById("location2");
var radio3 = document.getElementById("location3");
var radio4 = document.getElementById("location4");
var radio5 = document.getElementById("location5");
var radio6 = document.getElementById("location6");


const checkUse  = document.getElementById("checkbox1");

const submitBtn = document.querySelectorAll(".btn-submit");
var wordPattern = /^[A-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.'--]{2,}$/
var mailPattern = /^[A-z0-9@._-]{1,}$/
var numPattern  = /^[0-9]{1,2}$/
var nameError = document.createTextNode("Adadzd");

modalBtn.forEach((btn) => btn.addEventListener("click",function(){
  modalbg.style.display = "block"
}));

closeBtn.forEach((btn) => btn.addEventListener("click",function(){
  modalbg.style.display = "none"
}));

//location.style.border = 'solid red'




firstName.insertAdjacentHTML("afterend","<p class =\"error\" id =\"firstNameError\"> Veuillez entrer 2 caractères ou plus pour le champ du nom.</p>");
lastName.insertAdjacentHTML("afterend","<p id =\"lastNameError\"> Veuillez entrer 2 caractères ou plus pour le champ du nom.</p>");
email.insertAdjacentHTML("afterend","<p id =\"emailError\" >Veuillez entrer une E-mail valide</p>");
quantity.insertAdjacentHTML("afterend","<p id =\"quantityError\" >Vous devez choisir un nombre</p>");
quantity.insertAdjacentHTML("afterend","<p id =\"quantity1Error\" >Vous devez choisir une option</p>");
birthDate.insertAdjacentHTML("afterend","<p id =\"birthDateError\">Vous devez entrer votre date de naissance</p>");
checkUse.nextElementSibling.insertAdjacentHTML("afterend","<p id =\"chechUseError\">Vous devez vérifier que vous acceptez les termes et conditions.</p>");

form.insertAdjacentHTML("afterend","<p id =\"merciButton\">Merci ! Votre réservation a été reçue.</p>");


document.getElementById("firstNameError").style.display="none";
document.getElementById("lastNameError").style.display="none";
document.getElementById("emailError").style.display="none";
document.getElementById("quantityError").style.display="none";
document.getElementById("quantity1Error").style.display="none";
document.getElementById("birthDateError").style.display="none";
document.getElementById("chechUseError").style.display="none";
document.getElementById("merciButton").style.display="none";




form.addEventListener('submit',(e) => {
  let errors = []
  //FIRST NAME
  /*if (!firstName.value.trim().match(wordPattern)){
    errors.push(nameError)
    firstName.style.border = 'solid red'
    document.getElementById("firstNameError").style.display="inline";
    document.getElementById("firstNameError").style.color="red";
    document.getElementById("firstNameError").style.fontSize="1rem";


    //firstName.after.textContent = "ndjf"
  }
  else{
    firstName.style.border = 'solid white'
    document.getElementById("firstNameError").style.display="none";
  }
  //LAST NAME
  if (!lastName.value.trim().match(wordPattern)){
    errors.push(nameError)
    lastName.style.border = 'solid red'
    document.getElementById("lastNameError").style.display="inline";
    document.getElementById("lastNameError").style.color="red";
    document.getElementById("lastNameError").style.fontSize="1rem";
  }
  else{
    lastName.style.border = 'solid white'
    document.getElementById("lastNameError").style.display="none";
  }
  //EMAILS
 if (!email.value.trim().match(mailPattern)){
    errors.push(nameError)
    document.getElementById("emailError").style.display="inline";
    document.getElementById("emailError").style.color="red";
    document.getElementById("emailError").style.fontSize="1rem";
    email.style.border = 'solid red'
  }
  else{
    email.style.border = 'solid white'
    document.getElementById("emailError").style.display="none";

  }
  //BIRTH DATE
  if (!birthDate.value.length>0){
    errors.push(nameError)
    birthDate.style.border = 'solid red'
    document.getElementById("birthDateError").style.display="inline";
    document.getElementById("birthDateError").style.color="red";
    document.getElementById("birthDateError").style.fontSize="1rem";
  }
  else{
    birthDate.style.border = 'solid white'
    document.getElementById("birthDateError").style.display="none";
  }
  //QUANTITY
  if (!quantity.value.trim().match(numPattern)){
    errors.push(nameError)
    quantity.style.border = 'solid red'
    document.getElementById("quantityError").style.display="inline";
    document.getElementById("quantityError").style.color="red";
    document.getElementById("quantityError").style.fontSize="1rem";
  }
  else {
    if(quantity.value != 0){
      document.getElementById("quantityError").style.display="none";
      document.getElementById("quantity1Error").style.display="inline";
      document.getElementById("quantity1Error").style.color="red";
    document.getElementById("quantity1Error").style.fontSize="1rem";

      if(radio1.checked || radio2.checked || radio3.checked || radio4.checked || radio5.checked || radio6.checked){
        quantity.style.border = 'solid white'
        document.getElementById("quantity1Error").style.display="none";
        document.getElementById("quantityError").style.display="none";
      }
      else{
        errors.push(nameError)
      }
    }
    else{
      quantity.style.border = 'solid white'
      document.getElementById("quantity1Error").style.display="none";
      document.getElementById("quantityError").style.display="none";
    }
  }
  //CHECKBOX USE CONDITIONS*/
  if (!checkUse.checked){
    errors.push(nameError)
    checkUse.nextElementSibling.style.border = 'solid red'
    document.getElementById("chechUseError").style.display="inline-block";
    document.getElementById("chechUseError").style.color="red";
    document.getElementById("chechUseError").style.fontSize="1rem";
  }
  else{
    checkUse.nextElementSibling.style.border = 'solid transparent'
    document.getElementById("chechUseError").style.display="none";
  }

  if (errors.length == 0){
    document.getElementById("form").style.display = "none";
    document.getElementById("merciButton").style.display="block";
    document.getElementById("merciButton").style.color="white";
    document.getElementById("merciButton").style.margin="270px auto";

    e.preventDefault();
  }
  if (errors.length > 0 ){
    e.preventDefault();
  }})