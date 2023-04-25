var n = 10;
var mine = 10;
var campo = [];
var cAperte = 0;
var gioco = true;
 
$(document).ready(function() {
    $('#numMine').text("mine: " + mine);
	$('#griglia').css("height",$('#griglia').width()+"px");
	
	for(r = 0; r < n; r++) {
		campo[r] = [];
		for(c = 0; c < n; c++) {
			campo[r][c] = new Cella(false);
			$('#griglia').append('<div class="cella" data-row="'+r+'" data-col="'+c+'">&nbsp;</div>');
		}
		//$('#griglia').append("<br>");
	}
 
 
	$('.cella').css("line-height",$('.cella').width()+"px");
	$('.cella').css("font-size",(32/50)*$('.cella').width()+"px");
 
	m = 0;
	while(m < mine) {
		pr = Math.round((n-1)*Math.random());
		pc = Math.round((n-1)*Math.random());
		if( !campo[pr][pc].mina ) {
			campo[pr][pc].mina = true;
			for(i=-1;i<=1;i++)
				for(j=-1;j<=1;j++) {
					dr = pr + i;
					dc = pc + j;
					if( dr >= 0 && dc >= 0 && dr < n && dc < n ) {
						campo[dr][dc].cont++;
					}
				}
			m++;
		}
	}
 
	function controlla(r, c) {
		
		if( campo[r][c].aperta ) return true;
		
		campo[r][c].aperta = true;
		cAperte++;
		
		$('.cella[data-row='+r+'][data-col='+c+']').html(campo[r][c].cont ? campo[r][c].cont : "&nbsp;");
		$('.cella[data-row='+r+'][data-col='+c+']').addClass("aperta");
		
		if( campo[r][c].cont ) 
			$('.cella[data-row='+r+'][data-col='+c+']').addClass("colore-" + (campo[r][c].cont<4?campo[r][c].cont:4));
		
		if( !campo[r][c].mina && !campo[r][c].cont ) {
			
			for(var dr=r-1;dr<=r+1;dr++)
				for(var dc=c-1;dc<=c+1;dc++)
					if(dc >= 0 && dr >= 0 && dc < n && dr < n)
						controlla(dr,dc);
					
		} else if( campo[r][c].mina ) {
			// qui mettiamo la mina
			$('.cella[data-row='+r+'][data-col='+c+']').html('<i class="fa fa-bomb"></i>');
			$('.cella[data-row='+r+'][data-col='+c+']').addClass("mina");
			return false;
		}
		
		return true;
		
	}
 
	function scopriMine() {
		for(var r = 0; r < n; r++)
			for(var c = 0; c < n; c++) 
				if(campo[r][c].mina) {
					campo[r][c].aperta = true;
					$('.cella[data-row='+r+'][data-col='+c+']').html('<i class="fa fa-bomb"></i>');
					$('.cella[data-row='+r+'][data-col='+c+']').addClass("mina");
				}
	}
 
	$('.cella').click(function() {
		if( gioco ) {
			var r = parseInt($(this).attr("data-row"));
			var c = parseInt($(this).attr("data-col"));
			if( !controlla(r,c) ) {
				// ha perso
				gioco = false;
				$('#stato').html("Hai perso!");
			} else if( n*n - cAperte <= mine ) {
				// hai vinto
				gioco = false;
				$('#stato').html("Hai vinto!");
			}
			if( !gioco ) scopriMine();
		} else {
			alert("Gioco finito!");
		}
	});
 
	
	
	
});