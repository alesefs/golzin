function Sounds(game) {
    'use strict';
    this.game = game;
}

Sounds.prototype.create = function () {
    'use strict';

    this.bgsound = this.game.add.audio('bg_crowd');
    this.fxgoal = this.game.add.audio('fx_goal');
    this.fxout = this.game.add.audio('fx_out');
    this.fxshoot = this.game.add.audio('fx_shoot');
    this.fxpost = this.game.add.audio('fx_post');
    this.fxdefender = this.game.add.audio('fx_defender');
    this.fxcoin = this.game.add.audio('fx_coin');

};

Sounds.prototype.setSounds = function () {
    'use strict';
    if (registry.soundBGClick === 1 || registry.soundBGClick === "1") {
        this.bgsound.pause();

    } else {
        /*if (this.bgsound.isPlaying) {
            this.bgsound.restart('', 0, 0.5, true);
            this.bgsound.loopFull();
        } else {
            this.bgsound.play('', 0, 0.5, true);
            this.bgsound.loopFull();
        }*/
        this.bgsound.play('', 0, 0.5, true);
        //this.bgsound.loopFull();
    }
};

Sounds.prototype.setEffects = function () {
    'use strict';
    if (registry.soundFXClick === 1 || registry.soundFXClick === "1") {
         if (registry.isGoal === true) {
            this.fxgoal.play('', 0, 0, false);

         } else if (registry.isOut === true) {
             this.fxout.play('', 0, 0, false);

         } else if (registry.isPost === true) {
             this.fxpost.play('', 0, 0, false);

         } else if (registry.isDefender === true) {
             this.fxdefender.play('', 0, 0, false);

         } else if (registry.collectCoin === true) {
             this.fxcoin.play('', 0, 0, false);

         } else {
             this.fxshoot.play('', 0, 0, false);
         }
    } else {
        if (registry.isGoal === true) {
            this.fxgoal.play('', 0, 0.1, false);

         } else if (registry.isOut === true) {
             this.fxout.play('', 0, 0.1, false);

         } else if (registry.isPost === true) {
             this.fxpost.play('', 0, 0.25, false);

         } else if (registry.isDefender === true) {
             this.fxdefender.play('', 0, 0.25, false);

         } else if (registry.collectCoin === true) {
             this.fxcoin.play('', 0, 0.2, false);

         } else {
             this.fxshoot.play('', 0, 0.2, false);
         }
    }
};


Sounds.prototype.setVibrate = function () {
    'use strict';
    if (registry.vibrateClick === 1 || registry.vibrateClick === "1") {
        navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
        if (navigator.vibrate) {
            window.navigator.vibrate(0);
            console.log("vibrate 0");
        } else {
            //console.log("nao funciona");
            if (this.game.device.desktop) {
                //window.open("https://facebook.com/viishapps", "_blank");
            } else if (this.game.device.android) {
                //window.open("https://facebook.com/viishapps", "_system");
            } else if (this.game.device.iOS) {
                window.location = "vibrate://vbtt?"+registry.vibrateClick;
            } else {
                window.external.notify("vbtt,"+registry.vibrateClick);
            }
        }
    } else {
        navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
        if (navigator.vibrate) {
            window.navigator.vibrate(200);
            console.log("vibrate 200");
        } else {
            //console.log("nao funciona");
            if (this.game.device.desktop) {
                //window.open("https://facebook.com/viishapps", "_blank");
            } else if (this.game.device.android) {
                //window.open("https://facebook.com/viishapps", "_system");
            } else if (this.game.device.iOS) {
                window.location = "vibrate://vbtt?"+registry.vibrateClick;
            } else {
                window.external.notify("vbtt,"+registry.vibrateClick);
            }
        }
    }
};