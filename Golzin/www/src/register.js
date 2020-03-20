function Register(game){
    this.game = game;
}

Register.prototype.create = function () {
    this.width = this.game.world.width;
    this.height = this.game.world.height;
    this.isShoot = false;
    this.isGoal = false;
    this.isOut = false;
    this.goal = 0;
    //this.hiScore = localStorage.getItem("rankGoal") || 0;//release
    this.hiScore = sessionStorage.getItem("rankGoal") || 0;//tests
    this.nullScore = 0;
    this.historyGoals = 0;
    this.level = 0;
    this.upperline = 0;
    this.celebrateTimer = 0;

    this.dex = 0;
    
    this.minLevel = 0;
    this.maxLevel = 11;
    
    this.onSound = sessionStorage.getItem("soundStorage0") || true;
    this.numSound = sessionStorage.getItem("soundStorage") || 0;
}


Register.prototype.getRegister = function() {
    return this.registry;
}
