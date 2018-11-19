// uk uni list, loaded from json file in data directory
$(document).ready(function () {
  $.getJSON('uk_universities_and_domains.json', function (data) {
    console.log(data);

    $(data).each(function (key, val) {
      var newDiv = $('<div class="uni-info-container shadow-container"></div>').appendTo("#unis-display-area");
      $(newDiv).append('<h3 class="name">' + val.name + '</h3>');
      // var linkContainer = $('<div class="link-container"></div>').appendTo(newDiv);
      // $(newDiv).append('<img src="images/cap.png">');
      $(newDiv).append('<a href="' + val.web_pages + '">' + val.web_pages + '</a>');

    });

    // get the links from json uni file using a list
    // var output = '<ul class="searchresults">';
    // $.each(data, function (key, val) {
    //   output += '<li>';
    //   output += '<h2>' + val.name + '</h2>';
    //   output += '<li><a href="' + val.web_pages + '">' + val.web_pages + '</a></li>';
    //   output += '</li>';
    // });
    // output += '</ul>';
    // $('#unis-display-area').html(output);



  });
});