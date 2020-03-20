function Shop(game) {
    'use strict';
    this.game = game;
}


Shop.prototype.create = function () {
    'use strict';
    
    var bmd = this.game.add.bitmapData(50, 50);
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, 50, 50);
    bmd.ctx.fillStyle = "white";
    bmd.ctx.fill();
    
    var mask = this.game.add.sprite(0, 0, bmd);
    mask.width = registry.width;
    mask.height = registry.height;
    mask.alpha = 0.9;
    
    this.hud();
    this.topButtons();
    
    ballItens.ballItens();
    fieldItens.fieldItens();
    defItens.defItens();
    postItens.postItens();
    
    this.popUp();
    this.storeActive = 0;//aba ativa de compra
    
    
    this.clearText = 0;//apaga text sem dinheiro
};



//hud
Shop.prototype.hud = function () {
    'use strict';
    this.scoreboard = this.game.add.sprite(0, 0, 'scoreboard');
    this.scoreboard.scale.set(0.85, 1);
    this.scoreboard.height = registry.height * 0.1;
    this.scoreboard.x = registry.width / 2;
    this.scoreboard.y = this.scoreboard.height / 2;
    this.scoreboard.anchor.set(0.5);
    
    
    this.home = this.game.add.button(registry.width * 0.15, this.scoreboard.height / 2 + 5, 'all-btns', this.backAct, this);
    this.home.animations.add('home', [5], 10, false);
    this.home.animations.play('home', 5, true);
    this.home.anchor.set(0.5);
    this.home.scale.set(0.75);
           
    this.textMain = this.game.add.text(this.scoreboard.width / 2, this.scoreboard.height / 2 + 5, 'STORE', { font: '46px scoreboard', fill: '#ffffff', align: "center" });
    this.textMain.anchor.set(0.5);
     
    //this.coin = this.game.add.button(this.textMain.x + this.textMain.width, this.scoreboard.height / 2 + 5, 'all-btns', this.coinAct, this);
    this.coin = this.game.add.sprite(this.textMain.x + this.textMain.width, this.scoreboard.height / 2 + 5, 'all-btns');
    this.coin.animations.add('coin', [11], 10, false);
    this.coin.animations.play('coin', 5, true);
    this.coin.anchor.set(0.5);
    
    this.textCoin = this.game.add.text(registry.width - registry.width * 0.15, this.coin.y, registry.coins, { font: '40px scoreboard', fill: '#ff0', align: "left" });
    this.textCoin.anchor.set(0.5);
};

/*Shop.prototype.coinAct = function () {//insere dinheiro
    'use strict';
    registry.coins += 10;
    localStorage.setItem("coinsStatus", registry.coins);
    this.textCoin.text = registry.coins;
};*/

Shop.prototype.backAct = function () {//volta menu
    'use strict';
    this.game.state.start('menu');
};



//botoes de abas de compras
Shop.prototype.topButtons = function () {
    'use strict';
    this.storeBall = this.game.add.button(registry.width * 0.17, registry.height * 0.2, 'shop-btns', this.ballAct, this);
    this.storeBall.anchor.set(0.5);
    this.storeBall.animations.add('ball-btn-dea', [0], 10, false);
    this.storeBall.animations.add('ball-btn-act', [4], 10, false);
    this.storeBall.animations.play('ball-btn-act', 5, true);
    
    this.storeField = this.game.add.button(this.storeBall.x + this.storeBall.width * 1.15, this.storeBall.y, 'shop-btns', this.fieldAct, this);
    this.storeField.anchor.set(0.5);
    this.storeField.animations.add('field-btn-dea', [2], 10, false);
    this.storeField.animations.add('field-btn-act', [6], 10, false);
    this.storeField.animations.play('field-btn-act', 5, true);
    
    this.storeDef = this.game.add.button(this.storeField.x + this.storeField.width * 1.15, this.storeField.y, 'shop-btns', this.defAct, this);
    this.storeDef.anchor.set(0.5);
    this.storeDef.animations.add('def-btn-dea', [3], 10, false);
    this.storeDef.animations.add('def-btn-act', [7], 10, false);
    this.storeDef.animations.play('def-btn-act', 5, true);
    
    this.storePost = this.game.add.button(this.storeDef.x + this.storeDef.width * 1.15, this.storeDef.y, 'shop-btns', this.postAct, this);
    this.storePost.anchor.set(0.5);
    this.storePost.animations.add('post-btn-dea', [1], 10, false);
    this.storePost.animations.add('post-btn-act', [5], 10, false);
    this.storePost.animations.play('post-btn-act', 5, true);
    
};

