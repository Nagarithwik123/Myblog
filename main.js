var names_of_people=[];
function submit_list(){
    var GuestName = document.getElementById("name1").value;
    names_of_people.push(GuestName);
    console.log(GuestName);
    console.log(names_of_people);
    var length_of_the_name=names_of_people.length;
    console.log(length_of_the_name);
    document.getElementById("show").innerHTML=names_of_people;
}
function sorting(){
    names_of_people.sort();
    var i=names_of_people.join();
    console.log(names_of_people);
    document.getElementById("names_of_people").innerHTML=i;
}
function show(){
    var i=names_of_people.join();
    console.log(names_of_people);
    document.getElementById("show").innerHTML=i;
}
function searching(){
    var s=document.getElementById("s1").value;
    var found=0;
    var j;
    for(j=0; j<names_of_people.length;j++){
           if(s==names_of_people[j]){
               found=found+1;
           }
    }
    document.getElementById("p2").innerHTML="name_found"+found+"time/s";
    console.log("found_name"+found+"time/s");
}