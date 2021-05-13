class Ground{
    constructor(x, y, w, h){
        var property={
            isStatic : true
        }
        this.ground = Bodies.rectangle(x, y, w, h, property);
        World.add(world,this.ground);
        this.width = w;
        this.height = h;
    }

    show(){
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,this.width,this.height);
    }
}