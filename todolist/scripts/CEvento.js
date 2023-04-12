class CEvento{
    constructor(date, activity){
        this.data=date;
        this.attivita=activity;
        this.completata=false;
    }

    visualizza(){
      alert(this.data+" "+this.attivita+" "+this.completata);
    }

    getDate(){
        return this.data;
    }
    
    getEvento(){
        return this.attivita;
    }

    setCompletamento(){
       this.completata=!this.completata;
    }


}