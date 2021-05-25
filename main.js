canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_width=100;
car1_height=90;
car1_img="car1.png";
car1_x=10;
car1_y=10;

car2_width=100;
car2_height=90;
car2_img="car2.png";
car2_x=10;
car2_y=100;

background_image="racing.jpg";

function add() {
    background_imgtag=new Image();
    background_imgtag.onload=uploadbackground;
    background_imgtag.src=background_image;

    car1_imgtag=new Image();
    car1_imgtag.onload=uploadcar1;
    car1_imgtag.src=car1_img;

    car2_imgtag=new Image();
    car2_imgtag.onload=uploadcar2;
    car2_imgtag.src=car2_img;
}

function uploadbackground() {
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgtag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgtag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
    keypressed=e.keyCode;
    console.log(keypressed);

    if (keypressed=="38") {
        car1_up();
        console.log("up");
    }

    if (keypressed=="40") {
        car1_down();
        console.log("down");
    }

    if (keypressed=="37") {
        car1_left();
        console.log("left");
    }

    if (keypressed=="39") {
        car1_right();
        console.log("right");
    }

    if (keypressed=='87'){
        car2_up();
        console.log("up W");
    }

    if (keypressed=='65'){
        car2_left();
        console.log("left A");
    }
        
    if (keypressed=='83'){
        car2_down();
        console.log("down S");
    }
    if (keypressed=='68'){
        car2_right();
        console.log("right D");
    }
    if (car1_x > 700) {
        console.log("car1 won");
        document.getElementById('game_status').innerHTML = "Car 1 Won!!!!!!!!!!!!!"
    }

    if (car2_x > 700) {
        console.log("car2 won");
        document.getElementById('game_status').innerHTML = "Car 2 Won!!!!!!!!!!!!!"
    }
}

