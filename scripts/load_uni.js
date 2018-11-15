// uk uni list, loaded from json file in data directory
$(document).ready(function () {
  $.getJSON('uk_universities_and_domains.json', function (data) {
    console.log(data);

    // get the links from json uni file
    var output = '<ul class="searchresults">';
    $.each(data, function (key, val) {
      output += '<li>';
      output += '<h2>' + val.name + '</h2>';
      output += '<li><a href="' + val.web_pages + '">' + val.web_pages + '</a></li>';
      output += '</li>';
    });
    output += '</ul>';
    $('#unis-area').html(output);



  });
});