function GameOver(game) {
    'use strict';
    this.game = game;
}

GameOver.prototype.create = function () {
    'use strict';
    this.photo = 0;
    this.photoBool = false;
    this.content = 0;
    this.meta = null;
    
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
    
    this.painel = this.game.add.sprite(registry.width / 2, registry.height / 2, 'painel');
    this.painel.scale.set(1.25, 1.5);
    this.painel.anchor.set(0.5);
    
    this.textPainel = this.game.add.text(this.painel.x, this.painel.y - this.painel.height / 3, 'YOUR SCORE', { font: '46px scoreboard', fill: '#fff', align: "center" });
    this.textPainel.anchor.set(0.5);


    this.crown = this.game.add.sprite(this.painel.x - 100, this.textPainel.y + this.painel.height / 5, 'all-btns');
    this.crown.anchor.set(0.5);
    this.crown.animations.add('crown', [13], 10, false);
    this.crown.animations.play('crown', 5, true);
    this.crown.alpha = 0;


    this.textGoal = this.game.add.text(this.painel.x, this.textPainel.y + this.painel.height / 5, registry.score, { font: '52px scoreboard', fill: '#fff', align: "center" });
    this.textGoal.anchor.set(0.5);

    //envia score no device original
    /*if (this.game.device.desktop) {
        //window.open("https://facebook.com/viishapps", "_blank");

    } else if (this.game.device.android) {
        Android.mtag(registry.score);
        window.open(registry.score);

    } else if (this.game.device.iOS) {
        window.location = "score://scrr?"+registry.score;

    } else {
        window.external.notify("scrr," + registry.score);
    }*/

    if (registry.hiScore === registry.score && registry.score > 0 && registry.hiScore > registry.rankLastScore) {
        this.textGoal.addColor('#ff0', 0);
        this.crown.alpha = 1;

    } else {
        this.textGoal.addColor('#fff', 0);
        this.crown.alpha = 0;
    }
    
    
    
    //this.trophy = this.game.add.sprite(this.textGoal.x + this.textGoal.width, this.textGoal.y, 'all-btns');
    this.trophy = this.game.add.sprite(this.painel.x + 100, this.textGoal.y, 'all-btns');
    this.trophy.anchor.set(0.5);
    this.trophy.animations.add('trophy', [29], 10, false);
    this.trophy.animations.play('trophy', 5, true);
    
    //trophy position x
    /*if (this.textGoal.length <= 4) {
        this.trophy.x = this.textGoal.x + this.textGoal.width;
        
    } else if (this.textGoal.length > 4 && this.textGoal.length <= 6) {
        this.trophy.x = this.textGoal.x + this.textGoal.width / 2;
        
    } else {
        this.trophy.x = this.textGoal.x + this.textGoal.width / 2 + 50;
    }*/
    
    this.extraCoins = this.game.add.sprite(this.trophy.x + this.trophy.width, this.trophy.y, 'ext-coins');
    this.extraCoins.anchor.set(0, 0.5);
    this.extraCoins.scale.set(0.75);
    this.extraCoins.animations.add('10', [0], 10, false);
    this.extraCoins.animations.add('15', [1], 10, false);
    this.extraCoins.animations.add('30', [2], 10, false);
    this.extraCoins.animations.add('50', [3], 10, false);
    this.extraCoins.animations.add('00', [4], 10, false);
    this.extraCoins.animations.add('20', [5], 10, false);
    this.extraCoins.animations.add('35', [6], 10, false);
    this.extraCoins.animations.play('00', 5, true);
    
    
    //test trophy win
    if (registry.score < 30) {
        this.trophy.tint = 0x000000;
        
    } else if (registry.score >= 30 && registry.score <= 60) {
        registry.wonTrophyBronze += 1;
        localStorage.setItem("BronzeWon", registry.wonTrophyBronze);
        this.trophy.tint = 0xA05A2C;
        
        if (registry.wonTrophyBronze === 1 || registry.wonTrophyBronze === "1") {
            registry.coins += 10;
            localStorage.setItem("coinsStatus", registry.coins);
            this.extraCoins.animations.play('10', 5, true);
            
        } else if (registry.wonTrophyBronze === 6 || registry.wonTrophyBronze === "6") {
            registry.coins += 20;
            localStorage.setItem("coinsStatus", registry.coins);
            this.extraCoins.animations.play('20', 5, true);
            
        } else {
            this.extraCoins.animations.play('00', 5, true);
        }
        
    } else if (registry.score > 60 && registry.score <= 90) {
        registry.wonTrophySilver += 1;
        localStorage.setItem("SilverWon", registry.wonTrophySilver);
        this.trophy.tint = 0xCCCCCC;
        
        if (registry.wonTrophySilver === 1 || registry.wonTrophySilver === "1") {
            registry.coins += 15;
            localStorage.setItem("coinsStatus", registry.coins);
            this.extraCoins.animations.play('15', 5, true);
            
        } else if (registry.wonTrophySilver === 6 || registry.wonTrophySilver === "6") {
            registry.coins += 25;
            localStorage.setItem("coinsStatus", registry.coins);
            this.extraCoins.animations.play('25', 5, true);
            
        } else {
            this.extraCoins.animations.play('00', 5, true);
        }
        
    } else if (registry.score > 90 && registry.score <= 120) {
        registry.wonTrophyGold += 1;
        localStorage.setItem("GoldWon", registry.wonTrophyGold);
        this.trophy.tint = 0xFFCC00;
        
        if (registry.wonTrophyGold === 1 || registry.wonTrophyGold === "1") {
            registry.coins += 25;
            localStorage.setItem("coinsStatus", registry.coins);
            this.extraCoins.animations.play('25', 5, true);
            
        } else if (registry.wonTrophyGold === 6 || registry.wonTrophyGold === "6") {
            registry.coins += 35;
            localStorage.setItem("coinsStatus", registry.coins);
            this.extraCoins.animations.play('35', 5, true);
            
        } else {
            this.extraCoins.animations.play('00', 5, true);
        }
        
    } else if (registry.score >= 120) {
        registry.wonTrophyPlatinum += 1;
        localStorage.setItem("PlatinumWon", registry.wonTrophyPlatinum);
        this.trophy.tint = 0x6F8A91;
        
        if (registry.wonTrophyPlatinum === 1 || registry.wonTrophyPlatinum === "1") {
            registry.coins += 50;
            localStorage.setItem("coinsStatus", registry.coins);
            this.extraCoins.animations.play('50', 5, true);
            
        } else if (registry.wonTrophyPlatinum === 4 || registry.wonTrophyPlatinum === "4") {
            registry.coins += 50;
            localStorage.setItem("coinsStatus", registry.coins);
            this.extraCoins.animations.play('50', 5, true);
            
        } else {
            this.extraCoins.animations.play('00', 5, true);
        }
    }
    
    
    this.replay = this.game.add.button(this.painel.x, this.painel.y, 'all-btns', this.replayAct, this);
    this.replay.animations.add('replay', [2], 10, false);
    this.replay.animations.play('replay', 5, true);
    this.replay.anchor.set(0.5);
    this.replay.y = this.painel.y + this.replay.height / 1.5;
    
    this.menu = this.game.add.button(this.replay.x - this.replay.width * 2.5, this.replay.y, 'all-btns', this.menuAct, this);
    this.menu.animations.add('menu', [5], 10, false);
    this.menu.animations.play('menu', 5, true);
    this.menu.anchor.set(0.5);
   
    this.share = this.game.add.button(this.replay.x + this.replay.width * 2.5, this.replay.y, 'all-btns', this.shareAct, this);
    //this.share = this.game.add.sprite(this.replay.x + this.replay.width * 2.5, this.replay.y, 'all-btns');
    this.share.animations.add('share', [6], 10, false);
    this.share.animations.play('share', 5, true);
    this.share.anchor.set(0.5);
    
    //this.share.inputEnabled = true;
    //this.share.input.useHandCursor = true;


    //this.text = this.game.add.text(this.replay.x, this.replay.y, '#viishapps', { font: '34px scoreboard', fill: '#fffc00', align: 'center' });
    //this.text.anchor.set(0.5);
    //this.text.alpha = 0;

    this.viish = this.game.add.button(this.painel.x, this.painel.y + this.replay.height * 2.25, 'viish', this.siteAct, this);
    this.viish.scale.set(0.7);
    this.viish.anchor.set(0.5);
   
};

