function PlayGame(game) {
    'use strict';
    this.game = game;
}

PlayGame.prototype.create = function () {
    'use strict';

    this.time_game_tmp = 0;
    registry.isShoot = false;
    registry.isGoal = false;
    registry.isOut = false;
    registry.isPost = false;
    registry.isDefender = false;
    registry.score = 0;
    registry.upperline = 0;
    registry.level = 0;
    
   
    this.postLCollide = false;
    this.postRCollide = false;

    this.auxGoalPost = 0;
    this.auxGoalDef = 0;
    this.auxGoalDefPost = 0;

    if (registry.won2Post === 1 || registry.won2Post === "1") {
        this.aux2Post = 251;
    } else {
        this.aux2Post = 0;
    }


    if (registry.wonPostGoal === 1 || registry.wonPostGoal === "1") {
        this.auxGP = 251;
    } else {
        this.auxGP = 0;
    }

    if (registry.wonDefGoal === 1 || registry.wonDefGoal === "1") {
        this.auxGD = 251;
    } else {
        this.auxGD = 0;
    }

    if (registry.wonPostDefGoal === 1 || registry.wonPostDefGoal === "1") {
        this.auxGPD = 251;
    } else {
        this.auxGPD = 0;
    }


    if (registry.wonPostGoal === 1 || registry.wonPostGoal === "1") {
        this.auxGP = 251;
    } else {
        this.auxGP = 0;
    }

    if (registry.won500Match === 1 || registry.won500Match === "1") {
        this.auxMatch = 251;
    } else {
        this.auxMatch = 0;
    }

    if (registry.won1000goal === 1 || registry.won1000goal === "1") {
        this.auxGoal = 251;
    } else {
        this.auxGoal = 0;
    }

    if (registry.won5000kick === 1 || registry.won5000kick === "1") {
        this.auxKick = 251;
    } else {
        this.auxKick = 0;
    }

    if (registry.won100money === 1 || registry.won100money === "1") {
        this.auxMoney = 251;
    } else {
        this.auxMoney = 0;
    }


    sky.create();
    bg.create();
    posts.create();
    coin.create();
    ball.create();
    def.create();

    this.hud();

    this.swipe = this.game.add.sprite(registry.width / 2 + 80, ball.ball.y, 'swipe');
    this.swipe.anchor.set(0.5);
    if (registry.chooseField === 8 || registry.chooseField === 6) {
        this.swipe.tint = 0xba5844;
    } else if (registry.chooseField === 5) {
        this.swipe.tint = 0xffeeea;
    } else {
        this.swipe.tint = 0xCFBF32;
    }
};


