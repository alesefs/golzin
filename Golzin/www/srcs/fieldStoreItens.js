function fieldStoreItens(game) {
    'use strict';
    this.game = game;
}

fieldStoreItens.prototype.fieldItens = function () {
    'use strict';
    
    this.field0 = this.game.add.button(registry.width * 0.16, registry.height * 0.33, 'itens-field', this.cf0Act, this);
    this.field0.anchor.set(0.5);
    this.field0.animations.add('field-buy', [0], 10, false);
    this.field0.animations.add('field-enable', [10], 10, false);
    this.field0.animations.add('field-active', [20], 10, false);
    this.field0.price = 0;
    this.field0.isClosed = false;
    
    if (this.field0.isClosed === "false" || this.field0.isClosed === false){
        if (registry.actualField === 0) {
            this.field0.animations.play('field-active', 5, true);
        } else {
            this.field0.animations.play('field-enable', 5, true);        
        }
    } else {
        this.field0.animations.play('field-buy', 5, true);
    }
    
    this.field1 = this.game.add.button(this.field0.x + this.field0.width * 1.15,  this.field0.y, 'itens-field', this.cf1Act, this);
    this.field1.anchor.set(0.5);
    this.field1.animations.add('field-buy', [1], 10, false);
    this.field1.animations.add('field-enable', [11], 10, false);
    this.field1.animations.add('field-active', [21], 10, false);
    this.field1.price = 50;
    this.field1.isClosed = localStorage.getItem("fieldStyle1") || true;
    
    if (this.field1.isClosed === "false" || this.field1.isClosed === false){
        if (registry.actualField === 1) {
            this.field1.animations.play('field-active', 5, true);
        } else {
            this.field1.animations.play('field-enable', 5, true);        
        }
    } else {
        this.field1.animations.play('field-buy', 5, true);
    }
    
    this.field2 = this.game.add.button(this.field1.x + this.field1.width * 1.15,  this.field1.y, 'itens-field', this.cf2Act, this);
    this.field2.anchor.set(0.5);
    this.field2.animations.add('field-buy', [2], 10, false);
    this.field2.animations.add('field-enable', [12], 10, false);
    this.field2.animations.add('field-active', [22], 10, false);
    this.field2.price = 50;
    this.field2.isClosed = localStorage.getItem("fieldStyle2") || true;
    
    if (this.field2.isClosed === "false" || this.field2.isClosed === false){
        if (registry.actualField === 2) {
            this.field2.animations.play('field-active', 5, true);
        } else {
            this.field2.animations.play('field-enable', 5, true);        
        }
    } else {
        this.field2.animations.play('field-buy', 5, true);
    }
    
    this.field3 = this.game.add.button(this.field2.x + this.field2.width * 1.15,  this.field2.y, 'itens-field', this.cf3Act, this);
    this.field3.anchor.set(0.5);
    this.field3.animations.add('field-buy', [3], 10, false);
    this.field3.animations.add('field-enable', [13], 10, false);
    this.field3.animations.add('field-active', [23], 10, false);
    this.field3.price = 50;
    this.field3.isClosed = localStorage.getItem("fieldStyle3") || true;
    
    if (this.field3.isClosed === "false" || this.field3.isClosed === false){
        if (registry.actualField === 3) {
            this.field3.animations.play('field-active', 5, true);
        } else {
            this.field3.animations.play('field-enable', 5, true);        
        }
    } else {
        this.field3.animations.play('field-buy', 5, true);
    }
    
    this.field4 = this.game.add.button(this.field0.x, this.field0.y + this.field0.height * 1.15, 'itens-field', this.cf4Act, this);
    this.field4.anchor.set(0.5);
    this.field4.animations.add('field-buy', [4], 10, false);
    this.field4.animations.add('field-enable', [14], 10, false);
    this.field4.animations.add('field-active', [24], 10, false);
    this.field4.price = 50;
    this.field4.isClosed = localStorage.getItem("fieldStyle4") || true;
    
    if (this.field4.isClosed === "false" || this.field4.isClosed === false){
        if (registry.actualField === 4) {
            this.field4.animations.play('field-active', 5, true);
        } else {
            this.field4.animations.play('field-enable', 5, true);        
        }
    } else {
        this.field4.animations.play('field-buy', 5, true);
    }
    
    this.field5 = this.game.add.button(this.field4.x + this.field4.width * 1.15, this.field4.y, 'itens-field', this.cf5Act, this);
    this.field5.anchor.set(0.5);
    this.field5.animations.add('field-buy', [5], 10, false);
    this.field5.animations.add('field-enable', [15], 10, false);
    this.field5.animations.add('field-active', [25], 10, false);
    this.field5.price = 50;
    this.field5.isClosed = localStorage.getItem("fieldStyle5") || true;
    
    if (this.field5.isClosed === "false" || this.field5.isClosed === false){
        if (registry.actualField === 5) {
            this.field5.animations.play('field-active', 5, true);
        } else {
            this.field5.animations.play('field-enable', 5, true);        
        }
    } else {
        this.field5.animations.play('field-buy', 5, true);
    }
    
    this.field6 = this.game.add.button(this.field5.x + this.field5.width * 1.15, this.field5.y, 'itens-field', this.cf6Act, this);
    this.field6.anchor.set(0.5);
    this.field6.animations.add('field-buy', [6], 10, false);
    this.field6.animations.add('field-enable', [16], 10, false);
    this.field6.animations.add('field-active', [26], 10, false);
    this.field6.price = 50;
    this.field6.isClosed = localStorage.getItem("fieldStyle6") || true;
    
    if (this.field6.isClosed === "false" || this.field6.isClosed === false){
        if (registry.actualField === 6) {
            this.field6.animations.play('field-active', 5, true);
        } else {
            this.field6.animations.play('field-enable', 5, true);        
        }
    } else {
        this.field6.animations.play('field-buy', 5, true);
    }
    
    this.field7 = this.game.add.button(this.field6.x + this.field6.width * 1.15, this.field6.y, 'itens-field', this.cf7Act, this);
    this.field7.anchor.set(0.5);
    this.field7.animations.add('field-buy', [7], 10, false);
    this.field7.animations.add('field-enable', [17], 10, false);
    this.field7.animations.add('field-active', [27], 10, false);
    this.field7.price = 50;
    this.field7.isClosed = localStorage.getItem("fieldStyle7") || true;
    
    if (this.field7.isClosed === "false" || this.field7.isClosed === false){
        if (registry.actualField === 7) {
            this.field7.animations.play('field-active', 5, true);
        } else {
            this.field7.animations.play('field-enable', 5, true);        
        }
    } else {
        this.field7.animations.play('field-buy', 5, true);
    }
    
    this.field8 = this.game.add.button(this.field4.x, this.field4.y + this.field4.height * 1.15, 'itens-field', this.cf8Act, this);
    this.field8.anchor.set(0.5);
    this.field8.animations.add('field-buy', [8], 10, false);
    this.field8.animations.add('field-enable', [18], 10, false);
    this.field8.animations.add('field-active', [28], 10, false);
    this.field8.price = 50;
    this.field8.isClosed = localStorage.getItem("fieldStyle8") || true;
    
    if (this.field8.isClosed === "false" || this.field8.isClosed === false){
        if (registry.actualField === 8) {
            this.field8.animations.play('field-active', 5, true);
        } else {
            this.field8.animations.play('field-enable', 5, true);        
        }
    } else {
        this.field8.animations.play('field-buy', 5, true);
    }
    
    this.field9 = this.game.add.button(this.field8.x + this.field8.width * 1.15, this.field8.y, 'itens-field', this.cf9Act, this);
    this.field9.anchor.set(0.5);
    this.field9.animations.add('field-buy', [9], 10, false);
    this.field9.animations.add('field-enable', [19], 10, false);
    this.field9.animations.add('field-active', [29], 10, false);
    this.field9.price = 50;
    this.field9.isClosed = localStorage.getItem("fieldStyle9") || true;
    
    if (this.field9.isClosed === "false" || this.field9.isClosed === false){
        if (registry.actualField === 9) {
            this.field9.animations.play('field-active', 5, true);
        } else {
            this.field9.animations.play('field-enable', 5, true);        
        }
    } else {
        this.field9.animations.play('field-buy', 5, true);
    }
    
};



