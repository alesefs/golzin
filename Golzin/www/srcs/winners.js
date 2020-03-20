function Trophy(game) {
    'use strict';
    this.game = game;
}


Trophy.prototype.create = function () {
    'use strict';
    
    var bmd = this.game.add.bitmapData(50, 50);
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, 50, 50);
    bmd.ctx.fillStyle = "white";
    bmd.ctx.fill();
    
    var mask = this.game.add.sprite(0, 0, bmd);
    mask.width = registry.width;
    mask.height = registry.height;
    mask.alpha = 0.9;
    
    this.hud();
    this.thophyWon();
    
    this.popUp();

};



//hud
Trophy.prototype.hud = function () {
    'use strict';
    this.scoreboard = this.game.add.sprite(0, 0, 'scoreboard');
    this.scoreboard.scale.set(0.85, 1);
    this.scoreboard.height = registry.height * 0.1;
    this.scoreboard.x = registry.width / 2;
    this.scoreboard.y = this.scoreboard.height / 2;
    this.scoreboard.anchor.set(0.5);
    
    
    this.home = this.game.add.button(registry.width * 0.15, this.scoreboard.height / 2 + 5, 'all-btns', this.backAct, this);
    this.home.animations.add('home', [5], 10, false);
    this.home.animations.play('home', 5, true);
    this.home.anchor.set(0.5);
    this.home.scale.set(0.75);
           
    this.textMain = this.game.add.text(this.scoreboard.width / 2 + 10, this.scoreboard.height / 2 + 5, 'TROPHY ROOM', { font: '46px scoreboard', fill: '#ffffff', align: "center" });
    this.textMain.anchor.set(0.5);
};

Trophy.prototype.backAct = function () {//volta menu
    'use strict';
    this.game.state.start('menu');
};

