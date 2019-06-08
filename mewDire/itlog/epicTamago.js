console.log('tamago wa daisuki desu');

var min = 1,
  max = 6;
var isEggScrambled = Math.floor(Math.random() * (max - min)) + min > 3;
if (isEggScrambled) console('oh nose');
