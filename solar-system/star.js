const STATUS = [0, 1] // 0 = bright, 1 = dark;
const BRIGHT = STATUS[0];
const DARK = STATUS[1];

class Star {
    constructor(_x, _y, i) {
        this.count = i;
        this.size = random(0, 5);
        this.x = _x;
        this.y = _y;
        this.DELAY_LOWER_BRIGHTNESS = floor(random(0, 500));     // make this a random value; (depending on distance to the star)
        this.DELAY_HIGHER_BRIGHTNESS = floor(random(0, 500));    // make this a random value; (depending on distance to the star)


        this.shineVal = 0;
        this.maxShineVal = floor(map(this.size, 0, 5, 0, 255));
        this.counterBeforeBrightening = 0;
        this.counterBeforeDarkening = 0;

        this.reverseSequence = false;
        this.loopStarted = false;

        this.currentStatus = BRIGHT;
    }

    shine() {
            if(!this.reverseSequence && this.currentStatus === BRIGHT) {
                if(this.counterBeforeDarkening === this.DELAY_LOWER_BRIGHTNESS) {
                    this.reverseSequence = true;
                    this.counterBeforeDarkening = 0;
                } else {
                    this.counterBeforeDarkening++;
                }
            }
        
            if(this.reverseSequence && this.currentStatus === BRIGHT) {
                if(this.shineVal === 0) {
                    this.reverseSequence = false;
                    this.currentStatus = DARK;
                    this.x = floor(random(0, width));
                    this.y = floor(random(0, width));
                } else {
                    this.shineVal--;
                }
            }
            
            if(!this.reverseSequence && this.currentStatus === DARK) {
                if(this.counterBeforeBrightening === this.DELAY_HIGHER_BRIGHTNESS) {
                    this.reverseSequence = true;
                    this.counterBeforeBrightening = 0;
                } else {
                    this.counterBeforeBrightening++;
                }
            }

            if(this.reverseSequence && this.currentStatus === DARK) {
                if(this.shineVal === this.maxShineVal) {
                    this.reverseSequence = false;
                    this.currentStatus = BRIGHT;
                } else {
                    this.shineVal++;
                }
            }
    }

    render() {
        noStroke();
        fill(this.shineVal);
        rect(this.x, this.y, this.size, this.size);
    }
}