Shop.prototype.ballAct = function () {//ativa a tela de compra de bolas
    'use strict';
    this.storeActive = 0;
};

Shop.prototype.fieldAct = function () {
    'use strict';
    this.storeActive = 1;
};

Shop.prototype.defAct = function () {//ativa a tela de compra de bolas
    'use strict';
    this.storeActive = 2;
};

Shop.prototype.postAct = function () {
    'use strict';
    this.storeActive = 3;
};


Shop.prototype.update = function () {
    'use strict';
    if (this.storeActive === 0) {//bola
        this.storeBall.animations.play('ball-btn-act', 5, true);
        this.storeField.animations.play('field-btn-dea', 5, true);
        this.storeDef.animations.play('def-btn-dea', 5, true);
        this.storePost.animations.play('post-btn-dea', 5, true);
         
    } else if (this.storeActive === 1) {
        this.storeBall.animations.play('ball-btn-dea', 5, true);
        this.storeField.animations.play('field-btn-act', 5, true);
        this.storeDef.animations.play('def-btn-dea', 5, true);
        this.storePost.animations.play('post-btn-dea', 5, true);
        
    } else if (this.storeActive === 2) {
        this.storeBall.animations.play('ball-btn-dea', 5, true);
        this.storeField.animations.play('field-btn-dea', 5, true);
        this.storeDef.animations.play('def-btn-act', 5, true);
        this.storePost.animations.play('post-btn-dea', 5, true);
        
    } else if (this.storeActive === 3) {
        this.storeBall.animations.play('ball-btn-dea', 5, true);
        this.storeField.animations.play('field-btn-dea', 5, true);
        this.storeDef.animations.play('def-btn-dea', 5, true);
        this.storePost.animations.play('post-btn-act', 5, true);
        
     }
    
    //not money text
    if (this.textMain.text === "not money"){
        this.clearText += 1;
        if (this.clearText >= 50) {
            this.textMain.text = "store";
            this.textMain.addColor('#fff', 0);
            this.textMain.x = this.scoreboard.width / 2;
            this.clearText = 0;
        }
    }
    
    ballItens.update();
    fieldItens.update();
    defItens.update();
    postItens.update();
    
};


Shop.prototype.popUp = function () {
    'use strict'
    
    var bmd = this.game.add.bitmapData(50, 50);
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, 50, 50);
    bmd.ctx.fillStyle = "black";
    bmd.ctx.fill();
    
    this.maskBuy = this.game.add.sprite(0, 0, bmd);
    this.maskBuy.width = registry.width;
    this.maskBuy.height = registry.height;
    this.maskBuy.alpha = 0;
    
    this.modal = this.game.add.sprite(registry.width/2, registry.height/2, 'painel');
    this.modal.anchor.set(0.5);
    this.modal.alpha = 0;

    this.topText = this.game.add.text(this.modal.x, this.modal.y - this.modal.height/2 + 35, 'confirm', { font: '36px scoreboard', fill: "#ffffff", align: "center" });
    this.topText.anchor.set(0.5);
    this.topText.alpha = 0;

    this.okText = this.game.add.button(this.modal.x - this.modal.width/4, this.modal.y + 35, 'all-btns', this.buyModal, this);
    this.okText.animations.add('okText', [27], 10, false);
    this.okText.animations.play('okText', 5, true);
    this.okText.anchor.set(0.5);
    this.okText.scale.set(1.5);
    this.okText.alpha = 0;
    this.okText.inputEnabled = false;

    this.noText = this.game.add.button(this.modal.x + this.modal.width/4, this.modal.y + 35 , 'all-btns', this.hideModal, this);
    this.noText.animations.add('noText', [28], 10, false);
    this.noText.animations.play('noText', 5, true);
    this.noText.anchor.set(0.5);
    this.noText.scale.set(1.5);
    this.noText.alpha = 0;
    this.noText.inputEnabled = false;
};


