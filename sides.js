class side1{
    constructor(x,y,w,h){
        var property ={
            isStatic : true
        }
        this.side1 = Bodies.rectangle(x,y,w,h,property);
        World.add(world,this.side1);

        

        this.width = w;
        this.height = h;
    }

show(){
    rectMode(CENTER);
    rect(this.side1.position.x,this.side1.position.y,this.width,this.height);
    

}

}

