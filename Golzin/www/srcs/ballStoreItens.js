function ballStoreItens(game) {
    'use strict';
    this.game = game;
}

ballStoreItens.prototype.ballItens = function () {
    'use strict';
    
    this.ball0 = this.game.add.button(registry.width * 0.16, registry.height * 0.33, 'itens-balls', this.cb0Act, this);
    this.ball0.anchor.set(0.5);
    this.ball0.animations.add('ball-buy', [0], 10, false);
    this.ball0.animations.add('ball-enable', [11], 10, false);
    this.ball0.animations.add('ball-active', [22], 10, false);
    this.ball0.price = 0;
    this.ball0.isClosed = false;
    
    if (this.ball0.isClosed === "false" || this.ball0.isClosed === false){
        if (registry.actualBall === 0) {
            this.ball0.animations.play('ball-active', 5, true);
        } else {
            this.ball0.animations.play('ball-enable', 5, true);        
        }
    } else {
        this.ball0.animations.play('ball-buy', 5, true);
    }
    
    
    this.ball1 = this.game.add.button(this.ball0.x + this.ball0.width * 1.15, this.ball0.y, 'itens-balls', this.cb1Act, this);
    this.ball1.anchor.set(0.5);
    this.ball1.animations.add('ball-buy', [1], 10, false);
    this.ball1.animations.add('ball-enable', [12], 10, false);
    this.ball1.animations.add('ball-active', [23], 10, false);
    this.ball1.price = 1;
    this.ball1.isClosed = localStorage.getItem("ballStyle1") || true;
    
    if (this.ball1.isClosed === "false" || this.ball1.isClosed === false){
        if (registry.actualBall === 1) {
            this.ball1.animations.play('ball-active', 5, true);
        } else {
            this.ball1.animations.play('ball-enable', 5, true);        
        }
    } else {
        this.ball1.animations.play('ball-buy', 5, true);
    }
    
    this.ball2 = this.game.add.button(this.ball1.x + this.ball1.width * 1.15, this.ball0.y, 'itens-balls', this.cb2Act, this);
    this.ball2.anchor.set(0.5);
    this.ball2.animations.add('ball-buy', [2], 10, false);
    this.ball2.animations.add('ball-enable', [13], 10, false);
    this.ball2.animations.add('ball-active', [24], 10, false);
    this.ball2.price = 1;
    this.ball2.isClosed = localStorage.getItem("ballStyle2") || true;
    
    if (this.ball2.isClosed === "false" || this.ball2.isClosed === false){
        if (registry.actualBall === 2) {
            this.ball2.animations.play('ball-active', 5, true);
        } else {
            this.ball2.animations.play('ball-enable', 5, true);        
        }
    } else {
        this.ball2.animations.play('ball-buy', 5, true);
    }
    
    
    this.ball3 = this.game.add.button(this.ball2.x + this.ball2.width * 1.15, this.ball0.y, 'itens-balls', this.cb3Act, this);
    this.ball3.anchor.set(0.5);
    this.ball3.animations.add('ball-buy', [3], 10, false);
    this.ball3.animations.add('ball-enable', [14], 10, false);
    this.ball3.animations.add('ball-active', [25], 10, false);
    this.ball3.price = 50;
    this.ball3.isClosed = localStorage.getItem("ballStyle3") || true;
    
    if (this.ball3.isClosed === "false" || this.ball3.isClosed === false){
        if (registry.actualBall === 3) {
            this.ball3.animations.play('ball-active', 5, true);
        } else {
            this.ball3.animations.play('ball-enable', 5, true);        
        }
    } else {
        this.ball3.animations.play('ball-buy', 5, true);
    }
    
    
    this.ball4 = this.game.add.button(this.ball0.x, this.ball0.y + this.ball0.height * 1.15, 'itens-balls', this.cb4Act, this);
    this.ball4.anchor.set(0.5);
    this.ball4.animations.add('ball-buy', [4], 10, false);
    this.ball4.animations.add('ball-enable', [15], 10, false);
    this.ball4.animations.add('ball-active', [26], 10, false);
    this.ball4.price = 50;
    this.ball4.isClosed = localStorage.getItem("ballStyle4") || true;
    
    if (this.ball4.isClosed === "false" || this.ball4.isClosed === false){
        if (registry.actualBall === 4) {
            this.ball4.animations.play('ball-active', 5, true);
        } else {
            this.ball4.animations.play('ball-enable', 5, true);        
        }
    } else {
        this.ball4.animations.play('ball-buy', 5, true);
    }
    
    this.ball5 = this.game.add.button(this.ball4.x + this.ball4.width * 1.15, this.ball4.y, 'itens-balls', this.cb5Act, this);
    this.ball5.anchor.set(0.5);
    this.ball5.animations.add('ball-buy', [5], 10, false);
    this.ball5.animations.add('ball-enable', [16], 10, false);
    this.ball5.animations.add('ball-active', [27], 10, false);
    this.ball5.price = 50;
    this.ball5.isClosed = localStorage.getItem("ballStyle5") || true;
    
    if (this.ball5.isClosed === "false" || this.ball5.isClosed === false){
        if (registry.actualBall === 5) {
            this.ball5.animations.play('ball-active', 5, true);
        } else {
            this.ball5.animations.play('ball-enable', 5, true);        
        }
    } else {
        this.ball5.animations.play('ball-buy', 5, true);
    }
    
    this.ball6 = this.game.add.button(this.ball5.x + this.ball5.width * 1.15, this.ball4.y, 'itens-balls', this.cb6Act, this);
    this.ball6.anchor.set(0.5);
    this.ball6.animations.add('ball-buy', [6], 10, false);
    this.ball6.animations.add('ball-enable', [17], 10, false);
    this.ball6.animations.add('ball-active', [28], 10, false);
    this.ball6.price = 50;
    this.ball6.isClosed = localStorage.getItem("ballStyle6") || true;
    
    if (this.ball6.isClosed === "false" || this.ball6.isClosed === false){
        if (registry.actualBall === 6) {
            this.ball6.animations.play('ball-active', 5, true);
        } else {
            this.ball6.animations.play('ball-enable', 5, true);        
        }
    } else {
        this.ball6.animations.play('ball-buy', 5, true);
    }
       
    this.ball7 = this.game.add.button(this.ball6.x + this.ball6.width * 1.15, this.ball4.y, 'itens-balls', this.cb7Act, this);
    this.ball7.anchor.set(0.5);
    this.ball7.animations.add('ball-buy', [7], 10, false);
    this.ball7.animations.add('ball-enable', [18], 10, false);
    this.ball7.animations.add('ball-active', [29], 10, false);
    this.ball7.price = 50;
    this.ball7.isClosed = localStorage.getItem("ballStyle7") || true;
    
    if (this.ball7.isClosed === "false" || this.ball7.isClosed === false){
        if (registry.actualBall === 7) {
            this.ball7.animations.play('ball-active', 5, true);
        } else {
            this.ball7.animations.play('ball-enable', 5, true);        
        }
    } else {
        this.ball7.animations.play('ball-buy', 5, true);
    }
    
    this.ball8 = this.game.add.button(this.ball4.x, this.ball4.y + this.ball4.height * 1.15, 'itens-balls', this.cb8Act, this);
    this.ball8.anchor.set(0.5);
    this.ball8.animations.add('ball-buy', [8], 10, false);
    this.ball8.animations.add('ball-enable', [19], 10, false);
    this.ball8.animations.add('ball-active', [30], 10, false);
    this.ball8.price = 50;
    this.ball8.isClosed = localStorage.getItem("ballStyle8") || true;
    
    if (this.ball8.isClosed === "false" || this.ball8.isClosed === false){
        if (registry.actualBall === 8) {
            this.ball8.animations.play('ball-active', 5, true);
        } else {
            this.ball8.animations.play('ball-enable', 5, true);        
        }
    } else {
        this.ball8.animations.play('ball-buy', 5, true);
    }
    
    this.ball9 = this.game.add.button(this.ball8.x + this.ball8.width * 1.15, this.ball8.y, 'itens-balls', this.cb9Act, this);
    this.ball9.anchor.set(0.5);
    this.ball9.animations.add('ball-buy', [9], 10, false);
    this.ball9.animations.add('ball-enable', [20], 10, false);
    this.ball9.animations.add('ball-active', [31], 10, false);
    this.ball9.price = 50;
    this.ball9.isClosed = localStorage.getItem("ballStyle9") || true;
    
    if (this.ball9.isClosed === "false" || this.ball9.isClosed === false){
        if (registry.actualBall === 9) {
            this.ball9.animations.play('ball-active', 5, true);
        } else {
            this.ball9.animations.play('ball-enable', 5, true);        
        }
    } else {
        this.ball9.animations.play('ball-buy', 5, true);
    }
    
    this.ball10 = this.game.add.button(this.ball9.x + this.ball9.width * 1.15, this.ball8.y, 'itens-balls', this.cb10Act, this);
    this.ball10.anchor.set(0.5);
    this.ball10.animations.add('ball-buy', [10], 10, false);
    this.ball10.animations.add('ball-enable', [21], 10, false);
    this.ball10.animations.add('ball-active', [32], 10, false);
    this.ball10.price = 50;
    this.ball10.isClosed = localStorage.getItem("ballStyle10") || true;
    
    if (this.ball10.isClosed === "false" || this.ball10.isClosed === false){
        if (registry.actualBall === 10) {
            this.ball10.animations.play('ball-active', 5, true);
        } else {
            this.ball10.animations.play('ball-enable', 5, true);        
        }
    } else {
        this.ball10.animations.play('ball-buy', 5, true);
    }
    
    
};


