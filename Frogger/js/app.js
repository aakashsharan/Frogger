// Enemies our player must avoid
var Enemy = function(y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    this.x = -150;
    this.y =  y;
    this.speed = speed;

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // console.log(this.x);
    this.x += this.speed * dt;
    // console.log(this.x);

    if (this.x >= 500) {
        this.resetBug();
    }


};

// resets the enemy location.
Enemy.prototype.resetBug = function() {
    this.x = -150;
};




// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var enemy1 = new Enemy(65, Math.floor(Math.random() * 450 + 1));
var enemy2 = new Enemy(150, Math.floor(Math.random() * 450 + 1));
var enemy3 = new Enemy(150, Math.floor(Math.random() * 450 + 1));

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x, y, speed) {
    this.sprite = 'images/char-boy.png';

    this.x = x;
    this.y = y;

    this.speed = speed;
};

Player.prototype.update = function() {
    if (this.x < 0) {
        this.x = 0;
    }
    if (this.x > 400) {
        this.x = 400;
    }
    if (this.y < 0) {
        this.y = 405;
    }
    if (this.y > 405) {
        this.y = 405;
    }
    this.collide();
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.resetPlayer = function() {
    this.x = 300;
    this.y = 400;
}

Player.prototype.handleInput = function(keycode) {
    switch(keycode) {
        case "left":
            console.log("left");
            this.x -= 100;
            break;
        case "right":
            console.log("right");
            this.x += 100;
            break;
        case "up":
            this.y -= 90;
            break;
        case "down":
            console.log("down");
            this.y += 90;
            break;
    }
};

// Place all enemy objects in an array called allEnemies
var allEnemies = [];

allEnemies.push(enemy1, enemy2, enemy3);

Player.prototype.collide = function() {
    for (var i = 0; i < allEnemies.length; i++) {
        console.log(this.x);
        allEnemies[i].x
        if (this.x < allEnemies[i].x + 50 && this.x + 50 > allEnemies[i].x && this.y < allEnemies[i].y + 30 && this.y + 30 > allEnemies[i].y) {
            console.log("collision");
            this.resetPlayer();
            allEnemies[i].resetBug();
            break;
        }
    }
};



// Now instantiate your objects.
var player = new Player(300, 400, Math.random() * (500 - 100) + 100);




// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

