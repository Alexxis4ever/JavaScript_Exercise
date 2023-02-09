const note1 = document.getElementById("note1");
const note2 = document.getElementById("note2");
const note3 = document.getElementById("note3");
const result = document.getElementById("result");
const btncalculate = document.getElementById("calculate");
const recover = document.getElementById("recover");
const honor = document.getElementById("honor");
const win = document.getElementById("win");


btncalculate.addEventListener("click", calculateNotes);

function calculateNotes() {
    let date1 = parseFloat(note1.value);
    let date2 = parseFloat(note2.value);
    let date3 = parseFloat(note3.value);

    let final = (date1 * 0.30) + (date2 * 0.30) + (date3 * 0.40);
    result.textContent = final.toFixed(1)

    if (final < 2) {
        result.textContent = "Usted pierde la asignatura: " + final.toFixed(1)
    }
    else if (final > 2.1 && final < 3.4) {
        result.textContent = "Usted pierde pero puede recuperar: " + final.toFixed(1)
    }
    else if (final > 3.5 && final < 4.5) {
        result.textContent = "Usted ha aprobado: " + final.toFixed(1)
    }
    else if (final > 4.6 && final <= 5.0) {
        result.textContent = "Usted ha aprobado y es reconocido como excelente: " + final.toFixed(1)
    }
}

note2.addEventListener('keyup', () => {

    let date1 = parseFloat(note1.value);
    let date2 = parseFloat(note2.value);
    let finalNote = (date1 * 0.30) + (date2 * 0.30);
    result.textContent = finalNote.toFixed(1)

    recover.textContent = "Si deseas recuperar necesitas: " + toRecover()
    honor.textContent = "Para ganar con honores necesitarias minimo: " + withHonors()
    win.textContent = "Para ganar necesitarias minimo: " + toWin()

});



note1.addEventListener('keyup', () =>{

    if (note1.value != "" && note2.value != "") {
        let date1 = parseFloat(note1.value);
        let date2 = parseFloat(note2.value);
        let finalNote = (date1 * 0.30) + (date2 * 0.30);
        result.textContent = finalNote.toFixed(1)
    
        recover.textContent = "Si deseas recuperar necesitas: " + toRecover()
        honor.textContent = "Para ganar con honores necesitarias minimo: " + withHonors()
        win.textContent = "Para ganar necesitarias minimo: " + toWin()
    }
})



function toRecover() {
    let date1 = parseFloat(note1.value);
    let date2 = parseFloat(note2.value);
    let finalNote = 2.1 - ((date1 * 0.30) + (date2 * 0.30));
    return (finalNote / 0.40).toFixed(1);
}

function toWin() {
    let date1 = parseFloat(note1.value);
    let date2 = parseFloat(note2.value);
    let finalNote = 3.5 - ((date1 * 0.30) + (date2 * 0.30));
    return (finalNote / 0.40).toFixed(1);
}

function withHonors() {
    let date1 = parseFloat(note1.value);
    let date2 = parseFloat(note2.value);
    let finalNote = 4.6 - ((date1 * 0.30) + (date2 * 0.30));
    return (finalNote / 0.40).toFixed(1);
}


