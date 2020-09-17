class Bird extends BaseClass {
  constructor(x, y) {
    super(x, y, 50, 50);
    this.image = loadImage("sprites/bird.png");
    this.image1 = loadImage("sprites/smoke.png");
    this.smoke = [];
  }











  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    var s = [this.body.position.x, this.body.position.y];
    this.smoke.push(s);
    for (var i = 0; i < this.smoke.length; i = i + 1) {
      image(this.image1, this.smoke[i][0], this.smoke[i][1]);
    }
  }
}
