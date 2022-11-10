public class QuadraticFunction extends StandardFunction {
  public QuadraticFunction(Float slope, Float intercept) {
    super(slope, intercept);
  }

  public void render() {
    ellipse(this.x,this.y + HEIGHT/2, 1, 1);
  }
  
  public void update(Float dX) {
   this.x += dX;
   this.y = this.slope * ((float) Math.pow(this.x, 2) + this.intercept); 
  }
}
