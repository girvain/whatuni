// jobs
$(document).ready(function () {
  $("#job-search").click(function () {
    var input = $("#job-search-input").val();
    var query = "http://api.lmiforall.org.uk/api/v1/soc/search?q=" + input;
    
    var querySerial = "http://api.lmiforall.org.uk/api/v1/soc/search";
    $("#job-search-form").submit(function (e) { 
      e.preventDefault();
      $.get(querySerial, $("#job-search-form").serialize(), function(data) {
      console.log(data);   
    });
    // $.get(querySerial, $("#job-search-form").serialize(), function(data) {
    //   console.log(data);   
    // });
    
    console.log($("#job-search-form").serialize());
    var socCode;

    //working version
    // $.ajax({
    //   url: query,
    //   type: "get",
    //   dataType: "json",
    //   success: function (data) {
    //     console.log(data);
    //     socCode = data[0].soc;
    //     $("html").append(socCode);
    //   }
    //   // implement a fail function ...

    });

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