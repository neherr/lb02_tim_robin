let alleNoten = {};
let note1 = 0, note2 = 0, note3 = 0;
let gewichtung1 = 1, gewichtung2 = 1, gewichtung3 = 1;
let resultat = 0;



function note_berechnen(){

    note1 = Number(document.getElementById("note-1").value);
    note2 = Number(document.getElementById("note-2").value);
    note3 = Number(document.getElementById("note-3").value);

    gewichtung1 = Number(document.getElementById("gewichtung-1").value);
    gewichtung2 = Number(document.getElementById("gewichtung-2").value);
    gewichtung3 = Number(document.getElementById("gewichtung-3").value);

    if(note1 >= 1 && note1 <=6 && note2 >= 1 && note2 <=6 && note3 >= 1 && note3 <=6){
        resultat = ((note1*gewichtung1)+(note2*gewichtung2)+(note3*gewichtung3))/(gewichtung1+gewichtung2+gewichtung3);
    } else{
        resultat = "du kannst nur Noten zwischen 1-6 verwenden";
    }
    document.getElementById("resultat").innerHTML = `Dein Schnitt ist: ${resultat}`;
}

function note_speichern(){
    let speicherName = document.getElementById("speicher-name").value;
    alleNoten = { 
        "Noten" : [note1, note2, note3, resultat],
        "Fach" : speicherName

    }


    localStorage.setItem("note", alleNoten);
}

function note_laden(){
    geladeneNoten = localStorage.getItem("note");
    console.log(geladeneNoten.Fach);

}