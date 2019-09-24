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
    let queryUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${query}&limit=10&offset=0&lang=en`;

    $("#buttons").on("click", ".btn", function(){
        query = $(this).attr("data-name");
        console.log(query)
    })


    function callGiphy() {
        $.ajax(
            {
                url: queryUrl,
                method: "GET"
            }
        ).then(function (response) {
            console.log(response)
            for (let i = 0; i < 12; i++) {
                let 
            }
        })

    }


});