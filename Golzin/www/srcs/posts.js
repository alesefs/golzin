function Posts(game) {
    'use strict';
    this.game = game;
}

Posts.prototype.create = function () {
    'use strict';
    var postWidth = 200;
    var postHeight = 120;
    
    this.post = this.game.add.sprite(bg.postL.x + bg.postWidth / 2 - bg.postSize / 2, bg.postL.y - bg.postSize, 'posts');
    this.post.animations.add('post0', [0], 10, false);
    this.post.animations.add('post1', [1], 10, false);
    this.post.animations.add('post2', [2], 10, false);
    this.post.animations.add('post3', [3], 10, false);
    this.post.animations.add('post4', [4], 10, false);
    this.post.animations.add('post5', [5], 10, false);
    this.post.animations.add('post6', [8], 10, false);
    this.post.animations.add('post7', [7], 10, false);
    this.post.animations.add('post8', [6], 10, false);
    this.post.width = postWidth;
    this.post.height = postHeight;
    this.post.anchor.set(0.5);
    
    this.store();
       
    if (registry.chooseField === 6 || registry.chooseField === 8) {
        this.post.tint = 0xFF0000;
    } else {
        this.post.tint = 0xFFFFFF;
    }
    
};

Posts.prototype.store = function () {
    'use strict';
    this.post.animations.play('post'+registry.choosePost, 5, true);
    localStorage.setItem("postStatus", registry.choosePost);
};

Posts.prototype.update = function () {
    'use strict';  
    this.post.x = bg.postL.x + bg.postWidth / 2 - bg.postSize / 2;   
};


