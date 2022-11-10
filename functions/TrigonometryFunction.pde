public abstract class TrigFunction extends Function {
  protected Float amplitude, period;
  
  public TrigFunction(Float amplitude, Float period) {
    super();
    this.amplitude = amplitude;
    this.period = period;
  }
  
  public Float getAmplitude() {
    return this.amplitude;
  }
  
  public Float getPeriod() {
     return this.period; 
  }
}
