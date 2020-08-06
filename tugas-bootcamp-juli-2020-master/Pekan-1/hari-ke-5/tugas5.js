// Soal 1
console.log('-----soal 1-----')
function halo() {
  return "Halo Sanbers!"
}

console.log(halo()) // "Halo Sanbers!" 

console.log()

// Soal 2
console.log('-----soal 2-----')
function kalikan(x, y) {
  return x * y
}

var num1 = 12
var num2 = 4

var hasilKali = kalikan(num1, num2)
console.log(hasilKali) // 48
console.log()

// Soal 3

console.log('-----soal 3-----')
function introduce(name, age, address, hobby) {
  var kalimat = "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby + "!"
  return kalimat
}

var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"

var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan)
console.log()
