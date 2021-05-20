var item=["paneer tandoori pizza","margherita pizza","veg supreme pizza","spicy veg pizza","corn and onion pizza"];
function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    item.sort();
for(var i=0;i<item.length;i++){
    htmldata=htmldata+'<li>'+ item[i]+ '</li>'
}
htmldata=htmldata+"</ol>"
document.getElementById("menu_list").innerHTML=htmldata;
}
function add_top(){
    var htmldata;
    var item2= document.getElementById("add_item").value;
    item.push(item2);
    item.sort();
    htmldata="<section class='cards'>"
    for(var i=0;i<item.length;i++){
        htmldata=htmldata+'<div class="card">' + '<img src="pizza.png"/>' + item[i] + '</div>';
    }
    htmldata=htmldata+"Add";
    document.getElementById("add_toppings").innerHTML=htmldata;
}
function add_item(){
    var item2=document.getElementById("add_top").value;
    item.push(item2);
    add_top();
}
    