function Sky(game) {
    'use strict';
    this.game = game;
    //var registry = new Register(game);
}

Sky.prototype.create = function () {
    'use strict';

	this.game.stage.backgroundColor = "#013D22";
	//registry.create();
    
    var bmd = this.game.add.bitmapData(50, 50);
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, 50, 50);
    bmd.ctx.fillStyle = "white";
    bmd.ctx.fill();
    
    this.sky = this.game.add.sprite(0, 0, bmd);
    this.sky.width = registry.width;
    this.sky.height = registry.height * 0.2;
    
    
    /*if (registry.chooseField === 8) {
        this.sky.tint = 0xcecece;
    } else {
        this.sky.tint = 0x63e2d8;
    }*/
    if (registry.hour >= 6 && registry.hour < 18) {
        this.sky.tint = 0x63e2d8;
        document.getElementById('topper').style.background = '#63e2d8';
        document.getElementById('maskalpha').style.background = 'rgba(0, 0, 0, 0)';

        if (this.game.device.desktop || this.game.device.android || this.game.device.iOS) {
            document.querySelector("[name=theme-color]").content = '#63e2d8';
            
        } else {
            document.querySelector("[name=theme-color]").content = '#63e2d8';
            document.querySelector("[name=msapplication-TileColor]").content = '#63e2d8';
            document.querySelector("[name=msapplication-navbutton-color]").content = '#63e2d8';
        }
    } else {
        this.sky.tint = 0x041f51;
        document.getElementById('topper').style.background = '#020F28';
        document.getElementById('maskalpha').style.background = 'rgba(0, 0, 0, 0.5)';

        if (this.game.device.desktop || this.game.device.android || this.game.device.iOS) {
            document.querySelector("[name=theme-color]").content = '#020F28';
            
        } else {
            document.querySelector("[name=theme-color]").content = '#020F28';
            document.querySelector("[name=msapplication-TileColor]").content = '#020F28';
            document.querySelector("[name=msapplication-navbutton-color]").content = '#020F28';
        }
    }
    
    /*if (registry.hour < 6 && registry.hour >= 18) {
        this.sky.tint = 0x041f51;
        document.getElementById('topper').style.background = '#020F28';
        document.getElementById('maskalpha').style.background = 'rgba(0, 0, 0, 0.5)';
        
    } else {
        this.sky.tint = 0x63e2d8;
        document.getElementById('topper').style.background = '#63e2d8';
        document.getElementById('maskalpha').style.background = 'rgba(0, 0, 0, 0)';
    }*/
};