 function calcolaArea(){

   

    if(isNaN(document.poligoni.valoreLato.value) || isNaN(document.poligoni.lati.value)){
        alert("inserisci il numero di lati, e/o il valore del lato")
    } else{
        let perimetro=document.poligoni.lati.value*document.poligoni.valoreLato.value;
        let nLati=document.poligoni.lati.value;
        let vLato=document.poligoni.valoreLato.value;
        let apotema;
        if(nLati==3){
            apotema=vLato*0.289;
        } else if(nLati==4){
            apotema=vLato*0.5;
        } else if(nLati==5){
            apotema=vLato*0.688;
        } else if(nLati==6){
            apotema=vLato*0.866;
        } else if(nLati==7){
            apotema=vLato*1.038;
        }
        let paragrafo=document.getElementById("area");
    let area=(perimetro*apotema)/2;
    paragrafo.innerHTML="Area: "+area;
   
    }
    return false;
    
 }