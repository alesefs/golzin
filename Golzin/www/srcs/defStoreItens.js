function defStoreItens(game) {
    'use strict';
    this.game = game;
}

defStoreItens.prototype.defItens = function () {
    'use strict';
    
    this.def0 = this.game.add.button(registry.width * 0.16, registry.height * 0.33, 'itens-def', this.cd0Act, this);
    this.def0.anchor.set(0.5);
    this.def0.animations.add('def-buy', [0], 10, false);
    this.def0.animations.add('def-enable', [10], 10, false);
    this.def0.animations.add('def-active', [20], 10, false);
    this.def0.price = 0;
    this.def0.isClosed = false;
    
    if (this.def0.isClosed === "false" || this.def0.isClosed === false){
        if (registry.actualDef === 0) {
            this.def0.animations.play('def-active', 5, true);
        } else {
            this.def0.animations.play('def-enable', 5, true);        
        }
    } else {
        this.def0.animations.play('def-buy', 5, true);
    }

    this.def1 = this.game.add.button(this.def0.x + this.def0.width * 1.15,  this.def0.y, 'itens-def', this.cd1Act, this);
    this.def1.anchor.set(0.5);
    this.def1.animations.add('def-buy', [1], 10, false);
    this.def1.animations.add('def-enable', [11], 10, false);
    this.def1.animations.add('def-active', [21], 10, false);
    this.def1.price = 50;
    this.def1.isClosed = localStorage.getItem("defStyle1") || true;
    
    if (this.def1.isClosed === "false" || this.def1.isClosed === false){
        if (registry.actualDef === 1) {
            this.def1.animations.play('def-active', 5, true);
        } else {
            this.def1.animations.play('def-enable', 5, true);        
        }
    } else {
        this.def1.animations.play('def-buy', 5, true);
    }
    
    this.def2 = this.game.add.button(this.def1.x + this.def1.width * 1.15,  this.def1.y, 'itens-def', this.cd2Act, this);
    this.def2.anchor.set(0.5);
    this.def2.animations.add('def-buy', [2], 10, false);
    this.def2.animations.add('def-enable', [12], 10, false);
    this.def2.animations.add('def-active', [22], 10, false);
    this.def2.price = 50;
    this.def2.isClosed = localStorage.getItem("defStyle2") || true;
    
    if (this.def2.isClosed === "false" || this.def2.isClosed === false){
        if (registry.actualDef === 2) {
            this.def2.animations.play('def-active', 5, true);
        } else {
            this.def2.animations.play('def-enable', 5, true);        
        }
    } else {
        this.def2.animations.play('def-buy', 5, true);
    }
    
    this.def3 = this.game.add.button(this.def2.x + this.def2.width * 1.15,  this.def2.y, 'itens-def', this.cd3Act, this);
    this.def3.anchor.set(0.5);
    this.def3.animations.add('def-buy', [3], 10, false);
    this.def3.animations.add('def-enable', [13], 10, false);
    this.def3.animations.add('def-active', [23], 10, false);
    this.def3.price = 50;
    this.def3.isClosed = localStorage.getItem("defStyle3") || true;
    
    if (this.def3.isClosed === "false" || this.def3.isClosed === false){
        if (registry.actualDef === 3) {
            this.def3.animations.play('def-active', 5, true);
        } else {
            this.def3.animations.play('def-enable', 5, true);        
        }
    } else {
        this.def3.animations.play('def-buy', 5, true);
    }
    
    this.def4 = this.game.add.button(this.def0.x, this.def0.y + this.def0.height * 1.15, 'itens-def', this.cd4Act, this);
    this.def4.anchor.set(0.5);
    this.def4.animations.add('def-buy', [4], 10, false);
    this.def4.animations.add('def-enable', [14], 10, false);
    this.def4.animations.add('def-active', [24], 10, false);
    this.def4.price = 50;
    this.def4.isClosed = localStorage.getItem("defStyle4") || true;
    
    if (this.def4.isClosed === "false" || this.def4.isClosed === false){
        if (registry.actualDef === 4) {
            this.def4.animations.play('def-active', 5, true);
        } else {
            this.def4.animations.play('def-enable', 5, true);        
        }
    } else {
        this.def4.animations.play('def-buy', 5, true);
    }
    
    this.def5 = this.game.add.button(this.def4.x + this.def4.width * 1.15, this.def4.y, 'itens-def', this.cd5Act, this);
    this.def5.anchor.set(0.5);
    this.def5.animations.add('def-buy', [5], 10, false);
    this.def5.animations.add('def-enable', [15], 10, false);
    this.def5.animations.add('def-active', [25], 10, false);
    this.def5.price = 50;
    this.def5.isClosed = localStorage.getItem("defStyle5") || true;
    
    if (this.def5.isClosed === "false" || this.def5.isClosed === false){
        if (registry.actualDef === 5) {
            this.def5.animations.play('def-active', 5, true);
        } else {
            this.def5.animations.play('def-enable', 5, true);        
        }
    } else {
        this.def5.animations.play('def-buy', 5, true);
    }
    
    this.def6 = this.game.add.button(this.def5.x + this.def5.width * 1.15, this.def5.y, 'itens-def', this.cd6Act, this);
    this.def6.anchor.set(0.5);
    this.def6.animations.add('def-buy', [6], 10, false);
    this.def6.animations.add('def-enable', [16], 10, false);
    this.def6.animations.add('def-active', [26], 10, false);
    this.def6.price = 50;
    this.def6.isClosed = localStorage.getItem("defStyle6") || true;
    
    if (this.def6.isClosed === "false" || this.def6.isClosed === false){
        if (registry.actualDef === 6) {
            this.def6.animations.play('def-active', 5, true);
        } else {
            this.def6.animations.play('def-enable', 5, true);        
        }
    } else {
        this.def6.animations.play('def-buy', 5, true);
    }
    
    this.def7 = this.game.add.button(this.def6.x + this.def6.width * 1.15, this.def6.y, 'itens-def', this.cd7Act, this);
    this.def7.anchor.set(0.5);
    this.def7.animations.add('def-buy', [7], 10, false);
    this.def7.animations.add('def-enable', [17], 10, false);
    this.def7.animations.add('def-active', [27], 10, false);
    this.def7.price = 50;
    this.def7.isClosed = localStorage.getItem("defStyle7") || true;
    
    if (this.def7.isClosed === "false" || this.def7.isClosed === false){
        if (registry.actualDef === 7) {
            this.def7.animations.play('def-active', 5, true);
        } else {
            this.def7.animations.play('def-enable', 5, true);        
        }
    } else {
        this.def7.animations.play('def-buy', 5, true);
    }
    
    this.def8 = this.game.add.button(this.def4.x, this.def4.y + this.def4.height * 1.15, 'itens-def', this.cd8Act, this);
    this.def8.anchor.set(0.5);
    this.def8.animations.add('def-buy', [8], 10, false);
    this.def8.animations.add('def-enable', [18], 10, false);
    this.def8.animations.add('def-active', [28], 10, false);
    this.def8.price = 50;
    this.def8.isClosed = localStorage.getItem("defStyle8") || true;
    
    if (this.def8.isClosed === "false" || this.def8.isClosed === false){
        if (registry.actualDef === 8) {
            this.def8.animations.play('def-active', 5, true);
        } else {
            this.def8.animations.play('def-enable', 5, true);        
        }
    } else {
        this.def8.animations.play('def-buy', 5, true);
    }
    
    this.def9 = this.game.add.button(this.def8.x + this.def8.height * 1.15, this.def8.y, 'itens-def', this.cd9Act, this);
    this.def9.anchor.set(0.5);
    this.def9.animations.add('def-buy', [9], 10, false);
    this.def9.animations.add('def-enable', [19], 10, false);
    this.def9.animations.add('def-active', [29], 10, false);
    this.def9.price = 50;
    this.def9.isClosed = localStorage.getItem("defStyle9") || true;
    
    if (this.def9.isClosed === "false" || this.def9.isClosed === false){
        if (registry.actualDef === 9) {
            this.def9.animations.play('def-active', 5, true);
        } else {
            this.def9.animations.play('def-enable', 5, true);        
        }
    } else {
        this.def9.animations.play('def-buy', 5, true);
    }
};




