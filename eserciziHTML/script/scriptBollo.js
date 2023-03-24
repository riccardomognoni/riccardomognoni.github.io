function calcolaBollo() {

    if (isNaN(document.bollo.veicolo.value) || isNaN(document.bollo.cavalli.value) || isNaN(document.bollo.classeI.value)) {
        alert("compilare tutti i campi per favore :)");
    } else{
        let img = "";
        let cavalli = document.bollo.cavalli.value;
        let costoCv;
        if (document.bollo.veicolo.value == 2) {
            costoCv = 3.3;
            document.getElementById("immagine").innerHTML ="<img src='images/moto.jpeg'>";
        }
        else {
            costoCv = 4.5;
            document.getElementById("immagine").innerHTML ="<img src='images/macchina.jpeg'>";
        }
        let bollo = costoCv * cavalli;
        if (document.bollo.classeI.value <= 4) {
            let aumento = (bollo * 30) / 100;
            bollo += aumento;
        }
        document.getElementById("Bollo").innerHTML ="Bollo: " + bollo;
       

   
    }
    return false;



    

  
   
}