Shop.prototype.showModal = function () {
    'use strict'
    this.maskBuy.alpha = 0.75;
    this.modal.alpha = 1;
    this.topText.alpha = 1;
    this.okText.alpha = 1;
    this.noText.alpha = 1;
    
    this.okText.inputEnabled = true;
    this.noText.inputEnabled = true;
    
    ballItens.ball0.inputEnabled = false;
    ballItens.ball1.inputEnabled = false;
    ballItens.ball2.inputEnabled = false;
    ballItens.ball3.inputEnabled = false;
    ballItens.ball4.inputEnabled = false;
    ballItens.ball5.inputEnabled = false;
    ballItens.ball6.inputEnabled = false;
    ballItens.ball7.inputEnabled = false;
    ballItens.ball8.inputEnabled = false;
    ballItens.ball9.inputEnabled = false;
    ballItens.ball10.inputEnabled = false;
    
    fieldItens.field0.inputEnabled = false;
    fieldItens.field1.inputEnabled = false;
    fieldItens.field2.inputEnabled = false;
    fieldItens.field3.inputEnabled = false;
    fieldItens.field4.inputEnabled = false;
    fieldItens.field5.inputEnabled = false;
    fieldItens.field6.inputEnabled = false;
    fieldItens.field7.inputEnabled = false;
    fieldItens.field8.inputEnabled = false;
    fieldItens.field9.inputEnabled = false;
    
    defItens.def0.inputEnabled = false;
    defItens.def1.inputEnabled = false;
    defItens.def2.inputEnabled = false;
    defItens.def3.inputEnabled = false;
    defItens.def4.inputEnabled = false;
    defItens.def5.inputEnabled = false;
    defItens.def6.inputEnabled = false;
    defItens.def7.inputEnabled = false;
    defItens.def8.inputEnabled = false;
    defItens.def9.inputEnabled = false;
    
    postItens.post0.inputEnabled = false;
    postItens.post1.inputEnabled = false;
    postItens.post2.inputEnabled = false;
    postItens.post3.inputEnabled = false;
    postItens.post4.inputEnabled = false;
    postItens.post5.inputEnabled = false;
    postItens.post6.inputEnabled = false;
    postItens.post7.inputEnabled = false;
    postItens.post8.inputEnabled = false;
};


