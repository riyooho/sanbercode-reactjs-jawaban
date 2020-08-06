# Pilihan Ganda

**1. Perintah apa yang digunakan git untuk menambahkan perubahan file**
-  git add  **(Jawaban yang benar)**
-  git push
-  git commit
-  git status

------------

**2. di bawah ini manakah tag yang menampilkan gambar**
- `<input>`
- `<img>` **(Jawaban yang benar)**
- `<br>`
- `<strong></strong>`

------------

**3. Bagaimana cara menulis Array di javascript**
- var buah = ["semangka"; "jeruk"; "anggur"]
- var buah = ["semangka, jeruk, anggur"] **(Jawaban yang benar)**
- var buah = ["semangka", "jeruk", "anggur"]
- var buah = ("semangka", "jeruk", "anggur")

------------

**4. agar hasil output variabel jumlah pada kode di bawah ini menjadi 15 maka isilah titik ini dengan**
```javascript
    var jumlah = 0;
    	for(......){
    		jumlah +=i
    	}
    console.log(jumlah)
```
- i=0;i<=5;i++
- i=0;i<=5;i+
- var i=0;i<=5;i++ **(Jawaban yang benar)**
- var i=0;i<=5;i+

------------

**5. Salah satu jenis selektor CSS adalah class. Untuk mendeklarasikan sebuah selektor class tanda yang digunakan didepan nama class adalah**
- tanda ‘:’ (titik dua)
- tanda ‘.’ (titik) **(Jawaban yang benar)**
- tanda ‘#’ (kresh)
- tanda ‘;’ (titik koma)

------------

**6. Git merupakan tools yang berguna dalam programming yang merupakan?**
- Version Central System
- Version Control Source
- Version Control System **(Jawaban yang benar)**
- Version Central Source

------------


**7. Bagaimana cara penulisan function di javascript ?**
- function myFunction() **(Jawaban yang benar)**
- Function myFunction()
- funct myFunction
- fungsi myFunction

------------

**8. di bawah ini merupakan conditional di javascript, kecuali**
- if
- if else
- switch case
- for **(Jawaban yang benar)**

------------

**9. di bawah ini yang merupakan metode array untuk menambahkan nilai di belakang elemen terakhir di array adalah**
- sort()
- push() **(Jawaban yang benar)**
- pop()
- split()

------------

**10. sintaks yang digunakan untuk menampilkan log di console javascript adalah**
- alert()
- console.write()
- console.writeline()
- console.log() **(Jawaban yang benar)**

------------

# Essay

**11. Buatlah kode html dengan tampilan seperti di bawah ini**

![instruksi11.png](instruksi11.png?raw=true)

**Jawaban:**

```html
<html>
  <head>
    <title>Form Pembelian Buah</title>
  </head>
  <body>
    <div style="width: 40%; margin: 0 auto; border: 1px solid #000; border-radius: 20px">
      <h1 style="text-align:center">Form Pembelian Buah</h1>
      <div style="padding: 20px; padding-top: 0px">
        <div style="display: block; margin-bottom: 1em;">
          <div style="display: inline-block; width: 150px; font-weight: bold; font-size: 16px;">
            Nama Pelanggan
          </div>
          
          <input style="display: inline-block;" type="text" name="name">
        </div>
        <div style="display: block; margin-bottom: 1em;">
          <div style="display: inline-block; width: 150px; font-weight: bold; font-size: 16px;">
            Daftar Item 
          </div>
          <div style="display: inline-block;">
            <input type="checkbox" name="semangka" value="semangka">
            <label>Semangka</label><br>
            <input type="checkbox" name="jeruk" value="jeruk">
            <label>Jeruk</label><br>
            <input type="checkbox" name="nanas" value="nanas">
            <label>Nanas</label><br>
            <input type="checkbox" name="salak" value="salak">
            <label>Salak</label><br>
            <input type="checkbox" name="anggur" value="anggur">
            <label>Anggur</label><br>
          </div>
        </div>
        <button style="background: white; border-radius: 20px;">
          <a href="#" style="text-decoration: none; color: black;">Kirim</a>
        </button>
      </div>
    </div>
  </body>
</html>
```

------------

**12. buatlah function perhitungan luas lingkaran, luas segitiga dan luas persegi**

**Jawaban**

```javascript
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

```

------------


**13. buatlah daftar alat tulis dengan menggunakan perulangan WHILE**

![instruksi13.png](instruksi13.png?raw=true)

**Jawaban:**

```javascript
var daftarAlatTulis = ["2. Pensil", "5. Penghapus","3. Pulpen","4. Penggaris","1. Buku"];
var i = 0;
while (i < daftarAlatTulis.length) {
    console.log(daftarAlatTulis.sort()[i]);
    i++;
}

```

------------


**14. buatlah function yang menampilkan tampilan seperti di bawah ini**
ketentuan: nama functionnya adalah tampilkanBintang(jumlahBintang)

![instruksi14.png](instruksi14.png?raw=true)

**Jawaban:**

```javascript
function tampilkanBintang(jumlahBintang){
  for(var i = jumlahBintang; i >= 1; i--) {
    var x = '';
    for(var j = 1; j <= i; j++) {
      x = x + '*';
    }
    console.log(x);
  }
}

tampilkanBintang(8)

```

------------

**15. Buatlah pengkondisian(conditional) dengan ketentuan seperti di bawah ini**

![instruksi15.png](instruksi15.png?raw=true)

**Jawaban:**

```javascript
var jenisKelamin;
var nama;

jenisKelamin = "L"
nama ="John"

if (jenisKelamin === "L"){
  console.log("bapak "+ nama);
}else if(jenisKelamin === "P"){
  console.log("ibu "+ nama);
}else{
  console.log("maaf inputan salah")
}
  
```
