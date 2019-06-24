$(document).ready(function(){
    topics = ["Avengers", "Kill Bill", "Harry Potter", "Avatar", "Lord of The Rings"];
    // Having a hard time trying to get the buttons to perform ajax calls
    function callAjax(){
        let movies = $(this).attr("data-movie");
        let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + 
            movies + "&api_key=bskkca2lWVA6r2pYHlMYhl8IK23EVw4F&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function(response){
            console.log(response);
            let results = response.data;
                for (let i = 0; i < results.length; i++){
                    if (results[i].rating !== "r" && results[i].rating !== "pg-13"){
                        let movieDiv = $("#gif-buttons");
                        let p = $("<p>").text("Rating: " + results[i].rating);
                        let movieImage = $("<img>");
                        movieImage.attr("id", "giphy");
                        movieImage.attr("src", results[i].images.fixed_height_small.url);
                        movieImage.attr("data-still",results[i].images.fixed_height_small_still.url);
                        movieImage.attr("data-animate",results[i].images.fixed_height_small.url); 
                        movieImage.attr("data-state", "still"); 
                        movieDiv.append(p);
                        movieDiv.append(movieImage);
                }
            }
        });
    } callAjax();
    
    // this displays the initial button when loading the page
    function initialDisplay() {
        $("#gif-buttons").empty();
        for (let i = 0; i < topics.length; i++) {
            let initialButton = $("<button>");
            initialButton.addClass("button-color");
            initialButton.attr("data-movie", topics[i]);
            initialButton.text(topics[i]);
            $("#gif-buttons").prepend(initialButton);
        };
    } initialDisplay();
  
    // creates new gif buttons
   $("#add-submit").on("click", function(event){
       event.preventDefault();
       let newButtonsTask = $("#add-gif").val().trim();
       let buttonItem = $("<button>");
       
       buttonItem.attr("data-movie");
       buttonItem.addClass("button-color");
       buttonItem.text(newButtonsTask);
       buttonItem = buttonItem.prepend(newButtonsTask);
       $("#gif-buttons").append(buttonItem);
       $("add-gif").val("");
   });
    //event listener that changes gifs from animated to still    
   $(document).on("click", "#giphy", function(){
    var state = $(this).attr('data-state');
    if ( state == 'still'){
        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-state', 'animate');
    }else{
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    }
});
});