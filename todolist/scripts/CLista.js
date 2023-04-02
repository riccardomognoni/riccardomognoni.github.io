class CLista {
    constructor() {
        this.lista = new Array();
        this.size = 0;
    }

    //funzione per aggiungere un elemento di tipo evento all'interno del vettore lista
    add() {
       
        if(document.getElementsByTagName("input")[0].value==""){
            alert("inserire data evento");
            return false;
        }
        else{
            let date = new Date(document.getElementsByTagName("input")[0].value);
            let att = document.getElementById("event").value;
            //evento con la data e l'attività
            let attivit = new CEvento(date.getTime(), att);
            this.lista.push(attivit);
            this.ordinaPerData();
            this.size++;
            for (let i = 0; i < this.size; i++) {
                this.aggiungiTr(this.lista[i].attivita, i);
            }
        }
    }

    //aggiunge una riga all'interno della lista evento nella grafica, assegnandogli l'indice (num), e l'evento da visualizzare
    aggiungiTr(evento, num) {
        let table = document.getElementById("lista")
        table.innerHTML += "<tr class='trLista' id='" + num + "'><td class='Checkbox'><input type='checkbox' onchange='lista.segnaAttività(" + num + ")'></td><td class='Activity'>" + evento + "</td><td><button onclick='lista.rimuoviAttivita(" + num + ")'><img class='imgDel' src='images/elimina.jpg' alt='elimina'></button></td></tr>";

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
            doc[i].innerHTML += ": completata";
        }
        else{
            doc[i].innerHTML =this.lista[i].attivita;
        }
       
    }

    //serve per rimuovere un attività dato l'indice in cui si trova
    rimuoviAttivita(index) {
        this.lista.splice(index, 1);
        this.size--;
        this.rimuoviGrafica();
        for (let i = 0; i < this.size; i++) {
            this.aggiungiTr(this.lista[i].attivita, i);
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
        this.rimuoviGrafica();
       
    }
}