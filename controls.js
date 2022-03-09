class CONTROL{
    constructor(){
        this.f=false
        this.l=false
        this.r=false
        this.b=false

        this.#addKeyboadListener()
    }

    #addKeyboadListener(){
        document.onkeydown=(event)=>{
            switch(event.key){
                case 'ArrowLeft':
                    this.l=true
                    break
                case 'ArrowRight':
                    this.r=true
                    break
                case 'ArrowUp':
                    this.f=true
                    break
                case 'ArrowDown':
                    this.b=true
                    break
            }
            // console.table(this)
        }

        document.onkeyup=(event)=>{
            switch(event.key){
                case 'ArrowLeft':
                    this.l=false
                    break
                case 'ArrowRight':
                    this.r=false
                    break
                case 'ArrowUp':
                    this.f=false
                    break
                case 'ArrowDown':
                    this.b=false
                    break
            }
            // console.table(this)
        }
    }
}