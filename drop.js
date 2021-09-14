class Drop{
    constructor(x,y)
    {
     var    dropOptions={
friction:0.5,
restituion:0.1
        }
        this.body=Matter.Bodies.circle(x,y,40,dropOptions)
        this.radius=40
        World.add(world,this.body)
    }
    updatey(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,   {x:randon(0,400),y:randon(0,400)})
        }
    }

    showdrop(){
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}