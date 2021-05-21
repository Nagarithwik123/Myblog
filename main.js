var canvas= new fabric.Canvas('myCanvas');

player_x=10;
player_y=10;

block_image_width=30;
block_image_height=30;

var player_object="";
var player_block_image="";

function player_update(){
    fabric.Image.fromURL("player.JPG",function(Img){
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
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