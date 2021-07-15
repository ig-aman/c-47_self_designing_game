class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 2,
            length : 250   
        }

        this.pointB = pointB;

        this.rope = Constraint.create(options);
        World.add(myWorld, this.rope);
    }
   
   show(){
        
        
     
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            
                strokeWeight(7);
                line(pointB.x , pointB.y, pointA.x , pointA.y);
               
    }
    
}