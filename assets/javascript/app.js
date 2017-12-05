

$(document).ready(function(){   


var topics = ["Dragonball Z", "Full Metal Alchemist", "Rugrats", "The Legend of Korra", "Family Guy", "Yu Yu Hakusho", "Attack on Titan", "Pokemon"];

function makebuttons(){

$("#topbar").empty(); 

for (var i = 0; i < topics.length; i++){ 

var newbutton = $("<button>");
newbutton.addClass(topics[i]);
newbutton.text(topics[i]);   
newbutton.attr("value",topics[i]);

$("#topbar").append(newbutton);
//Whenever a new button gets created, all of the code stops working.  :/

};
};


 
$("#userdone").on("click", function(nonsubmit){
nonsubmit.preventDefault();

var userchoice = $("#userinput").val();

topics.push(userchoice);

console.log(userchoice);
makebuttons();

});

makebuttons();



$("button").on("click", function(){
    $("#leftpage").empty();
var clicked = $(this).val();
console.log(clicked);
gifsappear();

function gifsappear(){
    console.log("hey"+clicked);
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + clicked + "&limit=10&offset=0&rating=G&lang=en";
console.log("hey"+clicked);

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .done(function (response) {
    

for (var i = 0; i < 10; i++){
        var gifstill = response.data[i].images.fixed_width_still.url;
        var gifmove = response.data[i].images.fixed_width.url;
        
        console.log(gifstill);

        var topicimage = $("<img>");

        topicimage.attr("src", gifstill);


        $("#leftpage").prepend(topicimage);
        console.log(topicimage);

        $("img").on("click", function(){
            
          console.log(this);
          
          if (gifstill === gifstill) {
            $(this).attr("src", gifmove);
           
        } else {
            $(this).attr("src", gifstill);
        }
         
        //I could not get the gifs to act correctly when they get clicked.
        
        });



};

    });


};

});



});



