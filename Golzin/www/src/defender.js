function Defender(game){
    this.game = game;
}

Defender.prototype.create = function () {
    var registry = new Register(game);
	registry.create();
    
    this.defenderVelocityH = 75;
    this.defenderSize = 100;
    
    
    this.defender3 = this.game.add.sprite(0, 0, 'defender');
    this.defender3.anchor.set(0.5);
    this.defender3.width = this.defenderSize;
    this.defender3.height = this.defenderSize;
    this.defender3.animations.add('three-walk', [0, 1, 2, 1], 10, true);
    this.defender3.animations.add('three-idle', [0], 10, true);
    this.game.physics.arcade.enable(this.defender3);
    this.defender3.body.enable = true;
    this.defender3.body.setSize(this.defenderSize*2, this.defenderSize*2.5, 0, 0);
    this.defender3.body.collideWorldBounds = false;
    this.defender3.body.immovable = true;
    this.defender3.defenderCase = null;
    this.defender3.defenderMoves = false;
    
    
    this.defender4 = this.game.add.sprite(0, 0, 'defender');
    this.defender4.anchor.set(0.5);
    this.defender4.width = this.defenderSize;
    this.defender4.height = this.defenderSize;
    this.defender4.animations.add('four-walk', [4, 3, 5, 4], 10, true);
    this.defender4.animations.add('four-idle', [3], 10, true);
    this.game.physics.arcade.enable(this.defender4);
    this.defender4.body.enable = true;
    this.defender4.body.setSize(this.defenderSize*2, this.defenderSize*2.5, 0, 0);
    this.defender4.body.collideWorldBounds = false;
    this.defender4.body.immovable = true;
    this.defender4.defenderCase = null;
    
    
    this.defender5 = this.game.add.sprite(0, 0, 'defender');
    this.defender5.anchor.set(0.5);
    this.defender5.width = this.defenderSize;
    this.defender5.height = this.defenderSize;
    this.defender5.animations.add('five-walk', [7, 6, 8, 6], 10, true);
    this.defender5.animations.add('five-idle', [6], 10, true);
    this.game.physics.arcade.enable(this.defender5);
    this.defender5.body.enable = true;
    this.defender5.body.setSize(this.defenderSize*2, this.defenderSize*2.5, 0, 0);
    this.defender5.body.collideWorldBounds = false;
    this.defender5.body.immovable = true;
    this.defender5.defenderCase = null;
        
}


Defender.prototype.scenes = function () {
    switch(this.defenderScenes){
        case 0:
            defender.defender3.defenderCase = 0;
            defender.defender4.defenderCase = 0;
            defender.defender5.defenderCase = 0;
            break;
            
        case 1:
            defender.defender3.defenderCase = 0;
            defender.defender4.defenderCase = 3;
            defender.defender5.defenderCase = 0;
            break;
        
        case 2:
            defender.defender3.defenderCase = 0;
            defender.defender4.defenderCase = 1;
            defender.defender5.defenderCase = 0;
            break;
            
        case 3:
            defender.defender3.defenderCase = 5;
            defender.defender4.defenderCase = 4;
            defender.defender5.defenderCase = 0;
            break;
            
        case 4:
            defender.defender3.defenderCase = 3;
            defender.defender4.defenderCase = 3;
            defender.defender5.defenderCase = 0;
            break;
            
        case 5:
            defender.defender3.defenderCase = 3;
            defender.defender4.defenderCase = 5;
            defender.defender5.defenderCase = 4;
            break;
            
        case 6:
            defender.defender3.defenderCase = 3;
            defender.defender4.defenderCase = 1;
            defender.defender5.defenderCase = 3;
            break;   
            
        default:
            break;
    }
    
    this.levels();
}


