// Esercizio 2

const calcolaConcatenazione = (arrayStringhe) => {
  let stringaConcatenata = "";

  for (let i = 0; i < arrayStringhe.length; i++) {
    if (arrayStringhe[i][0].toLowerCase() === "a") {
      //nella riga sottostante avrei potuto scrivere stringaConcatenata = stringaConcatenata + arrayStringhe[i]
      stringaConcatenata += arrayStringhe[i];
    }
    if (stringaConcatenata.length > 10) {
      return stringaConcatenata.slice(0, 10);
    }
  }
  return stringaConcatenata;
};
//Non sto invocando la funzione perche non è richiesto esplicitamente nell'esercizio, senno avrei fatto ad esempio: let risultatoFinale = calcolaConcatenazione(arrayStringhe) e al poosto dell'arrayStringhe avrei messo l'array che mi interessa
//per poi nel caso in cui avessi voluto, stampare in console con console.log(risultatoFinale)