GameOver.prototype.siteAct = function () {
    'use strict';
    
    //devices
    /*if (this.game.device.desktop) {
        window.open("http://viish.co.nf", "_blank");
    } else if (this.game.device.android) {
        window.open("http://viish.co.nf/", "_system");
    } else if (this.game.device.iOS) {
        window.parent.location.href = "site://?" + 'http://viish.co.nf/';
    } else {
        window.open("http://viish.co.nf/", "_blank", "", false);
    }*/
    
    //desktop
    window.open("http://viish.co.nf", "_blank");
};

GameOver.prototype.hud = function () {
    'use strict';
    this.scoreboard = this.game.add.sprite(0, 0, 'scoreboard');
    //this.scoreboard.width = registry.width;
    this.scoreboard.scale.set(0.85, 1);
    this.scoreboard.height = registry.height * 0.1;
    this.scoreboard.x = registry.width / 2;
    this.scoreboard.y = this.scoreboard.height / 2;
    this.scoreboard.anchor.set(0.5);
        
    this.textMain = this.game.add.text(this.scoreboard.width / 2, this.scoreboard.height / 2 + 5, 'END GAME', { font: '46px scoreboard', fill: '#ffffff', align: "center" });
    this.textMain.x = this.scoreboard.width / 2;
    this.textMain.anchor.set(0.5);
    
};

