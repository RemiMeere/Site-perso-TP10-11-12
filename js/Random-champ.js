var champ = {
    "top" : "jax trynda camille",
    "mid" : "zoe katarina xerath",
    "jgl" : "kayne elise evelyne",
}
function initialiserPage(){
	document.getElementsByTagName("SECTION")[2].innerHTML = "<table> <thead><th>Nom</th><th>random champ</th></thead><tbody id='hero'></tbody></table>"
}
function role(formulaire){
	console.log(champ)
	let temp=document.getElementById("nom").value;
	let str = champ[temp].split(' ');
	Math.floor(Math.random() * 3);
	document.getElementById("hero").innerHTML = str[Math.floor(Math.random() * 3)];
}
function newrole(formulaire){
	champ[document.getElementById("new").value] =document.getElementById("newchamp").value;
	console.log(champ)
}
