public class TanFunction extends TrigFunction {
  public TanFunction(Float amplitude, Float period) {
    super(amplitude, period);
  }

  public void update(Float dX) {
   this.x += dX;
   this.y = this.amplitude * tan(this.period*this.x);
  }
  
  public void render() {
    ellipse(this.x,this.y + HEIGHT/2, 1, 1);
  }
}
