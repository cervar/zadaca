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
    upisan: false
  }
]

function provjeri(lista, str){
  for (let i = 0; i < lista.length; i++){
    if(lista[i].ime === str || lista[i].prezime === str)
      if(lista[i].upisan === true) return true
  }
  return false
}

console.log(provjeri(lista, "Severina")) // true
console.log(provjeri(lista, "Mika")) // false
console.log(provjeri(lista, "Turomen")) // true
console.log(provjeri(lista, "Slavica")) // false