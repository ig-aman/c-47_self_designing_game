class Ball{
    constructor(x,y,width,height, angle){
      var options = {

       'frictionAir': 0.005, 
       'density': 1

      }
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      World.add(myWorld,this.body);
      this.width = width;
      this.height = height;
    }
    show()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
     
       
        fill("blue");
        ellipse(0, 0,this.width, this.height);
        pop();
        
    }
  
  
  }
