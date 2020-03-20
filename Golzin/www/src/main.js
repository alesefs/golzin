var game = new Phaser.Game(640, 980, Phaser.CANVAS, "game", this, false, true);//smooth, transparency BG, alias
//window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio
//scaleRatio = window.devicePixelRatio / 3;
//myAsset.scale.setTo(scaleRatio, scaleRatio);

var registry = new Register(game);
var bg = new Background(game);
var posts = new Posts(game);
var ball = new Ball(game);
var hud = new Hud(game);
var defender = new Defender(game);
var pause = new Pause(game);
var sound = new Sound(game);
var config = new Config(game);

var menu = new MainMenu(game);
var over = new GameOver(game);

var boot_state = {
    init: function () {
		this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = false;
		this.game.time.advancedTiming = true;
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
        this.game.scale.refresh();
        this.game.stage.smoothed = false;
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.canvas.id = 'myCanvas';

		//this.game.world.setBounds(0, 0, registry.width, registry.height);
        
    },
    
    preload: function() {
		this.load.image('preloaderBg', 'imgs/null.png');
		this.load.image('preloaderBar', 'imgs/full.png');
	},


	create: function() {
		this.game.state.start('preloader');
	}
};

var preloader_state = {
    preload: function() {
        this.game.stage.backgroundColor = "#013322";
        
		//loading
		this.preloadBg = this.add.sprite((this.game.world.centerX) - 150, (this.game.world.centerY) + 25, 'preloaderBg');
		this.preloadBg.anchor.setTo(0, 0);
		this.preloadBar = this.add.sprite((this.game.world.centerX) - 150, (this.game.world.centerY) + 25, 'preloaderBar');
		this.preloadBar.anchor.setTo(0, 0);
		this.game.load.setPreloadSprite(this.preloadBar);
        
		this.load.image('grid', 'imgs/minipost.png');
		this.load.image('logo', 'imgs/logo-in.png');
        this.load.image('hud', 'imgs/hud.png');
        this.load.image('swipe-fgr', 'imgs/swipe-finger.png');
        this.load.image('viish', 'imgs/viish.png');
        //this.load.spritesheet('soccerball', 'imgs/ball-sprite2.png', 61, 61, 32);
        //this.load.spritesheet('soccerball', 'imgs/ball-tester.png', 121, 121, 11);
        this.load.spritesheet('soccerball', 'imgs/ball-test2.png', 77, 77, 14);
        this.load.spritesheet('defender', 'imgs/defensor.png', 342, 328);
        this.load.spritesheet('btn-w', 'imgs/btn175x70--87.5x70.png', 87.5, 70, 16);
        this.load.spritesheet('btn-y', 'imgs/btn175x70--87.5x70.png', 175, 70, 8);
        
    },

	create: function() {
		this.game.state.start('menu');
	}
};

var menu_state = {
    create: function() {    
        menu.create();
    }
};


var config_state = {
    create: function() {    
        config.create();
    }
};

