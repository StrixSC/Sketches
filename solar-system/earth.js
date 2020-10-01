class Earth {
    constructor() {
        this.x = 100;
        this.y = 100;
        this.size = SUN_SIZE/8;
    }

    orbit() {
        
    }

    render() {
        fill('blue');
        ellipse(this.x, this.y, this.size, this.size);
    }

}

