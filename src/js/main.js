var toys = ['img/artefacto_small.png', 'img/artefacto_small.png', 'img/astronauta_small.png', 'img/astronauta_small.png', 'img/bus_small.png', 'img/bus_small.png', 'img/muñeca_small.png', 'img/muñeca_small.png', 'img/oso_small.png', 'img/oso_small.png', 'img/peluche_small.png', 'img/peluche_small.png', 'img/perro_small.png', 'img/perro_small.png', 'img/robot_small.png', 'img/robot_small.png', 'img/soldado_small.png', 'img/soldado_small.png', 'img/triciclo_small.png', 'img/triciclo_small.png']
var imgs = document.getElementsByClassName('toys')

function shuffle (array) {
  var currentIndex = array.length
  var tempValue
  var randomIndex

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    tempValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = tempValue
  }

  return array
}

var toysRandom = shuffle(toys)

Array.from(imgs).forEach(function (element, index) {
  element.src = toysRandom[index]
})

console.log(toysRandom)