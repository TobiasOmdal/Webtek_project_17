var email = document.getElementById("email");
var navn = document.getElementById("navn");
var melding = document.getElementById("melding");
var submit = document.getElementById("submit");

function FormValidate() {
    console.log(email.value);
    console.log(navn.value);
    console.log(melding.value);

    if (navn.value == ""){
        alert("Navn må fylles ut!");
        return false
    } else if (email.value.length < 20 && email.value.includes("@") == false) {
        alert("Ikke en gyldig emailadresse!");
    }  else if (melding.value.length < 30) {
        alert("Meldingen er ikke lang nok!");
    } else {
        alert("Din beskjed er blitt sendt!")
        navn.value = ""
        email.value = ""
        melding.value = ""
    }

}
