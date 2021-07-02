var weather;

var api = "api.openweathermap.org/data/2.5/box/city?bbox="
var apiKey = "7176fcc47b3c430118ce5c6707c067a8";
var units = "&units=metric";

var input;

function setup() {
    createCanvas(100, 100);
    background(0);
    var button = createButton("Submit");
    button.mouseClicked(weatherAsk);

    input = select("City")
}

function weatherAsk() {
    let url = api + input.value() + apiKey + units;
    loadJSON(url, gotData);
    background(url)
}

function gotData(data) {
    weather = data;
}
