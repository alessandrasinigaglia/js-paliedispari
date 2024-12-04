// Chiedere all’utente di inserire una parola
const word = prompt("Inserisci una parola");
function reversedWord(word) {
    let wordReversed = "";
    for (let i = word.length - 1; i >= 0; i--) {
        wordReversed = wordReversed + word[i];
    }
    return wordReversed;
}

// Creare una funzione per capire se la parola insrita è palindroma
function isPalindrome(word) {
    let wordReversed = reversedWord(word);
    if (word === reversedWord(word)) {
        return true
        } else {
            return false
        }
    }
    
alert(isPalindrome(word));