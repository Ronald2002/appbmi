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
		if(totale<20.1){
		document.getElementById('spiegazione').innerHTML="Sottopeso";
		}
		else if(totale<25){
		document.getElementById('spiegazione').innerHTML="Peso Ottimale";
		}
		else if(totale<29.9){
		document.getElementById('spiegazione').innerHTML="Sovrappeso";
		}
		else if(totale<35){
		document.getElementById('spiegazione').innerHTML="Obesità di I grado";
		}
		else if(totale<40){
		document.getElementById('spiegazione').innerHTML="Obesità di II grado";
		}
		else{
		document.getElementById('spiegazione').innerHTML="Obesità grave";
		}
	}
	else if(sesso="f"){
	var totale = (peso/(altezza*altezza))*0.9;
	document.getElementById('calcola').innerHTML="BMI = "+totale;
		if(totale<18.7){
		document.getElementById('spiegazione').innerHTML="Sottopeso";
		}
		else if(totale<23.8){
		document.getElementById('spiegazione').innerHTML="Peso Ottimale";
		}
		else if(totale<28.6){
		document.getElementById('spiegazione').innerHTML="Sovrappeso";
		}
		else if(totale<35){
		document.getElementById('spiegazione').innerHTML="Obesità di I grado";
		}
		else if(totale<40){
		document.getElementById('spiegazione').innerHTML="Obesità di II grado";
		}
		else{
		document.getElementById('spiegazione').innerHTML="Obesità grave";
		}
	// applico formula bmi per f
	}
}
function cancella(){
document.getElementById('calcola').innerHTML=" ";
document.getElementById('spiegazione').innerHTML=" ";
}
