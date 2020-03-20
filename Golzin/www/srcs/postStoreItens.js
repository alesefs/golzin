function postStoreItens(game) {
    'use strict';
    this.game = game;
}

postStoreItens.prototype.postItens = function () {
    'use strict';
    
    this.post0 = this.game.add.button(registry.width * 0.16, registry.height * 0.33, 'itens-post', this.cp0Act, this);
    this.post0.anchor.set(0.5);
    this.post0.animations.add('post-buy', [0], 10, false);
    this.post0.animations.add('post-enable', [9], 10, false);
    this.post0.animations.add('post-active', [18], 10, false);
    this.post0.price = 0;
    this.post0.isClosed = false;
    
    if (this.post0.isClosed === "false" || this.post0.isClosed === false){
        if (registry.actualpost === 0) {
            this.post0.animations.play('post-active', 5, true);
        } else {
            this.post0.animations.play('post-enable', 5, true);        
        }
    } else {
        this.post0.animations.play('post-buy', 5, true);
    }
    
    
    this.post1 = this.game.add.button(this.post0.x + this.post0.width * 1.15,  this.post0.y, 'itens-post', this.cp1Act, this);
    this.post1.anchor.set(0.5);
    this.post1.animations.add('post-buy', [1], 10, false);
    this.post1.animations.add('post-enable', [10], 10, false);
    this.post1.animations.add('post-active', [19], 10, false);
    this.post1.price = 50;
    this.post1.isClosed = localStorage.getItem("postStyle1") || true;
    
    if (this.post1.isClosed === "false" || this.post1.isClosed === false){
        if (registry.actualPost === 1) {
            this.post1.animations.play('post-active', 5, true);
        } else {
            this.post1.animations.play('post-enable', 5, true);        
        }
    } else {
        this.post1.animations.play('post-buy', 5, true);
    }
    
    
    this.post2 = this.game.add.button(this.post1.x + this.post1.width * 1.15,  this.post1.y, 'itens-post', this.cp2Act, this);
    this.post2.anchor.set(0.5);
    this.post2.animations.add('post-buy', [2], 10, false);
    this.post2.animations.add('post-enable', [11], 10, false);
    this.post2.animations.add('post-active', [20], 10, false);
    this.post2.price = 50;
    this.post2.isClosed = localStorage.getItem("postStyle2") || true;
    
    if (this.post2.isClosed === "false" || this.post2.isClosed === false){
        if (registry.actualPost === 2) {
            this.post2.animations.play('post-active', 5, true);
        } else {
            this.post2.animations.play('post-enable', 5, true);        
        }
    } else {
        this.post2.animations.play('post-buy', 5, true);
    }
    
    
    this.post3 = this.game.add.button(this.post2.x + this.post2.width * 1.15,  this.post2.y, 'itens-post', this.cp3Act, this);
    this.post3.anchor.set(0.5);
    this.post3.animations.add('post-buy', [3], 10, false);
    this.post3.animations.add('post-enable', [12], 10, false);
    this.post3.animations.add('post-active', [21], 10, false);
    this.post3.price = 50;
    this.post3.isClosed = localStorage.getItem("postStyle3") || true;
    
    if (this.post3.isClosed === "false" || this.post3.isClosed === false){
        if (registry.actualPost === 3) {
            this.post3.animations.play('post-active', 5, true);
        } else {
            this.post3.animations.play('post-enable', 5, true);        
        }
    } else {
        this.post3.animations.play('post-buy', 5, true);
    }
    
    this.post4 = this.game.add.button(this.post0.x, this.post2.y + this.post0.height * 1.15, 'itens-post', this.cp4Act, this);
    this.post4.anchor.set(0.5);
    this.post4.animations.add('post-buy', [4], 10, false);
    this.post4.animations.add('post-enable', [13], 10, false);
    this.post4.animations.add('post-active', [22], 10, false);
    this.post4.price = 50;
    this.post4.isClosed = localStorage.getItem("postStyle4") || true;
    
    if (this.post4.isClosed === "false" || this.post4.isClosed === false){
        if (registry.actualPost === 4) {
            this.post4.animations.play('post-active', 5, true);
        } else {
            this.post4.animations.play('post-enable', 5, true);        
        }
    } else {
        this.post4.animations.play('post-buy', 5, true);
    }
    
    this.post5 = this.game.add.button(this.post4.x + this.post4.width * 1.15, this.post4.y, 'itens-post', this.cp5Act, this);
    this.post5.anchor.set(0.5);
    this.post5.animations.add('post-buy', [5], 10, false);
    this.post5.animations.add('post-enable', [14], 10, false);
    this.post5.animations.add('post-active', [23], 10, false);
    this.post5.price = 50;
    this.post5.isClosed = localStorage.getItem("postStyle5") || true;
    
    if (this.post5.isClosed === "false" || this.post5.isClosed === false){
        if (registry.actualPost === 5) {
            this.post5.animations.play('post-active', 5, true);
        } else {
            this.post5.animations.play('post-enable', 5, true);        
        }
    } else {
        this.post5.animations.play('post-buy', 5, true);
    }
    
    this.post6 = this.game.add.button(this.post5.x + this.post5.width * 1.15, this.post5.y, 'itens-post', this.cp6Act, this);
    this.post6.anchor.set(0.5);
    this.post6.animations.add('post-buy', [8], 10, false);
    this.post6.animations.add('post-enable', [17], 10, false);
    this.post6.animations.add('post-active', [26], 10, false);
    this.post6.price = 50;
    this.post6.isClosed = localStorage.getItem("postStyle6") || true;
    
    if (this.post6.isClosed === "false" || this.post6.isClosed === false){
        if (registry.actualPost === 6) {
            this.post6.animations.play('post-active', 5, true);
        } else {
            this.post6.animations.play('post-enable', 5, true);        
        }
    } else {
        this.post6.animations.play('post-buy', 5, true);
    }
    
    this.post7 = this.game.add.button(this.post6.x + this.post6.width * 1.15, this.post6.y, 'itens-post', this.cp7Act, this);
    this.post7.anchor.set(0.5);
    this.post7.animations.add('post-buy', [7], 10, false);
    this.post7.animations.add('post-enable', [16], 10, false);
    this.post7.animations.add('post-active', [25], 10, false);
    this.post7.price = 50;
    this.post7.isClosed = localStorage.getItem("postStyle7") || true;
    
    if (this.post7.isClosed === "false" || this.post7.isClosed === false){
        if (registry.actualPost === 7) {
            this.post7.animations.play('post-active', 5, true);
        } else {
            this.post7.animations.play('post-enable', 5, true);        
        }
    } else {
        this.post7.animations.play('post-buy', 5, true);
    }
    
    this.post8 = this.game.add.button(this.post4.x, this.post4.y + this.post4.height * 1.15, 'itens-post', this.cp8Act, this);
    this.post8.anchor.set(0.5);
    this.post8.animations.add('post-buy', [6], 10, false);
    this.post8.animations.add('post-enable', [15], 10, false);
    this.post8.animations.add('post-active', [24], 10, false);
    this.post8.price = 50;
    this.post8.isClosed = localStorage.getItem("postStyle8") || true;
    
    if (this.post8.isClosed === "false" || this.post8.isClosed === false){
        if (registry.actualPost === 8) {
            this.post8.animations.play('post-active', 5, true);
        } else {
            this.post8.animations.play('post-enable', 5, true);        
        }
    } else {
        this.post8.animations.play('post-buy', 5, true);
    }
    
    
};

