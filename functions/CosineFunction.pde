public class CosineFunction extends TrigFunction {
  public CosineFunction(Float amplitude, Float period) {
    super(amplitude, period);
  }

  public void update(Float dX) {
   this.x += dX;
   this.y = this.amplitude * cos(this.period*this.x);
  }
  
  public void render() {
    ellipse(this.x,this.y + HEIGHT/2, 1, 1);
  }
}
