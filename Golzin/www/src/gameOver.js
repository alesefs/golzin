function GameOver(game){
    this.game = game;
}

GameOver.prototype.create = function () {
    
    bar = this.game.add.bitmapData(this.game.world.width, this.game.world.height);
    bar.ctx.beginPath();
    bar.ctx.rect(0, 0, this.game.world.width, this.game.world.height);
    bar.ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    bar.ctx.fill();

    this.bary = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY  + 20, bar);
    this.bary.anchor.set(0.5);
    this.bary.width = this.game.world.width;
    this.bary.height = 600;
    
    this.txtOver = this.game.add.text(this.bary.x, this.bary.y - 200, 'END GAME', { font: "75px scoreboard2", fill: "#ffffff", align: "center" });
    this.txtOver.anchor.set(0.5);
    
    this.txtOverGoal = this.game.add.text(this.txtOver.x, this.txtOver.y + 100, '' + registry.goal, { font: "75px scoreboard2", fill: "#ffffff", align: "center" });
    this.txtOverGoal.anchor.set(0.5);
    if(registry.goal > registry.hiScore){
        this.txtOverGoal.addColor('#ffd800', 0);
        
        this.king = this.game.add.sprite(this.txtOver.x + 100, this.txtOver.y + 100, 'btn-w');
        this.king.anchor.set(0.5);
        this.king.scale.set(1.25);
        this.king.animations.add('play', [11], 10, false);     
        this.king.animations.play('play', 5, true);
        
        if(registry.goal > 9){
            this.king.x = this.txtOver.x + 150;
        }
    }
    
    this.menu = this.game.add.button(this.txtOverGoal.x - 200, this.txtOverGoal.y + 150, 'btn-w', this.passMenu, this, 8, 8, 8);
    this.menu.scale.set(1.5);
    this.menu.anchor.set(0.5); 
    
    this.return = this.game.add.button(this.txtOverGoal.x, this.txtOverGoal.y + 150, 'btn-w', this.passGame, this, 9, 9, 9);
    this.return.scale.set(1.5);
    this.return.anchor.set(0.5);
    
    this.share = this.game.add.button(this.txtOverGoal.x + 200, this.txtOverGoal.y + 150, 'btn-w', this.passShare, this, 13, 13, 13);
    this.share.scale.set(1.5);
    this.share.anchor.set(0.5);
    
    this.viish = this.game.add.sprite(this.return.x, this.return.y + 175, 'viish');
    this.viish.anchor.set(0.5);
    //this.viish.scale.set(1.25);
    
    /*this.txtViish = this.game.add.text(this.return.x, this.return.y + 200, 'v¡¡shapps.com', { font: "46px scoreboard", fill: "#ffffff", align: "center" });
    this.txtViish.anchor.set(0.5);
    this.txtViish.addColor('#ff0000', 1);
    this.txtViish.addColor('#ffffff', 3);*/
    
}

GameOver.prototype.passMenu = function() {
    this.game.state.start('preloader');
}

GameOver.prototype.passGame = function() {
    this.game.state.start('inGame');
}

GameOver.prototype.passShare = function() {
    //window.open(this.game.canvas.toDataURL());

    canvas = document.getElementById("myCanvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        var myImage = canvas.toDataURL("image/png");
    }
    imageElement = document.createElement("a");
    imageElement.src = myImage;
    imageElement.href = myImage;
    var meta = imageElement.href;

    window.external.notify(meta);
    window.external.notify("ant," + registry.goal);

}