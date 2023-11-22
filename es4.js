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
