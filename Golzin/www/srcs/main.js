//var game = new Phaser.Game("100%", "100%", Phaser.CANVAS, "game", this, false, true);
var game = new Phaser.Game(540, 960, Phaser.CANVAS, "game", true, false, true);
//var game = new Phaser.Game(Math.ceil(480*window.innerWidth/window.innerHeight), 480, Phaser.CANVAS, "game", this, false, true);

var registry = new Register(game);
//var sounds = new Sounds(game);
var sky = new Sky(game);
var bg = new Background(game);
var posts = new Posts(game);
var def = new Def(game);
var ball = new Ball(game);
var menu = new MainMenu(game);
var inGame = new PlayGame(game);
var shop = new Shop(game);
var trophy = new Trophy(game);
var gameover = new GameOver(game);

var ballItens = new ballStoreItens(game);
var fieldItens = new fieldStoreItens(game);
var postItens = new postStoreItens(game);
var defItens = new defStoreItens(game);
var coin = new Coin(game);


//boot
var boot_state = {

    init: function () {
        'use strict';
        //this.game.load.crossOrigin = "anonymous";
        //this.game.load.crossOrigin = "*";
        this.game.stage.backgroundColor = "#013322";
        this.input.maxPointers = 2;
        this.stage.disableVisibilityChange = false;
        this.game.time.advancedTiming = true;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        //NO_SCALE//EXACT_FIT;//SHOW_ALL;//EXACT_FIT;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.game.scale.refresh();
        this.game.stage.smoothed = false;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.canvas.id = 'myCanvas';

        if (this.game.device.desktop || this.game.device.android || this.game.device.iOS) {
            document.querySelector("[name=theme-color]").content = '#013322';
            
        } else {
            document.querySelector("[name=theme-color]").content = '#013322';
            document.querySelector("[name=msapplication-TileColor]").content = '#013322';
            document.querySelector("[name=msapplication-navbutton-color]").content = '#013322';
        }
    },

    preload: function () {
        'use strict';
        this.game.load.image('preloaderBg', 'imgs/painelB.png');
        this.game.load.image('preloaderBar', 'imgs/l-full2.png');
    },


    create: function () {
        'use strict';
        this.game.state.start('preload');
    }
};


