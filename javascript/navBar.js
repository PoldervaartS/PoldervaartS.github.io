$(function () {
    var bar = '';
    bar += '<nav class="navbar navbar-expand-lg navbar-dark bg-primary" role="navigation">';
    bar += '<ul class="navbar-nav mr-auto">';
    bar += '<li class="nav-item" id="index"><a class="nav-link" href="./">Home</a></li>';
    bar += '<li class="nav-item" id="professional"><a class="nav-link" href="professional.html">Professional</a></li>';
    bar += '<li class="nav-item" id="about"><a class="nav-link" href="about.html">About</a></li>';
    bar += '<li class="nav-item" id="portfolio"><a class="nav-link" href="portfolio.html">Portfolio</a></li>';
    bar += '<li class="nav-item" id="service"><a class="nav-link" href="service.html">Service</a></li>';
    bar += '</ul>';
    bar += '</nav>';

    $("#main-bar").html(bar);

    var id = getValueByName("id");
    $("#" + id).addClass("active");
});

function getValueByName(name) {
    var url = document.getElementById('nav-bar').getAttribute('src');
    var param = new Array();
    if (url.indexOf("?") != -1) {
        var source = url.split("?")[1];
        items = source.split("&");
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var parameters = item.split("=");
            if (parameters[0] == "id") {
                return parameters[1];
            }
        }
    }
}