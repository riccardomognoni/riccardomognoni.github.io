
function generaCampo(){
   let mine=document.getElementById("scegliMine").value;
   let dimCampo=document.getElementById("grandezzaCampo").value;

    if(dimCampo>=10){
        grandezza=(dimCampo*50)+50;

        $('#griglia').css("width", + grandezza+"px");
        $('#griglia').css("height", $('#griglia').width() + "px");



      const campo=new Campo(dimCampo,mine);
      document.getElementById("griglia").innerHTML="";
      campo.creaCampo();
      campo.posizionaMine();
      $('.cella').click(function () {

        if (campo.gioco) {
            let r = parseInt($(this).attr("data-row"));
            let c = parseInt($(this).attr("data-col"));
            if (!campo.controlla(r, c)) {
                // ha perso
                campo.gioco = false;
                $('#stato').html("Hai perso!");
            } else if (campo.n * campo.n - campo.cAperte <= campo.mine) {
                // hai vinto
                campo.gioco = false;
                $('#stato').html("Hai vinto!");
            }
            if (!campo.gioco)
                campo.scopriMine();
        } else {
            alert("Gioco finito!");
        }
    });

  



    }
    else{
        alert("grandezza minima del campo=10")
    }


   
}