//won trophies
Trophy.prototype.thophyWon = function () {
    'use strict';
    
    this.painel = this.game.add.sprite(this.scoreboard.x, this.scoreboard.y + this.scoreboard.height * 2, 'painel');
    this.painel.scale.set(1.25, 1);
    this.painel.anchor.set(0.5);
    
    this.textTrophy = this.game.add.text(this.painel.x, this.painel.y - this.painel.height / 2 + 40, 'COLLECTED TROPHIES', { font: '40px scoreboard', fill: '#ffffff', align: "center" });
    this.textTrophy.anchor.set(0.5);
    
    this.trophyNumber = 0;
    
    this.trophyBronze = this.game.add.button(this.painel.x - this.painel.width * 0.3, this.painel.y + 20, 'all-btns', this.bronzeAct, this);
    this.trophyBronze.anchor.set(0.5);
    this.trophyBronze.scale.set(1.25);
    this.trophyBronze.animations.add('trophy', [29], 10, false);
    this.trophyBronze.animations.play('trophy', 5, true);
    this.trophyBronze.tint = 0x000000;
     
    this.trophySilver = this.game.add.button(this.painel.x - this.painel.width * 0.1, this.painel.y + 20, 'all-btns', this.silverAct, this);
    this.trophySilver.anchor.set(0.5);
    this.trophySilver.scale.set(1.25);
    this.trophySilver.animations.add('trophy', [29], 10, false);
    this.trophySilver.animations.play('trophy', 5, true);
    this.trophySilver.tint = 0x000000;
    
    this.trophyGold = this.game.add.button(this.painel.x + this.painel.width * 0.1, this.painel.y + 20, 'all-btns', this.goldAct, this);
    this.trophyGold.anchor.set(0.5);
    this.trophyGold.scale.set(1.25);
    this.trophyGold.animations.add('trophy', [29], 10, false);
    this.trophyGold.animations.play('trophy', 5, true);
    this.trophyGold.tint = 0x000000;
    
    this.trophyPlatinum = this.game.add.button(this.painel.x + this.painel.width * 0.3, this.painel.y + 20, 'all-btns', this.platinumAct, this);
    this.trophyPlatinum.anchor.set(0.5);
    this.trophyPlatinum.scale.set(1.25);
    this.trophyPlatinum.animations.add('trophy', [29], 10, false);
    this.trophyPlatinum.animations.play('trophy', 5, true);
    this.trophyPlatinum.tint = 0x000000;
    
    
    //one events
    //this.goal1000 = this.game.add.button(this.painel.x - this.painel.width * 0.365, this.painel.y * 1.8, 'trophy-btns', this.platinumAct, this);
    this.goal1000 = this.game.add.button(this.painel.x - this.painel.width / 2 + 75, this.painel.y * 1.8, 'trophy-btns', this.goal1000Act, this);
    this.goal1000.anchor.set(0.5);
    this.goal1000.animations.add('goal1000available', [0], 10, false);
    this.goal1000.animations.add('goal1000enable', [10], 10, false);
    
    //this.match500 = this.game.add.button(this.goal1000.x + this.goal1000.width * 1.15, this.goal1000.y, 'trophy-btns', this.platinumAct, this);
    this.match500 = this.game.add.button(this.painel.x, this.goal1000.y, 'trophy-btns', this.match500Act, this);
    this.match500.anchor.set(0.5);
    this.match500.animations.add('match500available', [1], 10, false);
    this.match500.animations.add('match500enable', [11], 10, false);
    
    //this.kick5000 = this.game.add.button(this.match500.x + this.match500.width * 1.15, this.goal1000.y, 'trophy-btns', this.platinumAct, this);
    this.kick5000 = this.game.add.button(this.painel.x + this.painel.width / 2 - 75, this.goal1000.y, 'trophy-btns', this.kick5000Act, this);
    this.kick5000.anchor.set(0.5);
    this.kick5000.animations.add('kick5000available', [2], 10, false);
    this.kick5000.animations.add('kick5000enable', [12], 10, false);
    
    //temp
    /*this.kick50001 = this.game.add.button(this.kick5000.x + this.kick5000.width * 1.15, this.goal1000.y, 'trophy-btns', this.platinumAct, this);
    this.kick50001.anchor.set(0.5);
    this.kick50001.animations.add('kick50001available', [2], 10, false);
    this.kick50001.animations.add('kick50001enable', [12], 10, false);
    this.kick50001.animations.play('kick50001available', 5, true);
    this.kick50001.alpha = 0;
    this.kick50001.inputEnabled = false;*/
    
    
    //timer events
    this.postgoal = this.game.add.button(this.goal1000.x, this.goal1000.y + this.goal1000.height * 1.25, 'trophy-btns', this.PGAct, this);
    this.postgoal.anchor.set(0.5);
    this.postgoal.animations.add('postgoalavailable', [3], 10, false);
    this.postgoal.animations.add('postgoalenable', [13], 10, false);
    this.postgoal.animations.play('postgoalavailable', 5, true);
    
    //this.defendergoal = this.game.add.button(this.postgoal.x + this.postgoal.width * 1.15, this.postgoal.y, 'trophy-btns', this.platinumAct, this);
    this.defendergoal = this.game.add.button(this.match500.x, this.postgoal.y, 'trophy-btns', this.DGAct, this);
    this.defendergoal.anchor.set(0.5);
    this.defendergoal.animations.add('defendergoalavailable', [4], 10, false);
    this.defendergoal.animations.add('defendergoalenable', [14], 10, false);
    this.defendergoal.animations.play('defendergoalavailable', 5, true);
    
    //this.postdefendergoal = this.game.add.button(this.defendergoal.x + this.defendergoal.width * 1.15, this.postgoal.y, 'trophy-btns', this.platinumAct, this);
    this.postdefendergoal = this.game.add.button(this.kick5000.x, this.postgoal.y, 'trophy-btns', this.PDGAct, this);
    this.postdefendergoal.anchor.set(0.5);
    this.postdefendergoal.animations.add('postdefendergoalavailable', [5], 10, false);
    this.postdefendergoal.animations.add('postdefendergoalenable', [15], 10, false);
    this.postdefendergoal.animations.play('postdefendergoalavailable', 5, true);
    
    //temp
    /*this.postdefendergoal2 = this.game.add.button(this.postdefendergoal.x + this.postdefendergoal.width * 1.15, this.postgoal.y, 'trophy-btns', this.platinumAct, this);
    this.postdefendergoal2.anchor.set(0.5);
    this.postdefendergoal2.animations.add('postdefendergoal2available', [5], 10, false);
    this.postdefendergoal2.animations.add('postdefendergoal2enable', [15], 10, false);
    this.postdefendergoal2.animations.play('postdefendergoal2available', 5, true);
    this.postdefendergoal2.alpha = 0;
    this.postdefendergoal2.inputEnabled = false;*/
    
    
    
    //trophy events
    this.wonBronze = this.game.add.button(this.postgoal.x - 7.5, this.postgoal.y + this.postgoal.height * 1.25, 'trophy-btns', this.bronzeWonAct, this);
    this.wonBronze.anchor.set(0.5);
    this.wonBronze.animations.add('wonBronzeavailable', [6], 10, false);
    this.wonBronze.animations.add('wonBronzeenable', [16], 10, false);
    //this.wonBronze.animations.play('wonBronzeavailable', 5, true);
    
    this.wonSilver = this.game.add.button(this.wonBronze.x + this.wonBronze.width * 1.15, this.wonBronze.y, 'trophy-btns', this.silverWonAct, this);
    this.wonSilver.anchor.set(0.5);
    this.wonSilver.animations.add('wonSilveravailable', [7], 10, false);
    this.wonSilver.animations.add('wonSilverenable', [17], 10, false);
    //this.wonSilver.animations.play('wonSilveravailable', 5, true);
    
    this.wonGold = this.game.add.button(this.wonSilver.x + this.wonSilver.width * 1.15, this.wonBronze.y, 'trophy-btns', this.goldWonAct, this);
    this.wonGold.anchor.set(0.5);
    this.wonGold.animations.add('wonGoldavailable', [8], 10, false);
    this.wonGold.animations.add('wonGoldenable', [18], 10, false);
    //this.wonGold.animations.play('wonGoldavailable', 5, true);
    
    this.wonPlatinum = this.game.add.button(this.wonGold.x + this.wonGold.width * 1.15, this.wonBronze.y, 'trophy-btns', this.platinumWonAct, this);
    this.wonPlatinum.anchor.set(0.5);
    this.wonPlatinum.animations.add('wonPlatinumavailable', [9], 10, false);
    this.wonPlatinum.animations.add('wonPlatinumenable', [19], 10, false);
    //this.wonPlatinum.animations.play('wonPlatinumavailable', 5, true);
    
};