fieldStoreItens.prototype.cf0Act = function () {
    'use strict';
    registry.chooseField = 0;
    registry.actualField = 0;
    localStorage.setItem("fieldActual", registry.actualField);
    bg.store();
};

fieldStoreItens.prototype.cf1Act = function () {
    'use strict';
    if (this.field1.isClosed === true) {
        if (registry.coins >= this.field1.price) {
            this.chooseField = 1;
            shop.showModal();
        } else {
            this.noMoney();
        }
    } else {
        registry.chooseField = 1;
        registry.actualField = 1;
        localStorage.setItem("fieldActual", registry.actualField);
        bg.store();    
    }
};

fieldStoreItens.prototype.cf2Act = function () {
    'use strict';
    if (this.field2.isClosed === true) {
        if (registry.coins >= this.field2.price) {
            this.chooseField = 2;
            shop.showModal();
        } else {
            this.noMoney();
        }
    } else {
        registry.chooseField = 2;
        registry.actualField = 2;
        localStorage.setItem("fieldActual", registry.actualField);
        bg.store();    
    }
};

fieldStoreItens.prototype.cf3Act = function () {
    'use strict';
    if (this.field3.isClosed === true) {
        if (registry.coins >= this.field3.price) {
            this.chooseField = 3;
            shop.showModal();
        } else {
            this.noMoney();
        }
    } else {
        registry.chooseField = 3;
        registry.actualField = 3;
        localStorage.setItem("fieldActual", registry.actualField);
        bg.store();    
    }
};

