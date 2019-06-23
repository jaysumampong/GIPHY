$(document).ready(function(){
    topics = ["Avengers", "Kill Bill", "Harry Potter", "Avatar", "Lord of The Rings"];
    // i dont understand why my API wont work fdafsfadsfasfasdfas
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
                        movieImage.attr("src", results[i].fixed_height.url);
                        movieImage.attr("data-animate", results[i].fixed_height.url);
                        movieImage.attr("data-still", results[i].fixed_height.still.url);
                        movieImage.attr("data-animate", "still");
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
            initialButton.addClass("movie");
            initialButton.attr("data-movie", topics[i]);
            initialButton.text(topics[i]);
            $("#gif-buttons").prepend(initialButton);
        };
    } initialDisplay();
    // 

    // creates new gif buttons
   $("#add-submit").on("click", function(event){
       event.preventDefault();
       let buttonCount = 0;
       let newButtonsTask = $("#add-gif").val().trim();
       let buttonItem = $("<button>");
       
       buttonItem.attr("id", "item-" + buttonCount);
       buttonItem.text(newButtonsTask);
       
       buttonItem = buttonItem.prepend(newButtonsTask);
       $("#gif-buttons").append(buttonItem);
       $("add-gif").val("");
       buttonCount++;
   });
});