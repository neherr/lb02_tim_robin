let alleNoten = {};
let note1 = 0, note2 = 0, note3 = 0;
let gewichtung1 = 1, gewichtung2 = 1, gewichtung3 = 1;
let resultat = 0;



function note_berechnen(){

    /**Mit dieser Funktion werden die eingegebenen Noten und Gewichtungen in JS variablen umgewandelt.
     */

    note1 = Number(document.getElementById("note-1").value);
    note2 = Number(document.getElementById("note-2").value);
    note3 = Number(document.getElementById("note-3").value);

    gewichtung1 = Number(document.getElementById("gewichtung-1").value);
    gewichtung2 = Number(document.getElementById("gewichtung-2").value);
    gewichtung3 = Number(document.getElementById("gewichtung-3").value);

    /* Anschliessend wird geprüft ob sie zwischen 1-6 sind. Danach wird der Schnitt berechnet und angezeigt.*/
    if(note1 >= 1 && note1 <=6 && note2 >= 1 && note2 <=6 && note3 >= 1 && note3 <=6){
        resultat = ((note1*gewichtung1)+(note2*gewichtung2)+(note3*gewichtung3))/(gewichtung1+gewichtung2+gewichtung3);
        resultat = Math.round(resultat * 1000) / 1000;
    } else{
        alert("Du kannst nur  3 Noten zwischen 1-6 verwenden");
    }
    document.getElementById("resultat").innerHTML = `Dein Schnitt ist: ${resultat}`;
}

function note_speichern(){
    /**Mit dieser Funktion werden die Noten gespeichert */
    let speicherName = document.getElementById("speicher-name").value;
    /**Es wird geprüft ob ein Namen zum speichern eingegeben wurde */
    if(speicherName == ""){
        alert("Gib bitte einen Namen ein zum speichern")
    } else{ //hier das objekt mit den richtigen Noten etc. erstellt und danach gespeichert.
        alleNoten = { 
        
            Fach : speicherName,
            Noten : [note1, note2, note3],
            Gewichtung: [gewichtung1, gewichtung2, gewichtung3],
            Schnitt : resultat
        }
        window.localStorage.setItem(speicherName, JSON.stringify(alleNoten));
        alert("Deine Noten wurden gespeichert!");
    } 
    
}

function note_laden(){
    /**Mit dieser Funktion werden die Noten aus dem Browserspeicher geladen */
    let ladeKey = document.getElementById("lade-name").value;
    /**Hier wird geprüft ob ein Namen zum speichern eingegeben wurde */
    if(ladeKey == ""){
        alert("Gib bitte einen Namen ein zum laden")
    } else{ //Hier werden die geladenen Noten ausgegeben
        let geladeneNoten = JSON.parse(window.localStorage.getItem(ladeKey));
            document.getElementById("geladeneNoten").innerHTML = `Du hasst die Noten mit Gewichtung:
            ${geladeneNoten.Noten[0]} (${geladeneNoten.Gewichtung[0]}), ${geladeneNoten.Noten[1]} (${geladeneNoten.Gewichtung[1]}) und ${geladeneNoten.Noten[2]} (${geladeneNoten.Gewichtung[2]}) 
            mit dem Schnitt: ${geladeneNoten.Schnitt} gespeichert unter: ${geladeneNoten.Fach}`
    } 
    

}
function löschen(){
    /**Hier werden die gespeicherten Noten gelöscht */
    window.localStorage.clear();
    document.getElementById("geladeneNoten").innerHTML = "";
}

/**** Client Validation example****/

let gender;
function selectGender(selection) {
    gender = selection;
}

const form = document.getElementById('formular');
const Name = document.getElementById("form-name");
const Nachname = document.getElementById("form-nachname");
const Email = document.getElementById("form-mail");
const Message = document.getElementById("nachricht");

// Show input error message
function showError(input, message) {
    //console.log(input, message);
    const formControl = input.parentElement;
    formControl.className = 'form-control error spalte-rechts';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success spalte-rechts';
}

// Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

// Check required fields
function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
            isRequired = true;
        } else {
            showSuccess(input);
        }
    });

    return isRequired;
}
function checkGender(input){
    if (input == undefined | null){
        const formControl = document.getElementById("radio");
        formControl.className = 'form-control error spalte-rechts';
        const small = formControl.querySelector('small');
        small.innerText = "Bitte Anrede auswählen";
    }
    else {
        const formControl = document.getElementById("radio");
        formControl.className = 'form-control success spalte-rechts';
    }
}

// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
            input,
            `${getFieldName(input)} must be at least ${min} characters`
        );
    } else if (input.value.length > max) {
        showError(
            input,
            `${getFieldName(input)} must be less than ${max} characters`
        );
    } else {
        showSuccess(input);
    }
}
function getValue() {
    let ele=[]
    let problem = document.getElementById("checkbox1")
    if(problem.checked){
        ele.push(problem.value);
    }
    let verbesserung = document.getElementById("checkbox2")
    if(verbesserung.checked){
        ele.push(verbesserung.value);
    }
    let sonstiges = document.getElementById("checkbox3")
    if(sonstiges.checked){
        ele.push(sonstiges.value);
    }
    if(ele.length>0){
        const formControl = document.getElementById("checkbox");
        formControl.className = 'form-control success spalte-rechts';
    }
    else{
        const formControl = document.getElementById("checkbox");
        formControl.className = 'form-control error spalte-rechts';
        const small = formControl.querySelector('small');
        small.innerText = "Bitte Grund auswählen";
    }
}

// Get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function validateForm(){
    if(!checkRequired([Name, Email, Nachname, Message])){
        checkLength(Name, 3, 15);
        checkLength(Nachname, 3, 25);
        checkLength(Message, 5, 500);
        checkEmail(Email);
    }
    checkGender(gender)
    getValue()

}


// Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    validateForm();
});