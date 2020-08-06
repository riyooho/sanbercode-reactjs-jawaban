# Pilihan Ganda

**1. ReactJS adalah**
- javascript library yang digunakan untuk membangun backend server
- framework javascript yang digunakan untuk membangun user interface
- javascript library yang digunakan untuk membangun user interface **(Jawaban yang benar)**
- framework javascript untuk membangun aplikasi

------------

**2. di bawah ini manakah cara penggunaan object yang benar**
- let book = {name: "biology". totalPage: 50}
- let book = {name: "biology", totalPage: 50} **(Jawaban yang benar)**
- let book = {name: "biology"; totalPage: 50}
- let book = {name: "biology": totalPage: 50}

------------

**3. dibawah ini penulisan manakah penulisan class yang benar kecuali**
- class Buah {}
- class BuahBuahan {}
- class buahBuahan {} **(Jawaban yang benar)**
- class BuahSegar {}

------------

**4. berikut ini yang merupakan method array untuk menghasilkan iteration berupa array adalah**
- .foreach() **(Jawaban yang benar)**
- .filter()
- .map() **(Jawaban yang benar)**
- .for()

------------

**5. di bawah ini yang termasuk fitur di dalam es6 yaitu**
- var
- function
- let+const **(Jawaban yang benar)**
- object

------------

**6. salah satu perbedaan arrow function dibandingkan dengan function adalah**
- ada variable nya
- ada return nya
- tidak menggunakan this **(Jawaban yang benar)**
- tidak menggunakan return

------------

**7. Bagaimana cara penulisan arrow function?**
- const myFunction = [] => {}
- const myFunction = () => {} **(Jawaban yang benar)**
- const myFunction = ()=> []
- const myFunction = {} => ()

------------

**8. function yang dipanggil ketika function lain selesai menjalankan programnya adalah**
- arrow function
- class
- promise
- callback **(Jawaban yang benar)**

------------

**9. Synchronous dan Asynchronous. Synchronous artinya program berjalan secara berurutan sedangkan Asynchronous artinya**
- program yang sinkron beraturan
- program yang tidak berjalan
- program yang berjalan secara bersama-sama **(Jawaban yang benar)**
- program yang dimatikan

------------

**10. berikut ini hal-hal yang penting di dalam ReactJS kecuali**
- components
- virtual DOM
- JSX
- CSV **(Jawaban yang benar)**

------------

# Essay

**11. gunakan promise di bawah ini lalu jalankan lah promise dengan memasukkan filter cek colorful atau tidak (nilainya bisa true atau false) dan minimum jumlah halaman (nilainya bisa lebih dari 0). perhatian masukkan promise di bawah ini dalam jawaban juga, dan tampilkan datanya dengan console.log**

![instruksi11.png](instruksi11.png?raw=true)

**Jawaban:**

```javascript
function filterBooksPromise(colorful, amountOfPage){
  return new Promise(function(resolve, reject){
    var books=[
        {name: "shinchan", totalPage: 50, isColorful: true},
        {name: "Kalkulus", totalPage: 250, isColorful: false},
        {name: "doraemon", totalPage: 40, isColorful: true},
        {name: "algoritma", totalPage: 300, isColorful: false},
    ]
    if (amountOfPage > 0) {
        resolve(books.filter(x=> x.totalPage >= amountOfPage && x.isColorful == colorful));
      } else {
        var reason= new Error("Maaf parameter salah")
        reject(reason);
      }
  });
}

filterBooksPromise(false, 50)
  .then(function (books) {
    console.log(books)
  })
  .catch(function (error) {
    console.log(error)
  })
```

------------

**12. ikutilah instruksi di bawah ini**
keterangan: class Lingkaran dan Persegi itu inheritance ke class BangunDatar

![instruksi12.png](instruksi12.png?raw=true)

**Jawaban:**

