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

let gender;
let kontaktPerson = {};

function selectGender(selection) {
    gender = selection;
}
function formSubmit(){
    kontaktPerson = {
        pName : document.getElementById("form-name").value,
        pNachname : document.getElementById("form-nachname").value,
        pEmail : document.getElementById("form-mail").value,
        pBirthday : document.getElementById("form-date").value,
        pGender : gender,
        pGrund : document.querySelector('.feedback:checked').value,
        pMessage : document.getElementById("nachricht").value,
    }
    console.log(kontaktPerson);
}

