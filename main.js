import './style.css'

let size={
  h:window.innerHeight,
  w:window.innerWidth
}

const canvas=document.getElementById('canvas')
canvas.width=200

const ctx=canvas.getContext('2d')
const car=new CAR(100,100,30,50)
car.draw(ctx)


const animate=()=>{
  car.update()
  size.h=window.innerHeight
  canvas.height=size.h
  car.draw(ctx)
  window.requestAnimationFrame(animate)
}

animate()