```javascript
class BangunDatar {
  constructor(nama){
    this.nama = nama
  }

  luas(){
    return ""
  }

  keliling(){
    return ""
  }
}

class Lingkaran extends BangunDatar{

  constructor(nama){
    super(nama)
    this._jariJari = 0
  }


  get jariJari() {
    return this._jariJari
  }

  set jariJari(angka) {
    this._jariJari = angka
  }

  luas(){
    const pi = this.jariJari % 7 === 0 ? 22/7 : 3.14    
    return pi*this.jariJari*this.jariJari
  }
  
  keliling(){
    const pi = this.jariJari % 7 === 0 ? 22/7 : 3.14
    return 2*pi*this.jariJari
  }

}

class Persegi extends BangunDatar{

  constructor(nama){
    super(nama)
    this._sisi = 0
  }


  get sisi() {
    return this._sisi
  }

  set sisi(angka) {
    this._sisi = angka
  }

  luas(){
    return this.sisi*this.sisi
  }
  
  keliling(){
    return 4*this.sisi
  }

}
var bangunDatar1 = new BangunDatar("bangunDatar1")
var lingkaran1 = new Lingkaran("lingkaran1")
lingkaran1.jariJari = 7

var persegi1 = new Persegi("persegi1")
persegi1.sisi = 8
console.log("luas: " + bangunDatar1.luas())
console.log("keliling: " + bangunDatar1.keliling())
console.log()

console.log("luas Lingkaran dan keliling Lingkaran dengan jari-jari : " + lingkaran1.jariJari )
console.log("luas: " + lingkaran1.luas())
console.log("keliling: " + lingkaran1.keliling())
console.log()

console.log("luas Lingkaran dan keliling Lingkaran dengan sisi : " + persegi1.sisi )
console.log("luas: " + persegi1.luas())
console.log("keliling: " + persegi1.keliling())
```

------------

**13. let pesertaLomba= [["Budi", "Pria", "172cm"], ["Susi", "Wanita", "162cm"], ["Lala", "Wanita", "155cm"], ["Agung", "Pria", "175cm"]]. ubahlah variable tersebut menjadi array of object, lalu tampilkan data nya dengan console.log**

**jawaban**

```javascript
let pesertaLomba= [["Budi", "Pria", "172cm"], ["Susi", "Wanita", "162cm"], ["Lala", "Wanita", "155cm"], ["Agung", "Pria", "175cm"]]

let dataPesertaLomba = pesertaLomba.map((el) =>{
  let objectPesertaLomba = {
    nama: el[0],
    jenisKelamin: el[1],
    tinggi: el[2]
  }
  return objectPesertaLomba
})

console.log(dataPesertaLomba)
```

------------

**14. buatlah arrow function volume balok dan kubus, gunakan rest parameter di parameter functionnya. lalu tampilkan hasil perhitungannya dengan template literal**

**Jawaban**

```javascript
const volumeBalok = (...rest) => {
    let [panjang, lebar, tinggi] = rest
    let volume = panjang*lebar*tinggi
    return `hasil volume balok dari panjang ${panjang}, lebar ${lebar} dan tinggi ${tinggi} adalah ${volume}`
} 


const volumeKubus = (...rest) => {
    let sisi = rest
    let volume = sisi*sisi*sisi
    return `hasil volume kubus dari sisi ${sisi} adalah ${volume}`
}

console.log(volumeBalok(5,6,7))
console.log(volumeKubus(8))

```

**15. ikutilah instruksi di bawah ini, lalu tampilkan hasilnya dengan console.log**

![instruksi15.png](instruksi15.png?raw=true)

**Jawaban:**

```javascript
let warna = ["biru", "merah", "kuning" , "hijau"]

let dataBukuTambahan= {
  penulis: "john doe",
  tahunTerbit: 2020 
}

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul:["hitam"]
}

let combinedBuku = {...buku, 
  warnaSampul: [...buku.warnaSampul, ...warna],
  ...dataBukuTambahan
}

console.log(combinedBuku)

```