PlayGame.prototype.hud = function () {
    'use strict';

    var bmd = this.game.add.bitmapData(50, 50);
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, 50, 50);
    bmd.ctx.fillStyle = "black";
    bmd.ctx.fill();
    this.mask = this.game.add.sprite(0, 0, bmd);
    this.mask.width = registry.width;
    this.mask.height = registry.height;

    if (registry.hour >= 6 && registry.hour < 18) {
        this.mask.alpha = 0;
    } else {
        this.mask.alpha = 0.5;
    }



    this.scoreboard = this.game.add.sprite(0, 0, 'scoreboard');
    //this.scoreboard.width = registry.width;
    this.scoreboard.scale.set(0.85, 1);
    this.scoreboard.height = registry.height * 0.1;
    this.scoreboard.x = registry.width / 2;
    this.scoreboard.y = this.scoreboard.height / 2;
    this.scoreboard.anchor.set(0.5);


    this.ballScoreboard = this.game.add.sprite(registry.width * 0.15, this.scoreboard.height / 2 + 5, 'all-btns');
    this.ballScoreboard.animations.add('ball', [14], 10, false);
    this.ballScoreboard.animations.play('ball', 5, true);
    this.ballScoreboard.anchor.set(0.5);
    this.ballScoreboard.scale.set(0.75);

    this.textScore = this.game.add.text(this.ballScoreboard.x + this.ballScoreboard.width * 1.5, this.ballScoreboard.y, registry.score, { font: '32px scoreboard', fill: '#fff', align: "center" });
    this.textScore.anchor.set(0.5);

    this.textHiScore = this.game.add.text(this.ballScoreboard.x + this.ballScoreboard.width * 2.75, this.ballScoreboard.y, registry.hiScore, { font: '32px scoreboard', fill: '#ff0', align: "center" });
    this.textHiScore.anchor.set(0.5);

    this.crownScoreboard = this.game.add.sprite(this.ballScoreboard.x + this.ballScoreboard.width * 4.25, this.ballScoreboard.y, 'all-btns');
    this.crownScoreboard.anchor.set(0.5);
    this.crownScoreboard.animations.add('crown', [13], 10, false);
    this.crownScoreboard.animations.play('crown', 5, true);

    this.textMain = this.game.add.text(this.scoreboard.width / 2, this.scoreboard.height / 2 + 5, '', { font: '46px scoreboard', fill: '#ffffff', align: "center" });
    this.textMain.x = this.scoreboard.width / 2;
    this.textMain.anchor.set(0.5);
    this.textMain.alpha = 0;

    this.pauseScoreboard = this.game.add.sprite(registry.width - registry.width * 0.15, this.ballScoreboard.y, 'all-btns');
    this.pauseScoreboard.animations.add('pause', [1], 10, false);
    this.pauseScoreboard.animations.add('play', [0], 10, false);
    this.pauseScoreboard.animations.play('pause', 5, true);
    this.pauseScoreboard.anchor.set(0.5);
    this.pauseScoreboardClick = 0;
    this.pauseScoreboard.inputEnabled = true;
    this.pauseScoreboard.input.useHandCursor = true;

    this.money = this.game.add.sprite(this.pauseScoreboard.x - 130, this.pauseScoreboard.y, 'all-btns');
    this.money.animations.add('coinx', [12], 10, false);
    this.money.animations.play('coinx', 5, true);
    this.money.anchor.set(0.5);
    this.money.scale.set(0.75);

    this.textMoney = this.game.add.text(this.money.x + 25, this.money.y, registry.coins, { font: '40px scoreboard', fill: '#ff0', align: "center" });
    this.textMoney.anchor.set(0, 0.5);

    this.modal = this.game.add.sprite(registry.width / 2, registry.height / 2, 'painel');
    this.modal.anchor.set(0.5);
    this.modal.alpha = 0;

    this.pause = this.game.add.sprite(this.modal.x - this.modal.width / 2 + this.modal.width * 0.2, this.modal.y, 'all-btns');
    this.pause.animations.add('pause', [1], 10, false);
    this.pause.animations.add('play', [0], 10, false);
    this.pause.animations.play('play', 5, true);
    this.pause.anchor.set(0.5);
    this.pause.alpha = 0;
    this.pause.inputEnabled = true;
    this.pause.input.useHandCursor = true;

    this.soundBG = this.game.add.sprite(this.pause.x + this.pause.width * 1.5, this.modal.y, 'all-btns');
    this.soundBG.anchor.set(0.5);
    this.soundBG.scale.set(1.25);
    this.soundBG.alpha = 0;
    this.soundBG.animations.add('bgsf', [15], 10, false);
    this.soundBG.animations.add('bgsn', [16], 10, false);
    registry.soundBGClick = localStorage.getItem("sbgStatus") || 0;
    if (registry.soundBGClick === 1 || registry.soundBGClick === "1") {
        this.soundBG.animations.play('bgsn', 5, true);
        //sounds.setSounds();
    } else {
        this.soundBG.animations.play('bgsf', 5, true);
        //sounds.setSounds();
    }

    this.soundFX = this.game.add.sprite(this.soundBG.x + this.soundBG.width * 1.5, this.modal.y, 'all-btns');
    this.soundFX.anchor.set(0.5);
    this.soundFX.scale.set(1.25);
    this.soundFX.alpha = 0;
    this.soundFX.animations.add('fxsf', [17], 10, false);
    this.soundFX.animations.add('fxsn', [18], 10, false);
    registry.soundFXClick = localStorage.getItem("sfxStatus") || 0;
    if (registry.soundFXClick === 1 || registry.soundFXClick === "1") {
        this.soundFX.animations.play('fxsn', 5, true);
    } else {
        this.soundFX.animations.play('fxsf', 5, true);
    }

    this.vibrate = this.game.add.sprite(this.soundFX.x + this.soundFX.width * 1.5, this.modal.y, 'all-btns');
    this.vibrate.anchor.set(0.5);
    this.vibrate.scale.set(1.25);
    this.vibrate.alpha = 0;
    this.vibrate.animations.add('von', [19], 10, false);
    this.vibrate.animations.add('voff', [20], 10, false);
    registry.vibrateClick = localStorage.getItem("vStatus") || 0;
    if (registry.vibrateClick === 1 || registry.vibrateClick === "1") {
        this.vibrate.animations.play('voff', 5, true);
    } else {
        this.vibrate.animations.play('von', 5, true);
    }

    this.game.input.onDown.add(function (cursor) {

        if (cursor.x > this.pauseScoreboard.x - this.pauseScoreboard.width / 2 && cursor.x < this.pauseScoreboard.x + this.pauseScoreboard.width / 2 && cursor.y > this.pauseScoreboard.y - this.pauseScoreboard.height / 2 && cursor.y < this.pauseScoreboard.y + this.pauseScoreboard.height / 2) {

            this.game.paused = true;
            this.pauseScoreboard.y = -100;

            this.ballScoreboard.alpha = 0;
            this.textScore.alpha = 0;
            this.textHiScore.alpha = 0;
            this.crownScoreboard.alpha = 0;

            this.textMain.alpha = 1;
            this.textMain.text = 'PAUSED';
            this.textMain.addColor('#fff', 0);
            this.textMain.x = this.scoreboard.width / 2 - 50;

            this.pause.x = this.modal.x - this.modal.width / 2 + this.modal.width * 0.15;
            this.soundBG.x = this.pause.x + this.pause.width * 2;
            this.soundFX.x = this.soundBG.x + this.soundBG.width * 1.5;
            this.vibrate.x = this.soundFX.x + this.soundFX.width * 1.5;

            this.modal.alpha = 1;
            this.pause.alpha = 1;
            this.soundBG.alpha = 1;
            this.soundFX.alpha = 1;
            this.vibrate.alpha = 1;

            this.money.x = this.pauseScoreboard.x - 90;
            this.textMoney.x = this.money.x + 25;

        } else if (cursor.x > this.soundBG.x - this.soundBG.width / 2 && cursor.x < this.soundBG.x + this.soundBG.width / 2 && cursor.y > this.soundBG.y - this.soundBG.height / 2 && cursor.y < this.soundBG.y + this.soundBG.height / 2) {

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

        } else if (cursor.x > this.soundFX.x - this.soundFX.width / 2 && cursor.x < this.soundFX.x + this.soundFX.width / 2 && cursor.y > this.soundFX.y - this.soundFX.height / 2 && cursor.y < this.soundFX.y + this.soundFX.height / 2) {

            if (registry.soundFXClick === 0) {
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

        } else if (cursor.x > this.vibrate.x - this.vibrate.width / 2 && cursor.x < this.vibrate.x + this.vibrate.width / 2 && cursor.y > this.vibrate.y - this.vibrate.height / 2 && cursor.y < this.vibrate.y + this.vibrate.height / 2) {

            if (registry.vibrateClick === 0) {
                registry.vibrateClick = 1;
                localStorage.setItem("vStatus", registry.vibrateClick);
            } else {
                registry.vibrateClick = 0;
                localStorage.setItem("vStatus", registry.vibrateClick);
            }

            if (registry.vibrateClick === 1 || registry.vibrateClick === "1") {
                this.vibrate.animations.play('voff', 5, true);
            } else {
                this.vibrate.animations.play('von', 5, true);
            }

        } else if (cursor.x > this.pause.x - this.pause.width / 2 && cursor.x < this.pause.x + this.pause.width / 2 && cursor.y > this.pause.y - this.pause.height / 2 && cursor.y < this.pause.y + this.pause.height / 2) {

            this.game.paused = false;
            this.pauseScoreboard.y = this.ballScoreboard.y;

            this.ballScoreboard.alpha = 1;
            this.textScore.alpha = 1;
            this.textHiScore.alpha = 1;
            this.crownScoreboard.alpha = 1;

            this.textMain.x = this.scoreboard.width / 2;
            this.textMain.alpha = 0;

            this.pause.x = -100;
            this.soundBG.x = -100;
            this.soundFX.x = -100;
            this.vibrate.x = -100;

            this.modal.alpha = 0;
            this.pause.alpha = 0;
            this.soundBG.alpha = 0;
            this.soundFX.alpha = 0;
            this.vibrate.alpha = 0;


            this.money.x = this.pauseScoreboard.x - 130;
            this.textMoney.x = this.money.x + 25;
        }
    }, this);


    //this.won = this.game.add.button(this.pauseScoreboard.x, this.scoreboard.y + this.scoreboard.height, 'trophy-btns', this.WonAct, this);
    this.won = this.game.add.sprite(this.pauseScoreboard.x, this.scoreboard.y + this.scoreboard.height, 'trophy-btns');
    this.won.anchor.set(0.5);
    this.won.scale.set(0.75);
    this.won.alpha = 0;
    //this.won.inputEnabled = false;
    //this.won.input.useHandCursor = true;
    this.won.animations.add('wonGoalsON', [10], 10, false);
    this.won.animations.add('wonMatchesON', [11], 10, false);
    this.won.animations.add('wonKicksON', [12], 10, false);
    this.won.animations.add('wonGoalPostON', [13], 10, false);
    this.won.animations.add('wonGoalDefenderON', [14], 10, false);
    this.won.animations.add('wonGoalPostDefenderON', [15], 10, false);
    this.won.animations.add('wonBronzeON', [16], 10, false);
    this.won.animations.add('wonSilverON', [17], 10, false);
    this.won.animations.add('wonGoldON', [18], 10, false);
    this.won.animations.add('wonPlatinumON', [19], 10, false);
    this.won.animations.add('wonCoinsON', [21], 10, false);
    this.won.animations.add('won2PostsON', [23], 10, false);
    this.won.animations.play('wonGoalsON', 5, true);

};


