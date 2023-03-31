class Casino {

    constructor() {
        this.valori = new Array(0, 0, 0);
        this.immagini = new Array("zero.png", "uno.png", "due.png", "tre.png", "quattro.png", "cinque.png", "sei.png", "sette.png", "otto.png", "nove.png");
        this.crediti = 10;
    }

    spin() {
        if(this.crediti==0){
            alert("Crediti finiti");
            return false;
        }
       let img=document.getElementsByTagName("img");
        for (let i = 0; i < this.valori.length; i++) {
            this.valori[i] = Math.floor(Math.random() * 10);
        }
        for (let i = 0; i < this.valori.length; i++) {
            img[i].src = "images/" + this.immagini[this.valori[i]]
        }
        this.verificaVincita();
        this.crediti += -1;
        document.getElementById("crediti").innerHTML = "Crediti: " + this.crediti;
        return false;


    }
    verificaVincita(){
        let numUguali=0;
        if(this.valori[0]==this.valori[1]){
            this.crediti+=20*(this.valori[0]+1);
        }
        for (let i = 0; i < this.valori.length-1; i++) {
           if(this.valori[i]==this.valori[i+1]){
            numUguali++;
           }
        }
        if(numUguali==2){
            this.crediti+=50*(this.valori[0]+1);
        }
        if(this.valori[0]==this.valori[2]){
            this.crediti+=5*(this.valori[0]+1);
        }
    }

    incassa(){
        alert("Soldi Incassati");
       
        let img=document.getElementsByTagName("img");
        for (let i = 0; i < this.valori.length; i++) {
            img[i].src = "images/" + this.immagini[0]
        }
        this.crediti=10;
        document.getElementById("crediti").innerHTML = "Crediti: " + this.crediti;

    }

}

