var canvas= new fabric.Canvas('myCanvas');

player_x=10;
player_y=10;

block_image_width=30;
block_image_height=30;

var player_object="";
var player_block_image="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;

        player_object.scaleToWidth(block_image_width);
        player_object.scaleToHeight(block_image_height);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        player_block_image=Img;
        player_block_image.scaleToWidth(150);
        player_block_image.scaleToHeight(150);
        player_block_image.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_block_image);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPressed =e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed=='80'){
        console.log("p and shift pressed together");
        block_image_width=block_image_width+5;
        block_image_height=block_image_height+5;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(e.shiftKey == true && keyPressed=='77'){
        console.log("m and shift pressed together");
        block_image_width=block_image_width-5;
        block_image_height=block_image_height-5;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(keyPressed=='38'){
        up();
        console.log("up");
    }
    if(keyPressed=='40'){
        down();
        console.log("down");
    }
    if(keyPressed=='37'){
        left();
        console.log("left");
    }
    if(keyPressed=='39'){
        right();
        console.log("right");
        }
    if(keyPressed=='70'){
        new_image('ironman_face.png');
        console.log("f");
    }
    if(keyPressed=='66'){
        new_image('spiderman_body.png');
        console.log("b");
    }
    if(keyPressed=='76'){
        new_image('hulk_legs.png');
        console.log("l");
    }
    if(keyPressed=='82'){
        new_image('thor_right_hand.png');
        console.log("r");
    }
    if(keyPressed=='72'){
        new_image('captain_america_left_hand.png');
        console.log("r");
    }
}
function up(){
      if(player_y>=0){
          player_y-=block_image_height;
          console.log("block_image_height="+block_image_height);
          console.log("when Up arrow is prssed,x="+player_x + "y=" +player_y);
          canvas.remove(player_object);
            player_update();
      }
  }
  function down(){
    if(player_y<=500){
        player_y+=block_image_height;
        console.log("block_image_height="+block_image_height);
        console.log("when Down arrow is prssed,x="+player_x + "y=" +player_y);
        canvas.remove(player_object);
          player_update();
    }
}
function left(){
    if(player_x>=0){
        player_x-=block_image_width;
        console.log("block_image_width="+block_image_width);
        console.log("when Left arrow is prssed,x="+player_x + "y=" +player_y);
        canvas.remove(player_object);
          player_update();
    }
}
function right(){
    if(player_x<=850){
        player_x+=block_image_width;
        console.log("block_image_width="+block_image_width);
        console.log("when Right arrow is prssed,x="+player_x + "y=" +player_y);
        canvas.remove(player_object);
          player_update();
    }
}