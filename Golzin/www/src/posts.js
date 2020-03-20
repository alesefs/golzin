function Posts(game){
    this.game = game;
}

Posts.prototype.create = function () {
	var registry = new Register(game);
	registry.create();

	this.postCase = 0;
	this.postMoves = false;
        
    this.postSize = 10;
    this.postWidth = 150;
    this.postHeight = 80;
    this.gridHeight = 100;
    this.postVelocityH = 100;
    
    
	//posts base
    bmpRect = this.game.add.bitmapData(this.game.world.width, this.game.world.height);
    bmpRect.ctx.beginPath();
    bmpRect.ctx.rect(0, 0, this.game.world.width, this.game.world.height);
    bmpRect.ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    bmpRect.ctx.fill();

    
    //post L
    this.postL = this.game.add.sprite(this.game.world.centerX - this.postWidth/2 + this.postSize, ((registry.height/100)*20) - this.postHeight/2, bmpRect);
    this.postL.anchor.setTo(0.5);
    this.postL.width = this.postSize;
    this.postL.height = this.postHeight;
    this.game.physics.arcade.enable(this.postL);
    this.postL.body.immovable = true;
    this.postL.body.bounce.set(1);
    //this.postL.alpha = 0;
    
    //post T
    this.postT = this.game.add.sprite(this.postL.x + this.postWidth/2  - this.postSize/2, this.postL.y - this.postHeight/2 + this.postSize/2, bmpRect);
    this.postT.anchor.setTo(0.5);
    this.postT.width = this.postWidth;
    this.postT.height = this.postSize;
    this.game.physics.arcade.enable(this.postT);
    this.postT.body.immovable = true;
    //this.postT.alpha = 0;

    //post R
    this.postR = this.game.add.sprite(this.postT.x + this.postWidth/2 - this.postSize/2, this.postT.y + this.postHeight/2 - this.postSize/2, bmpRect);
    this.postR.anchor.setTo(0.5);
    this.postR.width = this.postSize;
    this.postR.height = this.postHeight;
    this.game.physics.arcade.enable(this.postR);
    this.postR.body.immovable = true;
    this.postR.body.bounce.set(1);
    //this.postR.alpha = 0;
    
    //line
    this.line = this.game.add.sprite(this.postSize, ((registry.height/100)*20), bmpRect);
    this.line.anchor.setTo(0);
    this.line.width = registry.width - 10;
    this.line.height = this.postSize;
    this.game.physics.arcade.enable(this.line);
    this.line.body.immovable = true;
    
    //grid
    this.grid = this.game.add.sprite(this.postL.x + this.postT.width/2 - this.postL.width/2, this.postL.y - this.line.height, 'grid');
    this.grid.anchor.setTo(0.5);
    this.grid.width = this.postWidth;
    this.grid.height = this.gridHeight;
    this.game.physics.arcade.enable(this.grid);
    this.grid.body.immovable = true;
    
}



Posts.prototype.update = function() {
	//posts move || idle 
    if(this.postCase == 2) {
		this.postMoves = true;
	} else {
		this.postMoves = false;
	}
    
    //posts slide <--> or idle
	if(!this.postMoves) {
		this.postL.body.velocity.x = 0;
		this.postT.body.velocity.x = 0;
		this.postR.body.velocity.x = 0;
		this.grid.body.velocity.x = 0;
	} else {
		if(this.postL.x <= this.postSize*2) {
			this.postL.body.velocity.x = this.postVelocityH;
			this.postT.body.velocity.x = this.postVelocityH;
			this.postR.body.velocity.x = this.postVelocityH;
			this.grid.body.velocity.x = this.postVelocityH;
		} else if(this.postL.x >= registry.width - this.postWidth) {
			this.postL.body.velocity.x = -this.postVelocityH;
			this.postT.body.velocity.x = -this.postVelocityH;
			this.postR.body.velocity.x = -this.postVelocityH;
			this.grid.body.velocity.x = -this.postVelocityH;
		}
	}
}



Posts.prototype.levels = function () {
    //posts case for levels
    switch(this.postCase){
		case 0://center x
			this.postL.x = this.game.world.centerX - this.postWidth/2 + this.postSize;
			this.postT.x = this.postL.x + this.postWidth/2 - this.postSize/2;
			this.postR.x = this.postT.x + this.postWidth/2 - this.postSize/2;
			this.grid.x = this.postL.x + this.postT.width/2 - this.postL.width/2;
			break;
            
		case 1://random x
			this.postL.x = this.game.rnd.integerInRange(this.postSize*2, registry.width - this.postWidth);
			this.postT.x = this.postL.x + this.postWidth/2 - this.postSize/2;
			this.postR.x = this.postT.x + this.postWidth/2 - this.postSize/2;
            this.grid.x = this.postL.x + this.postT.width/2 - this.postL.width/2;
			break;
            
		case 2://slide x
			var auxSlide = 0;
			auxSlide = this.game.rnd.integerInRange(0, 1);
			if(auxSlide == 0){
				this.postL.x = this.postSize*2;
			} else {
				this.postL.x = registry.width - this.postWidth;
			}
			this.postT.x = this.postL.x + this.postWidth/2 - this.postSize/2;
			this.postR.x = this.postT.x + this.postWidth/2 - this.postSize/2;
            this.grid.x = this.postL.x + this.postT.width/2 - this.postL.width/2;
			break;
            
		default:
			this.postL.x = this.game.world.centerX - this.postWidth/2 + this.postSize;
			this.postT.x = this.postL.x + this.postWidth/2 - this.postSize/2;
			this.postR.x = this.postT.x + this.postWidth/2 - this.postSize/2;
            this.grid.x = this.postL.x + this.postT.width/2 - this.postL.width/2;
			break;
	}
    this.postL.y = ((registry.height/100)*20) - this.postHeight/2;
    this.postT.y = this.postL.y - this.postHeight/2 + this.postSize/2;
    this.postR.y = this.postT.y + this.postHeight/2 - this.postSize/2;
    this.grid.y = this.postL.y - this.line.height;
}