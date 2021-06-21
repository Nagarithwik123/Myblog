canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rabbit_width=100;
rabbit_height=90;
rabbit_img="rabbit.jpg";
rabbit_x=10;
rabbit_y=10;

tortoise_width=100;
tortoise_height=90;
tortoise_img="tortoise.jpg";
tortoise_x=10;
tortoise_y=100;

background_image="racing.jpg";

function add() {
    background_imgtag=new Image();
    background_imgtag.onload=uploadbackground;
    background_imgtag.src=background_image;

    rabbit_imgtag=new Image();
    rabbit_imgtag.onload=uploadrabbit;
    rabbit_imgtag.src=rabbit_img;

    tortoise_imgtag=new Image();
    tortoise_imgtag.onload=uploadtortoise;
    tortoise_imgtag.src=tortoise_img;
}

function uploadbackground() {
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
}

function uploadrabbit() {
    ctx.drawImage(rabbit_imgtag, rabbit_x, rabbit_y, rabbit_width, rabbit_height);
}

function uploadtortoise() {
    ctx.drawImage(tortoise_imgtag, tortoise_x, tortoise_y, tortoise_width, tortoise_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
    keypressed=e.keyCode;
    console.log(keypressed);

    if (keypressed=="38") {
        rabbit_up();
        console.log("up");
    }

    if (keypressed=="40") {
        rabbit_down();
        console.log("down");
    }

    if (keypressed=="37") {
        rabbit_left();
        console.log("left");
    }

    if (keypressed=="39") {
        rabbit_right();
        console.log("right");
    }

    if (keypressed=='87'){
        tortoise_up();
        console.log("up W");
    }

    if (keypressed=='65'){
        tortoise_left();
        console.log("left A");
    }
        
    if (keypressed=='83'){
        tortoise_down();
        console.log("down S");
    }
    if (keypressed=='68'){
        tortoise_right();
        console.log("right D");
    }
    if (rabbit_x > 700) {
        console.log("Rabbit won");
        document.getElementById('game_status').innerHTML = "Rabbit Won and Game Finished!!!!!!!!!!!!!"
    }

    if (tortoise_x > 700) {
        console.log("Tortoise won");
        document.getElementById('game_status').innerHTML = "Tortoise Won and Game Finished!!!!!!!!!!!!!"
    }
}
function rabbit_up(){
    if (rabbit_y>=0) {
        
        rabbit_y = rabbit_y - 10;
        console.log("When up arrow is pressed, x = " + rabbit_x + " | y = " + rabbit_y);
        uploadbackground();
        uploadrabbit();
        uploadtortoise();
    }
}

function rabbit_down(){
    if (rabbit_y <=500) {
        
        rabbit_y = rabbit_y + 10;
        console.log("When down arrow is pressed, x = " + rabbit_x + " | y = " + rabbit_y);
        uploadbackground();
        uploadrabbit();
        uploadtortoise();
    }
}

function rabbit_left(){
    if (rabbit_x>=0) {
        
        rabbit_x= rabbit_x - 10;
        console.log("When left arrow is pressed, x = " + rabbit_x + " | y = " + rabbit_y);
        uploadbackground();
        uploadrabbit();
        uploadtortoise();
    }
}

function rabbit_right(){
    if (rabbit_x<=700) {
        
        rabbit_x = rabbit_x + 10;
        console.log("When right is pressed, x = " + rabbit_x + " | y = " + rabbit_y);
        uploadbackground();
        uploadrabbit();
        uploadtortoise();
    }
}

function tortoise_up(){
    if (tortoise_y>=0) {
        
        tortoise_y = tortoise_y - 10;
        console.log("When W is pressed, x = " + tortoise_x + " | y = " + tortoise_y);
        uploadbackground();
        uploadrabbit();
        uploadtortoise();
    }
}
function tortoise_down(){
    if (tortoise_y<=500) {
        
        tortoise_y = tortoise_y + 10;
        console.log("When S is pressed, x = " + tortoise_x + " | y = " + tortoise_y);
        uploadbackground();
        uploadrabbit();
        uploadtortoise();
    }
}
function tortoise_left(){
    if (tortoise_x>=0) {
        
        tortoise_x = tortoise_x - 10;
        console.log("When A is pressed, x = " + tortoise_x + " | y = " + tortoise_y);
        uploadbackground();
        uploadrabbit();
        uploadtortoise();
    }
}
function tortoise_right(){
    if (tortoise_x<=700) {
        
        tortoise_x = tortoise_x + 10;
        console.log("When D is pressed, x = " + tortoise_x + " | y = " + tortoise_y);
        uploadbackground();
        uploadrabbit();
        uploadtortoise();
    }
}
