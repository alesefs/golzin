function Background(game) {
    'use strict';
    this.game = game;
}

Background.prototype.create = function () {
    'use strict';

    this.grass = this.game.add.tileSprite(0, registry.height * 0.2, registry.width, registry.height, 'grass');
    this.grass.animations.add('grass0', [0], 10, false);
    this.grass.animations.add('grass1', [1], 10, false);
    this.grass.animations.add('grass2', [2], 10, false);
    this.grass.animations.add('grass3', [3], 10, false);
    this.grass.animations.add('grass4', [4], 10, false);
    this.grass.animations.add('grass5', [5], 10, false);
    this.grass.animations.add('grass6', [6], 10, false);
    this.grass.animations.add('grass7', [7], 10, false);
    this.grass.animations.add('grass8', [8], 10, false);
    this.grass.animations.add('grass9', [9], 10, false);
    this.grass.scale.set(3.6);
    
    this.store();
    
    
    var bmd = this.game.add.bitmapData(50, 50);
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, 50, 50);
    bmd.ctx.fillStyle = "white";
    bmd.ctx.fill();
    this.line = this.game.add.sprite(0, registry.height * 0.25, bmd);
    this.line.width = registry.width;
    this.line.height = 5;
    this.line.alpha = 0.9;
    this.game.physics.arcade.enable(this.line);
    this.line.body.immovable = true;
    
    
    var squareink = this.game.add.bitmapData(registry.width + 10, registry.height + 10);
    squareink.ctx.beginPath();
    squareink.ctx.rect(2.5, 0, registry.width - 5, registry.height - 50);
    squareink.ctx.fillStyle = "transparent";
    squareink.ctx.fill();
    squareink.ctx.lineWidth = 5;
    squareink.ctx.strokeStyle = "white";
    squareink.ctx.stroke();
    this.square = this.game.add.sprite(0, registry.height * 0.25, squareink);
    
    if (registry.chooseField <= 5 || registry.chooseField == 7) {
        this.line.tint = 0xffffff;
        this.square.tint = 0xffffff;
        
    } else {
        this.line.tint = 0x2E92C3;
        this.square.tint = 0x2E92C3;
    }

    
    this.postWidth = 200;
    this.postHeight = 100;
    this.postSize = 10;  
    this.postVelocityH = 100;
    this.postCase = 0;
	this.postMoves = false;
    
//post L
    this.postL = this.game.add.sprite(registry.width / 2 - this.postWidth / 2 + this.postSize / 2, registry.height * 0.25 - this.postHeight / 2 + this.line.height, bmd);
    this.postL.anchor.setTo(0.5);
    this.postL.width = this.postSize;
    this.postL.height = this.postHeight;
    this.game.physics.arcade.enable(this.postL);
    this.postL.body.enable = true;
    this.postL.body.immovable = true;
    this.postL.body.bounce.set(1);
    this.postL.alpha = 0;
    
//post R
    this.postR = this.game.add.sprite(this.postL.x + this.postWidth - this.postSize, this.postL.y, bmd);
    this.postR.anchor.setTo(0.5);
    this.postR.width = this.postSize;
    this.postR.height = this.postHeight;
    this.game.physics.arcade.enable(this.postR);
    this.postR.body.enable = true;
    this.postR.body.immovable = true;
    this.postR.body.bounce.set(1);
    this.postR.alpha = 0;
    
//post T
    this.postT = this.game.add.sprite(this.postL.x + this.postWidth / 2 - this.postSize / 2, this.postL.y - this.postHeight / 2, bmd);
    this.postT.anchor.setTo(0.5);
    this.postT.width = this.postWidth;
    this.postT.height = this.postSize;
    this.game.physics.arcade.enable(this.postT);
    this.postT.body.enable = true;
    this.postT.body.immovable = true;
    this.postT.body.bounce.set(1);
    this.postT.alpha = 0;
};

Background.prototype.store = function () {
    'use strict';  
    this.grass.animations.play('grass'+registry.chooseField, 5, true);
    localStorage.setItem("fieldStatus", registry.chooseField);

    document.getElementById('botter').style.backgroundImage = 'url(imgs/field/'+registry.chooseField+'.png)';
};


Background.prototype.update = function () {
    'use strict';  

    if(this.postCase == 2) {
		this.postMoves = true;
	} else {
		this.postMoves = false;
	}
    
    //posts slide <--> or idle
	if (!this.postMoves) {
        this.postL.body.velocity.x = 0;
        this.postL.body.velocity.y = 0;
        this.postL.y = registry.height * 0.25 - this.postHeight / 2 + this.line.height;
        this.postT.body.velocity.x = 0;
        this.postT.body.velocity.y = 0;
        this.postT.y = this.postL.y - this.postHeight / 2;
        this.postR.body.velocity.x = 0;
        this.postR.body.velocity.y = 0;
        this.postR.y = this.postL.y;
	} else {
		if (this.postL.x <= this.postSize * 2) {
			this.postL.body.velocity.x = this.postVelocityH;
			this.postT.body.velocity.x = this.postVelocityH;
			this.postR.body.velocity.x = this.postVelocityH;
		} else if (this.postL.x >= registry.width - this.postWidth) {
			this.postL.body.velocity.x = -this.postVelocityH;
			this.postT.body.velocity.x = -this.postVelocityH;
			this.postR.body.velocity.x = -this.postVelocityH;
		}
	}
};

Background.prototype.levels = function () {
    //posts case for levels
    switch(this.postCase){
		case 0://center x
			this.postL.x = registry.width / 2 - this.postWidth / 2 + this.postSize / 2;
			this.postT.x = this.postL.x + this.postWidth / 2 - this.postSize / 2;
			this.postR.x = this.postL.x + this.postWidth - this.postSize;
			break;
            
		case 1://random x
			this.postL.x = this.game.rnd.integerInRange(this.postSize * 2, registry.width - this.postWidth);
			this.postT.x = this.postL.x + this.postWidth / 2 - this.postSize / 2;
			this.postR.x = this.postL.x + this.postWidth - this.postSize;
			break;
            
		case 2://slide x
			var auxSlide = 0;
			auxSlide = this.game.rnd.integerInRange(0, 1);
			if(auxSlide == 0){
				this.postL.x = this.postSize * 2 - 5;
			} else {
				this.postL.x = registry.width - this.postWidth + 5;
			}
			this.postT.x = this.postL.x + this.postWidth / 2 - this.postSize / 2;
			this.postR.x = this.postL.x + this.postWidth - this.postSize;
			break;
            
		default:
			this.postL.x = registry.width / 2 - this.postWidth / 2 + this.postSize / 2;
			this.postT.x = this.postL.x + this.postWidth / 2 - this.postSize / 2;
			this.postR.x = this.postL.x + this.postWidth - this.postSize;
			break;
	}
    
};