defStoreItens.prototype.cd0Act = function () {
    'use strict';
    registry.chooseDef = 0;
    registry.actualDef = 0;
    localStorage.setItem("defActual", registry.actualDef);
    def.store();
};

defStoreItens.prototype.cd1Act = function () {
    'use strict';
    if (this.def1.isClosed === true) {
        if (registry.coins >= this.def1.price) {
            this.chooseDef = 1;
            shop.showModal();
        } else {
            this.noMoney();
        }
    } else {
        registry.chooseDef = 1;
        registry.actualDef = 1;
        localStorage.setItem("defActual", registry.actualDef);
        def.store();    
    }
};

defStoreItens.prototype.cd2Act = function () {
    'use strict';
    if (this.def2.isClosed === true) {
        if (registry.coins >= this.def2.price) {
            this.chooseDef = 2;
            shop.showModal();
        } else {
            this.noMoney();
        }
    } else {
        registry.chooseDef = 2;
        registry.actualDef = 2;
        localStorage.setItem("defActual", registry.actualDef);
        def.store();    
    }
};

defStoreItens.prototype.cd3Act = function () {
    'use strict';
    if (this.def3.isClosed === true) {
        if (registry.coins >= this.def3.price) {
            this.chooseDef = 3;
            shop.showModal();
        } else {
            this.noMoney();
        }
    } else {
        registry.chooseDef = 3;
        registry.actualDef = 3;
        localStorage.setItem("defActual", registry.actualDef);
        def.store();    
    }
};