ballStoreItens.prototype.cb0Act = function () {
    'use strict';
    registry.chooseBall = 0;
    registry.actualBall = 0;
    localStorage.setItem("ballActual", registry.actualBall);
    ball.store();
};

ballStoreItens.prototype.cb1Act = function () {
    'use strict';
    if (this.ball1.isClosed === true) {
        if (registry.coins >= this.ball1.price) {
            this.chooseBall = 1;
            shop.showModal();

        } else {
            this.noMoney();
        }
        
    } else {
        registry.chooseBall = 1;
        registry.actualBall = 1;
        localStorage.setItem("ballActual", registry.actualBall);
        ball.store();
    }
};

ballStoreItens.prototype.cb2Act = function () {
    'use strict';
    if (this.ball2.isClosed === true) {
        if (registry.coins >= this.ball2.price) {
            this.chooseBall = 2;
            shop.showModal();

        } else {
            this.noMoney();
        }
        
    } else {
        registry.chooseBall = 2;
        registry.actualBall = 2;
        localStorage.setItem("ballActual", registry.actualBall);
        ball.store();
    }
};

ballStoreItens.prototype.cb3Act = function () {
    'use strict';
    if (this.ball3.isClosed === true) {
        if (registry.coins >= this.ball3.price) {
            this.chooseBall = 3;
            shop.showModal();

        } else {
            this.noMoney();
        }
        
    } else {
        registry.chooseBall = 3;
        registry.actualBall = 3;
        localStorage.setItem("ballActual", registry.actualBall);
        ball.store();
    }
};