PlayGame.prototype.update = function () {
    'use strict';
    ball.update();
    bg.update();
    posts.update();
    def.update();
    coin.update();

    if (registry.hour >= 6 && registry.hour < 18) {
        this.mask.alpha = 0;

    } else {
        this.mask.alpha = 0.5;
    }

    if (registry.hour >= 6 && registry.hour < 18) {
        sky.sky.tint = 0x63e2d8;
    } else {
        sky.sky.tint = 0x041f51;
    }

    //imagem de instruçao 
    if (!registry.isShoot && registry.score === 0) {
        if (this.swipe.y >= registry.height * 0.75) {
            this.swipe.y -= 1;
        } else {
            this.swipe.y = registry.height * 0.9;
        }
    } else {
        this.swipe.kill();
    }

    if (registry.isShoot) {
        if (ball.ball.y + ball.ball.height / 2 < bg.line.y - bg.line.height / 2) {
            if (ball.ball.x > bg.postL.x + bg.postL.width / 2 && ball.ball.x < bg.postR.x - bg.postR.width / 2 && ball.ball.y > bg.postT.y - bg.postT.height / 2) {
                registry.isGoal = true;
                registry.collisionBallGoal = true;
            }

            if (ball.ball.x <= bg.postL.x + bg.postL.width / 2 || ball.ball.x >= bg.postR.x - bg.postR.width / 2 || ball.ball.y <= bg.postT.y - bg.postT.height / 2) {
                registry.isOut = true;
            }
        } else {
            if (ball.ball.body.velocity.y > 0 && ball.ball.y > bg.line.y + bg.line.height * 2) {
                registry.isOut = true;
            }
        }

        if (ball.ball.x < 0 || ball.ball.x > registry.width || ball.ball.y < 0 || ball.ball.y > registry.height) {
            registry.isOut = true;
        }

        if (ball.ball.y >= bg.line.y - bg.line.height && ball.ball.y <= bg.line.y + bg.line.height) {
            registry.upperline += 1;
            if (registry.upperline > 100) {
                registry.isOut = true;
            }
        }
    }

    if (!registry.isGoal && !registry.isPost && !registry.isOut) {
        this.game.physics.arcade.collide(ball.ball, def.def0, this.defCollide, null, this);
        this.game.physics.arcade.collide(ball.ball, def.def1, this.defCollide, null, this);
        this.game.physics.arcade.collide(ball.ball, def.def2, this.defCollide, null, this);
        this.game.physics.arcade.collide(ball.ball, def.def3, this.defCollide, null, this);

    } else {
        this.game.physics.arcade.overlap(ball.ball, def.def0);
        this.game.physics.arcade.overlap(ball.ball, def.def1);
        this.game.physics.arcade.overlap(ball.ball, def.def2);
        this.game.physics.arcade.overlap(ball.ball, def.def3);
    }

    if (this.game.physics.arcade.collide(ball.ball, bg.postL, this.postCollide, null, this)) {
        console.log('postL collide');
        this.postLCollide = true;
    }
    if (this.game.physics.arcade.collide(ball.ball, bg.postR, this.postCollide, null, this)) {
        console.log('postR collide');
        this.postRCollide = true;
    }
    this.game.physics.arcade.collide(ball.ball, bg.postT);



    if (!registry.isGoal || !registry.isOut) {
        this.game.physics.arcade.overlap(ball.ball, bg.line);
    } else {
        this.game.physics.arcade.collide(ball.ball, bg.line);
    }

    if (this.game.physics.arcade.overlap(ball.ball, coin.coins, this.coinCollide, this.processHandler, this)) {
        console.log('coin');
    }

    if (registry.isGoal === true) {

        ball.ball.body.velocity.y = 0;
        ball.ball.body.velocity.x = 0;

        this.time_game_tmp += 1;

        if (this.time_game_tmp > 0) {
            this.ballScoreboard.alpha = 0;
            this.textScore.alpha = 0;
            this.textHiScore.alpha = 0;
            this.crownScoreboard.alpha = 0;

            this.money.alpha = 0;
            this.textMoney.alpha = 0;

            ball.ballMoveTimer = 0;

            this.textMain.alpha += this.time_game_tmp / 1000;
            if (registry.score !== registry.hiScore) {
                this.textMain.text = 'GOOOOOL';
                this.textMain.addColor('#' + ((0.5 + 0.5 * Math.random()) * 0xFFFFFF << 0).toString(16), 0);
                //this.textMain.addColor('#fff', 0);
            } else {
                this.textMain.text = 'NEW RECORD';
                this.textMain.addColor('#ff0', 0);
            }

            if (this.time_game_tmp === 90) {
                coin.coins.forEachAlive(function (coinx) {
                    coinx.kill();
                    registry.existsCoins = false;
                    registry.collectCoin = false;
                    registry.chanceCoin = 0;
                }, this);
            }

            if (this.time_game_tmp === 100) {
                registry.storiesGoals += 1;
                localStorage.setItem("storiesGoals", registry.storiesGoals);
                registry.isGoal = false;
                this.continue();
            }
        }
    }

    if (registry.isOut === true) {
        this.time_game_tmp += 1;

        if (this.time_game_tmp > 0) {
            this.ballScoreboard.alpha = 0;
            this.textScore.alpha = 0;
            this.textHiScore.alpha = 0;
            this.crownScoreboard.alpha = 0;

            this.money.alpha = 0;
            this.textMoney.alpha = 0;

            this.textMain.alpha += this.time_game_tmp / 1000;
            this.textMain.text = 'UHHHHHH';
            this.textMain.addColor('#f00', 0);

            registry.existsCoins = false;
            registry.collectCoin = false;
            registry.chanceCoin = 0;

            ball.ballMoveTimer = 0;

            registry.collisionBallDef = false;//T1
            registry.collisionBallPost = false; //T2
            registry.collisionBallGoal = false;//T3
            //registry.GoalPostDef = 0;//A
            //registry.GoalPost = 0;//B
            //registry.GoalDef = 0;//C
            this.postLCollide = false;
            this.postRCollide = false;
            this.auxGoalPost = 0;
            this.auxGoalDef = 0;
            this.auxGoalDefPost = 0;

            //sounds.setVibrate();

            if (this.time_game_tmp === 100) {

                if (registry.wonPostDefGoal === 1 && registry.wonDefGoal === 1 && registry.wonPostGoal === 1 && registry.won2Post === 1 || registry.wonPostDefGoal === "1" && registry.wonDefGoal === "1" && registry.wonPostGoal === "1" && registry.won2Post === "1") {
                    registry.wonPostGoal = 0;
                    localStorage.setItem("PostGoalWon", registry.wonPostGoal);
                    registry.wonDefGoal = 0;
                    localStorage.setItem("DefGoalWon", registry.wonDefGoal);
                    registry.wonPostDefGoal = 0;
                    localStorage.setItem("PostDefGoalWon", registry.wonPostDefGoal);
                }

                if (registry.score > registry.hiScore) {
                    registry.hiScore = registry.score;
                    localStorage.setItem("rankGoal", registry.hiScore);
                } else {
                    registry.hiScore = registry.hiScore;
                }

                registry.isOut = false;
                this.game.state.start('end');
            }
        }
    }

    if (registry.isOut === false && registry.isGoal === false) {

        this.ballScoreboard.alpha = 1;
        this.textScore.alpha = 1;
        this.textHiScore.alpha = 1;
        this.crownScoreboard.alpha = 1;

        this.money.alpha = 1;
        this.textMoney.alpha = 1;

        this.textMain.text = '';
        this.textMain.addColor('#fff', 0);
        this.textMain.alpha = 0;

        if (registry.score >= registry.hiScore + 1) {
            this.textScore.addColor('#ff0', 0);
            this.textHiScore.addColor('#f00', 0);
        } else {
            this.textScore.addColor('#fff', 0);
            this.textHiScore.addColor('#ff0', 0);
        }
    }

    //som
    if (this.time_game_tmp === 10) {
        //sounds.setEffects();
    }


    //20x poste + gol
    if (registry.collisionBallPost === true && registry.collisionBallGoal === true) {
        this.auxGoalPost += 1;

        if (this.auxGoalPost === 1) {
            registry.GoalPost += 1;
            localStorage.setItem("GoalPostAux", registry.GoalPost);
        }
    }

    if (registry.GoalPost === 20) {
        this.auxGP += 1;

        if (this.auxGP === 1) {
            registry.coins += 15;
            localStorage.setItem("coinsStatus", registry.coins);
            this.textMoney.text = registry.coins;
            this.won.alpha = 1;
            this.won.animations.play('wonGoalPostON', 5, true);
            //sounds.setVibrate();

        } else if (this.auxGP === 250) {
            this.won.alpha = 0;

        } else if (this.auxGP > 250) {
            this.auxGP = 251;
        }

        if (this.auxGP > 1 && this.auxGP < 250) {
            this.textMoney.addColor('#' + ((0.5 + 0.5 * Math.random()) * 0xFFFFFF << 0).toString(16), 0);
        } else {
            this.textMoney.addColor('#ff0', 0);
        }
    }

    if (registry.GoalPost >= 20) {
        registry.wonPostGoal = 1;
        localStorage.setItem("PostGoalWon", registry.wonPostGoal);
    }

    if (registry.collisionBallDef === true && registry.collisionBallGoal === true) {
        this.auxGoalDef += 1;

        if (this.auxGoalDef === 1) {
            registry.GoalDef += 1;
            localStorage.setItem("GoalDefAux", registry.GoalDef);
        }
    }

    //20x defesa + gol
    if (registry.GoalDef === 20) {
        this.auxGD += 1;

        if (this.auxGD === 1) {
            registry.coins += 15;
            localStorage.setItem("coinsStatus", registry.coins);
            this.textMoney.text = registry.coins;
            this.won.alpha = 1;
            this.won.animations.play('wonGoalDefenderON', 5, true);
            //sounds.setVibrate();

        } else if (this.auxGD === 250) {
            this.won.alpha = 0;

        } else if (this.auxGD > 250) {
            this.auxGD = 251;
        }

        if (this.auxGD > 1 && this.auxGD < 250) {
            this.textMoney.addColor('#' + ((0.5 + 0.5 * Math.random()) * 0xFFFFFF << 0).toString(16), 0);
        } else {
            this.textMoney.addColor('#ff0', 0);
        }
    }

    if (registry.GoalDef >= 20) {
        registry.wonDefGoal = 1;
        localStorage.setItem("DefGoalWon", registry.wonDefGoal);
        //sounds.setVibrate();
    }

    if (registry.collisionBallPost === true && registry.collisionBallDef === true && registry.collisionBallGoal === true) {
        this.auxGoalDefPost += 1;

        if (this.auxGoalDefPost === 1) {
            registry.GoalPostDef += 1;
            localStorage.setItem("GoalPostDefAux", registry.GoalPostDef);
        }
    }

    //10x defesa + poste + gol
    if (registry.GoalPostDef === 10) {
        this.auxGPD += 1;

        if (this.auxGPD === 1) {
            registry.coins += 20;
            localStorage.setItem("coinsStatus", registry.coins);
            this.textMoney.text = registry.coins;
            this.won.alpha = 1;
            this.won.animations.play('wonGoalPostDefenderON', 5, true);
            //sounds.setVibrate();

        } else if (this.auxGPD === 250) {
            this.won.alpha = 0;

        } else if (this.auxGPD > 250) {
            this.auxGPD = 251;
        }

        if (this.auxGPD > 1 && this.auxGPD < 250) {
            this.textMoney.addColor('#' + ((0.5 + 0.5 * Math.random()) * 0xFFFFFF << 0).toString(16), 0);
        } else {
            this.textMoney.addColor('#ff0', 0);
        }
    }

    if (registry.GoalPostDef >= 10) {
        registry.wonPostDefGoal = 1;
        localStorage.setItem("PostDefGoalWon", registry.wonPostDefGoal);
    }

    //10x 2 posts + gol
    if (this.postLCollide === true && this.postRCollide === true && registry.isGoal === true) {
        this.aux2Post += 1;

        if (this.aux2Post === 1) {
            registry.aux2Post += 1;
            localStorage.setItem("2PostAux", registry.aux2Post);

        } else if (this.aux2Post === 250) {
            this.won.alpha = 0;

        } else if (this.aux2Post > 250) {
            this.aux2Post = 251;
        }

        if (registry.aux2Post === 10) {
            registry.coins += 50;
            localStorage.setItem("coinsStatus", registry.coins);
            this.textMoney.text = registry.coins;
            this.won.alpha = 1;
            this.won.animations.play('won2PostsON', 5, true);
            //sounds.setVibrate();
            
            if (this.aux2Post > 1 && this.aux2Post < 250) {
                this.textMoney.addColor('#' + ((0.5 + 0.5 * Math.random()) * 0xFFFFFF << 0).toString(16), 0);
            } else {
                this.textMoney.addColor('#ff0', 0);
            }
        }

        
    }

    if (registry.aux2Post >= 10) {
        registry.won2Post = 1;
        localStorage.setItem("2PostWon", registry.won2Post);
    }

    //1000 gols
    if (registry.won1000goal === 1) {
        this.auxGoal += 1;

        if (this.auxGoal === 1) {
            registry.coins += 50;
            localStorage.setItem("coinsStatus", registry.coins);
            this.textMoney.text = registry.coins;
            this.won.alpha = 1;
            this.won.animations.play('wonGoalsON', 5, true);
            //sounds.setVibrate();

        } else if (this.auxGoal === 250) {
            this.won.alpha = 0;

        } else if (this.auxGoal > 250) {
            this.auxGoal = 251;
        }

        if (this.auxGoal > 1 && this.auxGoal < 250) {
            this.textMoney.addColor('#' + ((0.5 + 0.5 * Math.random()) * 0xFFFFFF << 0).toString(16), 0);
        } else {
            this.textMoney.addColor('#ff0', 0);
        }
    }

    //500 partidas
    if (registry.won500Match === 1) {
        this.auxMatch += 1;

        if (this.auxMatch === 1) {
            this.won.alpha = 1;
            registry.coins += 50;
            localStorage.setItem("coinsStatus", registry.coins);
            this.textMoney.text = registry.coins;
            this.won.animations.play('wonMatchesON', 5, true);
            //sounds.setVibrate();

        } else if (this.auxMatch === 250) {
            this.won.alpha = 0;

        } else if (this.auxMatch > 250) {
            this.auxMatch = 251;
        }

        if (this.auxMatch > 1 && this.auxMatch < 250) {
            this.textMoney.addColor('#' + ((0.5 + 0.5 * Math.random()) * 0xFFFFFF << 0).toString(16), 0);
        } else {
            this.textMoney.addColor('#ff0', 0);
        }
    }

    //5000 chutes
    if (registry.won5000kick === 1) {
        this.auxKick += 1;

        if (this.auxKick === 1) {
            this.won.alpha = 1;
            registry.coins += 50;
            localStorage.setItem("coinsStatus", registry.coins);
            this.textMoney.text = registry.coins;
            this.won.animations.play('wonKicksON', 5, true);
            //sounds.setVibrate();

        } else if (this.auxKick === 250) {
            this.won.alpha = 0;

        } else if (this.auxKick > 250) {
            this.auxKick = 251;
        }

        if (this.auxKick > 1 && this.auxKick < 250) {
            this.textMoney.addColor('#' + ((0.5 + 0.5 * Math.random()) * 0xFFFFFF << 0).toString(16), 0);
        } else {
            this.textMoney.addColor('#ff0', 0);
        }
    }

    //100 moedas em jogo
    if (registry.won100money === 1) {
        this.auxMoney += 1;

        if (this.auxMoney === 1) {
            this.won.alpha = 1;
            registry.coins += 50;
            localStorage.setItem("coinsStatus", registry.coins);
            this.textMoney.text = registry.coins;
            this.won.animations.play('wonCoinsON', 5, true);
            //sounds.setVibrate();

        } else if (this.auxMoney === 250) {
            this.won.alpha = 0;

        } else if (this.auxMoney > 250) {
            this.auxMoney = 251;
        }

        if (this.auxMoney > 1 && this.auxMoney < 250) {
            this.textMoney.addColor('#' + ((0.5 + 0.5 * Math.random()) * 0xFFFFFF << 0).toString(16), 0);
        } else {
            this.textMoney.addColor('#ff0', 0);
        }
    }

};



