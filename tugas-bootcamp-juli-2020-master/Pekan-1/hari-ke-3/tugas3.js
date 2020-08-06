// soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var soal1 = kataPertama + " " + (kataKedua[0].toUpperCase() + kataKedua.slice(1)) + " " + kataKetiga + " " + kataKeempat.toUpperCase();


console.log("---SOAL 1----")
console.log(soal1)
console.log()

// soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var soal2 = parseInt(kataPertama) + parseInt(kataKedua) + parseInt(kataKetiga) + parseInt(kataKeempat) 

console.log("---SOAL 2----")
console.log(soal2)
console.log()


// soal 3

var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4,14);  
var kataKetiga = kalimat.substring(15,18);  
var kataKeempat = kalimat.substring(19,24); 
var kataKelima= kalimat.substring(25,31);; 

console.log("---SOAL 3----");
console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);
console.log();

// soal 4
var nilai = 79; 

console.log("---SOAL 4----");

if (nilai >= 80){
  console.log("A")
}else if(nilai >= 70 && nilai < 80){
  console.log("B")
}else if(nilai >=60 && nilai < 70){
  console.log("C")
}else if (nilai >= 50 && nilai < 60){
  console.log("D")
}else{
  console.log("E")
}

console.log();

// soal 5
console.log("---SOAL 5----");
var tanggal = 22;
var bulan = 7;
var tahun = 2020;

var strBulan

switch(bulan){
  case 1: {
    strBulan = "Januari";
    break;
  }
  case 2: {
    strBulan = "Februari";
    break;
  }
  case 3: {
    strBulan = "Maret";
    break;
  }
  case 4: {
    strBulan = "April";
    break;
  }
  case 5: {
    strBulan = "Mei";
    break;
  }
  case 6: {
    strBulan = "Juni";
    break;
  }
  case 7: {
    strBulan = "Juli";
    break;
  }
  case 8: {
    strBulan = "Agustus";
    break;
  }
  case 9: {
    strBulan = "September";
    break;
  }
  case 10: {
    strBulan = "Oktober";
    break;
  }
  case 11: {
    strBulan = "November";
    break;
  }
  case 12: {
    strBulan = "Desember";
    break;
  }
  default:{
    strBulan = "invalid"
  }
}

console.log(tanggal + " " + strBulan + " " + tahun)
console.log()