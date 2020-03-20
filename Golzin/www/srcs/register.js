function Register(game) {
    'use strict';
    this.game = game;
}

Register.prototype.create = function () {
    'use strict';
    this.width = this.game.world.width;
    this.height = this.game.world.height;
    
    this.soundBGClick = parseInt(localStorage.getItem("sbgStatus") || 0);
    this.soundFXClick = parseInt(localStorage.getItem("sfxStatus") || 0);
    this.vibrateClick = parseInt(localStorage.getItem("vStatus") || 0);
    
    this.score = 0;
    this.hiScore = parseInt(localStorage.getItem("rankGoal") || 0);
    this.rankLastScore = parseInt(localStorage.getItem("SrankGoal") || 0);
    this.level = 0;
    this.storiesGoals = parseInt(localStorage.getItem("storiesGoals") || 0);
    this.storiesMatches = parseInt(localStorage.getItem("storiesMatches") || 0);
    this.storiesShots = parseInt(localStorage.getItem("storiesShots") || 0);
    
    this.storiesMoney = parseInt(localStorage.getItem("storiesMoney") || 0);
    //this.minLevel = 0;
    //this.maxLevel = 11;
    
    this.wonTrophyBronze = parseInt(localStorage.getItem("BronzeWon") || 0);
    this.wonTrophySilver = parseInt(localStorage.getItem("SilverWon") || 0);
    this.wonTrophyGold = parseInt(localStorage.getItem("GoldWon") || 0);
    this.wonTrophyPlatinum = parseInt(localStorage.getItem("PlatinumWon") || 0);
    
    this.collisionBallDef = false;//T1
    this.collisionBallPost = false; //T2
    this.collisionBallGoal = false;//T3
    this.GoalPostDef = parseInt(localStorage.getItem("GoalPostDefAux") || 0);//A
    this.GoalPost = parseInt(localStorage.getItem("GoalPostAux") || 0);//B
    this.GoalDef = parseInt(localStorage.getItem("GoalDefAux") || 0);//C
    this.aux2Post = parseInt(localStorage.getItem("2PostAux") || 0);//D

    this.wonPostGoal = parseInt(localStorage.getItem("PostGoalWon") || 0);
    this.wonDefGoal = parseInt(localStorage.getItem("DefGoalWon") || 0);
    this.wonPostDefGoal = parseInt(localStorage.getItem("PostDefGoalWon") || 0);
    this.won2Post = parseInt(localStorage.getItem("2PostWon") || 0);


    this.won500Match = parseInt(localStorage.getItem("won500Matches") || 0);
    this.won1000goal = parseInt(localStorage.getItem("won1000Goales") || 0);
    this.won5000kick = parseInt(localStorage.getItem("won5000Kickes") || 0);
    this.won100money = parseInt(localStorage.getItem("won100Moneyes") || 0);
    
    this.upperline = 0;
    this.isShoot = false;
    this.isGoal = false;
    this.isOut = false;
    this.isPost = false;
    this.isDefender = false;
    
    this.auxHud = 0;
    this.wonCase = 0;
    
    this.chanceCoin = 0;
    this.existsCoins = false;
    this.collectCoin = false;
        
    this.coins = parseInt(localStorage.getItem("coinsStatus") || 0);
    
    this.chooseBall = parseInt(localStorage.getItem("ballStatus") || 0);
    this.actualBall = parseInt(localStorage.getItem("ballActual") || 0);
    
    this.chooseField = parseInt(localStorage.getItem("fieldStatus") || 0);
    this.actualField = parseInt(localStorage.getItem("fieldActual") || 0);
    
    this.chooseDef = parseInt(localStorage.getItem("defStatus") || 0);
    this.actualDef = parseInt(localStorage.getItem("defActual") || 0);
    
    this.choosePost = parseInt(localStorage.getItem("postStatus") || 0);
    this.actualPost = parseInt(localStorage.getItem("postActual") || 0);
};

Register.prototype.time = function () {
    'use strict';
    this.data = new Date();
    this.hour = this.data.getHours();
    this.mins = this.data.getMinutes();
    this.secs = this.data.getSeconds();
}