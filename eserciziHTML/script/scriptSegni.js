function cercaSegno() {
 
    let data = new Date(document.data.dataScelta.value);
    let giorno = data.getDate();
    let mese = data.getMonth() + 1;
    let img = "";
    let segno;

    if (mese == 1) {
        if(giorno <= 20){
            img = "images/capricorno.jpg";
          segno = "capricorno";
        }
        else{
            img = "images/acquario.jpg";
          segno = "acquario";
        }
    }
    else if (mese == 2) {
        if(giorno <= 19){
            img = "images/acquario.jpg";
          segno = "acquario";
        }
        else{
            img = "images/pesci.jpg";
          segno = "pesci";
        }
    }
    else if (mese == 3) {
        if(giorno <= 20){
            img = "images/pesci.jpg";
          segno = "pesci";
        }
        else{
            img = "images/ariete.jpg";
          segno = "ariete";
        }
    }
    else if (mese == 4) {
        if(giorno <= 20){
            img = "images/ariete.jpg";
          segno = "ariete";
        }
        else{
            img = "images/toro.jpg";
          segno = "toro";
        }
    }
    else if (mese == 5) {
        if(giorno <= 20){
            img = "images/toro.jpg";
          segno = "toro";
        }
        else{
            img = "images/gemelli.jpg";
          segno = "gemelli";
        }
    }
    else if (mese == 6) {
        if(giorno <= 21){
            img = "images/gemelli.jpg";
          segno = "gemelli";
        }
        else{
            img = "images/cancro.jpg";
          segno = "cancro";
        }
    }
    else if (mese == 7) {
        if(giorno <= 22){
            img = "images/cancro.jpg";
          segno = "cancro";
        }
        else{
            img = "images/leone.jpg";
          segno = "leone";
        }
    }
    else if (mese == 8) {
        if(giorno <= 23){
            img = "images/leone.jpg";
          segno = "leone";
        }
        else{
            img = "images/vergine.jpg";
          segno = "vergine";
        }
    }
    else if (mese == 9) {
        if(giorno <= 22){
            img = "images/vergine.jpg";
          segno = "vergine";
        }
        else{
            img = "images/bilancia.jpg";
          segno = "bilancia";
        }
    }
    else if (mese == 10) {
        if(giorno <= 22){
            img = "images/bilancia.jpg";
          segno = "bilancia";
        }
        else{
            img = "images/scorpione.jpg";
          segno = "scorpione";
        }
    }
    else if (mese == 11) {
        if(giorno <= 22){
            img = "images/scorpione.jpg";
          segno = "scorpione";
        }
        else{
            img = "images/sagittario.jpg";
          segno = "sagittario";
        }
    }
    else if (mese == 12) {
        if(giorno <= 21){
            img = "images/sagittario.jpg";
          segno = "sagittario";
        }
        else{
            img = "images/capricorno.jpg";
          segno = "capricorno";
        }
    }
    document.getElementById("segno").innerHTML=segno;
    document.getElementById("immagine").src=img;
 
    return false;
}
