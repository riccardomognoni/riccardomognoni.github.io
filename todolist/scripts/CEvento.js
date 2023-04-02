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
        if(this.completata===false){
            this.completata=true;
        } else  if(this.completata===true){
            this.completata=false;
        }
    }


}