ballStoreItens.prototype.cb4Act = function () {
    'use strict';
    if (this.ball4.isClosed === true) {
        if (registry.coins >= this.ball4.price) {
            this.chooseBall = 4;
            shop.showModal();

        } else {
            this.noMoney();
        }
    } else {
        registry.chooseBall = 4;
        registry.actualBall = 4;
        localStorage.setItem("ballActual", registry.actualBall);
        ball.store();
    }
};

ballStoreItens.prototype.cb5Act = function () {
    'use strict';
    if (this.ball5.isClosed === true) {
        if (registry.coins >= this.ball5.price) {
            this.chooseBall = 5;
            shop.showModal();

        } else {
            this.noMoney();
        }
    } else {
        registry.chooseBall = 5;
        registry.actualBall = 5;
        localStorage.setItem("ballActual", registry.actualBall);
        ball.store();
    }
};

ballStoreItens.prototype.cb6Act = function () {
    'use strict';
    if (this.ball6.isClosed === true) {
        if (registry.coins >= this.ball6.price) {
            this.chooseBall = 6;
            shop.showModal();

        } else {
            this.noMoney();
        }
    } else {
        registry.chooseBall = 6;
        registry.actualBall = 6;
        localStorage.setItem("ballActual", registry.actualBall);
        ball.store();
    }
};