PlayGame.prototype.coinCollide = function (ball, coin) {
    'use strict';
    registry.existsCoins = false;
    registry.chanceCoin = 0;
    registry.collectCoin = true;

    coin.kill();

    registry.coins += 1;
    localStorage.setItem("coinsStatus", registry.coins);
    this.textMoney.text = registry.coins;

    if (registry.collectCoin === true) {
        if (registry.soundFXClick === 1 || registry.soundFXClick === "1") {
            //sounds.fxcoin.play('', 0, 0, false);
        } else {
            //sounds.fxcoin.play('', 0, 0.2, false);
        }
    }

    registry.storiesMoney += 1;
    localStorage.setItem("storiesMoney", registry.storiesMoney);

    if (registry.storiesMoney === 100 || registry.storiesMoney === "100") {
        registry.won100money = 1;
        localStorage.setItem("won100Moneyes", registry.won100money);
    }

};


PlayGame.prototype.postCollide = function (ball, post) {
    'use strict';
    if (!registry.isGoal && !registry.isOut) {
        if (ball.x < post.x - post.width / 2) {
            ball.body.velocity.x = this.game.rnd.integerInRange(-300, -30);
            ball.body.velocity.y = this.game.rnd.integerInRange(300, -300);
            registry.isPost = false;
        } else if (ball.x > post.x - post.width / 2) {
            ball.body.velocity.x = this.game.rnd.integerInRange(30, 300);
            ball.body.velocity.y = this.game.rnd.integerInRange(300, -300);
            registry.isPost = false;
        } else {
            ball.body.velocity.x = 0;
            ball.body.velocity.y = this.game.rnd.integerInRange(300, -300);
            registry.isPost = false;
        }
    }

    registry.collisionBallPost = true;
    registry.isPost = true;
    //sounds.setEffects();

};


