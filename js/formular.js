//ausgewähltes Geschlecht/anrede wird als Variable gespeichert
let gender;
function selectGender(selection) {
    gender = selection;
}

const form = document.getElementById('formular');
const Name = document.getElementById("form-name");
const Nachname = document.getElementById("form-nachname");
const Email = document.getElementById("form-mail");
const Message = document.getElementById("nachricht");
let valid = 0;
let required = 0;

// Anzeigen der Fehlermeldung
function showError(input, message) {
    //console.log(input, message);
    const formControl = input.parentElement;
    formControl.className = 'form-control error spalte-rechts';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Anzeigen bei richtigem ausfüllen
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success spalte-rechts';
}

// eingegebene E-Mail überprüfen
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
        valid+=1;
    } else {
        showError(input, 'Email is not valid');
    }
}

// Prüfen ob alles ausgefüllt ist
function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
            isRequired = true;
        } else {
            showSuccess(input);
            required+=1;
        }
    });

    return isRequired;
}
// Prüfen ob eine Anrede ausgewählt wurde
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
        required+=1;
    }
}

// Länge der Inputs prüfen
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
        valid+=1;
    }
}
// Ausgewählten Grund prüfen und auswerten
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
        required+=1;
    }
    else{
        const formControl = document.getElementById("checkbox");
        formControl.className = 'form-control error spalte-rechts';
        const small = formControl.querySelector('small');
        small.innerText = "Bitte Grund auswählen";
    }
}

// Name des Input Felds
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// beim Abschicken des Forms benutzte Functions
function validateForm(){
    if(!checkRequired([Name, Email, Nachname, Message])){
        checkLength(Name, 3, 15);
        checkLength(Nachname, 3, 25);
        checkLength(Message, 5, 500);
        checkEmail(Email);
    }
    checkGender(gender)
    getValue()
    if (required == 6 && valid ==4){
        alert("Formular wurde abgeschickt, wir bearbeiten deine Anfrage so schnell wie möglich!")
        location.reload();
    } else console.log("nicht abschicken")
    required = 0;
    valid = 0;
}


// Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    validateForm();
});