ballStoreItens.prototype.cb7Act = function () {
    'use strict';
    if (this.ball7.isClosed === true) {
        if (registry.coins >= this.ball7.price) {
            this.chooseBall = 7;
            shop.showModal();

        } else {
            this.noMoney();
        }
    } else {
        registry.chooseBall = 7;
        registry.actualBall = 7;
        localStorage.setItem("ballActual", registry.actualBall);
        ball.store();
    }
};

ballStoreItens.prototype.cb8Act = function () {
    'use strict';
    if (this.ball8.isClosed === true) {
        if (registry.coins >= this.ball8.price) {
            this.chooseBall = 8;
            shop.showModal();

        } else {
            this.noMoney();
        }
    } else {
        registry.chooseBall = 8;
        registry.actualBall = 8;
        localStorage.setItem("ballActual", registry.actualBall);
        ball.store();
    }
};

ballStoreItens.prototype.cb9Act = function () {
    'use strict';
    if (this.ball9.isClosed === true) {
        if (registry.coins >= this.ball9.price) {
            this.chooseBall = 9;
            shop.showModal();

        } else {
            this.noMoney();
        }
    } else {
        registry.chooseBall = 9;
        registry.actualBall = 9;
        localStorage.setItem("ballActual", registry.actualBall);
        ball.store();
    }
};

ballStoreItens.prototype.cb10Act = function () {
    'use strict';
    if (this.ball10.isClosed === true) {
        if (registry.coins >= this.ball10.price) {
            this.chooseBall = 10;
            shop.showModal();

        } else {
            this.noMoney();
        }
    } else {
        registry.chooseBall = 10;
        registry.actualBall = 10;
        localStorage.setItem("ballActual", registry.actualBall);
        ball.store();
    }
};



ballStoreItens.prototype.noMoney = function () {
    'use strict';
    shop.textMain.text = "not money";
    shop.textMain.addColor('#f00', 0);
    shop.textMain.x = shop.scoreboard.width / 2 - 20;
};


