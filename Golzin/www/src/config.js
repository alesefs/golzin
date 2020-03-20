function Config(game){
    this.game = game;
}

Config.prototype.create = function () {
    var registry = new Register(game);
	registry.create();
    
    bar = this.game.add.bitmapData(this.game.world.width, this.game.world.height);
    bar.ctx.beginPath();
    bar.ctx.rect(0, 0, this.game.world.width, this.game.world.height);
    bar.ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    bar.ctx.fill();
    this.barz = this.game.add.sprite(0, 0, bar);
    //this.barz.alpha = 0;
    
    this.menuBack = this.game.add.button(50, 40, 'btn-w', this.passMenu, this, 7, 7, 7);
    this.menuBack.anchor.set(0.5);
    this.menuBack.angle = -180;
    
    this.txtConfig = this.game.add.text(this.game.world.centerX + 25, 40, 'Settings', { font: "50px scoreboard2", fill: "#ffffff", align: "center" });
    this.txtConfig.anchor.set(0.5);
}

Config.prototype.passMenu = function () {
    this.game.state.start('menu');
}