postStoreItens.prototype.cp0Act = function () {
    'use strict';
    registry.choosePost = 0;
    registry.actualPost = 0;
    localStorage.setItem("postActual", registry.actualPost);
    posts.store();
};

postStoreItens.prototype.cp1Act = function () {
    'use strict';
    if (this.post1.isClosed === true) {
        if (registry.coins >= this.post1.price) {
            this.choosePost = 1;
            shop.showModal();
        } else {
            this.noMoney();
        }
    } else {
        registry.choosePost = 1;
        registry.actualPost = 1;
        localStorage.setItem("postActual", registry.actualPost);
        posts.store();    
    }
};

postStoreItens.prototype.cp2Act = function () {
    'use strict';
    if (this.post2.isClosed === true) {
        if (registry.coins >= this.post2.price) {
            this.choosePost = 2;
            shop.showModal();
        } else {
            this.noMoney();
        }
    } else {
        registry.choosePost = 2;
        registry.actualPost = 2;
        localStorage.setItem("postActual", registry.actualPost);
        posts.store();    
    }
};

postStoreItens.prototype.cp3Act = function () {
    'use strict';
    if (this.post3.isClosed === true) {
        if (registry.coins >= this.post3.price) {
            this.choosePost = 3;
            shop.showModal();
        } else {
            this.noMoney();
        }
    } else {
        registry.choosePost = 3;
        registry.actualPost = 3;
        localStorage.setItem("postActual", registry.actualPost);
        posts.store();    
    }
};

