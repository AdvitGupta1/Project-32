class Box{
    constructor(x,y,w,h){
    var options={
        restitution:0.3,
        friction:1,
        density:0.04
    }
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.body=Bodies.rectangle(x,y,w,h,options);
    World.add(world,this.body);
    }
    display(){
        var position=this.body.position
        push()
        translate(position.x,position.y);
        fill("yellow");
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }
}