Shop.prototype.buyModal = function () {
    'use strict'
    
    if (this.storeActive === 0) {
        switch(ballItens.chooseBall){  
        case 1: 
            registry.coins -= ballItens.ball1.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);
            
            if (this.game.device.desktop) {
                window.open("https://facebook.com/viishapps", "_blank");
            } else if (this.game.device.android) {
                window.open("https://facebook.com/viishapps", "_system");
            } else if (this.game.device.iOS) {
                window.parent.location.href = "site://?" + 'https://facebook.com/viishapps';
            } else {
                window.open("https://m.facebook.com/viishapps", "_blank", "", false);
            }
            
            registry.chooseBall = 1;
            
            ballItens.ball1.isClosed = false;
            localStorage.setItem("ballStyle1", ballItens.ball1.isClosed);
            registry.actualBall = 1;
            localStorage.setItem("ballActual", registry.actualBall);
            
            ball.store();           
            this.hideModal();
            break;
        
        case 2: 
            registry.coins -= ballItens.ball2.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);
            
            if (this.game.device.desktop) {
                window.open("https://twitter.com/viishapps", "_blank");
            } else if (this.game.device.android) {
                window.open("https://mobile.twitter.com/viishapps", "_system");
            } else if (this.game.device.iOS) {
                window.parent.location.href = "site://?" + 'https://mobile.twitter.com/viishapps';
            } else {
                window.open("https://mobile.twitter.com/viishapps", "_blank", "", false);
            }
            
            registry.chooseBall = 2;
                
            ballItens.ball2.isClosed = false;
            localStorage.setItem("ballStyle2", ballItens.ball2.isClosed);
            registry.actualBall = 2;
            localStorage.setItem("ballActual", registry.actualBall);
            
            ball.store();           
            this.hideModal();
            break;
            
        case 3: 
            registry.coins -= ballItens.ball3.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);
                
            registry.chooseBall = 3;
                
            ballItens.ball3.isClosed = false;
            localStorage.setItem("ballStyle3", ballItens.ball3.isClosed);
            registry.actualBall = 3;
            localStorage.setItem("ballActual", registry.actualBall);
            
            ball.store();           
            this.hideModal(); 
            break;
        
        case 4:

            registry.coins -= ballItens.ball4.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);
            
            registry.chooseBall = 4;
            
            ballItens.ball4.isClosed = false;
            localStorage.setItem("ballStyle4", ballItens.ball4.isClosed);

            registry.actualBall = 4;
            localStorage.setItem("ballActual", registry.actualBall);
            
            ball.store();
            this.hideModal();
            break;
        
        case 5:
            ball.store();

            registry.coins -= ballItens.ball5.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);
                
            registry.chooseBall = 5;
                
            ballItens.ball5.isClosed = false;
            localStorage.setItem("ballStyle5", ballItens.ball5.isClosed);

            registry.actualBall = 5;
            localStorage.setItem("ballActual", registry.actualBall);
            
            this.hideModal();
            break;
            
        case 6:
            ball.store();

            registry.coins -= ballItens.ball6.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);

            registry.chooseBall = 6;
            
            ballItens.ball6.isClosed = false;
            localStorage.setItem("ballStyle6", ballItens.ball6.isClosed);

            registry.actualBall = 6;
            localStorage.setItem("ballActual", registry.actualBall);
            
            this.hideModal();
            break;
            
            
        case 7:
            ball.store();

            registry.coins -= ballItens.ball7.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);
                
            registry.chooseBall = 7;
                
            ballItens.ball7.isClosed = false;
            localStorage.setItem("ballStyle7", ballItens.ball7.isClosed);

            registry.actualBall = 7;
            localStorage.setItem("ballActual", registry.actualBall);
            
            this.hideModal();
            break;
        
        case 8:
            ball.store();

            registry.coins -= ballItens.ball8.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);

            registry.chooseBall = 8;
                
            ballItens.ball8.isClosed = false;
            localStorage.setItem("ballStyle8", ballItens.ball8.isClosed);

            registry.actualBall = 8;
            localStorage.setItem("ballActual", registry.actualBall);
            
            this.hideModal();
            break;
        
        case 9:
            ball.store();

            registry.coins -= ballItens.ball9.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);
                
            registry.chooseBall = 9;
                
            ballItens.ball9.isClosed = false;
            localStorage.setItem("ballStyle9", ballItens.ball9.isClosed);

            registry.actualBall = 9;
            localStorage.setItem("ballActual", registry.actualBall);
            
            this.hideModal();
            break;
        
        case 10:
            ball.store();

            registry.coins -= ballItens.ball10.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);
                
            registry.chooseBall = 10;
                
            ballItens.ball10.isClosed = false;
            localStorage.setItem("ballStyle10", ballItens.ball10.isClosed);

            registry.actualBall = 10;
            localStorage.setItem("ballActual", registry.actualBall);
            
            this.hideModal();
            break;
            
        default:
            registry.chooseBall = 0;
            registry.actualBall = 0;
            localStorage.setItem("ballActual", registry.actualBall);
            ball.store();
            break
        }
        
    } else if (this.storeActive === 1) {
    
        switch(fieldItens.chooseField){  
        case 1:
            registry.coins -= fieldItens.field1.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);

            registry.chooseField = 1;
                
            fieldItens.field1.isClosed = false;
            localStorage.setItem("fieldStyle1", fieldItens.field1.isClosed);

            registry.actualField = 1;
            localStorage.setItem("fieldActual", registry.actualField);
            
            bg.store();
            this.hideModal();
            break;
                
        case 2:
            registry.coins -= fieldItens.field2.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);

            registry.chooseField = 2;
                
            fieldItens.field2.isClosed = false;
            localStorage.setItem("fieldStyle2", fieldItens.field2.isClosed);

            registry.actualField = 2;
            localStorage.setItem("fieldActual", registry.actualField);
            
            bg.store();
            this.hideModal();
            break;
                
        case 3:
            registry.coins -= fieldItens.field3.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);

            registry.chooseField = 3;
                
            fieldItens.field3.isClosed = false;
            localStorage.setItem("fieldStyle3", fieldItens.field3.isClosed);

            registry.actualField = 3;
            localStorage.setItem("fieldActual", registry.actualField);
            
            bg.store();
            this.hideModal();
            break;
        
        case 4:
            registry.coins -= fieldItens.field4.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);

            registry.chooseField = 4;
                
            fieldItens.field4.isClosed = false;
            localStorage.setItem("fieldStyle4", fieldItens.field4.isClosed);

            registry.actualField = 4;
            localStorage.setItem("fieldActual", registry.actualField);
            
            bg.store();
            this.hideModal();
            break;
        
        case 5:
            registry.coins -= fieldItens.field5.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);

            registry.chooseField = 5;
            
            fieldItens.field5.isClosed = false;
            localStorage.setItem("fieldStyle5", fieldItens.field5.isClosed);

            registry.actualField = 5;
            localStorage.setItem("fieldActual", registry.actualField);
            
            bg.store();
            this.hideModal();
            break;
        
        case 6:
            registry.coins -= fieldItens.field6.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);

            registry.chooseField = 6;
                
            fieldItens.field6.isClosed = false;
            localStorage.setItem("fieldStyle6", fieldItens.field6.isClosed);

            registry.actualField = 6;
            localStorage.setItem("fieldActual", registry.actualField);
            
            bg.store();
            this.hideModal();
            break;
        
        case 7:
            registry.coins -= fieldItens.field7.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);

            registry.chooseField = 7;
                
            fieldItens.field7.isClosed = false;
            localStorage.setItem("fieldStyle7", fieldItens.field7.isClosed);

            registry.actualField = 7;
            localStorage.setItem("fieldActual", registry.actualField);
            
            bg.store();
            this.hideModal();
            break;
        
        case 8:
            registry.coins -= fieldItens.field8.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);

            registry.chooseField = 8;
                
            fieldItens.field8.isClosed = false;
            localStorage.setItem("fieldStyle8", fieldItens.field8.isClosed);

            registry.actualField = 8;
            localStorage.setItem("fieldActual", registry.actualField);
            
            bg.store();
            this.hideModal();
            break;
        
        case 9:
            registry.coins -= fieldItens.field9.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);

            registry.chooseField = 9;
                
            fieldItens.field9.isClosed = false;
            localStorage.setItem("fieldStyle9", fieldItens.field9.isClosed);

            registry.actualField = 9;
            localStorage.setItem("fieldActual", registry.actualField);
            
            bg.store();
            this.hideModal();
            break;
                
         default:
            registry.chooseField = 0;
            registry.actualField = 0;
            localStorage.setItem("fieldActual", registry.actualField);
            bg.store();
            break
        }
        
    } else if (this.storeActive === 2) {
        
        switch(defItens.chooseDef){  
        case 1:
            registry.coins -= defItens.def1.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);

            registry.chooseDef = 1;
                
            defItens.def1.isClosed = false;
            localStorage.setItem("defStyle1", defItens.def1.isClosed);

            registry.actualDef = 1;
            localStorage.setItem("defActual", registry.actualDef);
            
            def.store();
            this.hideModal();
            break;
        
        case 2:
            registry.coins -= defItens.def2.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);

            registry.chooseDef = 2;
                
            defItens.def2.isClosed = false;
            localStorage.setItem("defStyle2", defItens.def2.isClosed);

            registry.actualDef = 2;
            localStorage.setItem("defActual", registry.actualDef);
            
            def.store();
            this.hideModal();
            break;
                
        case 3:
            registry.coins -= defItens.def3.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);

            registry.chooseDef = 3;
                
            defItens.def3.isClosed = false;
            localStorage.setItem("defStyle3", defItens.def3.isClosed);

            registry.actualDef = 3;
            localStorage.setItem("defActual", registry.actualDef);
            
            def.store();
            this.hideModal();
            break;
        
        case 4:
            registry.coins -= defItens.def4.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);

            registry.chooseDef = 4;
                
            defItens.def4.isClosed = false;
            localStorage.setItem("defStyle4", defItens.def4.isClosed);

            registry.actualDef = 4;
            localStorage.setItem("defActual", registry.actualDef);
            
            def.store();
            this.hideModal();
            break;
        
        case 5:
            registry.coins -= defItens.def5.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);

            registry.chooseDef = 5;
                
            defItens.def5.isClosed = false;
            localStorage.setItem("defStyle5", defItens.def5.isClosed);

            registry.actualDef = 5;
            localStorage.setItem("defActual", registry.actualDef);
            
            def.store();
            this.hideModal();
            break;
                
        case 6:
            registry.coins -= defItens.def6.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);

            registry.chooseDef = 6;
                
            defItens.def6.isClosed = false;
            localStorage.setItem("defStyle6", defItens.def6.isClosed);

            registry.actualDef = 6;
            localStorage.setItem("defActual", registry.actualDef);
            
            def.store();
            this.hideModal();
            break;
        
        case 7:
            registry.coins -= defItens.def7.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);

            registry.chooseDef = 7;
                
            defItens.def7.isClosed = false;
            localStorage.setItem("defStyle7", defItens.def7.isClosed);

            registry.actualDef = 7;
            localStorage.setItem("defActual", registry.actualDef);
            
            def.store();
            this.hideModal();
            break;
                
        case 8:
            registry.coins -= defItens.def8.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);

            registry.chooseDef = 8;
                
            defItens.def8.isClosed = false;
            localStorage.setItem("defStyle8", defItens.def8.isClosed);

            registry.actualDef = 8;
            localStorage.setItem("defActual", registry.actualDef);
            
            def.store();
            this.hideModal();
            break;
        
        case 9:
            registry.coins -= defItens.def9.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);

            registry.chooseDef = 9;
                
            defItens.def9.isClosed = false;
            localStorage.setItem("defStyle9", defItens.def9.isClosed);

            registry.actualDef = 9;
            localStorage.setItem("defActual", registry.actualDef);
            
            def.store();
            this.hideModal();
            break;
                
        default:
            registry.chooseDef = 0;
            registry.actualDef = 0;
            localStorage.setItem("defActual", registry.actualDef);
            def.store();
            break
        }
        
    } else if (this.storeActive === 3) {
    
        switch(postItens.choosePost){  
        case 1:
            registry.coins -= postItens.post1.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);

            registry.choosePost = 1;
                
            postItens.post1.isClosed = false;
            localStorage.setItem("postStyle1", postItens.post1.isClosed);

            registry.actualPost = 1;
            localStorage.setItem("postActual", registry.actualPost);
            
            posts.store();
            this.hideModal();
            break;
                
        case 2:
            registry.coins -= postItens.post2.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);

            registry.choosePost = 2;
                
            postItens.post2.isClosed = false;
            localStorage.setItem("postStyle2", postItens.post2.isClosed);

            registry.actualPost = 2;
            localStorage.setItem("postActual", registry.actualPost);
            
            posts.store();
            this.hideModal();
            break;
                
        case 3:
            registry.coins -= postItens.post3.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);

            registry.choosePost = 3;
                
            postItens.post3.isClosed = false;
            localStorage.setItem("postStyle3", postItens.post3.isClosed);

            registry.actualPost = 3;
            localStorage.setItem("postActual", registry.actualPost);
            
            posts.store();
            this.hideModal();
            break;
                
        case 4:
            registry.coins -= postItens.post4.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);

            registry.choosePost = 4;
                
            postItens.post4.isClosed = false;
            localStorage.setItem("postStyle4", postItens.post4.isClosed);

            registry.actualPost = 4;
            localStorage.setItem("postActual", registry.actualPost);
            
            posts.store();
            this.hideModal();
            break;
                
        case 5:
            registry.coins -= postItens.post5.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);

            registry.choosePost = 5;
                
            postItens.post5.isClosed = false;
            localStorage.setItem("postStyle5", postItens.post5.isClosed);

            registry.actualPost = 5;
            localStorage.setItem("postActual", registry.actualPost);
            
            posts.store();
            this.hideModal();
            break;
                
        case 6:
            registry.coins -= postItens.post6.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);

            registry.choosePost = 6;
                
            postItens.post6.isClosed = false;
            localStorage.setItem("postStyle6", postItens.post6.isClosed);

            registry.actualPost = 6;
            localStorage.setItem("postActual", registry.actualPost);
            
            posts.store();
            this.hideModal();
            break;
                
        case 7:
            registry.coins -= postItens.post7.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);

            registry.choosePost = 7;
                
            postItens.post7.isClosed = false;
            localStorage.setItem("postStyle7", postItens.post7.isClosed);

            registry.actualPost = 7;
            localStorage.setItem("postActual", registry.actualPost);
            
            posts.store();
            this.hideModal();
            break;
        
        case 8:
            registry.coins -= postItens.post8.price;
            this.textCoin.text = registry.coins;
            localStorage.setItem("coinsStatus", registry.coins);

            registry.choosePost = 8;
                
            postItens.post8.isClosed = false;
            localStorage.setItem("postStyle8", postItens.post8.isClosed);

            registry.actualPost = 8;
            localStorage.setItem("postActual", registry.actualPost);
            
            posts.store();
            this.hideModal();
            break;   
                
        default:
            registry.choosePost = 0;
            registry.actualPost = 0;
            localStorage.setItem("postActual", registry.actualPost);
            posts.store();
            break
        }
    }
};


