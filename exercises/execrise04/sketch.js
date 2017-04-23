//Create a balloon and have a
var circleArray = [];
var rectArray = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (var i = 0; i < 50; i++) {
        var c = new circleParticle(random(0, width), random(0, height));
        var t = new rectparticle(random(0, width), random(0, height));
        circleArray.push(c);
        rectArray.push(t);
    }

}

function draw() {
    background(16, 72, 25);
    for (var i = 0; i < circleArray.length; i++) {
        if (mouseIsPressed) {
            circleArray[i].drawTheCircleParticle();

        } else {
            rectArray[i].drawTherectParticle();
        }
        print(mouseIsPressed);


    }
}
// Object 1, Circle
function circleParticle(x, y) {
    this.x = x;
    this.y = y;

    this.velX = random(-2, 2);
    this.velY = random(-2, 2);

    this.gravity = 0.25;

    this.r = random(0, 150);
    this.g = random(0, 150);
    this.b = random(0, 150);

    // The function updates the position, and draws the ellipse using p5
    this.drawTheCircleParticle = function() {
        //Apply gravity (which is the rate of change of th.e Y velocity)
        this.velY += this.gravity;



        // Apply velocity to the position
        this.x += this.velX;
        this.y += this.velY;

        // If we have moved off the screen, reverse the veloctity
        if (this.x > width || this.x < 0) {
            this.velX *= -1;
        }
        if (this.y > height || this.y < 0) {
            this.velY *= -1;
        }


        // Set the inside color of the circle
        fill(this.r, this.g, 60);
        // Set the border color of the circle
        stroke(0, 40, 63);
        // Set the width of the border
        strokeWeight(5);
        // Finally, draw the circle on the canvas
        ellipse(this.x, this.y, 60, 60);




    }

}
// Object 2, rectangle
function rectparticle(x, y) {
    this.x = x;
    this.y = y;

    this.velX = random(-2, 2);
    this.velY = random(-2, 2);

    this.gravity = -0.1;

    this.r = random(150, 255);
    this.g = random(150, 255);
    this.b = random(150, 255);

    // The function updates the position, and draws the ellipse using p5
    this.drawTherectParticle = function() {
        //Apply gravity (which is the rate of change of th.e Y velocity)
        this.velY += this.gravity;



        // Apply velocity to the position
        this.x += this.velX;
        this.y += this.velY;

        // If we have moved off the screen, reverse the veloctity
        if (this.x > width || this.x < 0) {
            this.velX *= -1;
        }
        if (this.y > height || this.y < 0) {
            this.velY *= -1;
        }




        // Set the inside color of the circle
        fill(80, this.g, this.b);
        // Set the border color of the circle
        stroke(0, 40, 63);
        // Set the width of the border
        strokeWeight(8);
        // Finally, draw the circle on the canvas
        rect(this.x, this.y, 60, 60);


    }

}