GameOver.prototype.replayAct = function () {
    'use strict';
    registry.rankLastScore = registry.hiScore;
    localStorage.setItem("SrankGoal", registry.rankLastScore);
    
    if (registry.wonTrophyBronze >= 6 && registry.wonTrophySilver >= 6 && registry.wonTrophyGold >= 6 && registry.wonTrophyPlatinum >= 4 || registry.wonTrophyBronze >= "6" && registry.wonTrophySilver >= "6" && registry.wonTrophyGold >= "6" && registry.wonTrophyPlatinum >= "4") {
        registry.wonTrophyBronze = 1;
        localStorage.setItem("BronzeWon", registry.wonTrophyBronze);
        registry.wonTrophySilver = 1;
        localStorage.setItem("SilverWon", registry.wonTrophySilver);
        registry.wonTrophyGold = 1;
        localStorage.setItem("GoldWon", registry.wonTrophyGold);
        registry.wonTrophyPlatinum = 1;
        localStorage.setItem("PlatinumWon", registry.wonTrophyPlatinum);
    }
    
    this.game.state.start('game');
};

GameOver.prototype.menuAct = function () {
    'use strict';
    registry.rankLastScore = registry.hiScore;
    localStorage.setItem("SrankGoal", registry.rankLastScore);
    
    if (registry.wonTrophyBronze >= 6 && registry.wonTrophySilver >= 6 && registry.wonTrophyGold >= 6 && registry.wonTrophyPlatinum >= 4 || registry.wonTrophyBronze >= "6" && registry.wonTrophySilver >= "6" && registry.wonTrophyGold >= "6" && registry.wonTrophyPlatinum >= "4") {
        registry.wonTrophyBronze = 1;
        localStorage.setItem("BronzeWon", registry.wonTrophyBronze);
        registry.wonTrophySilver = 1;
        localStorage.setItem("SilverWon", registry.wonTrophySilver);
        registry.wonTrophyGold = 1;
        localStorage.setItem("GoldWon", registry.wonTrophyGold);
        registry.wonTrophyPlatinum = 1;
        localStorage.setItem("PlatinumWon", registry.wonTrophyPlatinum);
    }
    
    this.game.state.start('menu');
};

GameOver.prototype.shareAct = function () {
    'use strict';
    this.photoBool = true;
    this.content = 0;

    var canvas = document.getElementById("myCanvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        var myImage = canvas.toDataURL("image/png");
    }
    var imageElement = document.createElement("a");
    imageElement.src = myImage;
    imageElement.href = myImage;
    this.meta = imageElement.href;

    //desktop
    canvas.toBlob(function(blob) {
       saveAs(blob, "futgol.png"); 
    });
    //device
    /*
    if (this.game.device.desktop) {
        //window.open(this.meta);

    } else if (this.game.device.android) {
        Android.log(this.meta);
        window.open(this.meta);
    
    } else if (this.game.device.iOS) {
        window.location = "shared://shrd?"+this.meta;

    } else {
        window.external.notify(this.meta);
    }
    */

};

GameOver.prototype.update = function () {
    'use strict';

    this.photo += 1;
    if(this.photo % 15 == 0) {
        this.content += 1;
    }
    if (this.photo >= 90) {
        this.photo = 0;
    }
    if(this.content >= 10){
        this.content = 0;
    }

    this.share.events.onInputDown.add(function(pointer) {
        this.content = 0;
        this.photoBool = true;
    }, this);

    if(this.content >= 0 && this.content < 2 && this.photoBool){
        this.replay.alpha = 0;
        this.menu.alpha = 0;
        this.share.alpha = 0;
        this.extraCoins.alpha = 0;
        //this.text.alpha = 1;

        this.textGoal.y = this.painel.y;
        this.trophy.y = this.painel.y;
        this.crown.y = this.painel.y;

        if(this.content == 1 && this.photoBool){

            /*var canvas = document.getElementById("myCanvas");
            if (canvas.getContext) {
                var ctx = canvas.getContext("2d");
                var myImage = canvas.toDataURL("image/png");
            }
            var imageElement = document.createElement("a");
            imageElement.src = myImage;
            imageElement.href = myImage;
            this.meta = imageElement.href;
            //envia para o android;
            Android.log(this.meta);
            window.open(this.meta);
            Android.mtag(registry.score);
            window.open(registry.score);*/

            //this.photoBool = false;
        }

    } else {
        this.replay.alpha = 1;
        this.menu.alpha = 1;
        this.share.alpha = 1;
        this.extraCoins.alpha = 1;
        //this.text.alpha = 0;

        this.textGoal.y = this.textPainel.y + this.painel.height / 5;
        this.trophy.y = this.textGoal.y;
        this.crown.y = this.textPainel.y + this.painel.height / 5;

        this.photoBool = false;
    }

};


/*GameOver.prototype.imageAct = function () {
    'use strict';
    var canvas = document.getElementById("myCanvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        var myImage = canvas.toDataURL("image/png");
    }
    var imageElement = document.createElement("a");
    imageElement.src = myImage;
    imageElement.href = myImage;
    this.meta = imageElement.href;
    //envia para o android;
    Android.log(this.meta);
    window.open(this.meta);
    Android.mtag(registry.score);
    window.open(registry.score);
};*/
