class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    
    this.cannonImage=loadImage('assets/canon.png')
    this.baseImage=loadImage('assets/cannonBase.png')
  }
  show(){
if(keyIsDown(DOWN_ARROW)&& this.angle<70){
  this.angle+=1
}
if(keyIsDown(UP_ARROW)&& this.angle>-50){
  this.angle-=1
}



push()
translate(this.x,this.y)
rotate(this.angle)
imageMode(CENTER)
image(this.cannonImage,0,0,this.width,this.height)



pop()
image(this.baseImage,70,20,200,200)
  }

}
