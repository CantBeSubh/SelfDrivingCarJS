class CAR{
    constructor(x,y,w,h){
        this.x=x
        this.y=y
        this.width=w
        this.height=h

        this.speed=0
        this.acc=.2
        this.MAXSPEED=3
        this.friction=.05
        this.angle=0

        this.sensor=new Sensor(this)
        this.controls=new CONTROL()
    }

    update(){
        if(this.controls.b){
            this.speed-=this.acc
        }
        
        if(this.controls.f){
            this.speed+=this.acc
        }
        if(this.speed>this.MAXSPEED){
            this.speed=this.MAXSPEED
        }
        if(this.speed<-this.MAXSPEED/2){
            this.speed=-this.MAXSPEED/2
        }
        if(this.speed<0){
            this.speed+=this.friction
        }
        if(this.speed>0){
            this.speed-=this.friction
        }
        if(Math.abs(this.speed)<this.friction){
            this.speed=0
        }
        if(this.speed!=0){
            const flip=this.speed>0?1:-1

            if(this.controls.l){
                this.angle+=.03*flip
            }
            if(this.controls.r){
                this.angle-=.03*flip
            }
        }
        this.x-=Math.sin(this.angle)*this.speed
        this.y-=Math.cos(this.angle)*this.speed

        this.sensor.update()
    }
    
    draw(ctx){
        ctx.save()
        ctx.translate(this.x,this.y)
        ctx.rotate(-this.angle)

        ctx.beginPath()
        ctx.rect(
            -this.width/2,
            -this.height/2,
            this.width,
            this.height
        )
        ctx.fill()
        ctx.restore()

        this.sensor.draw(ctx)
    }
}