function MainMenu(game){
    this.game = game;
}

MainMenu.prototype.create = function () {
    var registry = new Register(game);
	registry.create();
    
    
    bar = this.game.add.bitmapData(this.game.world.width, this.game.world.height);
    bar.ctx.beginPath();
    bar.ctx.rect(0, 0, this.game.world.width, this.game.world.height);
    bar.ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    bar.ctx.fill();

    
    this.barz = this.game.add.sprite(0, 0, bar);
    this.barz.alpha = 0;
    
    this.viish = this.game.add.sprite(registry.width/2, registry.height - 100, 'viish');
    this.viish.anchor.set(0.5);
    //this.game.add.tween(this.viish).to({ x: registry.width/2}, 2000, Phaser.Easing.Linear.None).start();
    
    
    
    this.menuIcon = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - 100, 'logo');
    this.menuIcon.anchor.set(0.5);
    this.menuIcon.scale.set(0.75);
    
    
    this.menuConfig = this.game.add.button(this.menuIcon.x - 150, this.menuIcon.y + 300, 'btn-w', this.passConfig, this, 14, 14, 14);
    this.menuConfig.anchor.set(0.5);
    
    //this.menuPlay = this.game.add.button(/*registry.width + */this.menuIcon.x - 120, this.menuIcon.y + 300, 'btn-y', this.passGame, this, 0, 0, 0);
    this.menuPlay = this.game.add.button(this.menuIcon.x, this.menuIcon.y + 300, 'btn-w', this.passGame, this, 7, 7, 7);
    this.menuPlay.anchor.set(0.5);
    //this.game.add.tween(this.menuPlay).to({ x: this.menuIcon.x - 120}, 2000, Phaser.Easing.Linear.None).start();

    //this.menuRate = this.game.add.button(/*registry.width + */this.menuIcon.x + 120, this.menuIcon.y + 300, 'btn-y', this.passRate, this, 1, 1, 1);
    this.menuRate = this.game.add.button(this.menuIcon.x + 150, this.menuIcon.y + 300, 'btn-w', this.passRate, this, 15, 15, 15);
    this.menuRate.anchor.set(0.5);
    //this.game.add.tween(this.menuRate).to({ x: this.menuIcon.x + 120}, 2000, Phaser.Easing.Linear.None).start();
    
    
}

MainMenu.prototype.passGame = function () {
    this.game.state.start('inGame');
}

MainMenu.prototype.passConfig = function () {
    //this.game.state.start('config');
    //window.open(this.game.canvas.toDataURL());
    //this.notify();
    
    //var data = this.game.canvas.toDataURL("image/png");//base64", "image/octet-stream;base64");
    //var img = document.createElement('img');
    //img.src = data;
    //img.setAttribute('crossOrigin', 'anonymous');
    //data = data.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');
    //data = data.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png');
    //this.href = data;
    //var b = document.createElement('a');
    //b.setAttribute("download", "YourFileName.png");
    //b.setAttribute("href", data);
    //b.appendChild(img);
    //var w = open();
    //w.document.title = 'Export Image';
    //w.document.body.innerHTML = 'Left-click on the image to save it.';
    //w.document.body.appendChild(b);
    //b.setAttribute('crossOrigin', 'anonymous');
    
    
    //var canvas = this.game.canvas();
    //document.getElementById("theimage").src = canvas.toDataURL();
    //Canvas2Image.saveAsPNG(canvas);
    
    /*var source = document.getElementById("canvasId");
    var canvas = document.createElement("canvas");//this.game.canvas();
    canvas.width = source.width;
    canvas.height = source.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(source, 0, 0);
    var output = document.getElementById("output");
    output.src = this.game.canvas.toDataURL("image/png");
    output.setAttribute('crossOrigin', 'anonymous');*/
    
    
       /*var testCanvas = document.getElementById("blah");
       //testCanvas.setAttribute('crossOrigin', 'anonymous');
       var canvasData = testCanvas.toDataURL("image/png");
       var ajax = new XMLHttpRequest();
       ajax.open("POST",'testSave.php',false);
       //ajax.setRequestHeader('Content-Type', 'application/upload');
       ajax.setRequestHeader('Content-Type', 'canvas/upload');
       ajax.send(canvasData);*/
    
    /*var largeImage = document.getElementById('blah');
    var img = document.createElement('img');
    largeImage.style.display = 'block';
    largeImage.style.width=registry.width+"px";
    largeImage.style.height=registry.height+"px";
    var url=largeImage.getAttribute("src");
    var w = open(url,'Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');
    w.document.body.appendChild(largeImage);*/
    
    /*var cv = document.getElementsByTagName('canvas')[0];
        document.documentElement.style.background='url('+cv.toDataURL()+')';*/
}


MainMenu.prototype.notify = function () {
    Notification.requestPermission(function() {
        var notification = new Notification("Golzin'", {
            icon: '../favicon/android-icon-192x192.png',
            body: "Vamos ao Jogo"
        });
        notification.onclick = function() {
            notification.close();
        }
    });
}

MainMenu.prototype.passRate = function () {
    if (this.game.device.desktop) {
        window.open("http://viishapps.tk/","_system");
    } else if (this.game.device.android) {
        

        //navigator.app.loadUrl("https://play.google.com/store/apps/details?id=com.ketchapp.swing", "_blank");//teste swing
        //window.open("https://play.google.com/store/apps/details?id=com.ketchapp.swing", "_blank");//teste swing
        //window.location = "https://play.google.com/store/apps/details?id=com.ketchapp.swing", "_blank";//teste swing
    } else if (this.game.device.iOS) {
        window.open("https://itunes.apple.com/br/app/swing/id1064078609?mt=8", "_blank");//teste swing
    } else {
        window.open("https://www.microsoft.com/pt-br/store/p/guitar-flash/9nblggh2s3d8", "_system");
    }

}
