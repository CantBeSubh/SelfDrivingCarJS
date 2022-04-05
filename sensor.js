class Sensor{
    constructor(car){
        this.car=car
        this.rayCnt=3
        this.rayLen=100
        this.raySpread=Math.Pi/4

        this.rays=[]
    }
    
    update(){
        this.#castRays()
    }

    #castRays(){
        this.rays=[];
        for(let i=0;i<this.rayCnt;i++){
            const rayAngle=lerp(
                this.raySpread/2,
                -this.raySpread/2,
                this.rayCnt==1?0.5:i/(this.rayCnt-1)
            )+this.car.angle
            const start={x:this.car.x,y:this.car.y}
            const end={
                x:this.car.x-Math.sin(rayAngle)*this.rayLen,
                y:this.car.y-Math.cos(rayAngle)*this.rayLen
            }
            this.rays.push([start,end])
        }
    }
    
    draw(ctx){
        for(let i=0;i<this.rayCnt;i++){
            ctx.beginPath()
            ctx.innerWidth=2
            ctx.strokeStyle='yellow'
            ctx.moveTo(
                this.rays[i][0].x,
                this.rays[i][0].y
            )
            ctx.lineTo(
                this.rays[i][1].x,
                this.rays[i][1].y
            )
            ctx.stroke()
        }
    }
}