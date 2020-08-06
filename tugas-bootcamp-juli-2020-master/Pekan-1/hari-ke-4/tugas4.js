// soal 1
console.log("---SOAL 1----")

var iterasiLoopPertama = 1;
var iterasiLoopKedua = 20;

console.log('LOOPING PERTAMA')
while( iterasiLoopPertama <=20){
  if (iterasiLoopPertama % 2 === 0){
    console.log(iterasiLoopPertama + " - I love coding")
  }
  iterasiLoopPertama++
}

console.log('LOOPING KEDUA')
while( iterasiLoopKedua > 0){
  if (iterasiLoopKedua % 2 === 0){
    console.log(iterasiLoopKedua + " - I will become a frontend developer")
  }
  iterasiLoopKedua--
}

console.log()

// soal 2
console.log("---SOAL 2----")
for(var i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 2 === 1){
    console.debug(i + " - I Love Coding")
  }else if(i % 2 === 1){
    console.debug(i + " - Santai")
  }else{
    console.debug(i + " - Berkualitas")
  }
}   
console.log()

// soal 3
console.log("---SOAL 3----")
for(var i = 1; i <= 7; i++) {
  var x = '';
  for(var j = 1; j <= i; j++) {
    x = x + '#';
  }
  console.log(x);
}
console.log()


// soal 4
console.log("---SOAL 4----")
var kalimat="saya sangat senang belajar javascript"

var soal4 = kalimat.split(" ")

console.log(soal4)
console.log()

// soal 5
console.log("---SOAL 5----")
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];

var sortDaftarBuah = daftarBuah.sort()

for(var i = 0; i <= 4; i++) {
  console.log(sortDaftarBuah[i])
}

console.log()