class Shooter{
    constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        length:10,
        stiffness:0.04
    }
    this.rope=Constraint.create(options);
    World.add(world,this.rope);
    }

    fly(){
        this.rope.bodyA = null;
    }

    attach(body){
        this.rope.bodyA=body;
        }

    display(){
        if(this.rope.bodyA){
        var positionA=this.rope.bodyA.position
        var positionB=this.rope.pointB
        push()
        stroke(0);
        line(positionA.x,positionA.y,positionB.x,positionB.y);
        pop();
    }}
}