PlayGame.prototype.defCollide = function (ball, def) {
    'use strict';

    registry.collisionBallDef = true;
    registry.isDefender = true;
    //sounds.setEffects();
};


PlayGame.prototype.continue = function () {
    'use strict';
    this.time_game_tmp = 0;

    registry.collisionBallDef = false;//T1
    registry.collisionBallPost = false; //T2
    registry.collisionBallGoal = false;//T3
    this.auxGoalPost = 0;
    this.auxGoalDef = 0;
    this.auxGoalDefPost = 0;
    this.postLCollide = false;
    this.postRCollide = false;

    registry.isShoot = false;
    registry.isGoal = false;
    registry.isOut = false;
    registry.isPost = false;
    registry.isDefender = false;
    registry.upperline = 0;
    registry.score = registry.score + 1;
    this.textScore.text = registry.score;


    //oficial levels
    if (registry.score === 0) {
        registry.level = 0;

    } else if (registry.score === 1) {
        registry.level = 1;

    } else if (registry.level <= 8 && registry.score > 1 && registry.score % 5 === 0 + 1) {
        registry.level += 1;

    } else if (registry.level > 8 && registry.score > 1 && registry.score % 8 === 0 + 1) {
        registry.level += 1;

    } else if (registry.level > 25) {
        if (registry.score % 8 === 0 + 1) {
            registry.level = this.game.rnd.integerInRange(5, 8);
        }
    }

    registry.collectCoin = false;
    registry.chanceCoin = this.game.rnd.integerInRange(0, 2);
    if (registry.chanceCoin == 1 && !registry.existsCoins) {
        coin.createCoins();
        registry.existsCoins = true;
    }

    if (registry.score === 1) {
        registry.storiesMatches += 1;
        localStorage.setItem("storiesMatches", registry.storiesMatches);
    }

    if (registry.storiesMatches === 500 || registry.storiesMatches === "500") {
        registry.won500Match = 1;
        localStorage.setItem("won500Matches", registry.won500Match);
    }

    if (registry.storiesGoals === 1000 || registry.storiesGoals === "1000") {
        registry.won1000goal = 1;
        localStorage.setItem("won1000Goales", registry.won1000goal);
    }

    this.levels();
}


