var diceButton = document.getElementById("diceButton");
var buyYesButton = document.getElementById("buyYes");
var buyNoButton = document.getElementById("buyNo");
var shieldYesButton = document.getElementById("shieldYes");
var shieldNoButton = document.getElementById("shieldNo");
var mydice = document.getElementById("mydice");
var userCanvas = document.getElementById("usertest");
var moneyCanvas = document.getElementById("usermoney");
var maskCanvas = document.getElementById("usermask");
var guardCanvas = document.getElementById("userguard");
var purchaseCanvas = document.getElementById("userpurchase");
var buyBoxCanvas = document.getElementById("buyBox");
var buyBoxTextCanvas = document.getElementById("buyBoxText");
var chomperImg = document.getElementById("chomperBox");
var snowImg = document.getElementById("snowBox");
var peaImg = document.getElementById("peaBox");
var cleanerCanvas = document.getElementById("cleanerCanvas");
var startCanvas = document.getElementById("startCanvas");
var tutorialCanvas = document.getElementById("tutorialCanvas");
var diceContext = mydice.getContext("2d");
var buyBoxContext = buyBoxCanvas.getContext("2d");
var buyBoxTextContext = buyBoxTextCanvas.getContext("2d");
var userContext = userCanvas.getContext("2d");
var cleanerContext = cleanerCanvas.getContext("2d");
var startContext = startCanvas.getContext("2d");
var tutorialContext = tutorialCanvas.getContext("2d");
var diceImage = null;
var topPlaceImage = null;
var middlePlaceImage = null;
var bottomPlaceImage = null;
var sixDice = new Array(6);
var diceNumber = null;
var diceClicked = false;
var buyBoxImage = null;
var cleanerImage = null;
var fogImage = null;
var player1Head = null;
var player2Head = null;
var player3Head = null;
var player4Head = null;
var shieldImage = null;
var dafuwengImage = null;
var jiangshiImage = null;
var boomImgs = [];
for (var i = 0; i <= 24; i++) {
    var boomImg = document.createElement("img");
    document.getElementById("center").appendChild(boomImg);
    boomImgs.push(boomImg);
}
var speechBubbleImage = null;
var tutorialImage = null;
var daveComeImage = null;
var speechImage = null;
var speechButton = null;
var makeDaSound = document.createElement("audio");
var makeJiSound = document.createElement("audio");
var BGM = document.createElement("audio");
var tombstoneSound = document.createElement("audio");
var lawnSound = document.createElement("audio");
var diceSound = document.createElement("audio");
var worldTourSound = document.createElement("audio");
var buySound = document.createElement("audio");
var buttonSound = document.createElement("audio");
var getSound = document.createElement("audio");
var moneySound = document.createElement("audio");
var explosionSound = document.createElement("audio");
var winSound = document.createElement("audio");
var daveSoundArray = [];
var player_pop = 4;
var is_survive = 0;
var players = [];
var places = [];
var text;
var m_speed = 1;
players.push(1);
places.push(1);
var sunImg = null;
var deadImg = null;
var imgboard = null;
var brainImg = null;
var shieldImg = null;
var result_dice = null;
var place_to_go;
var box_type;
var p_price = [];
p_price.push(-1);
p_price.push(100);
p_price.push(200);
p_price.push(400);
var player_status = 0;
var Headimgs = [];
var scoreimgs = [];
for (var i = 0; i <= 24; i++) {
    var Headimg = new Image();
    Headimgs.push(Headimg);
}
var playerImgs = [];
for (var i = 0; i < player_pop; i++) {
    var tmpimg = new Image();
    playerImgs.push(tmpimg);
}
var curPlayerNum = 1;
var curPlace = null;
var curTourButtonNum = null;
var is_gamble = false;
var is_destroy = false;
var moving = null;
var shieldmoving = null;
var moneymoving = null;
var shieldindex = 430;
var startmoving = null;
var is_refund = 0;
var refund_money = 0;
var tutorialNum = 0;
var ai_status = new Array(4);

