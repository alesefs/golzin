function Hud(game){
    this.game = game;
}


Hud.prototype.create = function () {
    var registry = new Register(game);
	//registry.create();
    
    /*
    bar = this.game.add.bitmapData(this.game.world.width - 20, this.game.world.height + 20);
    bar.ctx.beginPath();
    bar.ctx.rect(0, 0, this.game.world.width, this.game.world.height);
    bar.ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    bar.ctx.fill();

    this.barz = this.game.add.sprite(this.game.world.centerX, 0, bar);
    this.barz.anchor.set(0.5);
    this.barz.width = this.game.world.width;
    this.barz.height = 175;
    
    this.ball = this.game.add.sprite(0, 10, 'btn-w');
    this.ball.animations.add('play', [10], 10, false);     
    this.ball.animations.play('play', 5, true);
    
    this.king = this.game.add.sprite(200, 10, 'btn-w');
    this.king.animations.add('play', [11], 10, false);     
    this.king.animations.play('play', 5, true);
    */
    
    
    
    this.auxAlpha = 0;
                                    
    this.hud = this.game.add.sprite(0, 0, 'hud');
    this.hud.width = 240;
    this.hud.height = 70;
    //this.hud.alpha = 0;
    
    //this.txtActualGoal = this.game.add.text(this.ball.x + 100, this.ball.y + 25, registry.goal, { font: "25px scoreboard", fill: "#52a8e0", align: "center" });
    this.txtActualGoal = this.game.add.text(this.hud.x + this.hud.width/2 - 40, this.hud.y + this.hud.height/2 + 12.5, registry.goal, { font: "25px scoreboard", fill: "#1c9ef2", align: "center" });
    this.txtActualGoal.anchor.set(0.5);
    //this.txtActualGoal.alpha = 0;
    
    //this.txtHiScore = this.game.add.text(this.king.x - 30, this.king.y + 25, registry.hiScore, { font: "25px scoreboard", fill: "#9e0b0f", align: "center" });
    this.txtHiScore = this.game.add.text(this.hud.x + this.hud.width/2 + 30, this.hud.y + this.hud.height/2 + 12.5, registry.hiScore, { font: "25px scoreboard", fill: "#9e0b0f", align: "center" });
    this.txtHiScore.anchor.set(0.5);
    
    
    //texto de gol/perdeu
    barv = this.game.add.bitmapData(this.game.world.width, this.game.world.height);
    barv.ctx.beginPath();
    barv.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    barv.ctx.rect(0, 0, this.game.world.width, this.game.world.height);
    barv.ctx.fill();

    this.barx = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - 5, barv);
    this.barx.anchor.set(0.5);
    this.barx.width = this.game.world.width;
    this.barx.height = 150;
    this.barx.alpha = 0;

    var style = { font: "50px scoreboard2", fill: "#edff1a", align: "center" }
    this.txtResultShot = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "", style);
    this.txtResultShot.anchor.set(0.5);
    this.txtResultShot.alpha = 0;
    

   
    
    this.swipe = this.game.add.sprite(this.game.world.centerX + 80, -((registry.height/100)*85), 'swipe-fgr');
    this.swipe.anchor.set(0.5);

}


Hud.prototype.update = function () {
    //imagem de instruçao 
    if(!registry.isShoot && registry.goal == 0){
        //this.swipe.y = ((registry.height/100)*80);
        if(this.swipe.y >= ((registry.height/100)*80)){
            this.swipe.y -= 1;
        } else {
            this.swipe.y = ((registry.height/100)*95);
        }
    } else {
        this.swipe.kill();
    }
    
    
    this.txtActualGoal.text = registry.goal;
    this.txtHiScore.text = registry.nullScore;
    
    if(registry.hiScore > 0){
        this.txtHiScore.text = registry.hiScore;
    }
    
    if(registry.isGoal && !registry.isOut){
        this.auxAlpha += 0.02;
        if(registry.celebrateTimer < 100){
            this.txtResultShot.alpha = this.auxAlpha;
            this.barx.alpha = 1;
            
            var initialGoal = 1;
            if(this.txtResultShot.alpha == 0.04){
                if(registry.goal == 1){
                    this.txtResultShot.text = "GOoOoOAL!!!";
                    this.txtResultShot.addColor('#ffffff', 0);
                } else if (registry.goal == parseInt(registry.hiScore) + 1){
                    this.txtResultShot.text = "NEW RECORD!!";
                    this.txtResultShot.addColor('#ffff00', 0);
                    this.txtActualGoal.addColor('#038612', 0);
                } else if (registry.goal == 31){
                    this.txtResultShot.text = "AWESOME!! n\ new levels is coming";
                    this.txtResultShot.addColor('#ffff00', 0);
                    this.txtActualGoal.addColor('#038612', 0);
                } else {
                    //this.txtResultShot.addColor('Math.random() * 0xffffff', 0); 
                    this.txtResultShot.addColor('#' + ((0.5 + 0.5 * Math.random()) * 0xFFFFFF << 0).toString(16), 0);
                    var auxWin = 0;
                    auxWin = this.game.rnd.integerInRange(0, 3);
                    switch(auxWin) {
                        case 0:
                            this.txtResultShot.text = "GOOOAL!!!";
                            break;
                        case 1:
                            this.txtResultShot.text = "YOU ROCK!!!";
                            break;
                        case 2:
                            this.txtResultShot.text = "AMAZING!!!";
                            break;
                        case 3:
                            this.txtResultShot.text = "THE BEST!!!";
                            break;
                    }
                }
            }
        } else {
            this.auxAlpha = 0;
            this.txtResultShot.alpha = this.auxAlpha;
            this.barx.alpha = this.auxAlpha;
        }
    }
    
    if(registry.isOut && !registry.isGoal){
        this.auxAlpha += 0.02;
        if(registry.celebrateTimer < 100){
            this.txtResultShot.addColor('#ff0000', 0);
            this.txtResultShot.alpha = this.auxAlpha;
            this.barx.alpha = this.auxAlpha;
            
            if(this.txtResultShot.alpha == 0.04){
                var auxLose = 0;
                auxLose = this.game.rnd.integerInRange(0, 2);
                switch(auxLose) {
                    case 0:
                        this.txtResultShot.text = "UHHHH!!!";
                        break;
                    case 1:
                        this.txtResultShot.text = "SO CLOSED!!!";
                        break;
                    case 2:
                        this.txtResultShot.text = "OH DAMN!!!";
                        break;
                }
            }
        } else {
            this.auxAlpha = 0;
            this.txtResultShot.alpha = this.auxAlpha;
            this.barx.alpha = this.auxAlpha;
        }
    }
    
}
