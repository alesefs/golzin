function Def(game) {
    'use strict';
    this.game = game;
}

Def.prototype.create = function () {
    'use strict';
    
    this.defenderCase = 0;
    //def.y -> 3[0.25, 0.425, 60]; def.y -> 4[0.25, 0.366, 0.482, 0.6];
    
    this.def0 = this.game.add.sprite(-200, -200, 'defs');
    this.def0.animations.add('def0-0-idle', [0], 10, false);
    this.def0.animations.add('def0-0-walk', [0, 1, 2, 1], 10, false);
    this.def0.animations.add('def0-1-idle', [12], 10, false);
    this.def0.animations.add('def0-1-walk', [12, 13, 14, 13], 10, false);
    this.def0.animations.add('def0-2-idle', [24], 10, false);
    this.def0.animations.add('def0-2-walk', [24, 25, 26, 25], 10, false);
    this.def0.animations.add('def0-3-idle', [36], 10, false);
    this.def0.animations.add('def0-3-walk', [36, 37, 38, 37], 10, false);
    this.def0.animations.add('def0-4-idle', [48], 10, false);
    this.def0.animations.add('def0-4-walk', [48, 49, 50, 49], 10, false);
    this.def0.animations.add('def0-5-idle', [60], 10, false);
    this.def0.animations.add('def0-5-walk', [60, 61, 62, 61], 10, false);
    this.def0.animations.add('def0-6-idle', [72], 10, false);
    this.def0.animations.add('def0-6-walk', [72, 73, 74, 73], 10, false);
    this.def0.animations.add('def0-7-idle', [84], 10, false);
    this.def0.animations.add('def0-7-walk', [84, 85, 86, 85], 10, false);
    this.def0.animations.add('def0-8-idle', [96], 10, false);
    this.def0.animations.add('def0-8-walk', [96, 97, 98, 97], 10, false);
    this.def0.animations.add('def0-9-idle', [108], 10, false);
    this.def0.animations.add('def0-9-idle', [108, 109, 110, 109], 10, false);
    this.def0.anchor.set(0.5);
    this.def0.scale.set(0.5);
    this.game.physics.arcade.enable(this.def0);
    this.def0.body.enable = true;
    this.def0.body.bounce.set(1);
    this.def0.body.immovable = true;
    this.def0.defenderCase = 0;
    this.def0.zoning = 0;
    this.def0.isMove = false;
    //this.def0.alpha = 0.5;
    
    this.def1 = this.game.add.sprite(-200, -200, 'defs');
    this.def1.animations.add('def1-0-idle', [3], 10, false);
    this.def1.animations.add('def1-0-walk', [3, 4, 5, 4], 10, false);
    this.def1.animations.add('def1-1-idle', [15], 10, false);
    this.def1.animations.add('def1-1-walk', [15, 16, 17, 16], 10, false);
    this.def1.animations.add('def1-2-idle', [27], 10, false);
    this.def1.animations.add('def1-2-walk', [27, 28, 29, 28], 10, false);
    this.def1.animations.add('def1-3-idle', [39], 10, false);
    this.def1.animations.add('def1-3-walk', [39, 40, 41, 40], 10, false);
    this.def1.animations.add('def1-4-idle', [51], 10, false);
    this.def1.animations.add('def1-4-walk', [51, 52, 53, 52], 10, false);
    this.def1.animations.add('def1-5-idle', [63], 10, false);
    this.def1.animations.add('def1-5-walk', [63, 64, 65, 64], 10, false);
    this.def1.animations.add('def1-6-idle', [75], 10, false);
    this.def1.animations.add('def1-6-walk', [75, 76, 77, 76], 10, false);
    this.def1.animations.add('def1-7-idle', [87], 10, false);
    this.def1.animations.add('def1-7-walk', [87, 88, 89, 88], 10, false);
    this.def1.animations.add('def1-8-idle', [99], 10, false);
    this.def1.animations.add('def1-8-walk', [99, 100, 101, 100], 10, false);
    this.def1.animations.add('def1-9-idle', [111], 10, false);
    this.def1.animations.add('def1-9-walk', [111, 112, 113, 112], 10, false);
    this.def1.anchor.set(0.5);
    this.def1.scale.set(0.55);
    this.game.physics.arcade.enable(this.def1);
    this.def1.body.enable = true;
    this.def1.body.bounce.set(1);
    this.def1.body.immovable = true;
    this.def1.defenderCase = 0;
    this.def1.zoning = 0;
    this.def1.isMove = false;
    //this.def1.alpha = 0.5;
    
    this.def2 = this.game.add.sprite(-200, -200, 'defs');
    this.def2.animations.add('def2-0-idle', [6], 10, false);
    this.def2.animations.add('def2-0-walk', [6, 7, 8, 7], 10, false);
    this.def2.animations.add('def2-1-idle', [18], 10, false);
    this.def2.animations.add('def2-1-walk', [18, 19, 20, 19], 10, false);
    this.def2.animations.add('def2-2-idle', [30], 10, false);
    this.def2.animations.add('def2-2-walk', [30, 31, 32, 31], 10, false);
    this.def2.animations.add('def2-3-idle', [42], 10, false);
    this.def2.animations.add('def2-3-walk', [42, 43, 44, 43], 10, false);
    this.def2.animations.add('def2-4-idle', [54], 10, false);
    this.def2.animations.add('def2-4-walk', [54, 55, 56, 55], 10, false);
    this.def2.animations.add('def2-5-idle', [66], 10, false);
    this.def2.animations.add('def2-5-walk', [66, 67, 68, 67], 10, false);
    this.def2.animations.add('def2-6-idle', [78], 10, false);
    this.def2.animations.add('def2-6-walk', [78, 79, 80, 79], 10, false);
    this.def2.animations.add('def2-7-idle', [90], 10, false);
    this.def2.animations.add('def2-7-walk', [90, 91, 92, 91], 10, false);
    this.def2.animations.add('def2-8-idle', [102], 10, false);
    this.def2.animations.add('def2-8-walk', [102, 103, 104, 103], 10, false);
    this.def2.animations.add('def2-9-idle', [114], 10, false);
    this.def2.animations.add('def2-9-walk', [114, 115, 116, 115], 10, false);
    this.def2.anchor.set(0.5);
    this.def2.scale.set(0.6);
    this.game.physics.arcade.enable(this.def2);
    this.def2.body.enable = true;
    this.def2.body.bounce.set(1);
    this.def2.body.immovable = true;
    this.def2.defenderCase = 0;
    this.def2.zoning = 0;
    this.def2.isMove = false;
    //this.def2.alpha = 0.5;
    
    this.def3 = this.game.add.sprite(-200, -200, 'defs');
    this.def3.animations.add('def3-0-idle', [9], 10, false);
    this.def3.animations.add('def3-0-walk', [9, 10, 11, 10], 10, false);
    this.def3.animations.add('def3-1-idle', [21], 10, false);
    this.def3.animations.add('def3-1-walk', [21, 22, 23, 22], 10, false);
    this.def3.animations.add('def3-2-idle', [33], 10, false);
    this.def3.animations.add('def3-2-walk', [33, 34, 35, 34], 10, false);
    this.def3.animations.add('def3-3-idle', [45], 10, false);
    this.def3.animations.add('def3-3-walk', [45, 46, 47, 46], 10, false);
    this.def3.animations.add('def3-4-idle', [57], 10, false);
    this.def3.animations.add('def3-4-walk', [57, 58, 59, 58], 10, false);
    this.def3.animations.add('def3-5-idle', [69], 10, false);
    this.def3.animations.add('def3-5-walk', [69, 70, 71, 70], 10, false);
    this.def3.animations.add('def3-6-idle', [81], 10, false);
    this.def3.animations.add('def3-6-walk', [81, 82, 83, 82], 10, false);
    this.def3.animations.add('def3-7-idle', [93], 10, false);
    this.def3.animations.add('def3-7-walk', [93, 94, 95, 94], 10, false);
    this.def3.animations.add('def3-8-idle', [105], 10, false);
    this.def3.animations.add('def3-8-walk', [105, 106, 107, 106], 10, false);
    this.def3.animations.add('def3-9-idle', [117], 10, false);
    this.def3.animations.add('def3-9-walk', [117, 118, 119, 118], 10, false);
    this.def3.anchor.set(0.5);
    this.def3.scale.set(0.65);
    this.game.physics.arcade.enable(this.def3);
    this.def3.body.enable = true;
    this.def3.body.bounce.set(1);
    this.def3.body.immovable = true;
    this.def3.defenderCase = 0;
    this.def3.zoning = 0;
    this.def3.isMove = false;
    //this.def3.alpha = 0.5;
       
    
    this.store();
    
};

