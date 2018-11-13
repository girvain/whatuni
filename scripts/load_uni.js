// uk uni list, loaded from json file in data directory
$(document).ready(function () {
  $.getJSON('uk_universities_and_domains.json', function (data) {
    console.log(data);
  });
});