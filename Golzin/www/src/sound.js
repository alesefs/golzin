function Sound(game){
    this.game = game;
}

Sound.prototype.create = function () {
    var registry = new Register(game);
	registry.create();
    
    this.soundOn = this.game.add.sprite(this.game.world.width - 100, 10, 'btn-w');
    this.soundOn.inputEnabled = true;
    this.soundOn.input.useHandCursor = true;
    this.soundOn.animations.add('onSound', [4], 10, false);     
    this.soundOn.animations.add('offSound', [5], 10, false);     
    this.soundOn.events.onInputDown.add(this.sounder, this);
    
    if(registry.onSound && registry.numSound == 0){
        this.soundOn.animations.play('onSound', 5, true);
    } else {
        this.soundOn.animations.play('offSound', 5, true);
    }
    
}

Sound.prototype.sounder = function () {
    registry.numSound += 1;
    
    if(registry.numSound > 1) {
        registry.numSound = 0;
    } else if (registry.numSound < 0){
        registry.numSound = 1
    }
    
    if(registry.numSound % 2 == 0) {
        registry.onSound = true;
        sessionStorage.setItem("soundStorage0", registry.onSound); 
        
        registry.numSound = 0;
        sessionStorage.setItem("soundStorage", registry.numSound); 
    } else {
        registry.onSound = false;
        sessionStorage.setItem("soundStorage0", registry.onSound);
        
        registry.numSound = 1;
        sessionStorage.setItem("soundStorage", registry.numSound); 
    }
    
    if(registry.onSound){
        this.soundOn.animations.play('onSound', 5, true);
    } else {
        this.soundOn.animations.play('offSound', 5, true);
    }
}