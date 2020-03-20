function Ball(game) {
    'use strict';
    this.game = game; 
}

Ball.prototype.create = function () {
    'use strict';
    
    this.ballMoveTimer = 0;
    
    this.swipeCoordX = 0;
    this.swipeCoordY = 0;
    this.swipeCoordX2 = 0; 
    this.swipeCoordY2 = 0;
    this.swipeMinDistance = 35;
    this.swipeMaxDistance = 500;
    this.angle = 0;
    
    this.ballCase = 0;
	this.ballMoves = false;
    
    if (registry.hour >= 6 && registry.hour < 18) {
        this.ball = this.game.add.sprite(registry.width / 2, registry.height * 0.85, 'ballz');
    } else {
        this.ball = this.game.add.sprite(registry.width / 2, registry.height * 0.85, 'balls');
    }
    this.ball.animations.add('ball0', [0], 10, false);
    this.ball.animations.add('ball1', [1], 10, false);
    this.ball.animations.add('ball2', [2], 10, false);
    this.ball.animations.add('ball3', [3], 10, false);
    this.ball.animations.add('ball4', [4], 10, false);
    this.ball.animations.add('ball5', [5], 10, false);
    this.ball.animations.add('ball6', [6], 10, false);
    this.ball.animations.add('ball7', [7], 10, false);
    this.ball.animations.add('ball8', [8], 10, false);
    this.ball.animations.add('ball9', [9], 10, false);
    this.ball.animations.add('ball10', [10], 10, false);
    //this.ball.scale.set(0.8);
    this.ball.anchor.set(0.5);
    this.game.physics.arcade.enable(this.ball);
    this.ball.body.enable = true;
    this.ball.body.setSize(this.ball.width * 0.8, this.ball.height * 0.8, this.ball.width * 0.1, this.ball.width * 0.1);
    this.ball.body.bounce.set(1);
    //this.ball.body.collideWorldBounds = true;//false;
    
    this.store();
};

Ball.prototype.store = function () {
    'use strict';  
    this.ball.animations.play('ball'+registry.chooseBall, 5, true);
    localStorage.setItem("ballStatus", registry.chooseBall);
};


Ball.prototype.update = function () {
    'use strict';  
    
    //input enable || disable
    if (registry.isShoot){
        this.ball.inputEnabled = false;
        
        if (this.ball.body.velocity.y != 0) {
            if (this.ball.body.velocity.x > 0) {
                this.ball.angle += 5;
            } else if (this.ball.body.velocity.x < 0) {
                this.ball.angle -= 5;
            } else {
                this.ball.angle = 0;
            }
        }
        
    } else {
        this.ball.inputEnabled = true;
        this.ball.input.useHandCursor = true;
       
        this.ball.events.onInputDown.add( function (pointer) {
            this.swipeCoordX = this.game.input.worldX;
		    this.swipeCoordY = this.game.input.worldY;
        }, this);
        
        this.ball.events.onInputUp.add( function (pointer) {
            this.swipeCoordX2 = this.game.input.worldX;
            this.swipeCoordY2 = this.game.input.worldY;
            
            this.angle = Math.atan2(this.swipeCoordY2 - this.swipeCoordY, this.swipeCoordX2 - this.swipeCoordX);
            
            
            if (this.swipeCoordY - this.swipeCoordY2 > this.swipeMinDistance/* && this.swipeCoordY - this.swipeCoordY2 < this.swipeMaxDistance*/) {
                if(this.angle < 3.5 && this.angle > -3.5) {
                    this.ball.body.velocity.x = Math.cos(this.angle) * 750;
                    this.ball.body.velocity.y = Math.sin(this.angle) * 750;
                    registry.isShoot = true; 
                    //sounds.setEffects();
                    
                    this.ballMoveTimer += 1;
                    if (this.ballMoveTimer === 1) {
                        registry.storiesShots += 1;
                        localStorage.setItem("storiesShots", parseInt(registry.storiesShots));
                        
                        if (registry.storiesShots === 5000) {
                            registry.won5000kick = 1;
                            localStorage.setItem("won5000Kickes", registry.won5000kick);
                        }
                    }
                    
                } else {
                    registry.isShoot = false;
                }
            } else {
                //this.swipeCoordY = 0;
                //this.swipeCoordY2 = 0;
            }
        }, this);
        
    }
    
    if (this.ball.body.velocity.y < 0 && this.ball.scale.x > 0.5) {
        this.ball.scale.x -= 0.025;
        this.ball.scale.y -= 0.025;
    } else if (this.ball.body.velocity.y > 0 && this.ball.scale.x < 1 && this.ball.y > registry.height * 0.4) {
        this.ball.scale.x += 0.025;
        this.ball.scale.y += 0.025;
    }
    
    if (this.ball.y < bg.grass.y && this.ball.scale.x >= 0) {
        this.ball.scale.x -= 0.5;
        this.ball.scale.y -= 0.5;
    }
    
    //ball move || idle 
    if(this.ballCase == 2) {
        this.ballMoves = true;
    } else {
        this.ballMoves = false;
    }
    
    //ball slide <--> or idle
    if(!this.ballMoves) {       
    } else {
        if (!registry.isShoot) {
            if(this.ball.x <= this.ball.width) {
                 this.ball.body.velocity.x = 150;
                 this.ball.body.velocity.y = 0;
            } else if (this.ball.x >= registry.width - this.ball.width) {
                 this.ball.body.velocity.x = -150;
                 this.ball.body.velocity.y = 0;
            }
        }
    }
    
};


Ball.prototype.levels = function () {
    //ball case for levels
    switch(this.ballCase){
		case 0://center x
			this.ball.x = this.game.world.centerX;// + this.ballMaxSize/2;
			break;
            
		case 1://random x
			this.ball.x = this.game.rnd.integerInRange(this.ball.width, registry.width - this.ball.width);
			break;
            
		case 2://slide x
			var auxSlide = 0;
			auxSlide = this.game.rnd.integerInRange(0, 1);
			if(auxSlide == 0){
				this.ball.x = this.ball.width - 5;
			} else {
				this.ball.x = registry.width - this.ball.width + 5;
			}
			break;
            
		default:
			this.ball.x = this.game.world.centerX + this.ball.width;
			break;
	}
    this.ball.body.velocity.x = 0;
    this.ball.body.velocity.y = 0;
    this.ball.y = registry.height * 0.85;
    this.ball.scale.set(1);
}