//preload
var preload_state = {

    preload: function () {
        'use strict';
        this.game.stage.backgroundColor = "#000";
        if (this.game.device.desktop || this.game.device.android || this.game.device.iOS) {
            document.querySelector("[name=theme-color]").content = '#000000';
            
        } else {
            document.querySelector("[name=theme-color]").content = '#000000';
            document.querySelector("[name=msapplication-TileColor]").content = '#000000';
            document.querySelector("[name=msapplication-navbutton-color]").content = '#000000';
        }
        this.ready = false;

        //loading bg
        this.preloadBg = this.game.add.sprite((this.game.world.centerX), (this.game.world.centerY), 'preloaderBg');
        this.preloadBg.anchor.set(0.5);
        this.preloadBg.scale.set(1.25, 1.3);

        //show progress bar
        this.progressBar = this.game.add.sprite(this.game.world.centerX - 210, this.preloadBg.y - 25, 'preloaderBar');
        this.progressBar.anchor.set(0);
        this.progressBar.scale.set(1.25);
        this.game.load.setPreloadSprite(this.progressBar, 0);
        this.game.load.onFileComplete.add(this.fileComplete, this);

        //show percentage
        this.progress = this.game.add.text(this.preloadBg.x + 170, this.preloadBg.y + 50, '0%', { font: '30px scoreboard', fill: 'white' }); this.progress.anchor.set(.5);

        //loading text
        this.loadTxt = this.game.add.text(this.preloadBg.x, this.preloadBg.y - 75, 'loading', { font: '50px scoreboard', fill: 'white' }); this.loadTxt.anchor.set(.5);


        this.game.load.image('viish', 'imgs/viish0.png');
        this.game.load.image('logo', 'imgs/logo.png');
        this.game.load.image('painel', 'imgs/painelB.png');
        this.game.load.image('scoreboard', 'imgs/painel-1.png');
        this.game.load.image('swipe', 'imgs/swipe.png');

        this.game.load.spritesheet('shop-btns', 'imgs/shop-btns.png', 105, 60, 8);
        this.game.load.spritesheet('all-btns', 'imgs/btns-all.png', 48, 48, 30);
        this.game.load.spritesheet('itens-balls', 'imgs/buy-ball-itens.png', 106, 119, 33);
        this.game.load.spritesheet('itens-field', 'imgs/buy-field-itens.png', 106, 119, 30);
        this.game.load.spritesheet('itens-post', 'imgs/buy-posts-itens.png', 106, 119, 27);
        this.game.load.spritesheet('itens-def', 'imgs/buy-def-itens.png', 106, 119, 30);
        this.game.load.spritesheet('ballz', 'imgs/ball-s.png', 80, 80, 11);
        this.game.load.spritesheet('balls', 'imgs/balls_light.png', 80, 80, 11);
        this.game.load.spritesheet('grass', 'imgs/field.png', 50, 50, 11);
        this.game.load.spritesheet('defs', 'imgs/defender.png', 111, 200, 120);
        this.game.load.spritesheet('posts', 'imgs/posts.png', 310, 196, 9);
        this.game.load.spritesheet('ext-coins', 'imgs/ext-coinz.png', 140, 60, 7);
        this.game.load.spritesheet('trophy-btns', 'imgs/trophy-btns.png', 106, 119, 30);

        /*
        if (this.game.device.android) {
            var context;
            try {
                window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext;
                context = new window.AudioContext();

                this.game.load.audio('bg_crowd', 'snds/bg_crowd.mp3', true);
                this.game.load.audio('fx_goal', 'snds/fx_goal.mp3', true);
                this.game.load.audio('fx_out', 'snds/fx_out.mp3', true);
                this.game.load.audio('fx_shoot', 'snds/fx_shoot.mp3', true);
                this.game.load.audio('fx_post', 'snds/fx_post.mp3', true);
                this.game.load.audio('fx_defender', 'snds/fx_defender.mp3', true);
                this.game.load.audio('fx_coin', 'snds/fx_coin.mp3', true);
                console.log('local');

            } catch (e) {
                this.game.load.audio('bg_crowd', '/sdcard/Golzin/Sounds/bg_crowd.mp3', true);
                this.game.load.audio('fx_goal', '/sdcard/Golzin/Sounds/fx_goal.mp3', true);
                this.game.load.audio('fx_out', '/sdcard/Golzin/Sounds/fx_out.mp3', true);
                this.game.load.audio('fx_shoot', '/sdcard/Golzin/Sounds/fx_shoot.mp3', true);
                this.game.load.audio('fx_post', '/sdcard/Golzin/Sounds/fx_post.mp3', true);
                this.game.load.audio('fx_defender', '/sdcard/Golzin/Sounds/fx_defender.mp3', true);
                this.game.load.audio('fx_coin', '/sdcard/Golzin/Sounds/fx_coin.mp3', true);
                console.log('sdcard');
            }

        } else {
            this.game.load.audio('bg_crowd', 'snds/bg_crowd.mp3', true);
            this.game.load.audio('fx_goal', 'snds/fx_goal.mp3', true);
            this.game.load.audio('fx_out', 'snds/fx_out.mp3', true);
            this.game.load.audio('fx_shoot', 'snds/fx_shoot.mp3', true);
            this.game.load.audio('fx_post', 'snds/fx_post.mp3', true);
            this.game.load.audio('fx_defender', 'snds/fx_defender.mp3', true);
            this.game.load.audio('fx_coin', 'snds/fx_coin.mp3', true);
        }
        */

        this.game.load.start();
    },

    fileComplete: function (progress, cacheKey, success, totalLoaded, totalFiles) {
        'use strict';
        this.progress.text = progress + "%";
    },

    create: function () {
        'use strict';
        registry.create();
        //sounds.create();
        this.timeLoad = 0;
        this.stak = 0;

        this.playz = this.game.add.button(this.preloadBg.x - 25, this.preloadBg.y + 20, 'all-btns', this.playAct, this);
        this.playz.animations.add('play', [0], 10, false);
        this.playz.animations.play('pause', 5, true);
        this.playz.anchor.set(0.5);
        this.playz.scale.set(1.25);
        this.playz.alpha = 0;
        this.playz.inputEnabled = false;
        this.playz.input.useHandCursor = false;

        this.temp();
        this.game.time.events.loop(Phaser.Timer.SECOND, this.temp, this);
    },

    temp: function () {
        'use strict';
        registry.time();
    },

    update: function () {
        'use strict';
        if (!this.ready) {
            if (/*this.game.cache.isSoundDecoded('bg_crowd') &&
                this.game.cache.isSoundDecoded('fx_goal') &&
                this.game.cache.isSoundDecoded('fx_out') &&
                this.game.cache.isSoundDecoded('fx_shoot') &&
                this.game.cache.isSoundDecoded('fx_post') &&
                this.game.cache.isSoundDecoded('fx_defender') &&
                this.game.cache.isSoundDecoded('fx_coin') &&*/
                this.game.cache.checkImageKey('viish') &&
                this.game.cache.checkImageKey('logo') &&
                this.game.cache.checkImageKey('painel') &&
                this.game.cache.checkImageKey('scoreboard') &&
                this.game.cache.checkImageKey('shop-btns') &&
                this.game.cache.checkImageKey('all-btns') &&
                this.game.cache.checkImageKey('itens-balls') &&
                this.game.cache.checkImageKey('itens-field') &&
                this.game.cache.checkImageKey('itens-post') &&
                this.game.cache.checkImageKey('itens-def') &&
                this.game.cache.checkImageKey('balls') &&
                this.game.cache.checkImageKey('grass') &&
                this.game.cache.checkImageKey('posts') &&
                this.game.cache.checkImageKey('defs')) {

                this.ready = true;
            }

        } else {

            this.stak += 1;
            this.playz.alpha = 1;
            this.progressBar.alpha = 0;
            this.progress.alpha = 0;
            this.loadTxt.text = "press play";

            if (this.stak <= 100) {
                this.playz.x += 0.5;

            } else if (this.stak <= 200) {
                this.playz.x -= 0.5;

            } else {
                this.stak = 0;
            }

            this.playz.inputEnabled = true;
            this.playz.input.useHandCursor = true;
        }

    },

    playAct: function () {
        'use strict';
        //sounds.fxgoal.play('', 0, 0.2, false);
        this.game.state.start('menu');
    },

    render: function () {
        'use strict';
    }
};


