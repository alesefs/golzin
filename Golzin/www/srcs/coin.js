function Coin(game) {
    'use strict';
    this.game = game; 
}

Coin.prototype.create = function () {
    'use strict';
    this.catchCoins = 0;
	this.coinTimeDelay = 0;
	this.coinDelay = 3;
    
    this.coins = this.game.add.physicsGroup();//this.game.add.group();
    this.game.physics.arcade.enable(this.coins);
    this.coins.enableBody = true;
    
    //this.createCoins();
};

Coin.prototype.update = function () {
    'use strict';
    
    this.coins.forEachAlive(function(coinx){
        if (coinx.x < bg.postL.x + 20 || coinx.x > bg.postR.x - 20) {
            coinx.x = this.game.rnd.integerInRange(bg.postL.x + 20, bg.postR.x - 20);
            coinx.y = bg.line.y - 10;
        }
    },this);
};

Coin.prototype.createCoins = function () {
    'use strict';
    
    var coin = this.coins.create(this.game.rnd.integerInRange(bg.postL.x + 20, bg.postR.x - 20), bg.line.y - 10, 'all-btns');
    coin.animations.add('coinx', [12], 10, false);
    coin.animations.play('coinx', 5, true);
    coin.anchor.set(0.5, 1);
    coin.scale.set(0.75);
};