Shop.prototype.hideModal = function () {
    'use strict'
    this.maskBuy.alpha = 0;
    this.modal.alpha = 0;
    this.topText.alpha = 0;
    this.okText.alpha = 0;
    this.noText.alpha = 0;
    
    this.okText.inputEnabled = false;
    this.noText.inputEnabled = false;
    
    ballItens.ball0.inputEnabled = true;
    ballItens.ball1.inputEnabled = true;
    ballItens.ball2.inputEnabled = true;
    ballItens.ball3.inputEnabled = true;
    ballItens.ball4.inputEnabled = true;
    ballItens.ball5.inputEnabled = true;
    ballItens.ball6.inputEnabled = true;
    ballItens.ball7.inputEnabled = true;
    ballItens.ball8.inputEnabled = true;
    ballItens.ball9.inputEnabled = true;
    ballItens.ball10.inputEnabled = true;
    
    fieldItens.field0.inputEnabled = true;
    fieldItens.field1.inputEnabled = true;
    fieldItens.field2.inputEnabled = true;
    fieldItens.field3.inputEnabled = true;
    fieldItens.field4.inputEnabled = true;
    fieldItens.field5.inputEnabled = true;
    fieldItens.field6.inputEnabled = true;
    fieldItens.field7.inputEnabled = true;
    fieldItens.field8.inputEnabled = true;
    fieldItens.field9.inputEnabled = true;
    
    defItens.def0.inputEnabled = true;
    defItens.def1.inputEnabled = true;
    defItens.def2.inputEnabled = true;
    defItens.def3.inputEnabled = true;
    defItens.def4.inputEnabled = true;
    defItens.def5.inputEnabled = true;
    defItens.def6.inputEnabled = true;
    defItens.def7.inputEnabled = true;
    defItens.def8.inputEnabled = true;
    defItens.def9.inputEnabled = true;
    
    postItens.post0.inputEnabled = true;
    postItens.post1.inputEnabled = true;
    postItens.post2.inputEnabled = true;
    postItens.post3.inputEnabled = true;
    postItens.post4.inputEnabled = true;
    postItens.post5.inputEnabled = true;
    postItens.post6.inputEnabled = true;
    postItens.post7.inputEnabled = true;
    postItens.post8.inputEnabled = true;
};