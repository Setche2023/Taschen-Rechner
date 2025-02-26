// Fonction pour ajouter un élément à l'écran
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Fonction pour effacer l'écran
function clearDisplay(value) {
    const display = document.getElementById('display');
    display.value = '';
}

// Fonction pour effacer le dernier chiffre ou le dernier opérateur
function deleteLast(value) {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Fonction pour effectuer une opération sur les chiffres affichés
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = evaluateExpression(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function evaluateExpression(expression) {
    // Remplace les opérateurs pour une évaluation sécurisée
    const sanitizedExpression = expression
        .replace(/[^-()\d/*+.]/g, '') // Supprime les caractères non autorisés
        .replace(/\/\//g, '') //Évite les divisions multiples
        .replace(/\*\*/g, '*'); // Évite les multiplications multiples

    return new Function('return ' + sanitizedExpression)();
}