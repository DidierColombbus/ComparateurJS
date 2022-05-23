let premiernombre = parseInt(window.prompt('Premier nombre'));
let deuxiemenombre = parseInt(window.prompt('Deuxième nombre'));

// Utilisation de prompt et parseInt pour entrer des chiffres

// Utilisation des conditions if else if et else pour écrire dans le paragraphe #resultat
// Avec else on permet l'alert concernant une erreur de saisie 

if(premiernombre < deuxiemenombre){
    document.getElementById('resultat').innerHTML = premiernombre + ' inférieur à ' + deuxiemenombre;
}else if(premiernombre > deuxiemenombre){
    document.getElementById('resultat').innerHTML = premiernombre + ' supérieur à ' + deuxiemenombre;
}else if(premiernombre == deuxiemenombre){
    document.getElementById('resultat').innerHTML = premiernombre + ' égal à ' + deuxiemenombre;
}
else{
    window.alert('Merci de rentrer des nombres avec le pavé numérique ^^');
}