fieldStoreItens.prototype.cf4Act = function () {
    'use strict';
    if (this.field4.isClosed === true) {
        if (registry.coins >= this.field4.price) {
            this.chooseField = 4;
            shop.showModal();
        } else {
            this.noMoney();
        }
    } else {
        registry.chooseField = 4;
        registry.actualField = 4;
        localStorage.setItem("fieldActual", registry.actualField);
        bg.store();    
    }
};

fieldStoreItens.prototype.cf5Act = function () {
    'use strict';
    if (this.field5.isClosed === true) {
        if (registry.coins >= this.field5.price) {
            this.chooseField = 5;
            shop.showModal();
        } else {
            this.noMoney();
        }
    } else {
        registry.chooseField = 5;
        registry.actualField = 5;
        localStorage.setItem("fieldActual", registry.actualField);
        bg.store();    
    }
};

fieldStoreItens.prototype.cf6Act = function () {
    'use strict';
    if (this.field6.isClosed === true) {
        if (registry.coins >= this.field6.price) {
            this.chooseField = 6;
            shop.showModal();
        } else {
            this.noMoney();
        }
    } else {
        registry.chooseField = 6;
        registry.actualField = 6;
        localStorage.setItem("fieldActual", registry.actualField);
        bg.store();    
    }
};

fieldStoreItens.prototype.cf7Act = function () {
    'use strict';
    if (this.field7.isClosed === true) {
        if (registry.coins >= this.field7.price) {
            this.chooseField = 7;
            shop.showModal();
        } else {
            this.noMoney();
        }
    } else {
        registry.chooseField = 7;
        registry.actualField = 7;
        localStorage.setItem("fieldActual", registry.actualField);
        bg.store();    
    }
};

fieldStoreItens.prototype.cf8Act = function () {
    'use strict';
    if (this.field8.isClosed === true) {
        if (registry.coins >= this.field8.price) {
            this.chooseField = 8;
            shop.showModal();
        } else {
            this.noMoney();
        }
    } else {
        registry.chooseField = 8;
        registry.actualField = 8;
        localStorage.setItem("fieldActual", registry.actualField);
        bg.store();    
    }
};

fieldStoreItens.prototype.cf9Act = function () {
    'use strict';
    if (this.field9.isClosed === true) {
        if (registry.coins >= this.field9.price) {
            this.chooseField = 9;
            shop.showModal();
        } else {
            this.noMoney();
        }
    } else {
        registry.chooseField = 9;
        registry.actualField = 9;
        localStorage.setItem("fieldActual", registry.actualField);
        bg.store();    
    }
};




fieldStoreItens.prototype.noMoney = function () {
    'use strict';
    shop.textMain.text = "not money";
    shop.textMain.addColor('#f00', 0);
    shop.textMain.x = shop.scoreboard.width / 2 - 20;
};




