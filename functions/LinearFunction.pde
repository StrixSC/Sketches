public class LinearFunction extends StandardFunction {
  public LinearFunction(Float slope, Float intercept) {
    super(slope, intercept); //<>//
  }

  public void render() {
    ellipse(this.x,this.y + HEIGHT/2, 1, 1);
  }
  
  public void update(Float dX) {
   this.x += dX; //<>//
   this.y = this.slope * (this.x + this.intercept);  //<>//
  }
}