Def.prototype.store = function () {
     'use strict';    
   
    if(!this.def0.isMove) {
        this.def0.animations.play('def0-'+registry.chooseDef+'-idle', 5, true);
    } else {
        this.def0.animations.play('def0-'+registry.chooseDef+'-walk', 5, true);
    }
    if(!this.def1.isMove) {
        this.def1.animations.play('def1-'+registry.chooseDef+'-idle', 5, true);
    } else {
        this.def1.animations.play('def1-'+registry.chooseDef+'-walk', 5, true);
    }
    if(!this.def2.isMove) {
        this.def2.animations.play('def2-'+registry.chooseDef+'-idle', 5, true);
    } else {
        this.def2.animations.play('def2-'+registry.chooseDef+'-walk', 5, true);
    }
    if(!this.def3.isMove) {
        this.def3.animations.play('def3-'+registry.chooseDef+'-idle', 5, true);
    } else {
        this.def3.animations.play('def3-'+registry.chooseDef+'-walk', 5, true);
    }
    localStorage.setItem("defStatus", registry.chooseDef);
};


Def.prototype.update = function () {
    'use strict';
    
    this.store();
    
    if(this.def0) {
        if(this.def0.defenderCase === 3 || this.def0.defenderCase >= 6){
            this.def0.isMove = true;
        } else {
            this.def0.isMove = false;
        }

        if(!this.def0.isMove) {
            this.def0.body.velocity.x = 0;
            
        } else {
            if (this.def0.defenderCase === 3) {
                if(this.def0.x <= this.def0.width && this.def0.x > 0) {
                    this.def0.body.velocity.x = 50;

                } else if (this.def0.x >= registry.width - this.def0.width && this.def0.x < registry.width) {
                    this.def0.body.velocity.x = -50;
                }
                
            } else if (this.def0.defenderCase === 6) {
                if(this.def0.x <= this.def0.width && this.def0.x > 0) {
                    this.def0.body.velocity.x = 50;

                } else if (this.def0.x >= registry.width / 2 - this.def0.width && this.def0.x < registry.width / 2) {
                    this.def0.body.velocity.x = -50;
                }
                
            } else if (this.def0.defenderCase === 7) {
                if(this.def0.x <= registry.width / 2 + this.def0.width && this.def0.x > registry.width / 2) {
                    this.def0.body.velocity.x = 50;

                } else if (this.def0.x >= registry.width - this.def0.width && this.def0.x < registry.width) {
                    this.def0.body.velocity.x = -50;
                }
                
            } else if (this.def0.defenderCase === 8) {
                if(this.def0.x <= bg.postL.x + this.def0.width * 0.3 && this.def0.x > bg.postL.x - this.def0.width * 0.3) {
                    this.def0.body.velocity.x = 20;

                } else if (this.def0.x >= bg.postR.x - this.def0.width * 0.3 && this.def0.x < bg.postR.x + this.def0.width * 0.3) {
                    this.def0.body.velocity.x = -20;
                }
            }
        }
    }
    
    
    if(this.def1) {
        if(this.def1.defenderCase === 3 || this.def1.defenderCase >= 6){
            this.def1.isMove = true;
        } else {
            this.def1.isMove = false;
        }

        if(!this.def1.isMove) {
            this.def1.body.velocity.x = 0;
            
        } else {
            if (this.def1.defenderCase === 3) {
                if(this.def1.x <= this.def1.width && this.def1.x > 0) {
                    this.def1.body.velocity.x = 65;

                } else if (this.def1.x >= registry.width - this.def1.width && this.def1.x < registry.width) {
                    this.def1.body.velocity.x = -65;
                }
                
            } else if (this.def1.defenderCase === 6) {
                if(this.def1.x <= this.def1.width && this.def1.x > 0) {
                    this.def1.body.velocity.x = 65;

                } else if (this.def1.x >= registry.width / 2 - this.def1.width && this.def1.x < registry.width / 2) {
                    this.def1.body.velocity.x = -65;
                }
                
            } else if (this.def1.defenderCase === 7) {
                if(this.def1.x <= registry.width / 2 + this.def1.width && this.def1.x > registry.width / 2) {
                    this.def1.body.velocity.x = 65;

                } else if (this.def1.x >= registry.width - this.def1.width && this.def1.x < registry.width) {
                    this.def1.body.velocity.x = -65;
                }
            }
        }
    }
    
    if(this.def2) {
        if(this.def2.defenderCase === 3 || this.def2.defenderCase >= 6){
            this.def2.isMove = true;
        } else {
            this.def2.isMove = false;
        }

        if(!this.def2.isMove) {
            this.def2.body.velocity.x = 0;
            
        } else {
            if (this.def2.defenderCase === 3) {
                if(this.def2.x <= this.def2.width && this.def2.x > 0) {
                    this.def2.body.velocity.x = 70;

                } else if (this.def2.x >= registry.width - this.def2.width && this.def2.x < registry.width) {
                    this.def2.body.velocity.x = -70;
                }
                
            } else if (this.def2.defenderCase === 6) {
                if(this.def2.x <= this.def2.width && this.def2.x > 0) {
                    this.def2.body.velocity.x = 70;

                } else if (this.def2.x >= registry.width / 2 - this.def2.width && this.def2.x < registry.width / 2) {
                    this.def2.body.velocity.x = -70;
                }
                
            } else if (this.def2.defenderCase === 7) {
                if(this.def2.x <= registry.width / 2 + this.def2.width && this.def2.x > registry.width / 2) {
                    this.def2.body.velocity.x = 70;

                } else if (this.def2.x >= registry.width - this.def2.width && this.def2.x < registry.width) {
                    this.def2.body.velocity.x = -70;
                }
            }
        }
    }
    
    if(this.def3) {
        if(this.def3.defenderCase === 3 || this.def3.defenderCase >= 6){
            this.def3.isMove = true;
        } else {
            this.def3.isMove = false;
        }

        if(!this.def3.isMove) {
            this.def3.body.velocity.x = 0;
            
        } else {
            if (this.def3.defenderCase === 3) {
                if(this.def3.x <= this.def3.width && this.def3.x > 0) {
                    this.def3.body.velocity.x = 75;

                } else if (this.def3.x >= registry.width - this.def3.width && this.def3.x < registry.width) {
                    this.def3.body.velocity.x = -75;
                }
                
            } else if (this.def3.defenderCase === 6) {
                if(this.def3.x <= this.def3.width && this.def3.x > 0) {
                    this.def3.body.velocity.x = 75;

                } else if (this.def3.x >= registry.width / 2 - this.def3.width && this.def3.x < registry.width / 2) {
                    this.def3.body.velocity.x = -75;
                }
                
            } else if (this.def3.defenderCase === 7) {
                if(this.def3.x <= registry.width / 2 + this.def3.width && this.def3.x > registry.width / 2) {
                    this.def3.body.velocity.x = 75;

                } else if (this.def3.x >= registry.width - this.def3.width && this.def3.x < registry.width) {
                    this.def3.body.velocity.x = -75;
                }
            }
        }
    }
    
};

