class Snow {
constructor(x,y,height,width){
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.image = loadImage("snow4.webp")

}

}