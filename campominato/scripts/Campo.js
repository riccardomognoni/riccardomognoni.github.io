

class Campo {
    constructor(grand, min) {
        this.n = grand;
        this.mine = min;
        this.campo = [];
        this.cAperte = 0;
        this.gioco = true;

    }

    creaCampo() {
        $('#numMine').text("mine: " + this.mine);
        //crea la tabella
        $('#griglia').css("height", $('#griglia').width() + "px");

        for (let r = 0; r < this.n; r++) {
            this.campo[r] = [];
            for (let c = 0; c < this.n; c++) {
                this.campo[r][c] = new Cella(false);
                $('#griglia').append('<div class="cella" data-row="' + r + '" data-col="' + c + '">&nbsp;</div>');
            }
            //$('#griglia').append("<br>");
        }

    }

    posizionaMine() {

        //mette le mine a caso
        let m = 0;
        while (m < this.mine) {
            let pr = Math.round((n - 1) * Math.random());
            let pc = Math.round((n - 1) * Math.random());
            if (!this.campo[pr][pc].mina) {
                this.campo[pr][pc].mina = true;
                for (let i = -1; i <= 1; i++)
                    for (let j = -1; j <= 1; j++) {
                        let dr = pr + i;
                        let dc = pc + j;
                        if (dr >= 0 && dc >= 0 && dr < this.n && dc < this.n) {
                            this.campo[dr][dc].cont++;
                        }
                    }
                m++;
            }
        }
    }

    controlla(r, c) {

        if (this.campo[r][c].aperta)
            return true;

        this.campo[r][c].aperta = true;
        this.cAperte++;

        $('.cella[data-row=' + r + '][data-col=' + c + ']').html(this.campo[r][c].cont ? this.campo[r][c].cont : "&nbsp;");
        $('.cella[data-row=' + r + '][data-col=' + c + ']').addClass("aperta");

        if (this.campo[r][c].cont)
            $('.cella[data-row=' + r + '][data-col=' + c + ']').addClass("colore-" + (this.campo[r][c].cont < 4 ? this.campo[r][c].cont : 4));

        if (!this.campo[r][c].mina && !this.campo[r][c].cont) {

            for (var dr = r - 1; dr <= r + 1; dr++)
                for (var dc = c - 1; dc <= c + 1; dc++)
                    if (dc >= 0 && dr >= 0 && dc < n && dr < n)
                        controlla(dr, dc);

        } else if (this.campo[r][c].mina) {
            // qui mettiamo la mina
            $('.cella[data-row=' + r + '][data-col=' + c + ']').html('<i class="fa fa-bomb"></i>');
            $('.cella[data-row=' + r + '][data-col=' + c + ']').addClass("mina");
            return false;
        }

        return true;

    }

    scopriMine() {
        for (let r = 0; r < this.n; r++)
            for (let c = 0; c < this.n; c++)
                if (this.campo[r][c].mina) {
                    this.campo[r][c].aperta = true;
                    $('.cella[data-row=' + r + '][data-col=' + c + ']').html('<i class="fa fa-bomb"></i>');
                    $('.cella[data-row=' + r + '][data-col=' + c + ']').addClass("mina");
                }
    }



}

