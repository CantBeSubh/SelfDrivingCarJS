let size={
  h:window.innerHeight,
  w:window.innerWidth
}

const canvas=document.getElementById('canvas')
canvas.width=200

const ctx=canvas.getContext('2d')
const road= new ROAD(canvas.width/2,canvas.width*.9)
const car=new CAR(road.getLaneCenter(4),100,30,50)
car.draw(ctx)


const animate=()=>{
  car.update(road.border)
  size.h=window.innerHeight
  canvas.height=size.h
  ctx.save()
  ctx.translate(0,-car.y+canvas.height*.7)
  road.draw(ctx)
  car.draw(ctx)
  ctx.restore()
  window.requestAnimationFrame(animate)
}

animate()