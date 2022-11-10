public abstract class StandardFunction extends Function {
  protected Float slope, intercept;
  
  public StandardFunction(Float slope, Float intercept) {
    super();
    this.slope = slope;
    this.intercept = intercept;
  }
  
  public Float getSlope() {
    return this.slope;
  }
  
  public Float getIntercept() {
     return this.intercept; 
  }
}
