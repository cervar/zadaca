let lista = [
  {
  ime: "Colin",
    prezime: "Mcrea",
    upisan: false
  },
  {
    ime: "Henri",
    prezime: "Ford",
    upisan: true
  },
  {
    ime: "Lando",
    prezime: "Norris",
    upisan: true
  },
  {
    ime: "Ranko",
    prezime: "Banko",
    upisan: true
  },
  {
    ime: "Leo",
    prezime: "Fumić",
    upisan: false
  },
  {
    ime: "Tommi",
    prezime: "Makinen",
    upisan: true
  },
  {
    ime: "Charles",
    prezime: "Leclerk",
    upisan: false
  },
  {
    ime: "Flor",
    prezime: "Janssen",
    upisan: true
  },
  {
    ime: "Taria",
    prezime: "Turnomen",
    upisan: true
  },
  {
    ime: "Severina",
    prezime: "Bačić",
    upisan: falsee
  }
]

function sadrzi (str, x) {
  if (str.toUpperCase().includes(x.toUpperCase()))
    return true
  else return false
}

function provjeri(lista, str, status){
  for (let i = 0; i < lista.length; i++){
    if(sadrzi(lista[i].ime, str) || sadrzi(lista[i].prezime, str))
      if(lista[i].upisan === status) return true
  }
  return false
}


console.log(provjeri(lista, "Severina", true)) // true
console.log(provjeri(lista, "Mika",false)) // true
console.log(provjeri(lista, "Turomen", true)) // true
console.log(provjeri(lista, "Slavica",true)) // false