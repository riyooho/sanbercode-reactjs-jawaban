// soal 1 
console.log("----SOAL 1-----")
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]

var objectPeserta = {
  nama: arrayDaftarPeserta[0],
  jenisKelamin: arrayDaftarPeserta[1],
  hobi: arrayDaftarPeserta[2],
  tahunLahir: arrayDaftarPeserta[3]
}

console.log(objectPeserta)
console.log()

//soal 2
console.log("----SOAL 2-----")
var buahBuah = [
  { nama: "strawberry",
    warna: "merah",
    adaBijinya: false,
    harga: 9000 
  },
  { nama: "jeruk",
    warna: "oranye",
    adaBijinya: true,
    harga: 8000
  },
  { nama: "Semangka",
    warna: "Hijau & Merah",
    adaBijinya: true,
    harga: 10000
  },
  { nama: "Pisang",
    warna: "Kuning",
    adaBijinya: false,
    harga: 5000
  }
]

console.log(buahBuah[0])
console.log()

// soal 3
console.log("----SOAL 3-----")

var dataFilm = []

function tambahDataFilm(nama, durasi, genre, tahun){
  dataFilm.push({
    nama: nama,
    durasi: durasi,
    genre: genre,
    tahun: tahun
  })
}

tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")

console.log(dataFilm)
console.log()


//soal 4
console.log("----SOAL 4----")
//Release 0
console.log("----Release 0----")
class Animal {
  constructor(name) {
    this._name = name;
    this._legs = 4;
    this._cold_blooded = false;
  }

  get name() {
    return this._name
  }

  get legs() {
    return this._legs
  }

  set legs(amount) {
    this._legs = amount
  }

  get cold_blooded() {
    return this._cold_blooded
  }

}

var sheep = new Animal("shaun");

console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false
sheep.legs = 3
console.log(sheep.legs) // 4

// Release 1
console.log("----Release 1----")
class Ape extends Animal {
  constructor(name, amount) {
    super(name)
    this._legs = amount;
  }

  yell() {
    console.log("Auooo")
  }
}

class Frog extends Animal {
  constructor(name) {
    super(name)
  }

  jump() {
    console.log("hop hop")
  }
}

var sungokong = new Ape("kera sakti", 2)
sungokong.yell() // "Auooo"
console.log(sungokong.name)
console.log(sungokong.legs)
console.log(sungokong.cold_blooded)

var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 
console.log(kodok.name)
console.log(kodok.legs)
console.log(kodok.cold_blooded)

console.log()

// soal 5
console.log("----SOAL 5----")
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    var output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.timer = setInterval(this.render.bind(this), 1000);
    
    // dengan arrow function
    // this.timer = setInterval(() => this.render(), 1000);
  }
}

var clock = new Clock({ template: 'h:m:s' });
clock.start();
