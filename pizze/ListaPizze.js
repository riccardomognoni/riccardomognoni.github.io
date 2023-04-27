class ListaPizze
{
    constructor()
    {
       this.margherita = 0;
       this.prosciutto = 0;
       this.rucola = 0;
       this.diavola = 0;
       this.wurstel = 0;
       this.patatine = 0;
    }

    reset()
    {
        location.reload();
    }

    aggiungi(pizza)
    {
        if(pizza == "Margherita")
        {
            if(this.margherita == 0)
            {
               this.margherita++;
                $("#listaPizze").append("<tr><td id='numMargherita'>" +this.margherita + "</td><td>margherita</td></tr>");
            }
            
            else
            {
             
               this.margherita++;
                $("#numMargherita").text(this.margherita);
            }
        }
        else if(pizza == "Prosciutto")
        {
            if(this.prosciutto == 0)
            {
               this.prosciutto++;
                $("#listaPizze").append("<tr><td id='numProsciutto'>" +this.prosciutto + "</td><td>prosciutto</td></tr>");
            }

            else
            {
               this.prosciutto++;
                $("#numProsciutto").text(this.prosciutto);
            }        
        }
        else if(pizza == "Rucola")
        {
            if(this.rucola == 0)
            {
               this.rucola++;
                $("#listaPizze").append("<tr><td id='numRucola'>" +this.rucola + "</td><td>rucola</td></tr>");
            }
            
            else
            {
               this.rucola++;
                $("#numRucola").text(this.rucola);
            }
        }
        else if(pizza == "Diavola")
        {
            if(this.diavola == 0)
            {
               this.diavola++;
                $("#listaPizze").append("<tr><td id='numDiavola'>" +this.diavola + "</td><td>diavola</td></tr>");
            }
            
            else
            {
               this.diavola++;
                $("#numDiavola").text(this.diavola);
            }
        }
        else if(pizza == "Wurstel")
        {
            if(this.wurstel == 0)
            {
               this.wurstel++;
                $("#listaPizze").append("<tr><td id='numWurstel'>" +this.wurstel + "</td><td>wurstel</td></tr>");
            }
            
            else
            {
               this.wurstel++;
                $("#numWurstel").text(this.wurstel);
            }
        }
        else if(pizza == "Patatine")
        {
            if(this.patatine == 0)
            {
               this.patatine++;
                $("#listaPizze").append("<tr><td id='numPatatine'>" +this.patatine + "</td><td>patatine</td></tr>");
            }
            
            else
            {
               this.patatine++;
                $("#numPatatine").text(this.patatine);
            }
        }
    }
}