postStoreItens.prototype.cp4Act = function () {
    'use strict';
    if (this.post4.isClosed === true) {
        if (registry.coins >= this.post4.price) {
            this.choosePost = 4;
            shop.showModal();
        } else {
            this.noMoney();
        }
    } else {
        registry.choosePost = 4;
        registry.actualPost = 4;
        localStorage.setItem("postActual", registry.actualPost);
        posts.store();    
    }
};

postStoreItens.prototype.cp5Act = function () {
    'use strict';
    if (this.post5.isClosed === true) {
        if (registry.coins >= this.post5.price) {
            this.choosePost = 5;
            shop.showModal();
        } else {
            this.noMoney();
        }
    } else {
        registry.choosePost = 5;
        registry.actualPost = 5;
        localStorage.setItem("postActual", registry.actualPost);
        posts.store();    
    }
};

postStoreItens.prototype.cp6Act = function () {
    'use strict';
    if (this.post6.isClosed === true) {
        if (registry.coins >= this.post6.price) {
            this.choosePost = 6;
            shop.showModal();
        } else {
            this.noMoney();
        }
    } else {
        registry.choosePost = 6;
        registry.actualPost = 6;
        localStorage.setItem("postActual", registry.actualPost);
        posts.store();    
    }
};

postStoreItens.prototype.cp7Act = function () {
    'use strict';
    if (this.post7.isClosed === true) {
        if (registry.coins >= this.post7.price) {
            this.choosePost = 7;
            shop.showModal();
        } else {
            this.noMoney();
        }
    } else {
        registry.choosePost = 7;
        registry.actualPost = 7;
        localStorage.setItem("postActual", registry.actualPost);
        posts.store();    
    }
};

postStoreItens.prototype.cp8Act = function () {
    'use strict';
    if (this.post8.isClosed === true) {
        if (registry.coins >= this.post8.price) {
            this.choosePost = 8;
            shop.showModal();
        } else {
            this.noMoney();
        }
    } else {
        registry.choosePost = 8;
        registry.actualPost = 8;
        localStorage.setItem("postActual", registry.actualPost);
        posts.store();    
    }
};



postStoreItens.prototype.noMoney = function () {
    'use strict';
    shop.textMain.text = "not money";
    shop.textMain.addColor('#f00', 0);
    shop.textMain.x = shop.scoreboard.width / 2 - 20;
};