fieldStoreItens.prototype.update = function () {
    'use strict';
    if (this.field0.isClosed === "false" || this.field0.isClosed === false){
        if (registry.actualField === 0) {
            this.field0.animations.play('field-active', 5, true);
        } else {
            this.field0.animations.play('field-enable', 5, true);        
        }
    } else {
        this.field0.animations.play('field-buy', 5, true);
    }
    
    if (this.field1.isClosed === "false" || this.field1.isClosed === false){
        if (registry.actualField === 1) {
            this.field1.animations.play('field-active', 5, true);
        } else {
            this.field1.animations.play('field-enable', 5, true);        
        }
    } else {
        this.field1.animations.play('field-buy', 5, true);
    }
    
    if (this.field2.isClosed === "false" || this.field2.isClosed === false){
        if (registry.actualField === 2) {
            this.field2.animations.play('field-active', 5, true);
        } else {
            this.field2.animations.play('field-enable', 5, true);        
        }
    } else {
        this.field2.animations.play('field-buy', 5, true);
    }
    
    if (this.field3.isClosed === "false" || this.field3.isClosed === false){
        if (registry.actualField === 3) {
            this.field3.animations.play('field-active', 5, true);
        } else {
            this.field3.animations.play('field-enable', 5, true);        
        }
    } else {
        this.field3.animations.play('field-buy', 5, true);
    }
    
    if (this.field4.isClosed === "false" || this.field4.isClosed === false){
        if (registry.actualField === 4) {
            this.field4.animations.play('field-active', 5, true);
        } else {
            this.field4.animations.play('field-enable', 5, true);        
        }
    } else {
        this.field4.animations.play('field-buy', 5, true);
    }
    
    if (this.field5.isClosed === "false" || this.field5.isClosed === false){
        if (registry.actualField === 5) {
            this.field5.animations.play('field-active', 5, true);
        } else {
            this.field5.animations.play('field-enable', 5, true);        
        }
    } else {
        this.field5.animations.play('field-buy', 5, true);
    }
    
    if (this.field6.isClosed === "false" || this.field6.isClosed === false){
        if (registry.actualField === 6) {
            this.field6.animations.play('field-active', 5, true);
        } else {
            this.field6.animations.play('field-enable', 5, true);        
        }
    } else {
        this.field6.animations.play('field-buy', 5, true);
    }
    
    if (this.field7.isClosed === "false" || this.field7.isClosed === false){
        if (registry.actualField === 7) {
            this.field7.animations.play('field-active', 5, true);
        } else {
            this.field7.animations.play('field-enable', 5, true);        
        }
    } else {
        this.field7.animations.play('field-buy', 5, true);
    }
    
    if (this.field8.isClosed === "false" || this.field8.isClosed === false){
        if (registry.actualField === 8) {
            this.field8.animations.play('field-active', 5, true);
        } else {
            this.field8.animations.play('field-enable', 5, true);        
        }
    } else {
        this.field8.animations.play('field-buy', 5, true);
    }
    
    if (this.field9.isClosed === "false" || this.field9.isClosed === false){
        if (registry.actualField === 9) {
            this.field9.animations.play('field-active', 5, true);
        } else {
            this.field9.animations.play('field-enable', 5, true);        
        }
    } else {
        this.field9.animations.play('field-buy', 5, true);
    }
    
    
    
    if (shop.storeActive === 1) {
        this.field0.x = registry.width * 0.16; this.field0.y = registry.height * 0.33; this.field0.alpha = 1;
        this.field1.x = this.field0.x + this.field0.width * 1.15; this.field1.y = this.field0.y; this.field1.alpha = 1;
        this.field2.x = this.field1.x + this.field1.width * 1.15; this.field2.y = this.field1.y; this.field2.alpha = 1;
        this.field3.x = this.field2.x + this.field2.width * 1.15; this.field3.y = this.field2.y; this.field3.alpha = 1;
        this.field4.x = this.field0.x; this.field4.y = this.field0.y + this.field0.height * 1.15; this.field4.alpha = 1;
        this.field5.x = this.field4.x + this.field4.width * 1.15; this.field5.y = this.field4.y; this.field5.alpha = 1;
        this.field6.x = this.field5.x + this.field5.width * 1.15; this.field6.y = this.field5.y; this.field6.alpha = 1;
        this.field7.x = this.field6.x + this.field6.width * 1.15; this.field7.y = this.field6.y; this.field7.alpha = 1;
        this.field8.x = this.field4.x; this.field8.y = this.field4.y + this.field4.height * 1.15; this.field8.alpha = 1;
        this.field9.x = this.field8.x + this.field8.width * 1.15; this.field9.y = this.field8.y; this.field9.alpha = 1;
        
    } else {
        this.field0.x = -100; this.field0.y = -100; this.field0.alpha = 0;
        this.field1.x = -100; this.field1.y = -100; this.field1.alpha = 0;
        this.field2.x = -100; this.field2.y = -100; this.field2.alpha = 0;
        this.field3.x = -100; this.field3.y = -100; this.field3.alpha = 0;
        this.field4.x = -100; this.field4.y = -100; this.field4.alpha = 0;
        this.field5.x = -100; this.field5.y = -100; this.field5.alpha = 0;
        this.field6.x = -100; this.field6.y = -100; this.field6.alpha = 0;
        this.field7.x = -100; this.field7.y = -100; this.field7.alpha = 0;
        this.field8.x = -100; this.field8.y = -100; this.field8.alpha = 0;
        this.field9.x = -100; this.field9.y = -100; this.field9.alpha = 0;
        
    }
};