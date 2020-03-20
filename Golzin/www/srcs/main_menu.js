function MainMenu(game) {
    'use strict';
    this.game = game;
    //var registry = new Register(game);
}

MainMenu.prototype.create = function () {
    'use strict';
    //registry.create();
    this.auxMainText = 0;
    //registry.existsCoins = false;
    //registry.chanceCoin = 0;
    
    sky.create();
    bg.create();
    posts.create();
    //sounds.create();
    
    var bmd = this.game.add.bitmapData(50, 50);
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, 50, 50);
    bmd.ctx.fillStyle = "black";
    bmd.ctx.fill();
    
    var mask = this.game.add.sprite(0, 0, bmd);
    mask.width = registry.width;
    mask.height = registry.height;
    mask.alpha = 0.5;
    
    
    this.hud();
    this.painelButtons();
    
    this.logo = this.game.add.sprite(registry.width / 2, registry.height / 2.25, 'logo');
    this.logo.anchor.set(0.5);
    this.logo.scale.set(0.5);  
};

MainMenu.prototype.painelButtons = function () {
    'use strict';

    this.painel = this.game.add.sprite(registry.width / 2, registry.height * 0.8, 'painel');
    this.painel.scale.set(1.25, 1);
    this.painel.anchor.set(0.5);


    this.play = this.game.add.button((registry.width * 0.5), this.painel.y - 30, 'all-btns', this.playAct, this);
    this.play.anchor.set(0.5);
    this.play.animations.add('play', [0], 10, false);
    this.play.animations.play('play', 5, true);

    this.chooseLike = this.game.rnd.integerInRange(0, 2);
    switch (this.chooseLike) {
        case 0:
            this.like = this.game.add.button(this.play.x - this.play.width * 1.5, this.play.y, 'all-btns', this.likeAct, this);
            this.like.anchor.set(0.5);
            this.like.animations.add('rt', [8], 10, false);
            this.like.animations.play('rt', 5, true);
            //this.like.tint = 0xffc107;
            this.like.textLike = 'rate';
            break;
        case 1:
            this.like = this.game.add.button(this.play.x - this.play.width * 1.5, this.play.y, 'all-btns', this.likeAct, this);
            this.like.anchor.set(0.5);
            this.like.animations.add('fb', [10], 10, false);
            this.like.animations.play('fb', 5, true);
            //this.like.tint = 0x3b5998;
            this.like.textLike = 'like F';
            break;
        case 2:
            this.like = this.game.add.button(this.play.x - this.play.width * 1.5, this.play.y, 'all-btns', this.likeAct, this);
            this.like.anchor.set(0.5);
            this.like.animations.add('tt', [9], 10, false);
            this.like.animations.play('tt', 5, true);
            //this.like.tint = 0x00aced;
            this.like.textLike = 'like T';
            break;
    }

    this.shop = this.game.add.button(this.play.x + this.play.width * 1.5, this.play.y, 'all-btns', this.shopAct, this);
    this.shop.animations.add('shop', [3], 10, false);
    this.shop.animations.play('shop', 5, true);
    this.shop.anchor.set(0.5);

    this.rank = this.game.add.button(this.play.x - this.play.width * 3, this.play.y, 'all-btns', this.rankAct, this);
    this.rank.anchor.set(0.5);
    this.rank.animations.add('rank', [29], 10, false);
    this.rank.animations.play('rank', 5, true);

    this.soundBG = this.game.add.button(this.play.x + this.play.width * 3, this.play.y, 'all-btns', this.soundBGAct, this);
    this.soundBG.anchor.set(0.5);
    this.soundBG.animations.add('bgsf', [21], 10, false);
    this.soundBG.animations.add('bgsn', [22], 10, false);
    this.soundBG.scale.set(1.25);
    this.soundBG.alpha = 0;
    registry.soundBGClick = localStorage.getItem("sbgStatus") || 0;
    if (registry.soundBGClick === 1 || registry.soundBGClick === "1") {
        this.soundBG.animations.play('bgsn', 5, true);
        //sounds.setSounds();

    } else {
        this.soundBG.animations.play('bgsf', 5, true);
        //sounds.setSounds();
    }

    this.soundFX = this.game.add.button(this.play.x + this.play.width * 3, this.play.y, 'all-btns', this.soundFXAct, this);
    this.soundFX.anchor.set(0.5);
    this.soundFX.animations.add('fxsf', [23], 10, false);
    this.soundFX.animations.add('fxsn', [24], 10, false);
    this.soundFX.scale.set(1.25);
    this.soundFX.alpha = 0;
    registry.soundFXClick = localStorage.getItem("sfxStatus") || 0;
    if (registry.soundFXClick === 1 || registry.soundFXClick === "1") {
        this.soundFX.animations.play('fxsn', 5, true);
    } else {
        this.soundFX.animations.play('fxsf', 5, true);
    }

    this.vibrate = this.game.add.button(this.play.x + this.play.width * 3, this.play.y, 'all-btns', this.vibrateAct, this);
    this.vibrate.anchor.set(0.5);
    this.vibrate.animations.add('von', [25], 10, false);
    this.vibrate.animations.add('voff', [26], 10, false);
    this.vibrate.scale.set(1.25);
    this.vibrate.alpha = 0;
    registry.vibrateClick = localStorage.getItem("vStatus") || 0;
    if (registry.vibrateClick === 1 || registry.vibrateClick === "1") {
        this.vibrate.animations.play('voff', 5, true);
    } else {
        this.vibrate.animations.play('von', 5, true);
    }
    

    this.config = this.game.add.button(this.play.x + this.play.width * 3, this.play.y, 'all-btns', this.configAct, this);
    this.config.anchor.set(0.5);
    this.config.animations.add('config', [4], 10, false);
    this.config.animations.play('config', 5, true);
    this.configClick = 0;

    this.viish = this.game.add.button(this.play.x, this.play.y + 75, 'viish', this.siteAct, this);
    this.viish.scale.set(0.75);
    this.viish.anchor.set(0.5);
};