//menu
var menu_state = {

    create: function () {
        'use strict';
        menu.create();
        this.temp();
        this.game.time.events.loop(Phaser.Timer.SECOND, this.temp, this);

        $(".banner").show();
        $(".interstitial").hide();
        $("#closebuttonPainel").hide();
    },

    temp: function () {
        'use strict';
        registry.time();
    },

    update: function () {
        'use strict';
        menu.update();

    },

    render: function () {
        'use strict';
    }
};


//game
var game_state = {

    init: function () {
        'use strict';
    },

    create: function () {
        'use strict';
        inGame.create();

        this.temp();
        this.game.time.events.loop(Phaser.Timer.SECOND, this.temp, this);
    },

    temp: function () {
        'use strict';
        registry.time();
    },

    update: function () {
        'use strict';
        inGame.update();
    },

    render: function () {
        'use strict';
        /*var dataDefenderCase = [
            def.def0.defenderCase,
            def.def1.defenderCase,
            def.def2.defenderCase,
            def.def3.defenderCase
        ];
        for (var i = 0; i < dataDefenderCase.length; i++) {
            game.debug.text("def"+i+": " + dataDefenderCase[i], 15, 60+(i*50), "#00ff00");
        }
        
        var dataBallCase = new Array(def.def0.defenderCase,
                                     def.def1.defenderCase,
                                     def.def2.defenderCase,
                                     def.def3.defenderCase);
        for (var i = 0; i < dataBallCase.length; i++) {
            game.debug.text("def"+i+": " + dataBallCase[i], 250, 60+(i*50), "#00ff00");
        }*/
    }
};


//game over
var end_state = {

    create: function () {
        'use strict';


        sky.create();
        bg.create();
        posts.create();
        gameover.create();
        this.temp();
        this.game.time.events.loop(Phaser.Timer.SECOND, this.temp, this);

        this.auxnumads = 0;
        this.auxADS = 0;


    },

    update: function () {
        'use strict';
        gameover.update();

        this.auxnumads += 1;
        if (this.auxnumads === 1) {
            this.auxADS = this.game.rnd.integerInRange(0, 2);
            if (this.auxADS === 0) {
                $(".banner").hide();
                $(".interstitial").show();
                $("#closebuttonPainel").show();

                $("#closebuttonPainel").click(function () {
                    $(".banner").show();
                    $(".interstitial").hide();
                    $("#closebuttonPainel").hide();
                });
            }
        }
    },

    temp: function () {
        'use strict';
        registry.time();
    },

    render: function () {
        'use strict';
    }
};


//shop
var shop_state = {

    create: function () {
        'use strict';

        sky.create();
        bg.create();
        def.create();
        posts.create();
        ball.create();
        shop.create();

        this.temp();
        this.game.time.events.loop(Phaser.Timer.SECOND, this.temp, this);
    },

    temp: function () {
        'use strict';
        registry.time();
    },

    update: function () {
        'use strict';
        shop.update();
    },

    render: function () {
        'use strict';
    }
};


//trophy room
var trophy_state = {

    create: function () {
        'use strict';

        sky.create();
        bg.create();
        posts.create();
        trophy.create();

        this.temp();
        this.game.time.events.loop(Phaser.Timer.SECOND, this.temp, this);
    },

    temp: function () {
        'use strict';
        registry.time();
    },

    update: function () {
        'use strict';
        trophy.update();
    },

    render: function () {
        'use strict';
    }
};



this.game.state.add('boot', boot_state);
this.game.state.add('preload', preload_state);
this.game.state.add('menu', menu_state);
this.game.state.add('shop', shop_state);
this.game.state.add('game', game_state);
this.game.state.add('end', end_state);
this.game.state.add('trophy', trophy_state);
this.game.state.start('boot');
