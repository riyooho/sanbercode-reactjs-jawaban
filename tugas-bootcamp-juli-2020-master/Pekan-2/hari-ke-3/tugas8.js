//soal 1
console.log("----soal 1----")

const phi = r % 7 === 0 ? (22/7) : 3.14

const luasLingkaran = (r)=>{
  let luas = phi * r * r
  return luas
}

const kelilingLingkaran = (r) =>{
  let keliling = 2 * phi * r
  return keliling
}

console.log(luasLingkaran(7))
console.log(kelilingLingkaran(7))

console.log()

//soal 2
console.log("----soal 2----")

let kalimat =""

const tambahkanKata = (str) =>{
  kalimat = `${kalimat} ${str}`
}

tambahkanKata("saya")
tambahkanKata("adalah")
tambahkanKata("seorang")
tambahkanKata("frontend")
tambahkanKata("developer")

console.log(kalimat)

console.log()

// soal 3
console.log("----soal 3----")

class Book {
  constructor(name, totalPage, price){
    this.name = name
    this.totalPage = totalPage
    this.price = price
  }
}

class Komik extends Book {
  constructor(name, totalPage, price, isColorful){
    super(name, totalPage, price)
    this.isColorful = isColorful
  }
}

let novel = new Komik("novel", 402, 50000)
let shincan = new Komik("Shincan", 42, 20000, false)
let donaldDuck = new Komik("Donal Duck", 24, 20000, true)

console.log(novel, shincan, donaldDuck)