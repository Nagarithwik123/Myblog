var images=[
    "IMG-20181227-WA0021.jpg",
    "IMG20180824062156.jpg",
    "IMG-20191217-WA0022.jpg",
    "IMG_20210411_201415.jpg"
];
var i=0;
function nextslide(){
    document.getElementById("album").src=images[i]; i++;
}
if(i == 4)
{
    images[i]=0;
}