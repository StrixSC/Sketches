final Integer WIDTH = 400;
final Integer HEIGHT = 400;
final Float DEFAULT_AMPLITUDE = (float) (HEIGHT/3);
final Float DEFAULT_PERIOD = TWO_PI/(WIDTH/2);
final Float DEFAULT_SLOPE = -0.25;
final Float DEFAULT_INTERCEPT = 5.0;
final Float dX = 5.0;
Integer currentIndex = 0;

ArrayList<Function> functions = new ArrayList<Function>();
Function currentFunction;

void settings() {
  size(WIDTH, HEIGHT);
}

void setup() {
   background(255.0);
   functions.add(new IdentityFunction());
   functions.add(new LinearFunction(DEFAULT_SLOPE, DEFAULT_INTERCEPT)); //<>//
   functions.add(new QuadraticFunction(DEFAULT_SLOPE/10, DEFAULT_INTERCEPT * 0));
   functions.add(new CubicFunction(DEFAULT_SLOPE/10, DEFAULT_INTERCEPT*0));
   functions.add(new SineFunction(DEFAULT_AMPLITUDE, DEFAULT_PERIOD));
   functions.add(new CosineFunction(DEFAULT_AMPLITUDE, DEFAULT_PERIOD));
   functions.add(new TanFunction(DEFAULT_AMPLITUDE, DEFAULT_PERIOD));
}

void draw() {
  currentFunction = functions.get(currentIndex);
  currentFunction.reset();
  
  for(int i = 0; i < WIDTH/dX; i++) {
    currentFunction.update(dX);
    Float x = currentFunction.getX();
    Float y = currentFunction.getY();
    line(x, HEIGHT/2, x, HEIGHT/2 + y);
  } 
}

void mouseClicked() {
  background(255.0);
  currentIndex++;
  if(currentIndex >= functions.size()) {
   currentIndex = 0;
  }
}
