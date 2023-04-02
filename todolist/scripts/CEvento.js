class CEvento{
    constructor(date, activity){
        this.data=date;
        this.attivita=activity;
        this.completata=false;
    }


    setCompletamento(){
       this.completata=!this.completata;
    }


}