Trophy.prototype.bronzeAct = function () {
    'use strict';
    this.trophyNumber = 0;
    this.showModal();
};

Trophy.prototype.silverAct = function () {
    'use strict';
    this.trophyNumber = 1;
    this.showModal();
};

Trophy.prototype.goldAct = function () {
    'use strict';
    this.trophyNumber = 2;
    this.showModal();
};

Trophy.prototype.platinumAct = function () {
    'use strict';
    this.trophyNumber = 3;
    this.showModal();
};

Trophy.prototype.goal1000Act = function () {
    'use strict';
    this.trophyNumber = 4;
    this.showModal();
};

Trophy.prototype.match500Act = function () {
    'use strict';
    this.trophyNumber = 5;
    this.showModal();
};

Trophy.prototype.kick5000Act = function () {
    'use strict';
    this.trophyNumber = 6;
    this.showModal();
};

Trophy.prototype.PGAct = function () {
    'use strict';
    this.trophyNumber = 7;
    this.showModal();
};

Trophy.prototype.DGAct = function () {
    'use strict';
    this.trophyNumber = 8;
    this.showModal();
};

Trophy.prototype.PDGAct = function () {
    'use strict';
    this.trophyNumber = 9;
    this.showModal();
};

Trophy.prototype.bronzeWonAct = function () {
    'use strict';
    this.trophyNumber = 10;
    this.showModal();
};

Trophy.prototype.silverWonAct = function () {
    'use strict';
    this.trophyNumber = 11;
    this.showModal();
};

Trophy.prototype.goldWonAct = function () {
    'use strict';
    this.trophyNumber = 12;
    this.showModal();
};

Trophy.prototype.platinumWonAct = function () {
    'use strict';
    this.trophyNumber = 13;
    this.showModal();
};



