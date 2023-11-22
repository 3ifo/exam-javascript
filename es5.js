// Esercizio 5
//forse avrei potuto fare questo esercizio anche in modo diverso e ottenere lo stesso risultato ma mi è venuto piu spontaneo farlo cosi
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
//I passaggi sottostanti non sono richiesti esplicitamente nell'esercizio quindi li ho commentati
//se avessi voluto fare un test di utilizzo reale richiamando la funzione avrei fatto ad esempio:
//let risultatoFinalee = power(5,6) console.log(risultatoFinalee)