defStoreItens.prototype.cd4Act = function () {
    'use strict';
    if (this.def4.isClosed === true) {
        if (registry.coins >= this.def4.price) {
            this.chooseDef = 4;
            shop.showModal();
        } else {
            this.noMoney();
        }
    } else {
        registry.chooseDef = 4;
        registry.actualDef = 4;
        localStorage.setItem("defActual", registry.actualDef);
        def.store();    
    }
};

defStoreItens.prototype.cd5Act = function () {
    'use strict';
    if (this.def5.isClosed === true) {
        if (registry.coins >= this.def5.price) {
            this.chooseDef = 5;
            shop.showModal();
        } else {
            this.noMoney();
        }
    } else {
        registry.chooseDef = 5;
        registry.actualDef = 5;
        localStorage.setItem("defActual", registry.actualDef);
        def.store();    
    }
};

defStoreItens.prototype.cd6Act = function () {
    'use strict';
    if (this.def6.isClosed === true) {
        if (registry.coins >= this.def6.price) {
            this.chooseDef = 6;
            shop.showModal();
        } else {
            this.noMoney();
        }
    } else {
        registry.chooseDef = 6;
        registry.actualDef = 6;
        localStorage.setItem("defActual", registry.actualDef);
        def.store();    
    }
};

defStoreItens.prototype.cd7Act = function () {
    'use strict';
    if (this.def7.isClosed === true) {
        if (registry.coins >= this.def7.price) {
            this.chooseDef = 7;
            shop.showModal();
        } else {
            this.noMoney();
        }
    } else {
        registry.chooseDef = 7;
        registry.actualDef = 7;
        localStorage.setItem("defActual", registry.actualDef);
        def.store();    
    }
};

defStoreItens.prototype.cd8Act = function () {
    'use strict';
    if (this.def8.isClosed === true) {
        if (registry.coins >= this.def8.price) {
            this.chooseDef = 8;
            shop.showModal();
        } else {
            this.noMoney();
        }
    } else {
        registry.chooseDef = 8;
        registry.actualDef = 8;
        localStorage.setItem("defActual", registry.actualDef);
        def.store();    
    }
};

defStoreItens.prototype.cd9Act = function () {
    'use strict';
    if (this.def9.isClosed === true) {
        if (registry.coins >= this.def9.price) {
            this.chooseDef = 9;
            shop.showModal();
        } else {
            this.noMoney();
        }
    } else {
        registry.chooseDef = 9;
        registry.actualDef = 9;
        localStorage.setItem("defActual", registry.actualDef);
        def.store();    
    }
};



defStoreItens.prototype.noMoney = function () {
    'use strict';
    shop.textMain.text = "not money";
    shop.textMain.addColor('#f00', 0);
    shop.textMain.x = shop.scoreboard.width / 2 - 20;
};


