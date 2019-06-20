$(document).ready(function() {
 // Set variables
    let Topics = ["avengers", "john wick", "kill bill", "avatar", "lord of the rings", "harry potter", "star wars"];
    // Set on click event for submit button
    $("button").on("click", function(){
        // Construct a URL to search GIPHY
        let movies = $(this).attr("data-movie");
        let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movies +
            "&api_key=bskkca2lWVA6r2pYHlMYhl8IK23EVw4F&limit=10";
        // Set up AJAX request 
        $.ajax({
            url: queryURL,
            method: "GET"     
        })

        .then(function(response){
            console.log(response);
            console.log(queryURL);
            let results = response.data;
            for (let i = 0; i < results.length; i++){
                let moviesDiv = $("<div>");
                let p = $("<p>").text("Rating: " + results[i].rating);
                let movieImage = $("<img>");
                movieImage.attr("src", results[i].images.fixed_height.url);    
                moviesDiv.append(p);
                moviesDiv.append(movieImage);
                $("#gifs").prepend(moviesDiv);
            }
        });
    });
});
// get response and console log response and additional parameters
// Set event listeners to all button elements
// Set Functions
    // store data from AJAX request into a variable
    // Creating and storing a div tag
    // Creating a paragraph tag with the result item's rating
    // Creating and storing an image tag
    // Setting the src attribute of the image to a property pulled off the result item
    // Appending the paragraph and image tag to the animalDiv
    // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div

//Set up functions to pauce gifs
    // 
