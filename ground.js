class Ground{
    constructor(x, y, w, h){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, w, h, options)
        World.add(world, this.body)
        this.width = w
        this.height = h
        
    }

    display(){
        var pos = this.body.position
        push()
        rectMode(CENTER)
        stroke(255)
        fill(135)
        rect(pos.x, pos.y, this.width, this.height)
        pop()
    }
}