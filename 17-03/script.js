function validaForm() {
    let errore = true;
    let paragrafo = document.getElementById("feedback")
    if (document.registrazione.cognome.value == "") {
        paragrafo.innerHTML = "inserire cognome";
        errore = false;
    }
    if (document.registrazione.nome.value == "") {
        paragrafo.innerHTML = "inserire nome";
        errore = false;
    }
    let tmp = parseInt(document.registrazione.matricola.value);
    if (isNaN(tmp)) {
        paragrafo.innerHTML = "la matricola deve essere un numero";
        errore = false;
    }
    if (document.registrazione.regione.value == "nessuna") {
        paragrafo.innerHTML = "scegliere una regione";
        errore = false;
    }
    if (document.registrazione.email.value == "" && document.registrazione.telefono.value == "") {
        paragrafo.innerHTML = "almeno un campo tra email e tel deve essere compilato";
        errore = false;

    }
    if (errore == true) { paragrafo.innerHTML = "dati corretti"; }
    return errore;
}