public abstract class Function {
  protected Float x = 0.0;
  protected Float y = 0.0;

  public abstract void render();
  public abstract void update(Float dX);
  
  public Float getX() {
   return this.x;
  }
  
  public Float getY() {
   return this.y; 
  }
  
  public void setX(Float x) {
    this.x = x;
  }
  
  public void setY(Float y) {
    this.y = y;
  }
  
  public void reset() {
   this.x = 0.0;
   this.y = 0.0;
  }
}
