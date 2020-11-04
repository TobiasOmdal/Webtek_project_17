
//Variables from kontakt.html
var email = document.getElementById("email");
var navn = document.getElementById("navn");
var melding = document.getElementById("melding");
var submit = document.getElementById("submit");

//the function that validates the form that triggers on submit
function FormValidate() {
    console.log(email.value);
    console.log(navn.value);
    console.log(melding.value);

    if (navn.value == ""){ //Starts with checking to see if there has been filled in a name, if it hasnt, it will alert the user, otherwise it moves to the next condition
        alert("Navn må fylles ut!");
        return false
    } else if (email.value.length < 20 && email.value.includes("@") == false) { //This condition checks if the email-adress is a valid one by checking length and if it contains "@"
        alert("Ikke en gyldig emailadresse!"); //If it doesnt meet the criteria, the user is alerted, otherwise it checks for the next condition
    }  else if (melding.value.length < 30) { //This condition checks if the message is long enough, so that messages that are nonsense does not get sent
        alert("Meldingen er ikke lang nok!");//If it isnt long enough, it will alert the user
    } else {
        alert("Din beskjed er blitt sendt!") //Finally, if all conditions prior are met, the whole form will be reset and the user will be alerted that the message has been sent
        navn.value = ""
        email.value = ""
        melding.value = ""
    }

}
