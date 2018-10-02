/* Calcoli per la app sul BMI */
function calcolo(){
//identificare i dati del form
var peso=document.forms.BMI.peso.valueAsNumber;
var altezza=document.forms.BMI.altezza.valueAsNumber;
var sesso=document.forms.BMI.sesso.value;
//verifico se l'utente è M o F
if(sesso="m"){
	//applico la formula bmi per m
	var totale= peso/(altezza*altezza);
	/* Math.pow(base,exp)
	Math.pow(altezza,2) */
	document.getElementById('calcola').innerHTML="BMI = "+totale;
	}
	else if(sesso="f"){
	var totale = (peso/(altezza*altezza))*0.9;
	document.getElementById('calcola').innerHTML="BMI = "+totale;
	// applico formula bmi per f
	}
}
function cancella(){
document.getElementById('calcola').innerHTML=" ";
}