Def.prototype.levels = function () {
    'use strict'; 
    switch(this.defenderCase){
        case 0:
            this.def0.defenderCase = 0;
            this.def0.zoning = 0;
            this.def1.defenderCase = 0;
            this.def1.zoning = 0;
            this.def2.defenderCase = 0;
            this.def2.zoning = 0;
            this.def3.defenderCase = 0;
            this.def3.zoning = 0;
            break;
            
        case 1:
            this.def0.defenderCase = 3;
            this.def0.zoning = this.game.rnd.integerInRange(1, 2);
            this.def1.defenderCase = 0;
            this.def1.zoning = 0;
            this.def2.defenderCase = 0;
            this.def2.zoning = 0;
            this.def3.defenderCase = 0;
            this.def3.zoning = 0;
            break;
        
        case 2:
            this.def0.defenderCase = 3;
            this.def0.zoning = 1;
            this.def1.defenderCase = 3;
            this.def1.zoning = this.game.rnd.integerInRange(1, 2);
            this.def2.defenderCase = 0;
            this.def2.zoning = 0;
            this.def3.defenderCase = 0;
            this.def3.zoning = 0;
            break;
            
        case 3:
            this.def0.defenderCase = 3;
            this.def0.zoning = 1;
            this.def1.defenderCase = 6;
            this.def1.zoning = this.game.rnd.integerInRange(1, 2);
            this.def2.defenderCase = 7;
            this.def2.zoning = this.game.rnd.integerInRange(1, 2);
            this.def3.defenderCase = 0;
            this.def3.zoning = 0;
            break;
            
        case 4:
            this.def0.defenderCase = 2;
            this.def0.zoning = 1;
            this.def1.defenderCase = 4;
            this.def1.zoning = this.game.rnd.integerInRange(1, 2);
            this.def2.defenderCase = 5;
            this.def2.zoning = this.game.rnd.integerInRange(1, 2);
            this.def3.defenderCase = 2;
            this.def3.zoning = 2;
            break;
            
        case 5:
            this.def0.defenderCase = 8;
            this.def0.zoning = 1;
            this.def1.defenderCase = 0;
            this.def1.zoning = 0;
            this.def2.defenderCase = 0;
            this.def2.zoning = 0;
            this.def3.defenderCase = 0;
            this.def3.zoning = 0;
            break;
            
        case 6:
            this.def0.defenderCase = 8;
            this.def0.zoning = 1;
            this.def1.defenderCase = 0;
            this.def1.zoning = 0;
            this.def2.defenderCase = 3;
            this.def2.zoning = this.game.rnd.integerInRange(1, 2);
            this.def3.defenderCase = 0;
            this.def3.zoning = 0;
            break;
        
        case 7:
            this.def0.defenderCase = 8;
            this.def0.zoning = 1;
            this.def1.defenderCase = 3;
            this.def1.zoning = 1;
            this.def2.defenderCase = 3;
            this.def2.zoning = this.game.rnd.integerInRange(1, 2);
            this.def3.defenderCase = 0;
            this.def3.zoning = 0;
            break;
            
        case 8:
            this.def0.defenderCase = 3;
            this.def0.zoning = 1;
            this.def1.defenderCase = 3;
            this.def1.zoning = 1;
            this.def2.defenderCase = 1;
            this.def2.zoning = 1;
            this.def3.defenderCase = 3;
            this.def3.zoning = 2;
            break;
        
        case 9:
            this.def0.defenderCase = 4;
            this.def0.zoning = 2;
            this.def1.defenderCase = 5;
            this.def1.zoning = 1;
            this.def2.defenderCase = 6;
            this.def2.zoning = 2;
            this.def3.defenderCase = 7;
            this.def3.zoning = 1;
            break;
            
        case 10:
            this.def0.defenderCase = this.game.rnd.integerInRange(4, 7);
            this.def0.zoning = 2;
            this.def1.defenderCase = this.game.rnd.integerInRange(4, 7);
            this.def1.zoning = 1;
            this.def2.defenderCase = this.game.rnd.integerInRange(4, 7);
            this.def2.zoning = 2;
            this.def3.defenderCase = this.game.rnd.integerInRange(4, 7);
            this.def3.zoning = 1;
            break;
            
        case 11:
            this.def0.defenderCase = this.game.rnd.integerInRange(0, 8);
            this.def0.zoning = 1;
            this.def1.defenderCase = this.game.rnd.integerInRange(0, 7);
            this.def1.zoning = 1;
            this.def2.defenderCase = this.game.rnd.integerInRange(0, 7);
            this.def2.zoning = 1;
            this.def3.defenderCase = this.game.rnd.integerInRange(0, 7);
            this.def3.zoning = 1;
            break;
            
        default:
            this.def0.defenderCase = 0;
            this.def0.zoning = 0;
            this.def1.defenderCase = 0;
            this.def1.zoning = 0;
            this.def2.defenderCase = 0;
            this.def2.zoning = 0;
            this.def3.defenderCase = 0;
            this.def3.zoning = 0;
            break;
    }
    
    this.moves();
};