Defender.prototype.levels = function () {
    if(this.defender3){
        switch(this.defender3.defenderCase){
            case 0://no defender
                this.defender3.x = -100;
                break;

            case 1://center x
                this.defender3.x = this.game.world.centerX;            
                this.defender3.animations.play('three-idle', 5, true);
                break;

            case 2://random x
                this.defender3.x = this.game.rnd.integerInRange(this.defenderSize/1.5, registry.width - this.defenderSize/1.5);
                this.defender3.animations.play('three-idle', 5, true);
                break;

            case 3://slide x
                var auxSlide = 0;
                auxSlide = this.game.rnd.integerInRange(0, 1);
                if(auxSlide == 0){
                    this.defender3.x = this.defenderSize/1.5;
                } else {
                    this.defender3.x = registry.width - this.defenderSize/1.5;
                }

                this.defender3.animations.play('three-walk', 5, true);
                break;
                
            case 4://random x < w/2
                this.defender3.x = this.game.rnd.integerInRange(this.defenderSize/1.5, registry.width/2 - this.defenderSize/2);
                this.defender3.animations.play('three-idle', 5, true);
                break;
                
            case 5://random x > w/2
                this.defender3.x = this.game.rnd.integerInRange(registry.width/2 + this.defenderSize/2, registry.width - this.defenderSize/1.5);
                this.defender3.animations.play('three-idle', 5, true);
                break;
        }
        this.defender3.y = this.game.world.centerY - (this.defenderSize + this.defenderSize/2);
    }
    
    if(this.defender4){
        switch(this.defender4.defenderCase){
            case 0://no defender
                this.defender4.x = -100;
                break;

            case 1://center x
                this.defender4.x = this.game.world.centerX;            
                this.defender4.animations.play('four-idle', 5, true);
                break;

            case 2://random x
                this.defender4.x = this.game.rnd.integerInRange(this.defenderSize/1.5, registry.width - this.defenderSize/1.5);
                this.defender4.animations.play('four-idle', 5, true);
                break;

            case 3://slide x
                var auxSlide = 0;
                auxSlide = this.game.rnd.integerInRange(0, 1);
                if(auxSlide == 0){
                    this.defender4.x = this.defenderSize/1.5;
                } else {
                    this.defender4.x = registry.width - this.defenderSize/1.5;
                }

                this.defender4.animations.play('four-walk', 5, true);
                break;
            
            case 4://random x < w/2
                this.defender4.x = this.game.rnd.integerInRange(this.defenderSize/1.5, registry.width/2 - this.defenderSize/2);
                this.defender4.animations.play('four-idle', 5, true);
                break;
                
            case 5://random x > w/2
                this.defender4.x = this.game.rnd.integerInRange(registry.width/2 + this.defenderSize/2, registry.width - this.defenderSize/1.5);
                this.defender4.animations.play('four-idle', 5, true);
                break;
        }
        this.defender4.y = this.game.world.centerY;
    }
    
    if(this.defender5){
        switch(this.defender5.defenderCase){
            case 0://no defender
                this.defender5.x = -100;
                break;

            case 1://center x
                this.defender5.x = this.game.world.centerX;            
                this.defender5.animations.play('five-idle', 5, true);
                break;

            case 2://random x
                this.defender5.x = this.game.rnd.integerInRange(this.defenderSize/1.5, registry.width - this.defenderSize/1.5);
                this.defender5.animations.play('five-idle', 5, true);
                break;

            case 3://slide x
                var auxSlide = 0;
                auxSlide = this.game.rnd.integerInRange(0, 1);
                if(auxSlide == 0){
                    this.defender5.x = this.defenderSize/1.5;
                } else {
                    this.defender5.x = registry.width - this.defenderSize/1.5;
                }

                this.defender5.animations.play('five-walk', 5, true);
                break;
            
            case 4://random x < w/2
                this.defender5.x = this.game.rnd.integerInRange(this.defenderSize/1.5, registry.width/2 - this.defenderSize/2);
                this.defender5.animations.play('five-idle', 5, true);
                break;
                
            case 5://random x > w/2
                this.defender5.x = this.game.rnd.integerInRange(registry.width/2 + this.defenderSize/2, registry.width - this.defenderSize/1.5);
                this.defender5.animations.play('five-idle', 5, true);
                break;
        }
        this.defender5.y = this.game.world.centerY + (this.defenderSize + this.defenderSize/2);
    }
}


Defender.prototype.update = function () {
    //defender move || idle 
    if(this.defender3) {
        if(this.defender3.defenderCase == 3){
            this.defender3.defenderMoves = true;
        } else {
            this.defender3.defenderMoves = false;
        }

        //defender slide <--> or idle
        if(!this.defender3.defenderMoves) {
            this.defender3.body.velocity.x = 0;
            this.defender3.angle = 0;        
        } else {
            if(this.defender3.x <= this.defenderSize/1.25 && this.defender3.x > 0) {
                this.defender3.body.velocity.x = this.defenderVelocityH;
                this.defender3.angle = -90;

            } else if(this.defender3.x >= registry.width - this.defenderSize/1.5 && this.defender3.x < registry.width) {
                this.defender3.body.velocity.x = -this.defenderVelocityH;
                this.defender3.angle = 90;
            }
        }
    }
    
    if(this.defender4) {
        if(this.defender4.defenderCase == 3){
            this.defender4.defenderMoves = true;
        } else {
            this.defender4.defenderMoves = false;
        }

        //defender slide <--> or idle
        if(!this.defender4.defenderMoves) {
            this.defender4.body.velocity.x = 0;
            this.defender4.angle = 0;        
        } else {
            if(this.defender4.x <= this.defenderSize/1.25 && this.defender4.x > 0) {
                this.defender4.body.velocity.x = this.defenderVelocityH;
                this.defender4.angle = -90;

            } else if(this.defender4.x >= registry.width - this.defenderSize/1.5 && this.defender4.x < registry.width) {
                this.defender4.body.velocity.x = -this.defenderVelocityH;
                this.defender4.angle = 90;
            }
        }
    }
    
    if(this.defender5) {
        if(this.defender5.defenderCase == 3){
            this.defender5.defenderMoves = true;
        } else {
            this.defender5.defenderMoves = false;
        }

        //defender slide <--> or idle
        if(!this.defender5.defenderMoves) {
            this.defender5.body.velocity.x = 0;
            this.defender5.angle = 0;        
        } else {
            if(this.defender5.x <= this.defenderSize/1.25 && this.defender5.x > 0) {
                this.defender5.body.velocity.x = this.defenderVelocityH;
                this.defender5.angle = -90;

            } else if(this.defender5.x >= registry.width - this.defenderSize/1.5 && this.defender5.x < registry.width) {
                this.defender5.body.velocity.x = -this.defenderVelocityH;
                this.defender5.angle = 90;
            }
        }
    }
    
}
