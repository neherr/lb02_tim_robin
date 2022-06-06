//ausgewähltes Geschlecht/anrede wird als Variable gespeichert
let gender;
function selectGender(selection) {
    gender = selection;
}
//deklarieren der versch. input variables
const form = document.getElementById('formular');
const Name = document.getElementById("name");
const Nachname = document.getElementById("nachname");
const Email = document.getElementById("email");
const Message = document.getElementById("nachricht");
let isValid = true;

// Anzeigen der Fehlermeldung
function showError(input, message) {
    isValid = false;
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
    } else {
        showError(input, 'Email ist nicht korrekt');
    }
}

// Prüfen ob alles ausgefüllt ist
function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} muss ausgefüllt sein`);
            isRequired = true;
        } else {
            showSuccess(input);
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
    }
}

// Länge der Inputs prüfen
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
            input,
            `${getFieldName(input)} muss mindestens ${min} Zeichen sein`
        );
    } else if (input.value.length > max) {
        showError(
            input,
            `${getFieldName(input)} muss weniger als ${max} Zeichen sein`
        );
    } else {
        showSuccess(input);
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
        checkLength(Name, 2, 20);
        checkLength(Nachname, 2, 20);
        checkLength(Message, 5, 500);
        checkEmail(Email);
    }
    checkGender(gender)
    getValue()

    if (isValid == true) {
        alert(`Danke für Ihre Kontakt Anfrage ${gender} ${Name.value} ${Nachname.value}, Sie werden schnellst möglich von uns hören!`)
    }else {
        console.log("nicht abgeschickt!");
        isValid = true;
    }
}
// Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    validateForm();
});