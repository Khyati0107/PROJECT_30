class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage ("block.png")
      this.visibility = 255
    }
    display(){
      var pos= this.body.position;
      console.log(this.body.speed)
      if (this.body.speed < 3){
      
    }
    else{
      World.remove(world,this.body)
      push();
      this.visibility = this.visibility - 5
      tint (255,this.visibility)
      image (this.image, this.body.position.X, this.body.position.Y, 50, 50 )
      pop();
    }
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.width, this.height);
    }
}