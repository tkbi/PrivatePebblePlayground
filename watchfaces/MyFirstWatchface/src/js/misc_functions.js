function kw() {
    var heute = new Date(), J = heute.getYear(), Mo = 0;
    // ersten Montag im Jahr suchen (leere Schleife):
    while (new Date(J, 0, ++Mo).getDay() != 1);
    Mo = new Date(J, 0, Mo);
    // Millisekunden pro Woche:
    var msWo = 604800000;
    return 1 + Math.floor((heute - Mo) / msWo);
  }
