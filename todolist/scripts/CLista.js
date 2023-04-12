class CLista {
    constructor() {
        this.lista = new Array();
        this.size = 0;
    }

    //funzione per aggiungere un elemento di tipo evento all'interno del vettore lista
    add() {
        let data=document.getElementsByTagName("input")[0].value;
         let att = document.getElementById("event");
         let date = new Date(data);
         let d=new Date();
         if(data=="" || att.value==""){
             alert("inserire data e/o descrizione dell'evento");
             return false;
         }
          else if(date.getTime()-d.getTime()<=0){
             alert("impossibile inserire un evento in data precedente a quella odierna");
             return false;
         }
          else{
             
             //evento con la data e l'attività
             let attivit = new CEvento(date.getTime(), att.value);
             this.lista.push(attivit);
             this.ordinaPerData();
             this.rimuoviGrafica();
             this.size++;
             for (let i = 0; i < this.size; i++) {
                 this.aggiungiTr(this.lista[i].attivita, i,this.lista[i].completata);
             }
             att.value="";
         }
     }

    //aggiunge una riga all'interno della lista evento nella grafica, assegnandogli l'indice (num), e l'evento da visualizzare
    aggiungiTr(evento, num,compl) {

        let table = document.getElementById("lista")
        if(compl==true){
            table.innerHTML += "<tr class='trLista' id='" + num + "'><td class='Checkbox'><input type='checkbox'  checked='checked' onchange='lista.segnaAttività(" + num + ")'></td><td class='Activity'>" + evento + "</td><td><button onclick='lista.rimuoviAttivita(" + num + ")'><img class='imgDel' src='images/elimina.jpg' alt='elimina'></button></td></tr>";
        }else{
            table.innerHTML += "<tr class='trLista' id='" + num + "'><td class='Checkbox'><input type='checkbox' onchange='lista.segnaAttività(" + num + ")'></td><td class='Activity'>" + evento + "</td><td><button onclick='lista.rimuoviAttivita(" + num + ")'><img class='imgDel' src='images/elimina.jpg' alt='elimina'></button></td></tr>";
        }
       

    }

    //rimuove tutto all'interno della lista, e pulisce l'html
    rimuoviTutto() {
        for (let i = 0; i < this.size; i++) {
            this.lista.pop();
        }
        this.size = 0;
        this.rimuoviGrafica();
    }
    //pulisce solo l'html
    rimuoviGrafica(){
        let table = document.getElementById("lista")
        table.innerHTML = "";
    }

    //serve per segnare come completata o meno l'attività indicata dall'indice
    segnaAttività(i) {
        this.lista[i].setCompletamento();
        let doc = document.getElementsByClassName("Activity");
        if(this.lista[i].completata==true){
            doc[i].style.textDecoration="line-through";
        }
        else{
            doc[i].style.textDecoration="none";
        }
       
    }

    //serve per rimuovere un attività dato l'indice in cui si trova
    rimuoviAttivita(index) {
        this.lista.splice(index, 1);
        this.size--;
        this.rimuoviGrafica();
        for (let i = 0; i < this.size; i++) {
            this.aggiungiTr(this.lista[i].attivita, i,this.lista[i].completata);
        }
    }

    //ordino gli eventi in base alla data
    ordinaPerData(){

        for (let i = 0; i <this.lista.length; i++) {
  
            for (let j = 0; j < (this.lista.length- 1); j++) {
    
                if (this.lista[j].data > this.lista[j + 1].data) {
    
                    let temp = this.lista[j]
                    this.lista[j] = this.lista[j + 1]
                    this.lista[j + 1] = temp
                }
            }
        }
     
       
    }

    visualizzaStato(scelta){
        this.rimuoviGrafica();
        if(scelta=='c' ){
            for (let i = 0; i <this.lista.length; i++) {
  
                if(this.lista[i].completata==true){
                    this.aggiungiTr(this.lista[i].attivita, i,this.lista[i].completata);
                }
             }
        }else if(scelta=='nc'){
            for (let i = 0; i <this.lista.length; i++) {
  
                if(this.lista[i].completata==false){
                    this.aggiungiTr(this.lista[i].attivita, i,this.lista[i].completata);
                }
             }
        }
        else if(scelta=='tutto'){
            for (let i = 0; i <this.lista.length; i++) {
  
                this.aggiungiTr(this.lista[i].attivita, i,this.lista[i].completata);
             }
        }
      
    }
    verificaUrgenza(){
        this.rimuoviGrafica();
        let d=new Date();
            for (let i = 0; i <this.lista.length; i++) {
  
                if(this.lista[i].data-d.getTime()<=259200000){
                    this.aggiungiTr(this.lista[i].attivita, i,this.lista[i].completata);
                }
             }
    }
}