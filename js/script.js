// PRENDE IL TESTO DALL'UTENTE //
function prendiTesto() {
  return document.getElementById("testo").value;
}

// MOSTRA IL RISULTATO //
function mostraRisultato(testo) {
  document.getElementById("risultato").textContent = testo;
}

// CONVERTE TUTTO IN MAIUSCOLO //
function maiuscolo() {
  let testo = prendiTesto();
  mostraRisultato(testo.toUpperCase());
}

// CONVERTE TUTTO IN minuscolo //
function minuscolo() {
  let testo = prendiTesto();
  mostraRisultato(testo.toLowerCase());
}

// TRASFORMA LE INIZIALO DELLE PAROLE IN MAIUSCOLO //
function inizialiMaiuscole() {
  let testo = prendiTesto();

  let parole = testo.split(" ");
  let risultato = parole.map(parola =>
    parola.charAt(0).toUpperCase() + parola.slice(1).toLowerCase()
  );

  mostraRisultato(risultato.join(" "));
}