Trophy.prototype.popUp = function () {
    'use strict';
    
    var bmd = this.game.add.bitmapData(50, 50);
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, 50, 50);
    bmd.ctx.fillStyle = "black";
    bmd.ctx.fill();
    
    this.maskWin = this.game.add.sprite(0, 0, bmd);
    this.maskWin.width = registry.width;
    this.maskWin.height = registry.height;
    this.maskWin.alpha = 0;
    
    this.modal = this.game.add.sprite(registry.width/2, registry.height/2, 'painel');
    this.modal.anchor.set(0.5);
    this.modal.scale.set(1.25, 1.5);
    this.modal.alpha = 0;

    this.topText = this.game.add.text(this.modal.x, this.modal.y - this.modal.height/2 + 50, 'title', { font: '36px scoreboard', fill: "#ffffff", align: "center" });
    this.topText.anchor.set(0.5);
    this.topText.alpha = 0;
    
    this.midText = this.game.add.text(this.modal.x - this.modal.width / 2 + 50, this.topText.y + 35, 'descriptienable', { font: '30px scoreboard', fill: "#ffffff"});
    this.midText.alpha = 0;
    
    this.botText = this.game.add.text(this.midText.x, this.midText.y + this.midText.height + 75, 'status: done/avaible', { font: '30px scoreboard', fill: "#ffffff" });
    this.botText.alpha = 0;
    
    this.closeBtn = this.game.add.button(this.modal.x, this.modal.y + this.modal.height / 2 - 50, 'all-btns', this.hideModal, this);
    this.closeBtn.animations.add('noText', [28], 10, false);
    this.closeBtn.animations.play('noText', 5, true);
    this.closeBtn.anchor.set(0.5);
    this.closeBtn.scale.set(1.25);
    this.closeBtn.alpha = 0;
    this.closeBtn.inputEnabled = false;
};

Trophy.prototype.hideModal = function () {
    'use strict';
    this.maskWin.alpha = 0;
    this.modal.alpha = 0;
    this.topText.alpha = 0;
    this.midText.alpha = 0;
    this.botText.alpha = 0;
    this.closeBtn.alpha = 0;
    
    this.closeBtn.inputEnabled = false;
    
    this.trophyBronze.inputEnabled = true;
    this.trophySilver.inputEnabled = true;
    this.trophyGold.inputEnabled = true;
    this.trophyPlatinum.inputEnabled = true;
    
    this.goal1000.inputEnabled = true;
    this.match500.inputEnabled = true;
    this.kick5000.inputEnabled = true;
    
    this.postgoal.inputEnabled = true;
    this.defendergoal.inputEnabled = true;
    this.postdefendergoal.inputEnabled = true;
    
    this.wonBronze.inputEnabled = true;
    this.wonSilver.inputEnabled = true;
    this.wonGold.inputEnabled = true;
    this.wonPlatinum.inputEnabled = true;
};

Trophy.prototype.showModal = function () {
    'use strict';
    
    this.maskWin.alpha = 0.75;
    this.modal.alpha = 1;
    this.topText.alpha = 1;
    this.midText.alpha = 1;
    this.botText.alpha = 1;
    this.closeBtn.alpha = 1;
    
    this.closeBtn.inputEnabled = true;
    
    this.trophyBronze.inputEnabled = false;
    this.trophySilver.inputEnabled = false;
    this.trophyGold.inputEnabled = false;
    this.trophyPlatinum.inputEnabled = false;
    
    this.goal1000.inputEnabled = false;
    this.match500.inputEnabled = false;
    this.kick5000.inputEnabled = false;
    
    this.postgoal.inputEnabled = false;
    this.defendergoal.inputEnabled = false;
    this.postdefendergoal.inputEnabled = false;
    
    this.wonBronze.inputEnabled = false;
    this.wonSilver.inputEnabled = false;
    this.wonGold.inputEnabled = false;
    this.wonPlatinum.inputEnabled = false;
};


