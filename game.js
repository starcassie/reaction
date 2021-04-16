// set up our canvas to fill the screen

let canvas = document.getElementById('display')
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight
let ctx = canvas.getContext('2d')

// game logic

let msUntilReady = 2000 + (Math.random() * 3000) // 2-5 seconds of waiting
let msUntilLate = msUntilReady + 1000 // half a second to react

let start = new Date()
let ready = new Date(start.getTime() + msUntilReady)
let late = new Date(start.getTime() + msUntilLate)

window.addEventListener('keydown', event => {
  if (event.code == 'Enter') {
    let now = new Date()
    if (now < ready) {
      alert('too early!')
    } else if (now > late) {
      alert('too slow!')
    } else {
      alert('YOU WIN!!!')
    }
  }
})

function drawR() {
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "#94C4F3"
    ctx.fillRect(canvas.width/2 - 50, canvas.height/2 - 100, 100, 100);
  }
}

function clearR() {
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.clearRect(canvas.width/2 - 50, canvas.height/2 - 100, 200, 200);
  }
}

function drawC() {
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    console.log('here')
    ctx.beginPath();
    ctx.arc(canvas.width/2, canvas.height/2 - 50, 50, 0, Math.PI * 2, true);
    ctx.fillStyle = "#D494F3"
    ctx.fill()
  }
}


// todo how to make this graphical?

drawR()
setTimeout(() => clearR(), msUntilReady)
setTimeout(() => drawC(), msUntilReady)
setTimeout(() => clearR(), msUntilLate)
setTimeout(() => drawR(), msUntilLate)
