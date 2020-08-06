function luasLingkaran(jariJari) {
  var pi = jariJari % 7 === 0 ? 22/7 : 3.14;
  return pi*jariJari*jariJari;
}

function luasSegitiga(alas, tinggi) { 
  return 0.5*alas*tinggi;
}

function luasPersegi(sisi) {
  return sisi*sisi;
}

console.log("luas lingkaran dari jari-jari 7 adalah " + luasLingkaran(7))
console.log("luas segitiga dari alas 7 dan tinggi 8 adalah " + luasSegitiga(7,8))
console.log("luas persego dari sisi 8 adalah " + luasPersegi(8))