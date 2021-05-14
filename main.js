var images=[
    "IMG-20181227-WA0021.jpg",
    "IMG20180824062156.jpg",
    "IMG-20191217-WA0022.jpg",
    "IMG_20210411_201415.jpg",
    "IMG-20210114-WA0184.jpg"
];
var names=[
    "Siva Nageswararao",
    "Sirisha",
    "Manogna",
    "Naga Rithwik"
    ];

var i=0;
function update()
{
    i++;
    var numbers_of_family_members_in_array=5
    if(i>numbers_of_family_members_in_array)
    {
        i=0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_members_image").src=updatedImage;
    document.getElementById("family_member_name").innerHTML=updatedName;
}