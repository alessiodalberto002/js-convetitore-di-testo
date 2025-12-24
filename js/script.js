// PRENDE IL TESTO DALL'UTENTE //
function prendiTesto() {
  return document.getElementById("testo").value;
}

// MOSTRA IL RISULTATO //
function mostraRisultato(testo) {
  document.getElementById("risultato").textContent = testo;
}