var game_state = {

	//init: function () {}, 
	//preload: function () {},
        
	create: function () {
        registry.create();
		bg.create();
		posts.create();
		defender.create();   
		ball.create();   
		hud.create();   
		sound.create();   
		pause.create();   
        
        this.levels();
	},

       
	update: function () {
        //if shoot register move ball
        if(registry.isShoot) {
            if(ball.ball.y + ball.ball.height/2 < posts.line.y - posts.line.height/2) {
                if(ball.ball.x > posts.postL.x + posts.postL.width/2 && ball.ball.x < posts.postR.x - posts.postR.width/2 && ball.ball.y > posts.postT.y - posts.postT.height/2) {
                    registry.isGoal = true;
                }
                
                if(ball.ball.x <= posts.postL.x + posts.postL.width/2 || ball.ball.x >= posts.postR.x - posts.postR.width/2 || ball.ball.y <= posts.postT.y - posts.postT.height/2) {
                    registry.isOut = true;
                }
            } else {
                if(ball.ball.body.velocity.y > 0) {
                    registry.isOut = true;
                }
            }
            
            if(ball.ball.x < 0 || ball.ball.x > registry.width || ball.ball.y < 0 || ball.ball.y > registry.height){
                registry.isOut = true;
            }
            
            //if(ball.ball.y >= posts.line.y - posts.line.height/2 && ball.ball.y + ball.ball.height < posts.line.y - posts.line.height/2) {
            if(ball.ball.y >= posts.line.y - posts.line.height && ball.ball.y <= posts.line.y + posts.line.height) {
                registry.upperline += 1;
                if(registry.upperline > 100){
                    registry.isOut = true;
                }
            }
        } 
        
        
        //ball in goal
        if(registry.isGoal) {
            this.game.physics.arcade.collide(ball.ball, posts.line);
            ball.ball.body.velocity.set(0);
            
            //posts.line.tint = 0x00ff44;
            
            registry.celebrateTimer += 1;
            if (registry.celebrateTimer == 1) {
                registry.goal = registry.goal + 1;
                //window.navigator.vibrate(1000); //vibrar
            }
            if(registry.celebrateTimer > 100){
                posts.line.tint = 0xffffff;
                this.continueGame();
            }
        }
        
        
        //ball for out
        if(registry.isOut) {
            this.game.physics.arcade.collide(ball.ball, posts.line);
            
            //posts.line.tint = 0xf00f44;
            
            registry.celebrateTimer += 1; //
            if (registry.celebrateTimer == 1) {
                navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
                if (navigator.vibrate) {
                    window.navigator.vibrate(200); //vibrar
                } else {
                    //value += 1;
                    registry.dex += 1;
                    window.external.notify("dex," + registry.dex);
                }
            }
            if(registry.celebrateTimer > 100){
                //ranking official
                if (registry.goal >= registry.hiScore){
                    //localStorage.setItem("rankGoal", registry.goal);
                    sessionStorage.setItem("rankGoal", registry.goal);
                } else {
                    //localStorage.setItem("rankGoal", registry.hiScore);
                    sessionStorage.setItem("rankGoal", registry.hiScore);
                }
                //hud.txtHiScore.setText(localStorage.getItem("rankGoal"));
                //hud.txtHiScore.setText(sessionStorage.getItem("rankGoal"));
                
                this.endGame();
            }
        }
        
        
        //collide ball x line
        if(!registry.isGoal || !registry.isOut) {
            this.game.physics.arcade.overlap(ball.ball, posts.line);
        }
        
        if(!registry.isOut){
            this.game.physics.arcade.collide(ball.ball, defender.defender3);
            this.game.physics.arcade.collide(ball.ball, defender.defender4);
            this.game.physics.arcade.collide(ball.ball, defender.defender5);
        } else {
            this.game.physics.arcade.overlap(ball.ball, defender.defender3);
            this.game.physics.arcade.overlap(ball.ball, defender.defender4);
            this.game.physics.arcade.overlap(ball.ball, defender.defender5);
        }
        
        
        //collide ball x posts
		this.game.physics.arcade.collide(ball.ball, posts.postL, this.postCollide, null, this);
        this.game.physics.arcade.collide(ball.ball, posts.postR, this.postCollide, null, this);
        this.game.physics.arcade.collide(ball.ball, posts.postT);
                
        //update objects
		posts.update();
        defender.update();
		ball.update();
		hud.update();
    
	},
    
    
    postCollide: function (ball, post) {
        if(ball.y + ball.height/2 > ((registry.height/100)*20) + posts.postHeight*0.25) {
            if(ball.x < post.x - post.width/2) {
                ball.body.velocity.x = this.game.rnd.integerInRange(-300, -30);
                ball.body.velocity.y = this.game.rnd.integerInRange(300, -300);
            } else if (ball.x > post.x - post.width/2) {
                ball.body.velocity.x = this.game.rnd.integerInRange(30, 300);
                ball.body.velocity.y = this.game.rnd.integerInRange(300, -300);
            } else {
                ball.body.velocity.x = 0;
                ball.body.velocity.y = this.game.rnd.integerInRange(300, -300);
            }
        } 
    },

       
    //if goal
    continueGame: function () {
        registry.isShoot = false;
        registry.isGoal = false;
        //registry.goal = registry.goal;
        registry.upperline = 0;
        registry.celebrateTimer = 0;
            
        
        //oficial levels
        if(registry.goal == 0){
            registry.level = 0;
        } else if(registry.goal == 1){
            registry.level = 1;
        } else if(registry.goal > 1 && registry.goal % 3 == 0 + 1) {
            if(registry.level > registry.maxLevel - 1){
                registry.level = this.game.rnd.integerInRange(registry.minLevel, registry.maxLevel);
            } else {
                registry.level += 1;
            }
        }
        
        this.levels();             
    },
    
    
    //if out
    endGame: function () {
        this.game.state.start('gameOver');//gameover

    },
    
    
    //levels for game
    levels: function () {
        switch(registry.level){
            case 0:
                posts.postCase = 0;
                ball.ballCase = 0;
                defender.defenderScenes = 0;
                break;
                
            case 1:
                posts.postCase = 0;
                ball.ballCase = 1;
                defender.defenderScenes = 0;
                break;
                
            case 2:
                posts.postCase = 1;
                ball.ballCase = 1;
                defender.defenderScenes = 0;
                break;
                
            case 3:
                posts.postCase = 2;
                ball.ballCase = 1;
                defender.defenderScenes = 0;
                break;
                
            case 4:
                posts.postCase = 1;
                ball.ballCase = 2;
                defender.defenderScenes = 0;
                break;
                
            case 5:
                posts.postCase = 2;
                ball.ballCase = 2;
                defender.defenderScenes = 2;
                break;
                
            case 6:
                posts.postCase = 0;
                ball.ballCase = 0;
                defender.defenderScenes = 1;
                break;
            
            case 7:
                posts.postCase = 1;
                ball.ballCase = 1;
                defender.defenderScenes = 1;
                break;
            
            case 8:
                posts.postCase = 2;
                ball.ballCase = 1;
                defender.defenderScenes = 3;
                break;
                
            case 9:
                posts.postCase = 1;
                ball.ballCase = 2;
                defender.defenderScenes = 4;
                break;
                
            case 10:
                posts.postCase = 2;
                ball.ballCase = 2;
                defender.defenderScenes = 5;
                break;
            
            case 11:
                posts.postCase = 0;
                ball.ballCase = 0;
                defender.defenderScenes = 6;
                break;
                
            default:
                break;
        }
        
        posts.levels();
        defender.scenes();
        ball.levels();
    },
    
    
    //test render
	render: function () {
        //this.game.debug.body(ball.ball, 'rgba(255, 0, 50, 0.25', true);
        //this.game.debug.body(posts.postL, 'white', true);//'rgba(255, 0, 50, 0.25', true);
        //this.game.debug.body(posts.postT, 'white', true);//'rgba(255, 0, 50, 0.25', true);
        //this.game.debug.body(posts.postR, 'white', true);//'rgba(255, 0, 50, 0.25', true);
		//this.game.debug.spriteInfo(ball.ball, 50, 32);
        
		//this.game.debug.text("GOAL: " + registry.goal + " LVL: " + registry.level, 10, ((registry.height/100)*90) + 30, "#fff");
		//this.game.debug.text("HI-SCORE: " + registry.hiScore, 10, ((registry.height/100)*90) + 50, "#fff");
        
		this.game.debug.text("FPS: " + this.game.time.fps || '--', this.game.world.width - 100, ((registry.height/100)*90) + 30, "#00ff00");
        
        //this.game.debug.text("Vx: " + ball.ball.body.velocity.x + " Vy: " + ball.ball.body.velocity.y, 10, ((registry.height/100)*90) + 50, "#fff");
	}
    
};

var over_state = {
    create: function() { 
        bg.create();
        posts.create();
        over.create();
    }
};

this.game.state.add('boot', boot_state); 
this.game.state.add('preloader', preloader_state); 
this.game.state.add('menu', menu_state); 
this.game.state.add('config', config_state); 
this.game.state.add('inGame', game_state); 
this.game.state.add('gameOver', over_state); 
this.game.state.start('boot');