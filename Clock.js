function createClock(size) {
  if (size % 2 != 1) return
  var data = []
  for (var i = 0; i < size; i++) {
    var line = []
    for (var j = 0; j < size; j++) line.push('    ')
    data.push(line)
  }
  var angle = (new Date().getMinutes()+15) / 60 * Math.PI * 2;
  var angleh = (new Date().getHours()+3) / 12 * Math.PI * 2+30*angle/360;
  var radius = (size) / 2
  for (var i = 0; i < radius + 1; i++) {
    var x = Math.floor(radius - Math.sin(angle) * i)
    var y = Math.floor(radius - Math.cos(angle) * i)
    if (x < size && x >= 0 && y < size && y >= 0) data[x][y] = '█'
var x = Math.floor(radius - Math.sin(angleh) * i)
    var y = Math.floor(radius - Math.cos(angleh) * i)
    if (i<(size/4)*1.5&&x < size && x >= 0 && y < size && y >= 0) data[x][y] = '█'
  }
  
  var result = []
  for (var i = 0; i < data.length; i++) result.push(data[i].join(''))
  return result.join('\n')
}


createClock(15);