Trophy.prototype.update = function () {
    'use strict';
    
    if (registry.wonTrophyBronze >= 1 || registry.wonTrophyBronze >= "1") {
        this.trophyBronze.tint = 0xA05A2C;
    } else {
        this.trophyBronze.tint = 0x000000;
    }
    
    if (registry.wonTrophySilver >= 1 || registry.wonTrophySilver >= "1") {
        this.trophySilver.tint = 0xCCCCCC;
    } else {
        this.trophySilver.tint = 0x000000;
    }
    
    if (registry.wonTrophyGold >= 1 || registry.wonTrophyGold >= "1") {
        this.trophyGold.tint = 0xFFCC00;
    } else {
        this.trophyGold.tint = 0x000000;
    }
    
    if (registry.wonTrophyPlatinum >= 1 || registry.wonTrophyPlatinum >= "1") {
        this.trophyPlatinum.tint = 0x6F8A91;
    } else {
        this.trophyPlatinum.tint = 0x000000;
    }
    
    
    
    
    if (registry.storiesGoals < 1000 || registry.storiesGoals < "1000") {
        this.goal1000.animations.play('goal1000available', 5, true);
    } else {
        this.goal1000.animations.play('goal1000enable', 5, true);
    }
    
    if (registry.storiesMatches < 500 || registry.storiesMatches < "500") {
        this.match500.animations.play('match500available', 5, true);
    } else {
        this.match500.animations.play('match500enable', 5, true);
    }
    
    if (registry.storiesShots < 5000 || registry.storiesShots < "5000") {
        this.kick5000.animations.play('kick5000available', 5, true);
    } else {
        this.kick5000.animations.play('kick5000enable', 5, true);
    }
    
    
    
    
    if (registry.wonPostGoal < 1 || registry.wonPostGoal < "1") {
        this.postgoal.animations.play('postgoalavailable', 5, true);
    } else {
        this.postgoal.animations.play('postgoalenable', 5, true);
    }
    
    if (registry.wonDefGoal < 1 || registry.wonDefGoal < "1") {
        this.defendergoal.animations.play('defendergoalavailable', 5, true);
    } else {
        this.defendergoal.animations.play('defendergoalenable', 5, true);
    }
    
    if (registry.wonPostDefGoal < 1 || registry.wonPostDefGoal < "1") {
        this.postdefendergoal.animations.play('postdefendergoalavailable', 5, true);
    } else {
        this.postdefendergoal.animations.play('postdefendergoalenable', 5, true);
    }
    
    
    
    
    if (registry.wonTrophyBronze === 0 || registry.wonTrophyBronze === "0") {
        this.wonBronze.alpha = 0;
        this.wonBronze.inputEnabled = false;
        this.wonBronze.animations.play('wonBronzeavailable', 5, true);
    } else if (registry.wonTrophyBronze < 3 || registry.wonTrophyBronze < "3") {
        this.wonBronze.alpha = 1;
        this.wonBronze.inputEnabled = true;
        this.wonBronze.animations.play('wonBronzeavailable', 5, true);
    } else {
        this.wonBronze.animations.play('wonBronzeenable', 5, true);
    }
    
    if (registry.wonTrophySilver === 0 || registry.wonTrophySilver === "0") {
        this.wonSilver.alpha = 0;
        this.wonSilver.inputEnabled = false;
        this.wonSilver.animations.play('wonSilveravailable', 5, true);
    } else if (registry.wonTrophySilver < 3 || registry.wonTrophySilver < "3") {
        this.wonSilver.alpha = 1;
        this.wonSilver.inputEnabled = true;
        this.wonSilver.animations.play('wonSilveravailable', 5, true);
    } else {
        this.wonSilver.animations.play('wonSilverenable', 5, true);
    }
    
    if (registry.wonTrophyGold === 0 || registry.wonTrophyGold === "0") {
        this.wonGold.alpha = 0;
        this.wonGold.inputEnabled = false;
        this.wonGold.animations.play('wonGoldavailable', 5, true);  
    } else if (registry.wonTrophyGold < 3 || registry.wonTrophyGold < "3") {
        this.wonGold.alpha = 1;
        this.wonGold.inputEnabled = true;
        this.wonGold.animations.play('wonGoldavailable', 5, true);  
    } else {
        this.wonGold.animations.play('wonGoldenable', 5, true);
    }
    
    if (registry.wonTrophyPlatinum === 0 || registry.wonTrophyPlatinum === "0") {
        this.wonPlatinum.alpha = 0;
        this.wonPlatinum.inputEnabled = false;
        this.wonPlatinum.animations.play('wonPlatinumavailable', 5, true);   
    } else if (registry.wonTrophyPlatinum < 2 || registry.wonTrophyPlatinum < "2") {
        this.wonPlatinum.alpha = 1;
        this.wonPlatinum.inputEnabled = true;
        this.wonPlatinum.animations.play('wonPlatinumavailable', 5, true);
    } else {
        this.wonPlatinum.animations.play('wonPlatinumenable', 5, true);
    }
    
    
    
    
    switch (this.trophyNumber) {
        case 0:
            this.topText.text = "Bronze trophy";
            this.midText.text = "Do >= 30 goals \nand <= 60 goals";
            if (registry.wonTrophyBronze === 0 || registry.wonTrophyBronze === "0") {
                this.botText.text = "status: available";
            } else {
                this.botText.text = "status: done";
            }
            break;
        case 1:
            this.topText.text = "Silver trophy";
            this.midText.text = "Do > 60 goals \nand <= 90 goals";
            if (registry.wonTrophySilver === 0 || registry.wonTrophySilver === "0") {
                this.botText.text = "status: available";
            } else {
                this.botText.text = "status: done";
            }
            break;
        case 2:
            this.topText.text = "Gold trophy";
            this.midText.text = "Do > 90 goals \nand <= 120 goals";
            if (registry.wonTrophyGold === 0 || registry.wonTrophyGold === "0") {
                this.botText.text = "status: available";
            } else {
                this.botText.text = "status: done";
            }
            break;
        case 3:
            this.topText.text = "Platinum trophy";
            this.midText.text = "Do > 120 goals";
            if (registry.wonTrophyPlatinum === 0 || registry.wonTrophyPlatinum === "0") {
                this.botText.text = "status: available";
            } else {
                this.botText.text = "status: done";
            }
            break;
        case 4:
            this.topText.text = "1000 goals";
            this.midText.text = "Do 1000 goals";
            if (registry.storiesGoals < 1000 || registry.storiesGoals < "1000") {
                this.botText.text = "status: available";
            } else {
                this.botText.text = "status: done";
            }
            break;
        case 5:
            this.topText.text = "500 Matches";
            this.midText.text = "Do 500 matches, but you \nhave to make at least 1 \ngoal in each match";
            if (registry.storiesMatches < 500 || registry.storiesMatches < "500") {
                this.botText.text = "status: available";
            } else {
                this.botText.text = "status: done";
            }
            break;
        case 6:
            this.topText.text = "5000 kicks";
            this.midText.text = "Do 5000 kicks";
            if (registry.storiesShots < 5000 || registry.storiesShots < "5000") {
                this.botText.text = "status: available";
            } else {
                this.botText.text = "status: done";
            }
            break;
        case 7:
            this.topText.text = "20x Post+Goal";
            this.midText.text = "Do 20 goals with the ball \ntouching the post";
            if (registry.wonPostGoal < 1 || registry.wonPostGoal < "1") {
                this.botText.text = "status: available";
            } else {
                this.botText.text = "status: done";
            }
            break;
        case 8:
            this.topText.text = "20x Defender+Goal";
            this.midText.text = "Do 20 goals with the ball \ntouching the defender";
            if (registry.wonDefGoal < 1 || registry.wonDefGoal < "1") {
                this.botText.text = "status: available";
            } else {
                this.botText.text = "status: done";
            }
            break;
        case 9:
            this.topText.text = "10x Defender+Post+Goal";
            this.midText.text = "Do 10 goals with the ball \ntouching the defender and \nthe on post";
            if (registry.wonPostDefGoal < 1 || registry.wonPostDefGoal < "1") {
                this.botText.text = "status: available";
            } else {
                this.botText.text = "status: done";
            }
            break;
        case 10:
            this.topText.text = "5x Bronze Trophies";
            this.midText.text = "won 5 trophies bronze";
            if (registry.wonTrophyBronze < 3 || registry.wonTrophyBronze < "3") {
                this.botText.text = "status: available " + (parseInt(registry.wonTrophyBronze - 1)) + "/5";
            } else {
                this.botText.text = "status: done";
            }
            break;
        case 11:
            this.topText.text = "5x Silver Trophies";
            this.midText.text = "won 5 trophies silver";
            if (registry.wonTrophySilver < 3 || registry.wonTrophySilver < "3") {
                this.botText.text = "status: available " + (parseInt(registry.wonTrophySilver - 1)) + "/5";
            } else {
                this.botText.text = "status: done";
            }
            break;
        case 12:
            this.topText.text = "5x Gold Trophies";
            this.midText.text = "won 5 trophies Gold";
            if (registry.wonTrophyGold < 3 || registry.wonTrophyGold < "3") {
                this.botText.text = "status: available " + (parseInt(registry.wonTrophyGold - 1)) + "/5";
            } else {
                this.botText.text = "status: done";
            }
            break;
        case 13:
            this.topText.text = "3x Platinum Trophies";
            this.midText.text = "won 3 trophies Platinum";
            if (registry.wonTrophyPlatinum < 2 || registry.wonTrophyPlatinum < "2") {
                this.botText.text = "status: available " + (parseInt(registry.wonTrophyPlatinum - 1)) + "/3";
            } else {
                this.botText.text = "status: done";
            }
            break;
    }
};