function player(type, id) {
    this.id = id;
    this.img_id = type;
    this.x_pos = 0;
    this.start_x_pos = 0;
    this.y_pos = 0;
    this.start_y_pos = 0;
    this.at = 1;
    this.is_start = 1;
    this.money = 2000;
    this.guard = 0;
    this.is_imprisoned = 0;
    this.walk = 0;
    this.is_dead = 0;
    this.is_ui = 0;
}
function place(id) {
    this.id = id;
    this.type = -1;
    this.owner = 0;
    this.x_pos = 240;
    this.y_pos = 600;
    this.status = -1;
    this.go_where = 1;
    this.price = 0;
    this.to_go = 0;
}
start();
function start() {
    startCanvas.width = 1400;
    startCanvas.height = 600;
    startCanvas.style.zIndex = "52";
    makeDaSound.src = "resource/audio/finalwave.mp3";
    makeJiSound.src = "resource/audio/finalwave.mp3";
    BGM.src = "resource/audio/Mountains.mp3";
    tombstoneSound.src = "resource/audio/evillaugh.mp3";
    lawnSound.src = "resource/audio/lawnmower.mp3";
    diceSound.src = "resource/audio/bowlingimpact2.mp3";
    worldTourSound.src = "resource/audio/pool_cleaner.mp3";
    buySound.src = "resource/audio/plant1.mp3";
    buttonSound.src = "resource/audio/buttonclick.mp3"
    getSound.src = "resource/audio/points.mp3";
    moneySound.src = "resource/audio/squash_hmm.mp3";
    explosionSound.src = "resource/audio/explosion.mp3";
    winSound.src = "resource/audio/winmusic.mp3";
    BGM.loop = true;
    for (var j = 0; j < 6; j++) {
        var daveSound = document.createElement("audio");
        if (j == 0) {
            daveSound.src = "resource/audio/crazydavelong1.mp3";
        }
        else if (j == 1) {
            daveSound.src = "resource/audio/crazydavelong2.mp3";
        }
        else if (j == 2) {
            daveSound.src = "resource/audio/crazydavelong3.mp3";
        }
        else if (j == 3) {
            daveSound.src = "resource/audio/crazydaveshort1.mp3";
        }
        else if (j == 4) {
            daveSound.src = "resource/audio/crazydaveshort2.mp3";
        }
        else if (j == 5) {
            daveSound.src = "resource/audio/crazydaveshort3.mp3";
        }
        daveSoundArray.push(daveSound);
    }
    dafuwengImage = new Image();
    dafuwengImage.src = "resource/images/dafuweng.png";
    jiangshiImage = new Image();
    jiangshiImage.src = "resource/images/jiangshi.png";
    speechBubbleImage = new Image();
    speechBubbleImage.src = "resource/images/speechBubble.png";
    tutorialImage = document.createElement("img");
    document.getElementById("center").appendChild(tutorialImage);
    tutorialImage.style.position = "absolute";
    tutorialImage.style.width = "32px";
    tutorialImage.style.height = "40px";
    tutorialImage.style.left = "0px";
    tutorialImage.style.top = "95px";
    tutorialImage.style.zIndex = "1";
    tutorialImage.src = "resource/images/PointerDown.gif";
    setTimeout(function () { makeDaFuWeng(200, -125, 1000, 750); }, 1000);
}
function makeDaFuWeng(x, y, width, height) {
    startContext.fillRect(0, 0, 1400, 600);
    startContext.clearRect(0, 0, 1400, 600);
    startContext.drawImage(dafuwengImage, x, y, width, height);
    x += 2;
    y += 1;
    width -= 4;
    height -= 4;
    if (width > 600) {
        setTimeout(function () { makeDaFuWeng(x, y, width, height); }, 5);
    }
    else {
        setTimeout(function () { makeJiangShi(390, 100, 600, 400); }, 800);
        makeDaSound.play();
    }
}
function makeJiangShi(x, y, width, height) {
    startContext.fillRect(0, 0, 1400, 600);
    startContext.clearRect(0, 0, 1400, 600);
    startContext.drawImage(dafuwengImage, 400, -25, 600, 350);
    startContext.drawImage(jiangshiImage, x, y, width, height);
    x += 2;
    y += 1;
    width -= 4;
    height -= 4;
    if (width > 300) {
        setTimeout(function () { makeJiangShi(x, y, width, height); }, 5);
    }
    else {
        setTimeout(function () { makeOptionButton(); }, 1200);
        makeJiSound.play();
    }
}
function makeOptionButton() {
    for (var i = 0; i < 6; i++) {
        var button = document.createElement("input");
        document.getElementById("center").appendChild(button);
        button.type = "button";
        button.controls = true;
        button.id = "optionButton" + String(i + 2);
        button.name = i + 2;
        button.onclick = function () {
            if (this.name == 2 || this.name == 3 || this.name == 4) {
                player_pop = this.name;
                ai_status[0] = 0;
                ai_status[1] = 0;
                ai_status[2] = 0;
                ai_status[3] = 0;
            }
            else {
                player_pop = this.name - 3;
                ai_status[0] = 0;
                ai_status[1] = 1;
                ai_status[2] = 1;
                ai_status[3] = 1;
            }
            is_survive = player_pop;
            document.getElementById("optionButton2").disabled = true;
            document.getElementById("optionButton3").disabled = true;
            document.getElementById("optionButton4").disabled = true;
            document.getElementById("optionButton5").disabled = true;
            document.getElementById("optionButton6").disabled = true;
            document.getElementById("optionButton7").disabled = true;

            var buttonClickSound = document.createElement("audio");
            buttonClickSound.src = "resource/audio/buttonclick.mp3"
            buttonClickSound.play();
            setTimeout(function () { startGame(); }, 1000);
        };
        button.style.zIndex = "55";
        if (i == 0) {
            button.value = "双人游戏模式";
        }
        else if (i == 1) {
            button.value = "三人游戏模式";
        }
        else if (i == 2) {
            button.value = "四人游戏模式";
        }
        else if (i == 3) {
            button.value = "单个人机模式";
        }
        else if (i == 4) {
            button.value = "两个人机模式";
        }
        else if (i == 5) {
            button.value = "三个人机模式";
        }
        button.style.background = "url(resource/images/OptionsButton.png) no-repeat";
        button.style.width = "360px";
        button.style.height = "100px"
        button.style.position = "absolute";
        button.style.left = String(330 + parseInt(i / 3) * 360) + "px";
        button.style.top = String(300 + (i % 3) * 100) + "px";
        button.style.outline = "none";
        button.style.border = "none";
        button.style.fontSize = "30px";
        button.style.fontWeight = 900;
        button.style.color = "rgb(70,70,70)";
    }
}
function startGame() {
    makeDaSound.pause();
    makeJiSound.pause();
    startCanvas.style.zIndex = "1";
    var backCanvas = document.getElementById("dialog_center");
    backCanvas.style.zIndex = "1";
    for (var j = 0; j < 6; j++) {
        var startButton = document.getElementById("optionButton" + String(j + 2));
        startButton.style.zIndex = "1";
    }
    daveCome();
    tutorial();
}
function daveCome() {
    daveComeImage = document.createElement("img");
    document.getElementById("center").appendChild(daveComeImage);
    daveComeImage.style.position = "absolute";
    daveComeImage.style.width = "299px";
    daveComeImage.style.height = "505px";
    daveComeImage.style.left = "0px";
    daveComeImage.style.top = "95px";
    daveComeImage.style.zIndex = "61";
    daveComeImage.src = "resource/images/Dave3.gif";
}
function tutorial() {
    tutorialCanvas.width = 1400;
    tutorialCanvas.height = 600;
    tutorialCanvas.style.zIndex = "62";
    speechImage = document.createElement("img");
    document.getElementById("center").appendChild(speechImage);
    speechImage.style.position = "absolute";
    speechImage.style.width = "310px";
    speechImage.style.height = "220px";
    speechImage.style.left = "240px";
    speechImage.style.top = "145px";
    speechImage.style.zIndex = "61";
    speechImage.src = "resource/images/speechBubble.png";
    tutorialContext.font = "bold 20px Tahoma";
    drawSpeech(0);
    drawSpeechButton();
    myReady();
}
function drawSpeech(num) {
    tutorialContext.clearRect(0, 0, 1400, 600);


    if (num == 0) {
        tutorialContext.fillText("欢迎来到 “大富翁僵尸”", 280, 185);
        tutorialContext.fillText("我从现在开始告诉你们怎么", 280, 215);
        tutorialContext.fillText("玩这个游戏", 280, 245);
    }
    else if (num == 1) {
        tutorialContext.fillText("这边是开始地点.", 280, 185);
        tutorialContext.fillText("每个僵尸从这边开始游戏", 280, 215);
        tutorialContext.fillText("每次通过这边,可以获得", 280, 245);
        tutorialContext.fillText("200元", 280, 275);
        tutorialImage.style.left = "275px";
        tutorialImage.style.top = "500px";
        tutorialImage.style.zIndex = "62";
    }
    else if (num == 2) {
        tutorialContext.fillText("这边是骰子区域.", 280, 185);
        tutorialContext.fillText("游戏开始之后,一个筛子从", 280, 215);
        tutorialContext.fillText("上面掉到这个地方,然后", 280, 245);
        tutorialContext.fillText("可以转骰子", 280, 275);

        tutorialImage.style.left = "600px";
        tutorialImage.style.top = "325px";
    }
    else if (num == 3) {
        tutorialContext.fillText("这是草地.", 280, 185);
        tutorialContext.fillText("是每个用户都能买的地方.", 280, 215);
        tutorialContext.fillText("如果别的用户已经买了,那么", 280, 245);
        tutorialContext.fillText("到达之后需要交通行费.", 280, 275);
        tutorialImage.style.left = "600px";
        tutorialImage.style.top = "90px";
    }
    else if (num == 4) {
        tutorialContext.fillText("如果用户余额低于通行费,那么", 280, 185);
        tutorialContext.fillText("需要卖自己的草地和植物.交完", 280, 215);
        tutorialContext.fillText("之后可以再交钱买当前草地.", 280, 245);
        tutorialContext.fillText("如果到达用户自己的草地上,", 280, 275);
    }
    else if (num == 5) {
        tutorialContext.fillText("那么可以交钱种一个植物.草地", 280, 185);
        tutorialContext.fillText("总共有三种,按照颜色来区分.", 280, 215);
        tutorialContext.fillText("每种草地的价格,通行费,植物", 280, 245);
        tutorialContext.fillText("种类都不一样.", 280, 275);
    }
    else if (num == 6) {
        tutorialContext.fillText("这是用户状态框.", 280, 185);
        tutorialContext.fillText("用三个感叹号来表示当前", 280, 215);
        tutorialContext.fillText("用户,然后显示用户余额和", 280, 245);
        tutorialContext.fillText("用户所有的盾个数", 280, 275);
        tutorialImage.style.left = "1110px";
        tutorialImage.style.top = "75px";
    }
    else if (num == 7) {
        tutorialContext.font = "bold 15px Tahoma"
        tutorialContext.fillText("这边是赌场.每次到达这个地方以后,", 280, 185);
        tutorialContext.fillText("要重新转筛子.如果筛子数字是奇数,", 280, 215);
        tutorialContext.fillText("那么被抢“数字*100”块钱.如果筛子", 280, 245);
        tutorialContext.fillText("数字是偶数,那么获得“数字*100”元", 280, 275);
        tutorialImage.style.left = "275px";
        tutorialImage.style.top = "400px";
    }
    else if (num == 8) {
        tutorialContext.font = "bold 20px Tahoma"
        tutorialContext.fillText("这边是坟墓.", 280, 185);
        tutorialContext.fillText("一旦到达这个地方,用户就", 280, 215);
        tutorialContext.fillText("会丢失两次转筛子的机会", 280, 245);
        tutorialImage.style.left = "278px";
        tutorialImage.style.top = "90px";
    }
    else if (num == 9) {
        tutorialContext.fillText("这是除草机.", 280, 185);
        tutorialContext.fillText("一旦到达这个地方,用户就", 280, 215);
        tutorialContext.fillText("要放弃自己买过一个地点.", 280, 245);
        tutorialImage.style.left = "358px";
        tutorialImage.style.top = "90px";
    }
    else if (num == 10) {
        tutorialContext.fillText("这边是机场.", 280, 185);
        tutorialContext.fillText("到这边之后,用户可以选择去", 280, 215);
        tutorialContext.fillText("除4个对角地点以外所有地方", 280, 245);
        tutorialImage.style.left = "918px";
        tutorialImage.style.top = "90px";
    }
    else if (num == 11) {
        tutorialContext.fillText("这是盾.", 280, 185);
        tutorialContext.fillText("到这边之后,用户获得一个盾.", 280, 215);
        tutorialContext.fillText("使用它以后,可以不交一次", 280, 245);
        tutorialContext.fillText("通行费", 280, 275);
        tutorialImage.style.left = "930px";
        tutorialImage.style.top = "500px";
    }
    else if (num == 12) {
        tutorialContext.fillText("好了,说话太多了", 280, 185);
        tutorialContext.fillText("现在可以开始游戏了!!", 280, 215);
        tutorialImage.style.zIndex = "1";
    }
    else {
        daveComeImage.src = "resource/images/Dave2.gif";
        tutorialContext.fillRect(0, 0, 1400, 600);
        tutorialContext.clearRect(0, 0, 1400, 600);
        speechBubbleImage.style.zIndex = "1";
        speechImage.style.zIndex = "1";
        speechButton.style.zIndex = "1";
        tutorialCanvas.style.zIndex = "1";
        setTimeout(function () { downDice(577, -179, 0); daveComeImage.style.zIndex = "1"; }, 1000);
    }
    if (num < 13) {
        daveSoundArray[num % 6].play();
    }
}
function drawSpeechButton() {
    speechButton = document.createElement("input");
    document.getElementById("center").appendChild(speechButton);
    speechButton.type = "button";
    speechButton.id = "speechButton"
    speechButton.onclick = function () {
        tutorialNum++;
        drawSpeech(tutorialNum);
        var buttonClickSound = document.createElement("audio");
        buttonClickSound.src = "resource/audio/buttonclick.mp3"
        buttonClickSound.play();
    };
    speechButton.style.zIndex = "63";
    speechButton.style.background = "url(resource/images/button_right.png) no-repeat center";
    speechButton.style.width = "30px";
    speechButton.style.height = "30px"
    speechButton.style.position = "absolute";
    speechButton.style.left = "505px";
    speechButton.style.top = "275px";
    speechButton.style.outline = "none";
    speechButton.style.border = "none";
}
function myReady() {
    for (var i = 1; i <= player_pop; i++) {
        var m_text = "img";
        m_text += i;
        document.getElementById(m_text).style.zIndex = 7;
    }
    BGM.play();
    mydice.width = 1400;
    mydice.height = 600;
    moneyCanvas.width = 1400;
    moneyCanvas.height = 600;
    maskCanvas.width = 1400;
    maskCanvas.height = 600;
    guardCanvas.width = 1400;
    guardCanvas.height = 600;
    purchaseCanvas.width = 1400;
    purchaseCanvas.height = 600;
    buyBoxCanvas.width = 1400;
    buyBoxCanvas.height = 600;

    buyBoxTextCanvas.width = 1400;
    buyBoxTextCanvas.height = 600;

    cleanerCanvas.width = 1400;
    cleanerCanvas.height = 600;
    diceImage = new Image();
    diceContext.drawImage(diceImage, 577, -179);
    diceImage.src = "resource/images/mydice.png";
    diceContext.font = "40px Arial";
    diceContext.fillStyle = "rgba(255,255,255,1)";
    buyBoxImage = new Image();
    buyBoxImage.src = "resource/images/buybox.jpg";
    topPlaceImage = new Image();
    topPlaceImage.src = "resource/images/top_place.jpg";
    middlePlaceImage = new Image();
    middlePlaceImage.src = "resource/images/middle_place.jpg";
    deadImg = new Image();
    deadImg.src = "resource/images/dead.png";
    bottomPlaceImage = new Image();
    bottomPlaceImage.src = "resource/images/bottom_place.jpg";
    player1Head = new Image();
    player1Head.src = "resource/images/1HeadRight.png";
    player2Head = new Image();
    player2Head.src = "resource/images/2HeadRight.png";
    player3Head = new Image();
    player3Head.src = "resource/images/3HeadRight.png";
    player4Head = new Image();
    player4Head.src = "resource/images/4HeadRight.png";
    shieldImage = new Image();
    shieldImage.src = "resource/images/angel.png";
    chomperImg.width = 60;
    chomperImg.height = 60;
    chomperImg.style.left = "-500px";
    chomperImg.src = "resource/images/Chomper.gif";
    snowImg.width = 60;
    snowImg.height = 60;
    snowImg.style.left = "-500px";
    snowImg.src = "resource/images/SnowPea.gif";
    peaImg.width = 60;
    peaImg.height = 60;
    peaImg.style.left = "-500px";
    peaImg.src = "resource/images/Peashooter.gif";
    userCanvas.width = 1400;
    userCanvas.height = 600;
    cleanerImage = new Image();
    cleanerImage.onload = function () {
        userContext.drawImage(cleanerImage, 335, 60, 70, 57);
        userContext.drawImage(cleanerImage, 818, 450, 70, 57);
    }
    cleanerImage.src = "resource/images/LawnCleaner.png";
    fogImage = new Image();
    fogImage.onload = function () {
        userContext.drawImage(fogImage, 240, 80, 110, 57);
    }
    fogImage.src = "resource/images/fog3.png";
    imgboard = new Image();
    imgboard.onload = function () {
        userContext.drawImage(imgboard, 1075, 20, 280, 350);
    }
    imgboard.src = "resource/images/Board.jpg";
    setTimeout(function () {
        sunImg = new Image();
        sunImg.onload = function () {
            for (var i = 0; i < player_pop; i++) {
                userContext.drawImage(sunImg, 1170, 85 + i * 65, 150, 40);
            }
        }
        sunImg.src = "resource/images/SunBack.png";
    }, 50);
    setTimeout(function () {
        brainImg = new Image();
        brainImg.onload = function () {
            for (var i = 0; i < player_pop; i++) {
                userContext.drawImage(brainImg, 1160, 80 + i * 65, 55, 55);
            }
        }
        brainImg.src = "resource/images/brain.png";
    }, 60);
    setTimeout(function () {
        shieldImg = new Image();
        shieldImg.onload = function () {
            for (var i = 0; i < player_pop; i++) {
                userContext.drawImage(shieldImg, 1210, 125 + i * 65, 25, 25);
            }
        }
        shieldImg.src = "resource/images/angel.png";
    }, 60);
    setTimeout(function () {
        for (var i = 0; i < player_pop; i++) {
            setPlayerImage(i);
        }
    }, 50);
    user_Init();
    moneyContext = moneyCanvas.getContext("2d");
    moneyContext.font = '24px arial';
    maskContext = maskCanvas.getContext("2d");
    setTimeout(function () {
        for (var i = 1; i <= player_pop; i++) {
            text = players[i].money;
            moneyContext.fillText(text, 1230, 65 * i + 50);
        }
    }, 100);
    guardContext = guardCanvas.getContext("2d");
    guardContext.font = '18px arial';
    purchaseContext = purchaseCanvas.getContext("2d");
    purchaseContext.font = '24px arial';
    setTimeout(function () {
        for (var i = 1; i <= player_pop; i++) {
            text = "X ";
            text += players[i].guard;
            guardContext.fillText(text, 1240, 65 * i + 80);
        }
    }, 100);
    for (var i = 0; i < 6; i++) {
        sixDice[i] = new Image();
        sixDice[i].src = "resource/images/dice" + (i + 1) + '_' + (i + 1) + ".png";
    }
}
function user_Init() {
    for (var i = 1; i <= player_pop; i++) {
        var new_player;
        switch (i) {
            case 1:
                new_player = new player("img1", i);
                new_player.x_pos = 250;
                new_player.start_x_pos = 160;
                new_player.y_pos = 430;
                new_player.start_y_pos = 430;
                break;
            case 2:
                new_player = new player("img2", i);
                new_player.x_pos = 260;
                new_player.start_x_pos = 180;
                new_player.y_pos = 440;
                new_player.start_y_pos = 360;
                break;
            case 3:
                new_player = new player("img3", i);
                new_player.x_pos = 250;
                new_player.start_x_pos = 180;
                new_player.y_pos = 435;
                new_player.start_y_pos = 310;
                break;
            case 4:
                new_player = new player("img4", i);
                new_player.x_pos = 240;
                new_player.start_x_pos = 175;
                new_player.y_pos = 450;
                new_player.start_y_pos = 260;
                break;
        }
        new_player.is_ui = ai_status[i - 1];
        players.push(new_player);
    }
    for (var i = 1; i <= 24; i++) {
        var new_place = new place(i);
        if (i >= 1 && i <= 5) {
            new_place.to_go = 100;
            new_place.x_pos = 240;
            new_place.y_pos = 600 - (i * 100);
            new_place.go_where = 1;
            if (i == 1) {
                new_place.type = 0;
                new_place.status = 0;
                new_place.price = p_price[0];
            }
            if (i == 2) {
                new_place.type = 0;
                new_place.status = 1;
                new_place.price = p_price[0];
            }
            if (i == 3) {
                new_place.type = 2;
                new_place.status = 0;
                new_place.price = p_price[2];
            }
            if (i == 5) {
                new_place.type = 0;
                new_place.status = 2;
                new_place.price = p_price[0];
                new_place.to_go = 80;
                new_place.go_where = 2;
            }
            if (i == 4) {
                new_place.type = 3;
                new_place.status = 0;
                new_place.price = p_price[3];
            }
        }
        else if (i > 5 && i <= 13) {
            new_place.to_go = 80;
            new_place.x_pos = 240 + 80 * (i - 5);
            new_place.y_pos = 100;
            new_place.status = 0;
            new_place.go_where = 2;
            if (i % 2 == 0) {
                new_place.type = 1;
                new_place.price = p_price[1];
            }
            else {
                new_place.type = 2;
                new_place.price = p_price[2];
            }
            if (i == 6) {
                new_place.type = 0;
                new_place.status = 3;
                new_place.price = p_price[0];
            }
            if (i == 13) {
                new_place.type = 0;
                new_place.status = 4;
                new_place.price = p_price[0];
                new_place.to_go = 100;
                new_place.go_where = 3;
            }
        }
        else if (i > 13 && i <= 17) {
            new_place.to_go = 100;
            new_place.x_pos = 880;
            new_place.y_pos = 100 + (i - 13) * 100;
            new_place.status = 0;
            new_place.go_where = 3;
            if (i % 2 == 0) {
                new_place.type = 3;
                new_place.price = p_price[3];
            }
            else {
                new_place.type = 2;
                new_place.price = p_price[2];
            }
            if (i == 14) {
                new_place.type = 0;
                new_place.status = 1;
                new_place.price = p_price[0];
            }
            if (i == 17) {
                new_place.type = 0;
                new_place.status = 5;
                new_place.price = p_price[0];
                new_place.to_go = 80;
                new_place.go_where = 4;
            }
        }
        else {
            new_place.to_go = 80;
            new_place.x_pos = 880 - 80 * (i - 17);
            new_place.y_pos = 500;
            new_place.status = 0;
            new_place.go_where = 4;
            if (i % 2 == 0) {
                new_place.type = 1;
                new_place.price = p_price[1];
            }
            else {
                new_place.type = 2;
                new_place.price = p_price[2];
            }
            if (i == 18) {
                new_place.type = 0;
                new_place.status = 3;
                new_place.price = p_price[0];
            }
        }
        places.push(new_place)
    }
}
function downDice(x, y, t) {
    if (players[curPlayerNum].is_start == 1) {
        changeimage(curPlayerNum, 2);
        setTimeout(function () {
            startmoving = setInterval(function () { startmove(); }, 1);
        }, 500);
    }
    else {
        diceContext.fillRect(577, 0, 100, 400);
        diceContext.clearRect(577, 0, 100, 400);
        y += 4;
        y -= 0.5 * 10 * (t * t);
        t -= 0.005;
        diceContext.drawImage(diceImage, x, y)
        diceImage.src = "resource/images/mydice.png";
        if (y < 300) {
            setTimeout(function () { downDice(x, y, t); }, 10)
        }
        else {
            setTimeout(function () {
                diceContext.fillRect(577, 0, 100, 400);
                diceContext.clearRect(577, 0, 100, 400);
                diceButton.style.left = String(x) + "px";
                diceButton.style.top = String(y) + "px";
                if (players[curPlayerNum].is_ui == 1) {
                    clickDice();
                    return;
                }
                setTimeout(function () { clickText(0, 1); }, 50);
            }, 500);
        }
    }
}
function clickText(num, status) {
    if (diceClicked == true) {
        diceContext.clearRect(563, 250, 300, 150);
        return;
    }
    if (status == 0) {
        num += 0.08;
    }
    else {
        num -= 0.08;
    }
    diceContext.clearRect(563, 250, 300, 150);
    diceContext.fillStyle = "rgba(255,255,255," + String(num) + ")";
    diceContext.fillText("Click!!", 563, 290, 300);
    if (num > 1 || num < 0) {
        status++;
    }
    if (diceClicked == false) {
        setTimeout(function () { clickText(num, (status % 2)); }, 50);
    }
    else {
        diceContext.clearRect(563, 250, 300, 150);
    }
}
function clickDice() {
    diceSound.play();
    diceContext.clearRect(560, 0, 150, 400);
    diceClicked = true;
    diceButton.style.left = "580px";
    diceButton.style.top = "1300px";
    diceContext.drawImage(sixDice[0], 582, 300);
    var randNum = 7;
    setTimeout(function () { rotate(diceContext, 0, 0, 0, 0, randNum); }, 20);
}
function rotate(ctx, num, i, time, dir, randNum) {
    ctx.clearRect(580, 300, 100, 100);
    ctx.save();
    ctx.translate(615, 336);
    ctx.rotate(num * Math.PI / 180);
    ctx.translate(-615, -336)
    if (time % randNum == 0 && time != 0) {
        i = parseInt(Math.random() * 6);
        if (i >= 6) {
            i -= 6;
        }
    }
    ctx.drawImage(sixDice[i], 582, 300);
    ctx.restore();
    if (dir == 0) {
        time += 1;
        num += 1 + time;
        if (num > 1800) {
            dir = 1;
            if (time % 2 == 1) {
                num -= time;
            }
        }
    }
    else {
        time -= 1;
        num -= 1 + time;
    }
    if (time > 0) {
        setTimeout(function () { rotate(ctx, num, i, time, dir, randNum); }, 20);
    }
    else {
        diceNumber = i + 1;
        diceClicked = false;
        result_dice = diceNumber;
        if (is_gamble == true) {
            is_gamble = false;
            var purchase_give = curPlayerNum;
            if (result_dice % 2 == 0) {
                players[curPlayerNum].money += 100 * result_dice;
                purchase(purchase_give, 0, 1, 100 * result_dice, 0);
            }
            else {
                if (players[curPlayerNum].money < 100 * result_dice) {
                    deletePlace(1, 100 * result_dice);
                    return;
                }
                players[curPlayerNum].money -= 100 * result_dice;
                purchase(purchase_give, 0, 2, 100 * result_dice, 0);
            }
            ShowMetheMoney();
            NextPlayer();
            setTimeout(function () { downDice(577, -179, 0); }, 1000);
        }
        else {
            place_to_go = players[curPlayerNum].at + result_dice;
            if (place_to_go > 24) {
                place_to_go -= 24;
            }
            setTimeout(function () {
                changeimage(curPlayerNum, 2)
                moving = setInterval(function () { move(curPlayerNum); }, 1);
            }, 500);
        }
    }
}
function move(i) {
    var j = players[i].at;
    text = "";
    if (places[j].to_go == players[i].walk) {
        if (players[i].at != 24) {
            players[i].at += 1;
        }
        else {
            players[i].at = 1;
        }
        players[i].walk = 0;
        j = players[i].at;
        if (j == 1 || j == 13) {
            if (j == 1) {
                players[i].money += 200;
                var purchase_give = i;
                purchase(purchase_give, 0, 1, 200, 0);
                moneySound.play();
            }
            if (i == 3) {
                var m_text = "";
                if (j == 1) {
                    players[i].x_pos += 90;
                }
                else {
                    players[i].x_pos -= 90;
                }
                m_text += players[i].x_pos;
                m_text += "px";
                document.getElementById(players[i].img_id).style.left = m_text;
            }
            changeimage(i, 2);
            ShowMetheMoney();
        }
    }
    if (j == place_to_go) {
        m_speed = 1;
        clearInterval(moving);
        changeimage(curPlayerNum, 1);
        curPlace = j;
        if (places[curPlace].type != 0) {
            if (places[j].owner == 0) {
                if (players[i].money < places[j].price) {
                    NextPlayer();
                    downDice(577, -179, 0);
                }
                else {
                    if (players[curPlayerNum].is_ui == 1) {
                        player_status = 1;
                        arrive(i, j);
                        return;
                    }
                    drawBuyBox(i, j, 1);
                }
            }
            else {
                if (places[j].owner != i) {
                    if (players[i].guard > 0) {
                        if (players[curPlayerNum].is_ui == 1) {
                            if (players[curPlayerNum].money < places[j].price || places[j].price > 500) {
                                useShield();
                            }
                            else {
                                cancelShield();
                            }
                            return;
                        }
                        useDefenseOrNot(i, j);
                        return;
                    }
                    else {
                        var purchase_give = i;
                        var purchase_get = places[j].owner;
                        if (places[j].status == 0) {
                            if (players[curPlayerNum].money < places[j].price * 1.5) {
                                deletePlace(1, places[j].price * 1.5);
                                return;
                            }
                            players[i].money -= places[j].price * 1.5;
                            players[places[j].owner].money += places[j].price * 1.5;
                            purchase(purchase_give, purchase_get, 1, places[j].price * 1.5, 0);
                            moneySound.play();
                        }
                        else {
                            if (players[curPlayerNum].money < places[j].price * 2) {
                                deletePlace(1, places[j].price * 2);
                                return;
                            }
                            players[i].money -= places[j].price * 2;
                            players[places[j].owner].money += places[j].price * 2;
                            purchase(purchase_give, purchase_get, 1, places[j].price * 2, 0);
                            moneySound.play();
                        }
                    }
                    ShowMetheMoney();
                    if (players[i].money > places[j].price) {
                        if (players[curPlayerNum].is_ui == 1) {
                            player_status = 3;
                            arrive(i, j);
                            return;
                        }
                        drawBuyBox(i, j, 3);
                    }
                    else {
                        NextPlayer();
                        downDice(577, -179, 0);
                    }
                }
                else {
                    if (places[j].status == 0 && players[i].money > (places[j].price * 1.5)) {
                        if (players[curPlayerNum].is_ui == 1) {
                            player_status = 2;
                            arrive(i, j);
                            return;
                        }
                        drawBuyBox(i, j, 2)
                    }
                    else {
                        NextPlayer();
                        downDice(577, -179, 0);
                    }
                }
            }
        }
        else {
            if (curPlace == 2 || curPlace == 14) {
                is_gamble = true;
                downDice(577, -179, 0);
            }
            else if (curPlace == 13) {
                m_speed = 4;
                WorldTour();
            }
            else if (curPlace == 17) {
                getSound.play();
                shieldmoving = setInterval(function () { getguard(); }, 1);
            }
            else if (curPlace == 5) {
                players[i].is_imprisoned = 2;
                tombstoneSound.play();
                NextPlayer();
                downDice(577, -179, 0);
            }
            else if (curPlace == 6 || curPlace == 18) {
                deletePlace(0, 0);
            }
            else {
                NextPlayer();
                downDice(577, -179, 0);
            }
        }
    }
    switch (places[j].go_where) {
        case 1:
            players[i].y_pos -= m_speed;
            text += players[i].y_pos;
            text += "px";
            document.getElementById(players[i].img_id).style.top = text;
            break;
        case 2:
            players[i].x_pos += m_speed;
            text += players[i].x_pos;
            text += "px";
            document.getElementById(players[i].img_id).style.left = text;
            break;
        case 3:
            players[i].y_pos += m_speed;
            text += players[i].y_pos;
            text += "px";
            document.getElementById(players[i].img_id).style.top = text;
            break;
        case 4:
            players[i].x_pos -= m_speed;
            text += players[i].x_pos;
            text += "px";
            document.getElementById(players[i].img_id).style.left = text;
            break;
    }
    players[i].walk += m_speed;
}
function changeimage(i, type) {
    var m_text = "resource/images/";
    m_text += i;
    if (type == 1) {
        if (players[i].at >= 1 && players[i].at <= 12) {
            m_text += "StopRight.gif";
            document.getElementById(players[i].img_id).src = m_text;
        }
        else {
            m_text += "StopLeft.gif";
            document.getElementById(players[i].img_id).src = m_text;
        }
    }
    else {
        if (players[i].at >= 1 && players[i].at <= 12) {
            m_text += "WalkRight.gif"
            document.getElementById(players[i].img_id).src = m_text;
        }
        else {
            m_text += "WalkLeft.gif"
            document.getElementById(players[i].img_id).src = m_text;
        }
    }
}
function arrive(i, j) {
    var m_text = "resource/images/";
    m_text += i;
    if (player_status == 1) {
        players[i].money -= places[j].price;
        var purchase_give = i;
        purchase(purchase_give, 0, 2, places[j].price, 0);
        places[j].owner = i;
        var userContext = userCanvas.getContext("2d");
        if (j >= 1 && j <= 12) {
            m_text += "HeadRight.png";
            Headimgs[j].src = m_text;
            if (j == 3 || j == 4) {
                Headimgs[j].onload = function () {
                    userContext.drawImage(Headimgs[j], places[j].x_pos + 65, places[j].y_pos, 51, 47);
                }
            }
            else {
                Headimgs[j].onload = function () {
                    userContext.drawImage(Headimgs[j], places[j].x_pos + 25, places[j].y_pos + 50, 51, 47);
                }
            }
        }
        else {
            m_text += "HeadLeft.png";
            Headimgs[j].src = m_text;
            if (j == 15 || j == 16) {
                Headimgs[j].onload = function () {
                    userContext.drawImage(Headimgs[j], places[j].x_pos, places[j].y_pos, 51, 47);
                }
            }
            else {
                Headimgs[j].onload = function () {
                    userContext.drawImage(Headimgs[j], places[j].x_pos + 35, places[j].y_pos - 50, 51, 47);
                }
            }
        }
        NextPlayer();
        downDice(577, -179, 0)
    }
    else if (player_status == 2) {
        players[i].money -= places[j].price * 1.5;
        var purchase_give = i;
        purchase(purchase_give, 0, 2, places[j].price * 1.5, 0);
        places[j].price += places[j].price * 1.5;
        places[j].status = 1;
        var p_name = "plant" + j;
        switch (places[j].type) {
            case 1:
                document.getElementById(p_name).src = "resource/images/Peashooter.gif";
                break;
            case 2:
                document.getElementById(p_name).src = "resource/images/SnowPea.gif";
                break;
            case 3:
                document.getElementById(p_name).src = "resource/images/Chomper.gif";
                document.getElementById(p_name).style.width = "70px";
                document.getElementById(p_name).style.height = "75px";
                break;
        }
        document.getElementById(p_name).style.position = "absolute";
        document.getElementById(p_name).style.zIndex = "6";
        var p_text = "";
        var tp_num;
        switch (places[j].go_where) {
            case 1:
                tp_num = places[j].x_pos + 95;
                p_text = tp_num;
                p_text += "px";
                console.log(p_text);
                document.getElementById(p_name).style.left = p_text;
                p_text = places[j].y_pos;
                p_text += "px";
                document.getElementById(p_name).style.top = p_text;
                break;
            case 2:
                tp_num = places[j].y_pos + 100;
                p_text = tp_num;
                p_text += "px";
                document.getElementById(p_name).style.top = p_text;
                p_text = places[j].x_pos + 15;
                p_text += "px";
                document.getElementById(p_name).style.left = p_text;
                break;
            case 3:
                tp_num = places[j].x_pos - 65;
                p_text = tp_num;
                p_text += "px";
                document.getElementById(p_name).style.left = p_text;
                p_text = places[j].y_pos;
                p_text += "px";
                document.getElementById(p_name).style.top = p_text;
                break;
            case 4:
                tp_num = places[j].y_pos - 100;
                p_text = tp_num;
                p_text += "px";
                document.getElementById(p_name).style.top = p_text;
                p_text = places[j].x_pos + 15;
                p_text += "px";
                document.getElementById(p_name).style.left = p_text;
                break;
        }
        NextPlayer();
        downDice(577, -179, 0)
    }
    else {
        players[places[j].owner].money += places[j].price;
        var purchase_give = i;
        var purchase_get = places[j].owner;
        purchase(purchase_give, purchase_get, 1, places[j].price, 0);
        players[i].money -= places[j].price;
        places[j].owner = i;
        var userContext = userCanvas.getContext("2d");
        if (j > 1 && j < 13) {
            if (j == 3 || j == 4) {
                userContext.fillRect(places[j].x_pos + 65, places[j].y_pos, 51, 47);
                userContext.clearRect(places[j].x_pos + 65, places[j].y_pos, 51, 47);
            }
            else {
                userContext.fillRect(places[j].x_pos + 25, places[j].y_pos + 50, 51, 47);
                userContext.clearRect(places[j].x_pos + 25, places[j].y_pos + 50, 51, 47);
            }
            m_text += "HeadRight.png";
            Headimgs[j].src = m_text;
        }
        else {
            if (j == 15 || j == 16) {
                userContext.fillRect(places[j].x_pos, places[j].y_pos, 51, 47);
                userContext.clearRect(places[j].x_pos, places[j].y_pos, 51, 47);
            }
            else {
                userContext.fillRect(places[j].x_pos + 35, places[j].y_pos - 50, 51, 47);
                userContext.clearRect(places[j].x_pos + 35, places[j].y_pos - 50, 51, 47);
            }
            m_text += "HeadLeft.png";
            Headimgs[j].src = m_text;
        }
        if (places[j].status == 0 && players[i].money > places[j].price * 1.5) {
            setTimeout(function () {
                if (players[curPlayerNum].is_ui == 1) {
                    player_status = 2;
                    arrive(i, j);
                    return;
                }
                drawBuyBox(i, j, 2)
            }, 800);
        }
        else {
            NextPlayer();
            downDice(577, -179, 0)
        }
    }
    ShowMetheMoney();
}
function drawBuyBox(i, j, type) {
    curPlayerNum = i;
    curPlace = j;
    player_status = type;
    buyBoxCanvas.style.zIndex = "10";
    buyBoxTextCanvas.style.zIndex = "11";
    buyBoxContext.drawImage(buyBoxImage, 410, 150, 400, 300);
    buyBoxContext.font = "15px Arial";
    buyBoxTextContext.clearRect(0, 0, 1400, 600);
    buyBoxTextContext.font = "bold 15px Arial";
    buyBoxTextContext.fillStyle = "rgb(255,201,14)";
    buyBoxTextContext.fillText("Buy Item", 582, 180);
    if (places[curPlace].owner == curPlayerNum) {
        buyBoxTextContext.fillText("Plant", 593, 315);
        if (places[curPlace].type == 3) {
            chomperImg.style.left = "582px";
            chomperImg.style.top = "220px";
            chomperImg.style.zIndex = "11";
            buyBoxContext.fillText("价格 : 600", 575, 350);
            buyBoxContext.fillText("通行费 : 1400", 568, 370);
        }
        else if (places[curPlace].type == 2) {
            snowImg.style.left = "582px";
            snowImg.style.top = "220px";
            snowImg.style.zIndex = "11";
            buyBoxContext.fillText("价格 : 300", 575, 350);
            buyBoxContext.fillText("通行费 : 650", 568, 370);
        }
        else if (places[curPlace].type == 1) {
            peaImg.style.left = "582px";
            peaImg.style.top = "220px";
            peaImg.style.zIndex = "11";
            buyBoxContext.fillText("价格 : 150", 575, 350);
            buyBoxContext.fillText("通行费 : 350", 568, 370);
        }
    }
    else if (places[curPlace].owner == 0) {
        buyBoxTextContext.fillText("Soil", 598, 315);
        if (places[curPlace].type == 3) {
            buyBoxContext.drawImage(topPlaceImage, 559, 205, 102, 90);
            buyBoxContext.fillText("价格 : 400", 575, 350);
            buyBoxContext.fillText("通行费 : 600", 568, 370);
        }
        else if (places[curPlace].type == 2) {
            buyBoxContext.drawImage(middlePlaceImage, 559, 205, 102, 90);
            buyBoxContext.fillText("价格 : 200", 575, 350);
            buyBoxContext.fillText("通行费 : 350", 568, 370);
        }
        else if (places[curPlace].type == 1) {
            buyBoxContext.drawImage(bottomPlaceImage, 559, 205, 102, 90);
            buyBoxContext.fillText("价格 : 100", 575, 350);
            buyBoxContext.fillText("通行费 : 150", 568, 370);
        }
    }
    else {

        if (curPlayerNum == 1) {
            buyBoxContext.drawImage(player1Head, 582, 220);
        }
        else if (curPlayerNum == 2) {
            buyBoxContext.drawImage(player2Head, 582, 220);
        }
        else if (curPlayerNum == 3) {
            buyBoxContext.drawImage(player3Head, 582, 220);
        }
        else {
            buyBoxContext.drawImage(player4Head, 592, 230);
        }
        if (places[curPlace].status == 0) {
            buyBoxTextContext.fillText("Soil", 598, 315);
            if (places[curPlace].type == 3) {
                buyBoxContext.fillText("价格 : 400", 575, 350);
                buyBoxContext.fillText("通行费 : 600", 568, 370);
            }
            else if (places[curPlace].type == 2) {
                buyBoxContext.fillText("价格 : 200", 575, 350);
                buyBoxContext.fillText("通行费 : 350", 568, 370);
            }
            else if (places[curPlace].type == 1) {
                buyBoxContext.fillText("价格 : 100", 575, 350);
                buyBoxContext.fillText("通行费 : 150", 568, 370);
            }
        }
        else {
            buyBoxTextContext.fillText("Soil + Plant", 570, 315);
            if (places[curPlace].type == 3) {
                buyBoxContext.fillText("价格 : 1000", 575, 350);
                buyBoxContext.fillText("通行费 : 2000", 568, 370);
            }
            else if (places[curPlace].type == 2) {
                buyBoxContext.fillText("价格 : 500", 575, 350);
                buyBoxContext.fillText("通行费 : 1000", 568, 370);
            }
            else if (places[curPlace].type == 1) {
                buyBoxContext.fillText("价格 : 250", 575, 350);
                buyBoxContext.fillText("通行费 : 500", 568, 370);
            }
        }
    }
    buyYesButton.style.zIndex = "15";
    buyYesButton.style.left = "510px";
    buyYesButton.style.top = "400px";
    buyNoButton.style.zIndex = "15";
    buyNoButton.style.left = "610px";
    buyNoButton.style.top = "400px";
}
function cancelBuy() {
    buyNoButton.style.zIndex = "1";
    buyYesButton.style.zIndex = "1";
    chomperImg.style.zIndex = "1";
    snowImg.style.zIndex = "1";
    peaImg.style.zIndex = "1";
    buyBoxContext.fillRect(0, 0, 1400, 600);
    buyBoxContext.clearRect(0, 0, 1400, 600);
    buyBoxCanvas.style.zIndex = "1";

    buyBoxTextCanvas.style.zIndex = "1";

    buttonSound.play();
    NextPlayer();
    downDice(577, -179, 0)
}
function Buy() {
    buyNoButton.style.zIndex = "1";
    buyYesButton.style.zIndex = "1";
    chomperImg.style.zIndex = "1";
    snowImg.style.zIndex = "1";
    peaImg.style.zIndex = "1";
    buyBoxContext.fillRect(0, 0, 1400, 600)
    buyBoxContext.clearRect(0, 0, 1400, 600);
    buyBoxCanvas.style.zIndex = "1";

    buyBoxTextCanvas.style.zIndex = "1";

    buySound.play();
    moneySound.play();
    arrive(curPlayerNum, curPlace);
}
function ShowMetheMoney() {
    moneyContext.clearRect(1230, 0, 200, 400);
    for (var k = 1; k <= player_pop; k++) {
        var m_text = players[k].money;
        moneyContext.fillText(m_text, 1230, 65 * k + 50);
    }
}
function WorldTour() {
    for (var i = 1; i <= 24; i++) {
        if (i != 1 && i != 5 && i != 13 && i != 17) {
            var temp = document.getElementById("tourButton" + String(i));
            temp.style.zIndex = "50";
            temp.style.background = "url(resource/images/PointerDown.gif) no-repeat center"
        }
    }
    if (players[curPlayerNum].is_ui == 1) {
        var index = 0;
        var firstindex = 0;
        var lastindex = 0;
        var indexvalue = 1000;
        for (var i = 1; i <= 24; i++) {
            var j = i + 13;
            if (j > 24) {
                j -= 24;
            }
            if (places[j].type != 0) {
                if (places[j].owner == 0) {
                    if (places[j].price <= players[curPlayerNum].money) {
                        firstindex = j;
                    }
                }
                if (places[j].owner == 0 || places[j].owner == curPlayerNum) {
                    index = j;
                }
                if (places[j].price <= indexvalue) {
                    indexvalue = places[j].price;
                    lastindex = j;
                }
            }
        }
        if (firstindex != 0) {
            goTravel(firstindex);
            return;
        }
        if (index != 0) {
            goTravel(index);
            return;
        }
        goTravel(lastindex);
    }
}
function goTravel(index) {
    if (curPlace == 13) {
        place_to_go = index;
        if (place_to_go > 24) {
            place_to_go -= 24;
        }
        for (var i = 1; i <= 24; i++) {
            if (i != 1 && i != 5 && i != 13 && i != 17) {
                var temp = document.getElementById("tourButton" + String(i));
                temp.style.zIndex = "1";
            }
        }
        worldTourSound.play();
        setTimeout(function () {
            changeimage(curPlayerNum, 2)
            moving = setInterval(function () { move(curPlayerNum); }, 1);
        }, 100);
    }
    else {
        for (var i = 1; i <= 24; i++) {
            if (i != 1 && i != 5 && i != 13 && i != 17 && places[i].owner == curPlayerNum) {
                var temp = document.getElementById("tourButton" + String(i));
                temp.style.zIndex = "1";
            }
        }
        setTimeout(function () {
            cleanerCanvas.style.zIndex = "50";
            lawnSound.play();
            moveCleaner(index, 0, 0, 0, 0);
        }, 500);
    }
}
function NextPlayer() {
    if (curPlayerNum != player_pop) {
        curPlayerNum += 1;
        var temp = 65 + (curPlayerNum - 1) * 65;
        var t_text = "";
        t_text += temp;
        t_text += "px";
        document.getElementById("curPlayer").style.top = t_text;
    }
    else {
        curPlayerNum = 1;
        document.getElementById("curPlayer").style.top = "65px";
    }
    if (players[curPlayerNum].is_imprisoned > 0) {
        players[curPlayerNum].is_imprisoned -= 1;
        NextPlayer();
    }
    if (players[curPlayerNum].is_dead == 1) {
        NextPlayer();
    }
}
function curPlayerlose() {
    explosionSound.play();
    players[curPlayerNum].money = 0;
    ShowMetheMoney();
    var m_text = "";
    if (curPlayerNum == 3 && curPlace > 13) {
        m_text += players[curPlayerNum].x_pos - 50 + 90;
    }
    else {
        m_text += players[curPlayerNum].x_pos - 50;
    }
    m_text += "px";
    document.getElementById("bomb").style.left = m_text;
    m_text = "";
    m_text += players[curPlayerNum].y_pos - 30;
    m_text += "px";
    document.getElementById("bomb").style.top = m_text;
    document.getElementById("bomb").src = "resource/images/boom.gif"
    document.getElementById("bomb").style.zIndex = "8";
    for (var i = 1; i <= 24; i++) {
        if (places[i].type != 0) {
            if (places[i].owner == curPlayerNum) {
                switch (places[i].go_where) {
                    case 1:
                        userContext.fillRect(places[i].x_pos + 65, places[i].y_pos, 51, 47);
                        userContext.clearRect(places[i].x_pos + 65, places[i].y_pos, 51, 47);
                        break;
                    case 2:
                        userContext.fillRect(places[i].x_pos + 25, places[i].y_pos + 50, 51, 47);
                        userContext.clearRect(places[i].x_pos + 25, places[i].y_pos + 50, 51, 47);
                        break;
                    case 3:
                        userContext.fillRect(places[i].x_pos, places[i].y_pos, 51, 47);
                        userContext.clearRect(places[i].x_pos, places[i].y_pos, 51, 47);
                        break;
                    case 4:
                        userContext.fillRect(places[i].x_pos + 35, places[i].y_pos - 50, 51, 47);
                        userContext.clearRect(places[i].x_pos + 35, places[i].y_pos - 50, 51, 47);
                        break;
                }
                boomImgs[i].style.position = "absolute";
                m_text = "";
                m_text = places[i].x_pos - 70;
                m_text += "px";
                boomImgs[i].style.left = m_text;
                m_text = "";
                m_text = places[i].y_pos - 100;
                m_text += "px";
                boomImgs[i].style.top = m_text;
                boomImgs[i].style.zIndex = "10";
                boomImgs[i].src = "resource/images/Boom.gif";
                places[i].price = p_price[places[i].type];
                places[i].owner = 0;
                places[i].status = 0;
                var p_text = "plant";
                p_text += i;
                document.getElementById(p_text).style.zIndex = "1";
            }
        }
    }
    setTimeout(function () {
        for (var i = 0; i <= 24; i++) {
            boomImgs[i].style.zIndex = "1";
        }
        document.getElementById("bomb").style.zIndex = "1";
        boomImg.style.zIndex = "1";
        if (players[curPlayerNum].at < 13) {
            document.getElementById(players[curPlayerNum].img_id).src = "resource/images/PlayerDieRight.gif"
        }
        else {
            if (curPlayerNum == 3) {
                m_text = "";
                players[3].x_pos += 90;
                m_text += players[3].x_pos;
                m_text += "px";
                document.getElementById(players[curPlayerNum].img_id).style.left = m_text;
                document.getElementById(players[curPlayerNum].img_id).src = "resource/images/PlayerDieLeft.gif"
            }
            else {
                document.getElementById(players[curPlayerNum].img_id).src = "resource/images/PlayerDieLeft.gif"
            }
        }
    }, 850);
    setTimeout(function () {
        document.getElementById(players[curPlayerNum].img_id).style.zIndex = "1";
        players[curPlayerNum].is_dead = 1;
        maskContext.drawImage(deadImg, 1100, curPlayerNum * 65 + 15, 51, 51);
        is_survive -= 1;
        if (is_survive == 1) {
            Win();
            return;
            console.log("win");
        }
        NextPlayer();
        downDice(577, -179, 0);
    }, 3700);
}
function Win() {
    BGM.pause();
    winSound.play();
    var winner;
    for (var i = 1; i <= player_pop; i++) {
        if (players[i].is_dead == 0) {
            winner = i;
            break;
        }
    }
    document.getElementById("win").style.zIndex = "20";
    document.getElementById(players[winner].img_id).style.top = "350px"
    document.getElementById(players[winner].img_id).style.left = "550px"
    document.getElementById(players[winner].img_id).style.width = "150px"
    document.getElementById(players[winner].img_id).style.height = "200px"
    document.getElementById(players[winner].img_id).style.zIndex = "21"
}
function deletePlace(type, value) {
    var ownerCheck = 0;
    var totalprice = 0;
    is_refund = type;
    refund_money = value;
    if (is_refund == 1) {
        for (var i = 1; i <= 24; i++) {
            if (i != 1 && i != 5 && i != 13 && i != 17 && places[i].owner == curPlayerNum) {
                totalprice += places[i].price;
            }
        }
    }
    if (totalprice + players[curPlayerNum].money < value) {
        curPlayerlose();
        return;
    }
    for (var i = 1; i <= 24; i++) {
        if (i != 1 && i != 5 && i != 13 && i != 17 && places[i].owner == curPlayerNum) {
            var temp = document.getElementById("tourButton" + String(i));
            temp.style.zIndex = "50";
            temp.style.background = "url(resource/images/PointerDown.gif) no-repeat center"
            ownerCheck++;
        }
    }
    if (ownerCheck == 0) {
        NextPlayer();
        downDice(577, -179, 0);
        return;
    }
    if (players[curPlayerNum].is_ui == 1) {
        var indexvalue = 1000;
        var index = 0;
        for (var i = 2; i <= 24; i++) {
            if (places[i].owner == curPlayerNum) {
                if (places[i].price < indexvalue) {
                    indexvalue = places[i].price;
                    index = i;
                }
            }
        }
        goTravel(index);
    }
}
function moveCleaner(index, x, y, time, originX) {
    if (index > 1 && index < 5) {
        if (time == 0) {
            x = places[index].x_pos - 15;
            y = places[index].y_pos - 5;
            originX = x;
        }
    }
    else if (index > 5 && index < 13) {
        if (time == 0) {
            x = places[index].x_pos - 50;
            y = places[index].y_pos + 40;
            originX = x;
        }
    }
    else if (index > 13 && index < 17) {
        if (time == 0) {
            x = places[index].x_pos - 80;
            y = places[index].y_pos - 5;
            originX = x;
        }
    }
    else {
        if (time == 0) {
            x = places[index].x_pos - 50;
            y = places[index].y_pos - 55;
            originX = x;
        }
    }
    cleanerContext.fillRect(x, y, 70, 57);
    cleanerContext.clearRect(x, y, 70, 57);
    x++;
    cleanerContext.drawImage(cleanerImage, x, y, 70, 57);
    userContext.fillRect(x + 69, y, 1, 57);
    userContext.clearRect(x + 69, y, 1, 57);
    time++;
    if (x - originX < 70) {
        setTimeout(function () { moveCleaner(index, x, y, time, originX); }, 60);
    }
    else {
        cleanerContext.fillRect(x, y, 70, 57);
        cleanerContext.clearRect(x, y, 70, 57);
        places[index].owner = 0;
        places[index].status = 0;
        var p_text = "plant";
        p_text += index;
        document.getElementById(p_text).style.zIndex = "1";
        cleanerCanvas.style.zIndex = "1";
        if (is_refund == 1) {
            players[curPlayerNum].money += places[index].price;
            moneySound.play();
            purchase(curPlayerNum, 0, 1, places[index].price, 0);
            ShowMetheMoney();
            var m = curPlayerNum;
            var n = curPlace;
            if (players[curPlayerNum].money < refund_money) {
                deletePlace(1, refund_money);
                return;
            }
            setTimeout(function () {
                players[m].money -= refund_money;
                players[places[n].owner].money += refund_money;
                purchase(m, places[n].owner, 0, refund_money, 0);
                moneySound.play();
                ShowMetheMoney();
            }, 1500);
            is_refund = 0;
        }
        places[index].price = p_price[places[index].type];
        NextPlayer();
        downDice(577, -179, 0);
    }
}
function setPlayerImage(id) {
    playerImgs[id].onload = function () {
        userContext.drawImage(playerImgs[id], 1105, 80 + id * 65, 51, 51);
    }
    var temp_text = "resource/images/";
    temp_text += 1 + id;
    temp_text += "HeadLeft.png";
    playerImgs[id].src = temp_text;
}
function startmove() {
    var m_text = "";
    if (players[curPlayerNum].y_pos != players[curPlayerNum].start_y_pos) {
        players[curPlayerNum].start_y_pos += m_speed;
        m_text += players[curPlayerNum].start_y_pos;
        m_text += "px";
        document.getElementById(players[curPlayerNum].img_id).style.top = m_text;
    }
    else {
        if (players[curPlayerNum].x_pos != players[curPlayerNum].start_x_pos) {
            players[curPlayerNum].start_x_pos += m_speed;
            m_text += players[curPlayerNum].start_x_pos;
            m_text += "px";
            document.getElementById(players[curPlayerNum].img_id).style.left = m_text;
        }
        else {
            players[curPlayerNum].is_start = 0;
            clearInterval(startmoving);
            changeimage(curPlayerNum, 1);
            downDice(577, -179, 0);
        }
    }
}
function useDefenseOrNot(i, j) {
    curPlayerNum = i;
    curPlace = j;
    buyBoxCanvas.style.zIndex = "10";
    buyBoxTextCanvas.style.zIndex = "11";
    buyBoxContext.drawImage(buyBoxImage, 410, 150, 400, 300);
    buyBoxContext.font = "12px Arial";

    buyBoxTextContext.clearRect(0, 0, 1400, 600);
    buyBoxTextContext.font = "bold 15px Arial";
    buyBoxTextContext.fillStyle = "rgb(255,201,14)";
    buyBoxTextContext.fillText("Use Item", 582, 180);
    buyBoxTextContext.fillText("Shield", 588, 315);
    buyBoxContext.drawImage(shieldImage, 575, 216, 70, 70);
    buyBoxContext.fillText("使用它,可以不交通行费", 550, 350);
    shieldYesButton.style.zIndex = "15";
    shieldYesButton.style.left = "510px";
    shieldYesButton.style.top = "400px";
    shieldNoButton.style.zIndex = "15";
    shieldNoButton.style.left = "610px";
    shieldNoButton.style.top = "400px";
}
function useShield() {
    buttonSound.play();
    players[curPlayerNum].guard -= 1;
    guardContext.clearRect(1230, 0, 200, 400);
    for (var k = 1; k <= player_pop; k++) {
        var m_text = "X ";
        m_text += players[k].guard;
        guardContext.fillText(m_text, 1240, 65 * k + 80);
    }
    shieldNoButton.style.zIndex = "1";
    shieldYesButton.style.zIndex = "1";
    buyBoxContext.fillRect(0, 0, 1400, 600);
    buyBoxContext.clearRect(0, 0, 1400, 600);
    buyBoxCanvas.style.zIndex = "1";
    buyBoxTextCanvas.style.zIndex = "1";
    var i = curPlayerNum;
    var j = curPlace;
    if (players[i].money > places[j].price) {
        setTimeout(function () {
            if (players[curPlayerNum].is_ui == 1) {
                player_status = 3;
                arrive(i, j);
                return;
            }
            drawBuyBox(curPlayerNum, curPlace, 3);
        }, 500);
    }
    else {
        NextPlayer();
        downDice(577, -179, 0);
    }
}
function cancelShield() {
    buttonSound.play();
    shieldNoButton.style.zIndex = "1";
    shieldYesButton.style.zIndex = "1";
    buyBoxContext.fillRect(0, 0, 1400, 600);
    buyBoxContext.clearRect(0, 0, 1400, 600);
    var i = curPlayerNum;
    var j = curPlace;
    buyBoxCanvas.style.zIndex = "1";
    buyBoxTextCanvas.style.zIndex = "1";
    var purchase_give = i;
    purchase_get = places[j].owner;
    if (places[j].status == 0) {
        if (players[curPlayerNum].money < places[j].price * 1.5) {
            deletePlace(1, places[j].price * 1.5);
            return;
        }
        players[i].money -= places[j].price * 1.5;
        players[places[j].owner].money += places[j].price * 1.5;
        purchase(purchase_give, purchase_get, 1, places[j].price * 1.5, 0);
    }
    else {
        if (players[curPlayerNum].money < places[j].price * 2) {
            deletePlace(1, places[j].price * 2);
            return;
        }
        players[i].money -= places[j].price * 2;
        players[places[j].owner].money += places[j].price * 2;
        purchase(purchase_give, purchase_get, 1, places[j].price * 2, 0);
    }
    ShowMetheMoney();
    if (players[i].money > places[j].price) {
        setTimeout(function () {
            if (players[curPlayerNum].is_ui == 1) {
                player_status = 3;
                arrive(i, j);
                return;
            }
            drawBuyBox(curPlayerNum, curPlace, 3);
        }, 500);
    }
    else {
        NextPlayer();
        downDice(577, -179, 0);
    }
}
function getguard() {
    guardContext.clearRect(0, 0, 1200, 600);
    if (shieldindex == 400) {
        clearInterval(shieldmoving);
        players[curPlayerNum].guard += 1;
        guardContext.clearRect(0, 0, 1400, 400);
        for (var k = 1; k <= player_pop; k++) {
            var m_text = "X ";
            m_text += players[k].guard;
            guardContext.fillText(m_text, 1240, 65 * k + 80);
        }
        shieldindex = 430;
        NextPlayer();
        downDice(577, -179, 0);
        return;
    }
    guardContext.drawImage(shieldImg, 920, shieldindex, 25, 25);
    shieldindex -= 0.25;
}
function purchase(give_id, get_id, type, value, moneyindex) {
    purchaseContext.clearRect(1230, 0, 200, 400);
    if (parseInt(moneyindex) == 30) {
        return;
    }
    var m_text = "";
    if (get_id == 0) {
        if (type == 1) {
            purchaseContext.fillStyle = "green";
            m_text += "+";
            m_text += value;
        }
        else {
            purchaseContext.fillStyle = "red";
            m_text += "-";
            m_text += value;
        }
        purchaseContext.fillText(m_text, 1230, 65 * give_id - moneyindex + 50);
    }
    else {
        purchaseContext.fillStyle = "green";
        m_text += "+";
        m_text += value;
        purchaseContext.fillText(m_text, 1230, 65 * get_id - moneyindex + 50);
        purchaseContext.fillStyle = "red";
        m_text = "";
        m_text += "-";
        m_text += value;
        purchaseContext.fillText(m_text, 1230, 65 * give_id - moneyindex + 50);
    }
    setTimeout(function () {
        purchase(give_id, get_id, type, value, moneyindex + 0.5)
    }, 20);
}