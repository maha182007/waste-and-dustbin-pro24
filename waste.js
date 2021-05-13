 class Waste {
     constructor(x, y, radius){
        var wasteProperty = {restitution :1}
	
        this.waste = Bodies.circle(x, y, radius,wasteProperty)
        World.add(world, this.waste);
        this.radius = radius;

       
      
     }
 
 show(){
    ellipseMode(RADIUS)
    ellipse(this.waste.position.x,this.waste.position.y,this.radius, this.radius);
 }
    }

 