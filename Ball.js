class Ball{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            density:0.3     
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Matter.Bodies.circle(x,y,r,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push()
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop()
    }
}