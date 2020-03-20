function Pause(game){
    this.game = game;
}

Pause.prototype.create = function () {
    //var registry = new Register(game);
	//registry.create();
    //var sound = new Sound(game);
    //sound.create();
    
    this.pauseImg = this.game.add.sprite(this.game.world.width - 200, 10, 'btn-w');
    this.pauseImg.inputEnabled = true;
    this.pauseImg.input.useHandCursor = true;
    this.pauseImg.animations.add('pause', [6], 10, false);     
    this.pauseImg.animations.play('pause', 5, true);
    
    this.game.input.onDown.add(function (cursor) {
        if(cursor.x >= this.game.world.width - 200 && cursor.x <= this.game.world.width - 200 + 90 && cursor.y <= 70 && this.game.paused){
            this.game.paused = false;
            
            this.txtPause.kill();
            this.barw.kill();
            this.playImg.kill();
            
        } else if(cursor.x >= this.game.world.width - 200 && cursor.x <= this.game.world.width - 200 + 90 && cursor.y <= 70 && !this.game.paused){
            
            this.game.paused = true;
            
            bar = this.game.add.bitmapData(this.game.world.width, this.game.world.height);
            bar.ctx.beginPath();
            bar.ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
            bar.ctx.rect(0, 0, this.game.world.width, this.game.world.height);
            bar.ctx.fill();

            this.barw = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - 5, bar);
            this.barw.anchor.set(0.5);
            this.barw.width = this.game.world.width;
            this.barw.height = 150;

            this.txtPause = this.game.add.text(this.barw.x, this.barw.y, 'PAUSED', { font: "75px scoreboard", fill: "#ffffff", align: "center" });
            this.txtPause.anchor.set(0.5);

            this.playImg = this.game.add.sprite(this.game.world.width - 200, 10, 'btn-w');
            this.playImg.animations.add('play', [7], 10, false);     
            this.playImg.animations.play('play', 5, true);
            
        } else if(cursor.x >= this.game.world.width - 100 && cursor.x <= this.game.world.width - 100 + 90 && cursor.y <= 70 && this.game.paused){
            sound.sounder();
        }
    });
}
