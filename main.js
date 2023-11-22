// Esercizio 1

const richiestaAllUtente = prompt("Come ti chiami?");
const richiestaMemorizzata = richiestaAllUtente;
// Anche se non è richiesto esplicitamente nella consegna avrei potuto convertire il valore del prompt sottostante in un numero
const richiestaAnnoNascita = prompt("In che anno sei nato?");
const richiestaAnnoMemorizzata = richiestaAnnoNascita;
//nella riga sottostante avrei potuto utilizzare all interno dell IF anche un or dicendo che o è divisibile per 400 o è divisibile per 4 ma allo stesso tempo non è divisibile per 100
if (richiestaAnnoMemorizzata % 400 == 0) {
  alert(`Ciao ${richiestaAllUtente} sei nato in un anno bisestile`);
} else {
  alert(`Ciao ${richiestaAllUtente}`);
}
