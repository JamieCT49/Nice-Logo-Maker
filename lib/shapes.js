// Make class and add colour value
class shape {
    constructor() {
        this.colour=''
    }
    setColour(colour) {
        this.colour=(colour);
    }
};
// postion and shape of the shape
class circle extends shape {
    render() {
        return `<circle r="100" height="100%" width="100%" cx="50%" cy="50%" fill="${this.colour}">`
    }
};

class square extends shape {
    render() {
        return `<rect x="50" height="200" width="200" fill="${this.colour}">`
    }
};

class triangle extends shape {
    render() {
        return `<polygon points="0,150 300,200 200,0" height="100%" width="100%" fill="${this.colour}">`
    }
};

module.exports = {circle, square, triangle}