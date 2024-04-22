class Shapes {
    constructor(color) {
        this.color = color;
    }

}

class Triangle extends Shapes {
    constructor(color) {
        super(color);
        this.points = "150,25 50,150 250,150";
        this.render = function () {
            return `<polygon points="${this.points}" fill="${this.color}"></polygon>`;
        }
    }
}

class Square extends Shapes {
    constructor(color) {
        super(color);
        this.width = 150;
        this.height = 150;
        this.x = 75;
        this.y = 25;
        this.render = function () {
            return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.color}"></rect>`;
        }
    }
}

class Circle extends Shapes {
    constructor(color) {
        super(color);
        this.radius = 80;
        this.cx = 150;
        this.cy = 100;
        this.render = function () {
            return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.radius}" fill="${this.color}"></circle>`;
        }
    }
}

module.exports = { Circle, Square, Triangle };