MainMenu.prototype.siteAct = function () {
    'use strict';
    if (this.game.device.desktop) {
        window.open("http://viish.co.nf", "_blank");
    } else if (this.game.device.android) {
        window.open("http://viish.co.nf/", "_system");
    } else if (this.game.device.iOS) {
        window.parent.location.href = "site://?" + 'http://viish.co.nf/';
    } else {
        window.open("http://viish.co.nf/", "_blank", "", false);
    }
};


MainMenu.prototype.playAct = function () {
    'use strict';
    this.game.state.start('game');
};


MainMenu.prototype.likeAct = function () {
    'use strict';
    if (this.like.textLike === 'like F') {
        
        if (this.game.device.desktop) {
            window.open("https://facebook.com/viishapps", "_blank");
        } else if (this.game.device.android) {
            window.open("https://facebook.com/viishapps", "_system");
        } else if (this.game.device.iOS) {
            window.parent.location.href = "site://?" + 'https://m.facebook.com/viishapps';
        } else {
            window.open("https://m.facebook.com/viishapps", "_blank", "", false);
        }
        
    } else if (this.like.textLike === 'like T') {
        
        if (this.game.device.desktop) {
            window.open("https://twitter.com/viishapps", "_blank");
        } else if (this.game.device.android) {
            window.open("https://mobile.twitter.com/viishapps", "_system");
        } else if (this.game.device.iOS) {
            window.parent.location.href = "site://?" + 'https://mobile.twitter.com/viishapps';
        } else {
            window.open("https://mobile.twitter.com/viishapps", "_blank", "", false);
        }
        
    } else { //rates
        
        if (this.game.device.desktop) {
            window.open("https://www.instagram.com/viishapps", "_blank");
        } else if (this.game.device.android) {
            window.open("https://www.instagram.com/viishapps", "_system");
        } else if (this.game.device.iOS) {
            window.parent.location.href = "site://?" + 'https://www.instagram.com/viishapps';
        } else {
            window.open("https://www.instagram.com/viishapps", "_blank", "", false);
        }
    }
};


MainMenu.prototype.shopAct = function () {
    'use strict';
    this.game.state.start('shop');
};


MainMenu.prototype.configAct = function () {
    'use strict';
    if (this.configClick === 0) {
        this.configClick = 1;
    } else {
        this.configClick = 0;
    }
    
    if (this.configClick === 1) {
        this.soundBG.alpha = 1;
        this.game.add.tween(this.soundBG).to({y: this.config.y - this.config.height * 1.3}, 250, "Linear", true);
        
        this.soundFX.alpha = 1;
        this.game.add.tween(this.soundFX).to({y: this.config.y - this.config.height * 2.6}, 300, "Linear", true);
        
        this.vibrate.alpha = 1;
        this.game.add.tween(this.vibrate).to({y: this.config.y - this.config.height * 3.9}, 350, "Linear", true);
        
    } else {
        this.game.add.tween(this.soundBG).to({y: this.config.y}, 250, "Linear", true);

        this.game.add.tween(this.soundFX).to({y: this.config.y}, 300, "Linear", true);
        
        this.game.add.tween(this.vibrate).to({y: this.config.y}, 350, "Linear", true);
        
    }
    
};