PlayGame.prototype.levels = function () {
    'use strict';

    switch (registry.level) {
        case 0:
            ball.ballCase = 0;
            bg.postCase = 0;
            def.defenderCase = 0;
            break;

        case 1:
            ball.ballCase = 1;
            bg.postCase = 1;
            def.defenderCase = 0;
            break;

        case 2:
            ball.ballCase = 0;
            bg.postCase = 1;
            def.defenderCase = 0;
            break;

        case 3:
            ball.ballCase = 1;
            bg.postCase = 1;
            def.defenderCase = 0;
            break;

        case 4:
            ball.ballCase = 0;
            bg.postCase = 2;
            def.defenderCase = 0;
            break;

        case 5:
            ball.ballCase = 1;
            bg.postCase = 2;
            def.defenderCase = 0;
            break;

        case 6:
            ball.ballCase = 2;
            bg.postCase = 0;
            def.defenderCase = 0;
            break;

        case 7:
            ball.ballCase = 2;
            bg.postCase = 1;
            def.defenderCase = 0;
            break;

        case 8:
            ball.ballCase = 2;
            bg.postCase = 2;
            def.defenderCase = 0;
            break;

        case 9:
            ball.ballCase = 0;
            bg.postCase = 0;
            def.defenderCase = 1;
            break;

        case 10:
            ball.ballCase = 0;
            bg.postCase = 1;
            def.defenderCase = 1;
            break;

        case 11:
            ball.ballCase = 1;
            bg.postCase = 2;
            def.defenderCase = 1;
            break;

        case 12:
            ball.ballCase = 0;
            bg.postCase = 0;
            def.defenderCase = 2;
            break;

        case 13:
            ball.ballCase = 1;
            bg.postCase = 0;
            def.defenderCase = 2;
            break;

        case 14:
            ball.ballCase = 1;
            bg.postCase = 2;
            def.defenderCase = 2;
            break;

        case 15://hard
            ball.ballCase = 1;
            bg.postCase = 0;
            def.defenderCase = 3;
            break;

        case 16://hard
            ball.ballCase = 1;
            bg.postCase = 2;
            def.defenderCase = 3;
            break;

        case 17://hard
            ball.ballCase = 1;
            bg.postCase = 2;
            def.defenderCase = 4;
            break;

        case 18://hard
            ball.ballCase = 1;
            bg.postCase = 0;
            def.defenderCase = 5;
            break;

        case 19://hard
            ball.ballCase = 1;
            bg.postCase = 1;
            def.defenderCase = 6;
            break;

        case 20://hard
            ball.ballCase = 2;
            bg.postCase = 1;
            def.defenderCase = 7;
            break;

        case 21://hard
            ball.ballCase = 2;
            bg.postCase = 1;
            def.defenderCase = 8;
            break;

        case 22://hard
            ball.ballCase = 0;
            bg.postCase = 0;
            def.defenderCase = 9;
            break;

        case 23://hard
            ball.ballCase = 1;
            bg.postCase = 2;
            def.defenderCase = 9;
            break;

        case 24://hard
            ball.ballCase = 1;
            bg.postCase = 2;
            def.defenderCase = 10;
            break;

        case 23://hard
            ball.ballCase = this.game.rnd.integerInRange(0, 2);
            bg.postCase = this.game.rnd.integerInRange(0, 2);
            def.defenderCase = 11;
            break;

        default:
            ball.ballCase = 0;
            bg.postCase = 0;
            def.defenderCase = 0;
            break;
    }

    ball.levels();
    bg.levels();
    def.levels();
};