ballStoreItens.prototype.update = function () {
    'use strict';
    
    if (this.ball0.isClosed === "false" || this.ball0.isClosed === false) {
        if (registry.actualBall === 0) {
            this.ball0.animations.play('ball-active', 5, true);
        } else {
            this.ball0.animations.play('ball-enable', 5, true);        
        }
    } else {
        this.ball0.animations.play('ball-buy', 5, true);
    }
    
    if (this.ball1.isClosed === "false" || this.ball1.isClosed === false) {
        if (registry.actualBall === 1) {
            this.ball1.animations.play('ball-active', 5, true);
        } else {
            this.ball1.animations.play('ball-enable', 5, true);        
        }
    } else {
        this.ball1.animations.play('ball-buy', 5, true);
    }
    
    if (this.ball2.isClosed === "false" || this.ball2.isClosed === false) {
        if (registry.actualBall === 2) {
            this.ball2.animations.play('ball-active', 5, true);
        } else {
            this.ball2.animations.play('ball-enable', 5, true);        
        }
    } else {
        this.ball2.animations.play('ball-buy', 5, true);
    }
    
    if (this.ball3.isClosed === "false" || this.ball3.isClosed === false) {
        if (registry.actualBall === 3) {
            this.ball3.animations.play('ball-active', 5, true);
        } else {
            this.ball3.animations.play('ball-enable', 5, true);        
        }
    } else {
        this.ball3.animations.play('ball-buy', 5, true);
    }
    
    if (this.ball4.isClosed === "false" || this.ball4.isClosed === false){
        if (registry.actualBall === 4) {
            this.ball4.animations.play('ball-active', 5, true);
        } else {
            this.ball4.animations.play('ball-enable', 5, true);        
        }
    } else {
        this.ball4.animations.play('ball-buy', 5, true);
    }
    
    if (this.ball5.isClosed === "false" || this.ball5.isClosed === false){
        if (registry.actualBall === 5) {
            this.ball5.animations.play('ball-active', 5, true);
        } else {
            this.ball5.animations.play('ball-enable', 5, true);        
        }
    } else {
        this.ball5.animations.play('ball-buy', 5, true);
    }
    
    if (this.ball6.isClosed === "false" || this.ball6.isClosed === false){
        if (registry.actualBall === 6) {
            this.ball6.animations.play('ball-active', 5, true);
        } else {
            this.ball6.animations.play('ball-enable', 5, true);        
        }
    } else {
        this.ball6.animations.play('ball-buy', 5, true);
    }
     
    if (this.ball7.isClosed === "false" || this.ball7.isClosed === false){
        if (registry.actualBall === 7) {
            this.ball7.animations.play('ball-active', 5, true);
        } else {
            this.ball7.animations.play('ball-enable', 5, true);        
        }
    } else {
        this.ball7.animations.play('ball-buy', 5, true);
    }
    
    if (this.ball8.isClosed === "false" || this.ball8.isClosed === false){
        if (registry.actualBall === 8) {
            this.ball8.animations.play('ball-active', 5, true);
        } else {
            this.ball8.animations.play('ball-enable', 5, true);        
        }
    } else {
        this.ball8.animations.play('ball-buy', 5, true);
    }
    
    if (this.ball9.isClosed === "false" || this.ball9.isClosed === false){
        if (registry.actualBall === 9) {
            this.ball9.animations.play('ball-active', 5, true);
        } else {
            this.ball9.animations.play('ball-enable', 5, true);        
        }
    } else {
        this.ball9.animations.play('ball-buy', 5, true);
    }
    
    if (this.ball10.isClosed === "false" || this.ball10.isClosed === false){
        if (registry.actualBall === 10) {
            this.ball10.animations.play('ball-active', 5, true);
        } else {
            this.ball10.animations.play('ball-enable', 5, true);        
        }
    } else {
        this.ball10.animations.play('ball-buy', 5, true);
    }
  
    
    if (shop.storeActive === 0) {
        this.ball0.x = registry.width * 0.16; this.ball0.y = registry.height * 0.33; this.ball0.alpha = 1;
        this.ball1.x = this.ball0.x + this.ball0.width * 1.15; this.ball1.y = this.ball0.y; this.ball1.alpha = 1;
        this.ball2.x = this.ball1.x + this.ball1.width * 1.15; this.ball2.y = this.ball0.y; this.ball2.alpha = 1;
        this.ball3.x = this.ball2.x + this.ball2.width * 1.15; this.ball3.y = this.ball0.y; this.ball3.alpha = 1;
        this.ball4.x = this.ball0.x; this.ball4.y = this.ball0.y + this.ball0.height * 1.15; this.ball4.alpha = 1;
        this.ball5.x = this.ball4.x + this.ball4.width * 1.15; this.ball5.y = this.ball4.y; this.ball5.alpha = 1;
        this.ball6.x = this.ball5.x + this.ball5.width * 1.15; this.ball6.y = this.ball4.y; this.ball6.alpha = 1;
        this.ball7.x = this.ball6.x + this.ball6.width * 1.15; this.ball7.y = this.ball4.y; this.ball7.alpha = 1;
        this.ball8.x = this.ball4.x; this.ball8.y = this.ball4.y + this.ball4.height * 1.15; this.ball8.alpha = 1;
        this.ball9.x = this.ball8.x + this.ball8.width * 1.15; this.ball9.y = this.ball8.y; this.ball9.alpha = 1;
        this.ball10.x = this.ball9.x + this.ball9.width * 1.15; this.ball10.y = this.ball8.y; this.ball10.alpha = 1;
        
    } else {
        this.ball0.x = -100; this.ball0.y = -100; this.ball0.alpha = 0;
        this.ball1.x = -100; this.ball1.y = -100; this.ball1.alpha = 0;
        this.ball2.x = -100; this.ball2.y = -100; this.ball2.alpha = 0;
        this.ball3.x = -100; this.ball3.y = -100; this.ball3.alpha = 0;
        this.ball4.x = -100; this.ball4.y = -100; this.ball4.alpha = 0;
        this.ball5.x = -100; this.ball5.y = -100; this.ball5.alpha = 0;
        this.ball6.x = -100; this.ball6.y = -100; this.ball6.alpha = 0;
        this.ball7.x = -100; this.ball7.y = -100; this.ball7.alpha = 0;
        this.ball8.x = -100; this.ball8.y = -100; this.ball8.alpha = 0;
        this.ball9.x = -100; this.ball9.y = -100; this.ball9.alpha = 0;
        this.ball10.x = -100; this.ball10.y = -100; this.ball10.alpha = 0;
        
    }
   
};