postStoreItens.prototype.update = function () {
    'use strict';
    if (this.post0.isClosed === "false" || this.post0.isClosed === false){
        if (registry.actualPost === 0) {
            this.post0.animations.play('post-active', 5, true);
        } else {
            this.post0.animations.play('post-enable', 5, true);        
        }
    } else {
        this.post0.animations.play('post-buy', 5, true);
    }
    
    if (this.post1.isClosed === "false" || this.post1.isClosed === false){
        if (registry.actualPost === 1) {
            this.post1.animations.play('post-active', 5, true);
        } else {
            this.post1.animations.play('post-enable', 5, true);        
        }
    } else {
        this.post1.animations.play('post-buy', 5, true);
    }
    
    if (this.post2.isClosed === "false" || this.post2.isClosed === false){
        if (registry.actualPost === 2) {
            this.post2.animations.play('post-active', 5, true);
        } else {
            this.post2.animations.play('post-enable', 5, true);        
        }
    } else {
        this.post2.animations.play('post-buy', 5, true);
    }
    
    if (this.post3.isClosed === "false" || this.post3.isClosed === false){
        if (registry.actualPost === 3) {
            this.post3.animations.play('post-active', 5, true);
        } else {
            this.post3.animations.play('post-enable', 5, true);        
        }
    } else {
        this.post3.animations.play('post-buy', 5, true);
    }
    
    if (this.post4.isClosed === "false" || this.post4.isClosed === false){
        if (registry.actualPost === 4) {
            this.post4.animations.play('post-active', 5, true);
        } else {
            this.post4.animations.play('post-enable', 5, true);        
        }
    } else {
        this.post4.animations.play('post-buy', 5, true);
    }
    
    if (this.post5.isClosed === "false" || this.post5.isClosed === false){
        if (registry.actualPost === 5) {
            this.post5.animations.play('post-active', 5, true);
        } else {
            this.post5.animations.play('post-enable', 5, true);        
        }
    } else {
        this.post5.animations.play('post-buy', 5, true);
    }
    
    if (this.post6.isClosed === "false" || this.post6.isClosed === false){
        if (registry.actualPost === 6) {
            this.post6.animations.play('post-active', 5, true);
        } else {
            this.post6.animations.play('post-enable', 5, true);        
        }
    } else {
        this.post6.animations.play('post-buy', 5, true);
    }
    
    if (this.post7.isClosed === "false" || this.post7.isClosed === false){
        if (registry.actualPost === 7) {
            this.post7.animations.play('post-active', 5, true);
        } else {
            this.post7.animations.play('post-enable', 5, true);        
        }
    } else {
        this.post7.animations.play('post-buy', 5, true);
    }
    
    if (this.post8.isClosed === "false" || this.post8.isClosed === false){
        if (registry.actualPost === 8) {
            this.post8.animations.play('post-active', 5, true);
        } else {
            this.post8.animations.play('post-enable', 5, true);        
        }
    } else {
        this.post8.animations.play('post-buy', 5, true);
    }
    
    
    
    
    if (shop.storeActive === 3) {
        this.post0.x = registry.width * 0.16; this.post0.y = registry.height * 0.33; this.post0.alpha = 1;
        this.post1.x = this.post0.x + this.post0.width * 1.15; this.post1.y = this.post0.y; this.post1.alpha = 1;
        this.post2.x = this.post1.x + this.post1.width * 1.15; this.post2.y = this.post1.y; this.post2.alpha = 1;
        this.post3.x = this.post2.x + this.post2.width * 1.15; this.post3.y = this.post2.y; this.post3.alpha = 1;
        this.post4.x = this.post0.x; this.post4.y = this.post0.y + this.post0.height * 1.15; this.post4.alpha = 1;
        this.post5.x = this.post4.x + this.post4.width * 1.15; this.post5.y = this.post4.y; this.post5.alpha = 1;
        this.post6.x = this.post5.x + this.post5.width * 1.15; this.post6.y = this.post5.y; this.post6.alpha = 1;
        this.post7.x = this.post6.x + this.post6.width * 1.15; this.post7.y = this.post6.y; this.post7.alpha = 1;
        this.post8.x = this.post4.x; this.post8.y = this.post4.y + this.post4.height * 1.15; this.post8.alpha = 1;
        
    } else {
        this.post0.x = -100; this.post0.y = -100; this.post0.alpha = 0;
        this.post1.x = -100; this.post1.y = -100; this.post1.alpha = 0;
        this.post2.x = -100; this.post2.y = -100; this.post2.alpha = 0;
        this.post3.x = -100; this.post3.y = -100; this.post3.alpha = 0;
        this.post4.x = -100; this.post4.y = -100; this.post4.alpha = 0;
        this.post5.x = -100; this.post5.y = -100; this.post5.alpha = 0;
        this.post6.x = -100; this.post6.y = -100; this.post6.alpha = 0;
        this.post7.x = -100; this.post7.y = -100; this.post7.alpha = 0;
        this.post8.x = -100; this.post8.y = -100; this.post8.alpha = 0;
        
    }
};