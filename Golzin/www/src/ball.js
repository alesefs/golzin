var swipeCoordX = 0;
var swipeCoordY = 0;
var swipeCoordX2 = 0; 
var swipeCoordY2 = 0;
var swipeMinDistance = 35;
var swipeMaxDistance = 200;
var angle = 0;


function Ball(game){
    this.game = game;
}


Ball.prototype.create = function () {
	var registry = new Register(game);
	registry.create();

	this.ballCase = 0;
	this.ballMoves = false;
    
    this.ballMaxSize = 64;
    this.ballMedSize = 48;
    this.ballMinSize = 32;
    this.ballVelocityH = 150;
    
    
    

	this.ball = this.game.add.sprite(this.game.world.centerX /*+ this.ballMaxSize/2*/, ((registry.height/100)*85), 'soccerball');///*85*/90), 'soccerball');
    this.ball.anchor.set(0.5);
    this.ball.width = this.ballMaxSize; //this.ballMaxSize;
    this.ball.height = this.ballMaxSize; //this.ballMaxSize;
    this.ball.radius = this.ballMaxSize/2 - this.ballMinSize/8;
    this.game.physics.arcade.enable(this.ball);
    this.ball.body.enable = true;
    this.ball.body.setSize(this.ballMedSize, this.ballMedSize, 0, 0);
    this.ball.body.bounce.set(1);
    this.ball.body.collideWorldBounds = false;
    this.ball.animations.add('rotation');
    this.ball.animations.add('idle', [0], 10, false); 
    
}


Ball.prototype.update = function() {
    
    //registry.isShoot = true;
    
    //scale ball ++ || --
    if(this.ball.body.velocity.y != 0) {
        this.ball.angle += 5;
        this.ball.animations.play('rotation', 20, true);
        
        if(this.ball.body.velocity.y < 0 && this.ball.width > this.ballMinSize && this.ball.height > this.ballMinSize) {
            this.ball.width -= 0.25;
            this.ball.height -= 0.25;
        }
        if(this.ball.body.velocity.y < 0 && this.ball.width <= this.ballMinSize && this.ball.height <= this.ballMinSize) {
            this.ball.width = this.ballMinSize;
            this.ball.height = this.ballMinSize;
        }
        
        if(this.ball.body.velocity.y > 0 && this.ball.width < this.ballMaxSize && this.ball.height < this.ballMaxSize) {
            this.ball.width += 0.25;
            this.ball.height += 0.25;
        }
        if(this.ball.body.velocity.y > 0 && this.ball.width >= this.ballMaxSize && this.ball.height >= this.ballMaxSize) {
            this.ball.width = this.ballMaxSize;
            this.ball.height = this.ballMaxSize;
        }
        
	} else {
        this.ball.animations.stop();
	}
    
    
    
    if(this.ball.body.velocity.y < 0){
        this.ball.angle = 90;
        
         if(this.ball.body.velocity.x > 180){
             this.ball.angle = 135;
         } else if(this.ball.body.velocity.x >= 45 && this.ball.body.velocity.x <= 180){
             this.ball.angle = 110;
         } else if(this.ball.body.velocity.x <= -120 && this.ball.body.velocity.x >= -240){
             this.ball.angle = 68;
         } else if(this.ball.body.velocity.x < -240){
             this.ball.angle = 45;
         } else {
             this.ball.angle = 90;
         }
        
    } else if(this.ball.body.velocity.y > 0){
        this.ball.angle = -90;
        
        if(this.ball.body.velocity.x > 180){
             this.ball.angle = -135;
         } else if(this.ball.body.velocity.x >= 45 && this.ball.body.velocity.x <= 180){
             this.ball.angle = -110;
         } else if(this.ball.body.velocity.x <= -120 && this.ball.body.velocity.x >= -240){
             this.ball.angle -= 5;//-68;
         } else if(this.ball.body.velocity.x < -240){
             this.ball.angle -= 5;//= -90;
         } else {
             this.ball.angle = -90;
         }
        
    } else {
        this.ball.angle = 0;
    }
    
    
    //input enable || disable
    if(registry.isShoot){
        this.ball.inputEnabled = false;     
    } else {
        this.ball.inputEnabled = true;
        this.ball.input.useHandCursor = true;
        
        this.ball.width = this.ballMaxSize;//this.ballMaxSize;
        this.ball.height = this.ballMaxSize; //this.ballMaxSize;
        
        this.ball.angle = 0;
        this.ball.animations.play('idle', 5, true);
    }

    
    //Shoot on || off 
	if(!registry.isShoot){
		       
        //input ball touch on
		this.ball.events.onInputDown.add(function(pointer) {
	    	swipeCoordX = this.game.input.worldX;
		    swipeCoordY = this.game.input.worldY;
        }, this);
        
        //input ball touch out
        this.ball.events.onInputUp.add(function(pointer) {
            swipeCoordX2 = this.game.input.worldX;
            swipeCoordY2 = this.game.input.worldY;

            angle = Math.atan2(swipeCoordY2 - swipeCoordY, swipeCoordX2 - swipeCoordX);
            
            //calc to swipe
            if(swipeCoordY - swipeCoordY2 > swipeMinDistance && swipeCoordY - swipeCoordY2 < swipeMaxDistance){
                if(angle < 3.5 && angle > -3.5) {
                    this.ball.body.velocity.x = Math.cos(angle) * 500;
                    this.ball.body.velocity.y = Math.sin(angle) * 500;
                    registry.isShoot = true;
                } else {
                    registry.isShoot = false;
                }
            } else {
                swipeCoordY = 0;
                swipeCoordY2 = 0;
            }
        }, this);

        //ball move || idle 
		if(this.ballCase == 2) {
			this.ballMoves = true;
		} else {
			this.ballMoves = false;
		}
        
        //ball slide <--> or idle
		if(!this.ballMoves) {
			this.ball.body.velocity.x = 0;
			this.ball.body.velocity.y = 0;
		} else {
			if(this.ball.x <= this.ballMaxSize) {
				 this.ball.body.velocity.x = this.ballVelocityH;
			     this.ball.body.velocity.y = 0;
			} else if(this.ball.x >= registry.width - this.ballMaxSize) {
				 this.ball.body.velocity.x = -this.ballVelocityH;
			     this.ball.body.velocity.y = 0;
			}
		}
	}
    
    
}


Ball.prototype.levels = function () {
    //ball case for levels
    switch(this.ballCase){
		case 0://center x
			this.ball.x = this.game.world.centerX;// + this.ballMaxSize/2;
			break;
            
		case 1://random x
			this.ball.x = this.game.rnd.integerInRange(this.ballMaxSize, registry.width - this.ballMaxSize);
			break;
            
		case 2://slide x
			var auxSlide = 0;
			auxSlide = this.game.rnd.integerInRange(0, 1);
			if(auxSlide == 0){
				this.ball.x = this.ballMaxSize;
			} else {
				this.ball.x = registry.width - this.ballMaxSize;
			}
			break;
            
		default:
			this.ball.x = this.game.world.centerX + this.ballMaxSize/2;
			break;
	}
    this.ball.y = ((registry.height/100)*85);///*85*/90);
}