defStoreItens.prototype.update = function () {
    'use strict';
    
    if (this.def0.isClosed === "false" || this.def0.isClosed === false){
        if (registry.actualDef === 0) {
            this.def0.animations.play('def-active', 5, true);
        } else {
            this.def0.animations.play('def-enable', 5, true);        
        }
    } else {
        this.def0.animations.play('def-buy', 5, true);
    }
    
    if (this.def1.isClosed === "false" || this.def1.isClosed === false){
        if (registry.actualDef === 1) {
            this.def1.animations.play('def-active', 5, true);
        } else {
            this.def1.animations.play('def-enable', 5, true);        
        }
    } else {
        this.def1.animations.play('def-buy', 5, true);
    }
    
    if (this.def2.isClosed === "false" || this.def2.isClosed === false){
        if (registry.actualDef === 2) {
            this.def2.animations.play('def-active', 5, true);
        } else {
            this.def2.animations.play('def-enable', 5, true);        
        }
    } else {
        this.def2.animations.play('def-buy', 5, true);
    }
    
    if (this.def3.isClosed === "false" || this.def3.isClosed === false){
        if (registry.actualDef === 3) {
            this.def3.animations.play('def-active', 5, true);
        } else {
            this.def3.animations.play('def-enable', 5, true);        
        }
    } else {
        this.def3.animations.play('def-buy', 5, true);
    }
    
    if (this.def4.isClosed === "false" || this.def4.isClosed === false){
        if (registry.actualDef === 4) {
            this.def4.animations.play('def-active', 5, true);
        } else {
            this.def4.animations.play('def-enable', 5, true);        
        }
    } else {
        this.def4.animations.play('def-buy', 5, true);
    }
    
    if (this.def5.isClosed === "false" || this.def5.isClosed === false){
        if (registry.actualDef === 5) {
            this.def5.animations.play('def-active', 5, true);
        } else {
            this.def5.animations.play('def-enable', 5, true);        
        }
    } else {
        this.def5.animations.play('def-buy', 5, true);
    }
    
    if (this.def6.isClosed === "false" || this.def6.isClosed === false){
        if (registry.actualDef === 6) {
            this.def6.animations.play('def-active', 5, true);
        } else {
            this.def6.animations.play('def-enable', 5, true);        
        }
    } else {
        this.def6.animations.play('def-buy', 5, true);
    }
    
    if (this.def7.isClosed === "false" || this.def7.isClosed === false){
        if (registry.actualDef === 7) {
            this.def7.animations.play('def-active', 5, true);
        } else {
            this.def7.animations.play('def-enable', 5, true);        
        }
    } else {
        this.def7.animations.play('def-buy', 5, true);
    }
    
    if (this.def8.isClosed === "false" || this.def8.isClosed === false){
        if (registry.actualDef === 8) {
            this.def8.animations.play('def-active', 5, true);
        } else {
            this.def8.animations.play('def-enable', 5, true);        
        }
    } else {
        this.def8.animations.play('def-buy', 5, true);
    }
    
    if (this.def9.isClosed === "false" || this.def9.isClosed === false){
        if (registry.actualDef === 9) {
            this.def9.animations.play('def-active', 5, true);
        } else {
            this.def9.animations.play('def-enable', 5, true);        
        }
    } else {
        this.def9.animations.play('def-buy', 5, true);
    }
    
    
    if (shop.storeActive === 2) {
        this.def0.x = registry.width * 0.16; this.def0.y = registry.height * 0.33; this.def0.alpha = 1;
        this.def1.x = this.def0.x + this.def0.width * 1.15; this.def1.y = this.def0.y; this.def1.alpha = 1;
        this.def2.x = this.def1.x + this.def1.width * 1.15; this.def2.y = this.def1.y; this.def2.alpha = 1;
        this.def3.x = this.def2.x + this.def2.width * 1.15; this.def3.y = this.def2.y; this.def3.alpha = 1;
        this.def4.x = this.def0.x; this.def4.y = this.def0.y + this.def0.height * 1.15; this.def4.alpha = 1;
        this.def5.x = this.def4.x + this.def4.width * 1.15; this.def5.y = this.def4.y; this.def5.alpha = 1;
        this.def6.x = this.def5.x + this.def5.width * 1.15; this.def6.y = this.def5.y; this.def6.alpha = 1;
        this.def7.x = this.def6.x + this.def6.width * 1.15; this.def7.y = this.def6.y; this.def7.alpha = 1;
        this.def8.x = this.def4.x; this.def8.y = this.def4.y + this.def4.height * 1.15; this.def8.alpha = 1;
        this.def9.x = this.def8.x + this.def8.width * 1.15; this.def9.y = this.def8.y; this.def9.alpha = 1;
        
    } else {
        this.def0.x = -100; this.def0.y = -100; this.def0.alpha = 0;
        this.def1.x = -100; this.def1.y = -100; this.def1.alpha = 0;
        this.def2.x = -100; this.def2.y = -100; this.def2.alpha = 0;
        this.def3.x = -100; this.def3.y = -100; this.def3.alpha = 0;
        this.def4.x = -100; this.def4.y = -100; this.def4.alpha = 0;
        this.def5.x = -100; this.def5.y = -100; this.def5.alpha = 0;
        this.def6.x = -100; this.def6.y = -100; this.def6.alpha = 0;
        this.def7.x = -100; this.def7.y = -100; this.def7.alpha = 0;
        this.def8.x = -100; this.def8.y = -100; this.def8.alpha = 0;
        this.def9.x = -100; this.def9.y = -100; this.def9.alpha = 0;
    }
    
};