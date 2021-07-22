class paper{





constructor(x,y,radius){       

    var options = {

        'isStatic':false,
        'restitution' : 0.3,
        'friction ': 0,
        'density': 0.11112,
    }

    this.body = Bodies.circle(x, y, radius, options);

    this.y = y;
    this.x = x;

    this.radius = radius;
   
    this.image=loadImage("paper.png");
    World.add(world, this.body);
}



display(){
     var angle = this.body.angle;
     push();
     translate(this.body.position.x, this.body.position.y);
    rotate(angle);
     imageMode(CENTER);
    image(this.image, 0, 0, this.radius);
    pop();
}
}