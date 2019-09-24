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
                let gifImg = $("<img>");
                gifImg.attr("src", gifUrl);
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



});