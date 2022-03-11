class ROAD{
    constructor(x,width,lane=3){
        this.x=x
        this.w=width
        this.lane=lane
        this.l=x-width/2
        this.r=x+width/2
        const infinity=1000000
        this.t=infinity
        this.b=-infinity

        const topLeft={x:this.l,y:this.t}
        const topRight={x:this.r,y:this.t}
        const bottomLeft={x:this.l,y:this.b}
        const bottomRight={x:this.r,y:this.b}

        this.border=[
            [topLeft,bottomLeft],
            [topRight,bottomRight]
        ]
    }
    getLaneCenter(laneIndex){
        const laneW=this.w/this.lane
        return this.l+laneW/2+Math.min(laneIndex,this.lane-1)*laneW
    }
    draw(ctx){
        ctx.lineWidth=5
        ctx.strokeStyle='white'

        for(let i=1;i<=this.lane-1;i++){
            const x=lerp(this.l,this.r,i/this.lane)
                ctx.setLineDash([20,20])
                ctx.beginPath()
                ctx.moveTo(x,this.t)
                ctx.lineTo(x,this.b)
                ctx.stroke()
        }
        ctx.setLineDash([])
        this.border.forEach(elm=>{
            ctx.beginPath()
            ctx.moveTo(elm[0].x,elm[0].y)
            ctx.lineTo(elm[1].x,elm[1].y)
            ctx.stroke()
        })

    }
}