// jobs
$(document).ready(function () {
  $("#job-search").click(function () {
    var input = $("#job-search-input").val();
    var query = "http://api.lmiforall.org.uk/api/v1/soc/search?q=" + input;
    var socCode;

    // get the user query from api
    $.ajax({
      url: "http://api.lmiforall.org.uk/api/v1/soc/search",
      type: "GET",
      data: {q: input},
      dataType: "json",
      success: function (data) {
        console.log(data);
        socCode = data[0].soc;
        $("html").append(socCode);
      }
      // implement error, complete and beforeSend functions...

    });

    // put the user query in the database
    $.ajax({
      type: 'POST',
      url: 'log_search.php',
      data: {
        text: input
      },
      success: function (response) {
        console.log(input);
      }
    });
  });

  // output from the database on page load functino
  $(function () {
    $.get("log_search.php", function (data) {
      $("html").append(data);
    });
  });

});