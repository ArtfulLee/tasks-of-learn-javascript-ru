class ExtendedClock extends Clock {
    constructor() {
        super(...arguments)
        this.precision = 1000;
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}

let extendedClock = new ExtendedClock({ template: 'h:m:s' });
extendedClock.start();