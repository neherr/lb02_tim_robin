function note_berechnen(){
    let note1 = 0, note2 = 0, note3 = 0;
    let gewichtung1 = 1, gewichtung2 = 1, gewichtung3 = 1;
    let resultat = 0;

    note1 = document.getElementById("note-1").value;
    note2 = document.getElementById("note-2").value;
    note3 = document.getElementById("note-3").value;
    resultat = ((note1*gewichtung1)+(note2*gewichtung2)+(note3*gewichtung3))/(gewichtung1+gewichtung2+gewichtung3);

    //alert("Dein Notenschnitt beträgt: "+resultat);
    document.getElementById("resultat").innerHTML = `Dein Schnitt ist ${resultat}`;


}