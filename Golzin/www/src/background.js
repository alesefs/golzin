function Background(game) {
    this.game = game;
}

Background.prototype.create = function () {
	var registry = new Register(game);
	registry.create();

	
	this.game.stage.backgroundColor = "#013322";

    var bmd = this.game.add.bitmapData(registry.width, registry.height);
    bmd.ctx.beginPath();
    bmd.ctx.rect(5, ((registry.height/100)*20), registry.width - 10, (registry.height - 10 - (registry.height/100)*20));//(registry.height - (registry.height/100)*30)
    bmd.ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    bmd.ctx.fill();
    bmd.ctx.strokeStyle = "white";
    bmd.ctx.lineWidth = 5;
    bmd.ctx.stroke();
    
    
    this.line = this.game.add.sprite(0, 0, bmd);
    this.game.physics.arcade.enable(this.line);
    this.line.body.enable = true;
    this.line.body.immovable = true;
}


Background.prototype.getLine = function() {
    return this.line;
}