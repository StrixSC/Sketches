public class CubicFunction extends StandardFunction {
  public CubicFunction(Float slope, Float intercept) {
    super(slope, intercept);
  }

  public void render() {
    ellipse(this.x,this.y + HEIGHT/2, 1, 1);
  }
  
  public void update(Float dX) {
   this.x += dX;
   this.y = this.slope * ((float) Math.pow(this.x, 3) + this.intercept); 
  }
}
