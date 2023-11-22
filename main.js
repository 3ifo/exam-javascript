// Esercizio 1

const richiestaAllUtente = prompt("Come ti chiami?");
const richiestaMemorizzata = richiestaAllUtente;
// Anche se non è richiesto esplicitamente nella consegna avrei potuto convertire il valore del prompt sottostante in un numero
const richiestaAnnoNascita = prompt("In che anno sei nato?");
const richiestaAnnoMemorizzata = richiestaAnnoNascita;
//nella riga sottostante avrei potuto utilizzare all interno dell IF anche un or e un and dicendo che o è divisibile per 400 o è divisibile per 4 e non  divisibile per 100
if (richiestaAnnoMemorizzata % 400 == 0) {
  alert(`Ciao ${richiestaAllUtente} sei nato in un anno bisestile`);
} else {
  alert(`Ciao ${richiestaAllUtente}`);
}
//nell'else non ho inserito "non sei nato in un anno bisestile" perche nella consegna è scritto di specifiarlo solo se l'anno di nascita è bisestile

// Esercizio 2

const calcolaConcatenazione = (arrayStringhe) => {
  let stringaConcatenata = "";

  for (let i = 0; i < arrayStringhe.length; i++) {
    if (arrayStringhe[i][0].toLowerCase() === "a") {
      //nella riga sottostante avrei potuto scrivere stringaConcatenata = stringaConcatenata + arrayStringhe[i]
      stringaConcatenata += arrayStringhe[i];
    }
    if (stringaConcatenata.length > 10) {
      stringaConcatenata = stringaConcatenata.slice(0, 10);
    }
  }
  return stringaConcatenata;
};
//Non sto invocando la funzione perche non è richiesto esplicitamente nell'esercizio, senno avrei fatto ad esempio: let risultatoFinale = calcolaConcatenazione(arrayStringhe) e al poosto dell'arrayStringhe avrei messo l'array che mi interessa
//per poi nel caso in cui avessi voluto, stamparla con console.log(risultatoFinale)

//Esercizio 3

const book = {
  title: "Il Grande Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};

book.rating = 6;
book.increaseRating = function (valoreNumerico) {
  this.rating += valoreNumerico;
  if (this.rating > 10) {
    this.rating = 10;
  }
};
delete book.year;

const chiavi = Object.keys(book);

// forse avrei potuto anche usare un for in ma mi sentivo piu sicuro in questo modo
for (let i = 0; i < chiavi.length; i++) {
  const chiave = chiavi[i];
  console.log(`${chiave}: ${book[chiave]}`);
}

//Esercizio 4
window.addEventListener("load", function () {
  const button = document.querySelector("button");
  const input = document.querySelector("input");
  const p = document.getElementById("errorMessage");
  const ul = document.getElementById("tasks");

  button.addEventListener("click", function () {
    if (input.value === "") {
      p.innerHTML = `Per favore, inserisci del testo`;
    } else {
      p.innerHTML = ``;
      const li = document.createElement("li");
      li.innerHTML = input.value;
      ul.appendChild(li);
      // Qui magari avrei potuto scrivere input.value = ""; per svuotare l'input come ci hai fatto vedere tu a lezione
    }
  });
});

// Esercizio 5

const power = (base, exponent) => {
  try {
    // nella righe sottostanti sto verificando se i parametri non sono di tipo numero e nel caso viene inviato l'errore
    if (typeof base !== "number" && typeof exponent !== "number") {
      throw new Error(`${base} e ${exponent} non sono dei numeri`);
    } else if (typeof base !== "number") {
      throw new Error(`${base} non è un numero`);
    } else if (typeof exponent !== "number") {
      throw new Error(`${exponent} non è un numero`);
    } else {
      return base ** exponent;
    }
  } catch (error) {
    console.error(error.message);
    return null;
  } finally {
    console.log("L'operazione è completa");
  }
};
let risultatoFinalee = power(base, exponent);
// nel caso in cui volessi testare realmente la funzione potrei passare dei valori numerici e verrebbe ad esempio in questo modo : let risultatoFinalee = power(5,6)
