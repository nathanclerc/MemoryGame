var tab = [1, 1, 2, 2, 3, 3, 4, 4];
var shuffle = $('#shuffle');
var img = $('img');
var clss;
var tabcl=[];
var tabN=[];
var tabN1=[];
var z;

shuffle.click(function (){
	var t = 0;
	var ligne = 0;
	var carte = 0;
	var name = 10;
	var nameB = 0;
	$('#tapis').empty();
	for (var i = 0; i < 2; i++) {
		var tr = 'row'+ ligne;
		$('<tr id='+ tr +'>').appendTo("#tapis");
		ligne++;
		for (var j = 0; j < 8; j++) {
			if (j%2 == 0) {
				$('<td><img name="'+name+'" class="'+tab[t]+'" src="carte/carte_'+carte+'.png"/></td>').appendTo("#"+ tr);
				carte++;
				name++;
				t++;
			}else{
				$('<td><img name="'+nameB+'" class="'+tab[t]+'" src="carte/dos-bleu.png"/></td>').appendTo("#"+ tr);
				t++;
				nameB++;
			}

			if (carte == 4) {
				carte = 0;
			}
			if (t==8) {
				t=0;
			}
		}
	}
	name = 10;
	for (var i = 10; i < 18; i++) {
		$('img[name='+name+']').hide();
		name++;
	}

	$('img').click(function(event){
		$(this).hide();
		var opif =$(this).attr('name');
		tabN1.push(opif);
		clss =$(this).attr('class');
		opif = 1+opif;
		console.log(clss);
		tabcl.push(clss);
		tabN.push(opif);
		$('img[name='+opif+']').show();
		for (z = 0; z < tabcl.length; z++) {
			if (tabcl.length%2==0) {
				var lgth = tabcl.length-1;
				var qqlc = tabcl.length-2;
				console.log(qqlc);
				if (tabcl[lgth]==tabcl[qqlc]) {
					alert('gagner');
					$('img[class='+tabcl[lgth]+']').remove();
					break;
				}
				var cch = tabN[z-1];
				var hdi = tabN1[z-1];
				$('img[name='+opif+']').hide(3000);
				$('img[name='+cch+']').hide(3000);
				$('img[name='+tabN1[z]+']').show(3000);
				$('img[name='+hdi+']').show(3000);
			}
		}
	});
});
