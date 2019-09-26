$(document).ready(function () {
    console.log("ready")

    let gifsArr = ["cats", "dogs", "birds", "pigs"]

    // ==================create buttons=================

    function displayButtons() {
        for (let i = 0; i < gifsArr.length; i++) {
            let button = $(`<button type="button" class="btn">`)
            button.attr("data-name", gifsArr[i]);
            button.text(gifsArr[i]);
            $("#buttons").append(button);
            console.log(gifsArr[i]);

        }
    }

    displayButtons();

    let query = "";
    let apikey = "SLlQhIDBP0lpBt1YvK4cmzf9LzsJujSQ";


    $("#buttons").on("click", ".btn", function () {
        $("#gifDisplay").empty();
        query = $(this).attr("data-name");
        console.log(query)
        callGiphy();
    })

    // $.ajax({
    //     url: "https://api.giphy.com/v1/gifs/search?api_key=SLlQhIDBP0lpBt1YvK4cmzf9LzsJujSQ&q=cars&limit=12&offset=0&lang=en",
    //     method: "get"
    // }).then(function(response){
    //     console.log(response)
    //     console.log(response.data[0].images.fixed_height.url)

    // })

    function callGiphy() {
        $.ajax(
            {
                url: `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${query}&limit=12&offset=0&lang=en`,
                method: "GET"
            }
        ).then(function (response) {
            console.log(response)
            for (let i = 0; i < 12; i++) {
                let gifUrl = response.data[i].images.fixed_height.url;
                let gifImg = $("<img class='gif'>");
                gifImg.attr("src", gifUrl);
                gifImg.attr("data-animate", response.data[i].images.fixed_height.url);
                gifImg.attr("data-still", response.data[i].images.fixed_height_still.url)
                gifImg.attr("data-state", "animate")
                $("#gifDisplay").append(gifImg)
            }
        })

    }

    // ========== New Button ==============

    $(document).on("click", "#createbtn", function(event){
        event.preventDefault()
        query = $("#input").val();

        let button = $(`<button type="button" class="btn">`)
            button.attr("data-name", query);
            button.text(query);
            $("#buttons").append(button);

    })

    $("#gifDisplay").on("click", ".gif", function() {
        var state = $(this).attr('data-state')
      // CODE GOES HERE
      console.log($(this).attr('data-state'));
      var animatedGif = $(this).attr('data-animate')
      console.log($(this).attr('data-animate'))
      var stillGif = $(this).attr('data-still')
      console.log(stillGif)

      if (state == "still"){
        $(this).attr('src', animatedGif)
        $(this).attr('data-state', "animate")
        
        
      } else if (state == "animate"){
        $(this).attr('data-state', "still")
        $(this).attr('src', stillGif)}

    });

});