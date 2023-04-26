const campo = new Campo(10, 10);
let gioco = true;
$(document).ready(function () {
    campo.creaCampo();
    $('.cella').css("line-height", $('.cella').width() + "px");
    $('.cella').css("font-size", (32 / 50) * $('.cella').width() + "px");
    campo.posizionaMine();

    $('.cella').click(function () {

        if (gioco) {
            let r = parseInt($(this).attr("data-row"));
            let c = parseInt($(this).attr("data-col"));
            if (!campo.controlla(r, c)) {
                // ha perso
                gioco = false;
                $('#stato').html("Hai perso!");
            } else if (campo.n * campo.n - campo.cAperte <= campo.mine) {
                // hai vinto
                gioco = false;
                $('#stato').html("Hai vinto!");
            }
            if (!gioco)
                campo.scopriMine();
        } else {
            alert("Gioco finito!");
        }
    });


});