Def.prototype.moves = function () {
   'use strict'; 
    if (this.def0) {
        switch(this.def0.defenderCase) {
            case 0://no defender
                this.def0.x = -200;
                break;

            case 1://center x
                this.def0.x = registry.width / 2;
                break;

            case 2://random x
                this.def0.x = this.game.rnd.integerInRange(this.def0.width, registry.width - this.def0.width);
                break;

            case 3://slide x
                var auxSlide = 0;
                auxSlide = this.game.rnd.integerInRange(0, 1);
                if(auxSlide == 0){
                    this.def0.x = this.def0.width - 15;
                } else {
                    this.def0.x = registry.width - this.def0.width + 15;
                }
                break;
                
            case 4://random x < w/2
                this.def0.x = this.game.rnd.integerInRange(this.def0.width, registry.width / 2 + this.def0.width / 2);
                break;
                
            case 5://random x > w/2
                this.def0.x = this.game.rnd.integerInRange(registry.width / 2 + this.def0.width / 2, registry.width - this.def0.width);
                break;
                
            case 6://slide --x
                var auxSlide = 0;
                auxSlide = this.game.rnd.integerInRange(0, 1);
                if(auxSlide == 0){
                    this.def0.x = this.def0.width - 15;
                } else {
                    this.def0.x = registry.width / 2 - this.def0.width + 15;
                }
                break;
                
            case 7://slide x++
                var auxSlide = 0;
                auxSlide = this.game.rnd.integerInRange(0, 1);
                if(auxSlide == 0){
                    this.def0.x = registry.width / 2 + 15;
                } else {
                    this.def0.x = registry.width - 15;
                }
                break;
                
            case 8://goleiro
                var auxSlide = 0;
                auxSlide = this.game.rnd.integerInRange(0, 1);
                if(auxSlide == 0){
                    this.def0.x = bg.postL.x;
                } else {
                    this.def0.x = bg.postR.x;
                }
                break;
                
            default://no defender
                this.def0.x = -200;
                break;        
        }
        
        switch(this.def0.zoning) {
            case 0:
                this.def0.y = -200;
                break;
                
            case 1:
                this.def0.y = registry.height * 0.25;
                this.def0.scale.set(0.5);
                break;
                
            case 2:
                this.def0.y = registry.height * 0.366;
                this.def0.scale.set(0.55);
                break;
                
            default:
                this.def0.y = -200;
                break;
        }      
    }
    
    if (this.def1) {
        switch(this.def1.defenderCase) {
            case 0://no defender
                this.def1.x = -200;
                break;

            case 1://center x
                this.def1.x = registry.width / 2;
                break;

            case 2://random x
                this.def1.x = this.game.rnd.integerInRange(this.def1.width, registry.width - this.def1.width);
                break;

            case 3://slide x
                var auxSlide = 0;
                auxSlide = this.game.rnd.integerInRange(0, 1);
                if(auxSlide == 0){
                    this.def1.x = this.def1.width - 5;
                } else {
                    this.def1.x = registry.width - this.def1.width + 5;
                }
                break;
                
            case 4://random x < w/2
                this.def1.x = this.game.rnd.integerInRange(this.def1.width, registry.width / 2 + this.def1.width / 2);
                break;
                
            case 5://random x > w/2
                this.def1.x = this.game.rnd.integerInRange(registry.width / 2 + this.def1.width / 2, registry.width - this.def1.width);
                break;
                
            case 6://slide --x
                var auxSlide = 0;
                auxSlide = this.game.rnd.integerInRange(0, 1);
                if(auxSlide == 0){
                    this.def1.x = this.def1.width - 5;
                } else {
                    this.def1.x = registry.width / 2 - this.def1.width + 5;
                }
                break;
                
            case 7://slide x++
                var auxSlide = 0;
                auxSlide = this.game.rnd.integerInRange(0, 1);
                if(auxSlide == 0){
                    this.def1.x = registry.width / 2 + 5;
                } else {
                    this.def1.x = registry.width - 5;
                }
                break;
                
            default://no defender
                this.def1.x = -200;
                break;       
        }
        
        switch(this.def1.zoning) {
            case 0:
                this.def1.y = -200;
                break;
                
            case 1:
                this.def1.y = registry.height * 0.3375;
                this.def1.scale.set(0.55);
                break;
                
            case 2:
                this.def1.y = registry.height * 0.425;
                this.def1.scale.set(0.575);
                break;
                
            default:
                this.def1.y = -200;
                break;
        }    
    }
    
    if (this.def2) {
        switch(this.def2.defenderCase) {
            case 0://no defender
                this.def2.x = -200;
                break;

            case 1://center x
                this.def2.x = registry.width / 2;
                break;

            case 2://random x
                this.def2.x = this.game.rnd.integerInRange(this.def2.width, registry.width - this.def2.width);
                break;

            case 3://slide x
                var auxSlide = 0;
                auxSlide = this.game.rnd.integerInRange(0, 1);
                if(auxSlide == 0){
                    this.def2.x = this.def2.width - 10;
                } else {
                    this.def2.x = registry.width - this.def2.width + 10;
                }
                break;
                
            case 4://random x < w/2
                this.def2.x = this.game.rnd.integerInRange(this.def2.width, registry.width / 2 + this.def2.width / 2);
                break;
                
            case 5://random x > w/2
                this.def2.x = this.game.rnd.integerInRange(registry.width / 2 + this.def2.width / 2, registry.width - this.def2.width);
                break;
                
            case 6://slide --x
                var auxSlide = 0;
                auxSlide = this.game.rnd.integerInRange(0, 1);
                if(auxSlide == 0){
                    this.def2.x = this.def2.width - 10;
                } else {
                    this.def2.x = registry.width / 2 - this.def2.width + 10;
                }
                break;
                
            case 7://slide x++
                var auxSlide = 0;
                auxSlide = this.game.rnd.integerInRange(0, 1);
                if(auxSlide == 0){
                    this.def2.x = registry.width / 2 + 10;
                } else {
                    this.def2.x = registry.width - 10;
                }
                break;
                
            default://no defender
                this.def2.x = -200;
                break;       
        }
        
        switch(this.def2.zoning) {
            case 0:
                this.def2.y = -200;
                break;
                
            case 1:
                this.def2.y = registry.height * 0.425;
                this.def2.scale.set(0.55);
                break;
                
            case 2:
                this.def2.y = registry.height * 0.5125;
                this.def2.scale.set(0.6);
                break;
                
            default:
                this.def2.y = -200;
                break;
        }    
    }
    
    if (this.def3) {
        switch(this.def3.defenderCase) {
            case 0://no defender
                this.def3.x = -200;
                break;

            case 1://center x
                this.def3.x = registry.width / 2;
                break;

            case 2://random x
                this.def3.x = this.game.rnd.integerInRange(this.def3.width, registry.width - this.def3.width);
                break;

            case 3://slide x
                var auxSlide = 0;
                auxSlide = this.game.rnd.integerInRange(0, 1);
                if(auxSlide == 0){
                    this.def3.x = this.def3.width - 15;
                } else {
                    this.def3.x = registry.width - this.def3.width + 15;
                }
                break;
                
            case 4://random x < w/2
                this.def3.x = this.game.rnd.integerInRange(this.def3.width, registry.width / 2 + this.def3.width / 2);
                break;
                
            case 5://random x > w/2
                this.def3.x = this.game.rnd.integerInRange(registry.width / 2 + this.def3.width / 2, registry.width - this.def3.width);
                break;
                
            case 6://slide --x
                var auxSlide = 0;
                auxSlide = this.game.rnd.integerInRange(0, 1);
                if(auxSlide == 0){
                    this.def3.x = this.def3.width - 15;
                } else {
                    this.def3.x = registry.width / 2 - this.def3.width + 15;
                }
                break;
                
            case 7://slide x++
                var auxSlide = 0;
                auxSlide = this.game.rnd.integerInRange(0, 1);
                if(auxSlide == 0){
                    this.def3.x = registry.width / 2 + 15;
                } else {
                    this.def3.x = registry.width - 15;
                }
                break;
                
            default://no defender
                this.def3.x = -200;
                break;       
        }
        
        switch(this.def3.zoning) {
            case 0:
                this.def3.y = -200;
                break;
                
            case 1:
                this.def3.y = registry.height * 0.5125;
                this.def3.scale.set(0.55);
                break;
                
            case 2:
                this.def3.y = registry.height * 0.6;
                this.def3.scale.set(0.6);
                break;
                
            default:
                this.def3.y = -200;
                break;
        }    
    }
};




