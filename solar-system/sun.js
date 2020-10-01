class Sun {
    constructor(x, y) {
        this.size = SUN_SIZE;
        this.x = x;
        this.y = y;

        this.shineVal = 0;
        this.shineRadius = 2;

        this.reverseSequence = false;
        this.goDark = false;
        this.goBright = false;
        this.darkCounter = 0;
        this.maxDarknessTime = floor(random(0, 100));
    }

    shine() {

    }

    render() {
        noStroke();
        fill(255, 255, 0);
        ellipse(this.x, this.y, this.size + this.shineRadius, this.size + this.shineRadius);
        fill(255);
        ellipse(this.x, this.y, this.size, this.size);
    }
}