MainMenu.prototype.soundBGAct = function () {
    'use strict';
    if (registry.soundBGClick === 0 || registry.soundBGClick === "0") {
        registry.soundBGClick = 1;
        localStorage.setItem("sbgStatus", registry.soundBGClick);
    } else {
        registry.soundBGClick = 0;
        localStorage.setItem("sbgStatus", registry.soundBGClick);
    }
   
    if (registry.soundBGClick === 1 || registry.soundBGClick === "1") {
        this.soundBG.animations.play('bgsn', 5, true);
        //sounds.setSounds();
    } else {
        this.soundBG.animations.play('bgsf', 5, true);
        //sounds.setSounds();
    }
};


MainMenu.prototype.soundFXAct = function () {
    'use strict';
    if (registry.soundFXClick === 0 || registry.soundFXClick === "0") {
        registry.soundFXClick = 1;
        localStorage.setItem("sfxStatus", registry.soundFXClick);
    } else {
        registry.soundFXClick = 0;
        localStorage.setItem("sfxStatus", registry.soundFXClick);
    }
    
    if (registry.soundFXClick === 1 || registry.soundFXClick === "1") {
        this.soundFX.animations.play('fxsn', 5, true);
    } else {
        this.soundFX.animations.play('fxsf', 5, true);
    }
};


MainMenu.prototype.vibrateAct = function () {
    'use strict';
    if (registry.vibrateClick === 0 || registry.vibrateClick === "0") {
        registry.vibrateClick = 1;
        localStorage.setItem("vStatus", registry.vibrateClick);
    } else {
        registry.vibrateClick = 0;
        localStorage.setItem("vStatus", registry.vibrateClick);
    }
    
    if (registry.vibrateClick === 1 || registry.vibrateClick === "1") {
        this.vibrate.animations.play('voff', 5, true);
        //sounds.setVibrate();
    } else {
        this.vibrate.animations.play('von', 5, true);
        //sounds.setVibrate();
    }
};


MainMenu.prototype.rankAct = function () {
    'use strict';
    this.game.state.start('trophy');
};


MainMenu.prototype.hud = function () {
    'use strict';
    this.scoreboard = this.game.add.sprite(0, 0, 'scoreboard');
    //this.scoreboard.width = registry.width;
    this.scoreboard.scale.set(0.85, 1);
    this.scoreboard.height = registry.height * 0.1;
    this.scoreboard.x = registry.width / 2;
    this.scoreboard.y = this.scoreboard.height / 2;
    this.scoreboard.anchor.set(0.5);
       
    this.textMain = this.game.add.text(this.scoreboard.width / 2, this.scoreboard.height / 2 + 5, 'FUTGOL', { font: '46px scoreboard', fill: '#ffffff', align: "center" });
    this.textMain.x = this.scoreboard.width / 2;
    this.textMain.anchor.set(0.5);
    this.textMainTime = 0;
};


MainMenu.prototype.update = function () {
    'use strict';
    if (this.configClick === 0) {
        if (this.soundBG.y === this.config.y) {
            this.soundBG.alpha = 0;
        }
        if (this.soundFX.y === this.config.y) {
            this.soundFX.alpha = 0;
        }
        if (this.vibrate.y === this.config.y) {
            this.vibrate.alpha = 0;
        }
    }
      
    this.textMainTime += 1;
    if (this.textMainTime % 300 === 0) {
        this.auxMainText += 1;//this.game.rnd.integerInRange(0, 2);
        if (this.auxMainText > 3) {
            this.auxMainText = 0;
        }
        
        switch (this.auxMainText) {
        case 0:
            this.textMain.text = "VIISHAPPS";
            this.textMain.addColor('#fff', 0);
            break;
        case 1:
            this.textMain.text = "HI-SCORE: " + registry.hiScore;
            this.textMain.addColor('#ff0', 0);
            break;
        case 2:
            this.textMain.text = "FUTGOL";
            this.textMain.addColor('#fff', 0);
            break;
        case 3:
            this.textMain.text = "COINS: " + registry.coins;
            this.textMain.addColor('#ff0', 0);
            break;
        }
    }
};