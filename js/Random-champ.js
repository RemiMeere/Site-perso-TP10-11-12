var champ = {
    "top" : "jax trynda camille",
    "mid" : "zoe katarina xerath",
    "jgl" : "kayne elise evelyne",
}
function initialiserPage(){
	document.getElementsByTagName("SECTION")[2].innerHTML = "<table> <thead><th>Nom</th><th>random champ</th></thead><tbody id='hero'></tbody></table>"
}
/** recupaire l'objet voulu par l'utilisateur et sélection un "champion" aléatoirement*/
function role(formulaire){
	console.log(champ)
	let temp=formulaire.nom.value;
	let str = champ[temp].split(' ');
	Math.floor(Math.random() * 3);
	document.getElementById("hero").innerHTML = str[Math.floor(Math.random() * 3)];
	return false;
}
/** permet de créé un nouveaux type de "champion" et y metre des héros  */
function newrole(formulaire){
	champ[formulaire.new.value] =formulaire.newchamp.value;
	console.log(champ)
	return false;
}
