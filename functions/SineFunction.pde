public class SineFunction extends TrigFunction {
  public SineFunction(Float amplitude, Float period) {
    super(amplitude, period);
  }

  public void update(Float dX) {
   this.x += dX;
   this.y = this.amplitude * sin(this.period*this.x);
  }
  
  public void render() {
    ellipse(this.x,this.y + HEIGHT/2, 1, 1);
  }
}
