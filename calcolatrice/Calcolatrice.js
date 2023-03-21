class Calcolatrice {
            Calcolatrice() {
                this.operazione = "";
                this.risultato = null;
                this.num1 = null;
            }
            ScegliOperazione(O) {
                var l = document.getElementById("schermo");
                this.num1 = l.innerHTML;
                this.operazione = O;
                l.innerHTML = "";
            }

            calcola() {
            var l = document.getElementById("schermo");
           let num2 = l.innerHTML
            this.num1 = parseFloat(this.num1)
            num2 = parseFloat(num2)
            if (this.operazione == "+") {
                this.risultato = this.num1 + num2
            } else if (this.operazione == "-") {
                this.risultato = this.num1 - num2
            } else if (this.operazione == "*") {
                this.risultato = this.num1 * num2
            } else if (this.operazione == "/") {
                this.risultato = this.num1 / num2
            }
            if (this.risultato == "NaN") {
                l.innerHTML = 0;
            } else {
                l.innerHTML = this.risultato;
            }
        }

        cambiaSegno(){
            var l = document.getElementById("schermo");
            let temp=l.innerHTML;
            temp=temp*(-1);
            l.innerHTML=temp;
        }
        }

        function aggiungi(numero) {

            var l = document.getElementById("schermo");


            if (numero == "ce") {
                l.innerHTML = ""
            } else if (numero == "c") {

                l.innerHTML = l.textContent.substring(0, l.textContent.length - 1);
            } else {
                l.innerHTML += numero;

            }
        }
        calcolatrice=new Calcolatrice();
        

