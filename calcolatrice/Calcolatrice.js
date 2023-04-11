class Calcolatrice {
    constructor() {
        this.operazione = "";
        this.risultato = null;
        this.num1 = null;
    }

    somma() {
        var l = document.getElementById("schermo");
        if (l.innerHTML != "") {
            this.num1 = parseFloat(l.innerHTML);
        }
        this.operazione = "+";
        l.innerHTML = "";
    }
    sottrazione() {
        var l = document.getElementById("schermo");
        if (l.innerHTML != "") {
            this.num1 = parseFloat(l.innerHTML);
        }


        this.operazione = "-";
        l.innerHTML = "";
    }
    divisione() {
        var l = document.getElementById("schermo");
        if (l.innerHTML != "") {
            this.num1 = parseFloat(l.innerHTML);
        }
        this.operazione = "/";
        l.innerHTML = "";
    }
    moltiplicazione() {
        var l = document.getElementById("schermo");
        if (l.innerHTML != "") {
            this.num1 = parseFloat(l.innerHTML);
        }
        this.operazione = "*";
        l.innerHTML = "";
    }

    calcola() {
        var l = document.getElementById("schermo");
        let num2 = l.innerHTML;
            this.num1 = parseFloat(this.num1)
           
            if(num2==""){
                l.innerHTML = this.num1;
                this.operazione="";
                return false;
            }
            num2 = parseFloat(num2)

            if(this.operazione==""){
                l.innerHTML = num2;
                this.operazione="";
                return false
            }
            else if (this.operazione == "+") {
                this.risultato = this.num1 + num2
            } else if (this.operazione == "-") {
                this.risultato = this.num1 - num2
            } else if (this.operazione == "*") {
                this.risultato = this.num1 * num2
            } else if (this.operazione == "/") {
                this.risultato = this.num1 / num2
            }
            if (this.risultato === NaN) {
                l.innerHTML = 0;
            } else {
                l.innerHTML = this.risultato;
            }
            this.operazione="";
        }

    

    cambiaSegno() {
        var l = document.getElementById("schermo");
        let temp = l.innerHTML;
        temp = temp * (-1);
        l.innerHTML = temp;
    }
}




