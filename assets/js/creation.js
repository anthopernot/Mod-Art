document.getElementById("selectTypeVet").addEventListener('change', function () {
    document.getElementById('typeVet').textContent = document.getElementById('selectTypeVet').value;
});
document.getElementById("selectChoixMat").addEventListener('change', function () {
    document.getElementById('choixMat').textContent = document.getElementById('selectChoixMat').value;
});
document.getElementById("selectFormeVet").addEventListener('change', function () {
    document.getElementById('formeVet').textContent = document.getElementById('selectFormeVet').value;
});
document.getElementById("selectTailleVet").addEventListener('change', function () {
    document.getElementById('taille').textContent = document.getElementById('selectTailleVet').value;
});
document.getElementById("inputTailleHanche").addEventListener('change', function () {
    if(document.getElementById('inputTailleHanche').value > 20 && document.getElementById('inputTailleHanche').value <= 300){
        document.getElementById('tailleHanche').textContent = "";
        document.getElementById('tailleHanche').textContent = document.getElementById('inputTailleHanche').value +" cm";
    }
});
document.getElementById("inputTailleJambe").addEventListener('change', function () {
    if(document.getElementById('inputTailleJambe').value > 20 && document.getElementById('inputTailleJambe').value <= 300){
        document.getElementById('tailleJambe').textContent = "";
        document.getElementById('tailleJambe').textContent = document.getElementById('inputTailleJambe').value +" cm";
    }
});
document.getElementById("selectCouleurVet").addEventListener('change', function () {
    document.getElementById('couleur').textContent = document.getElementById('selectCouleurVet').value;
});
document.getElementById("selectMotifVet").addEventListener('change', function () {
    document.getElementById('motif').textContent = document.getElementById('selectMotifVet').value;
});