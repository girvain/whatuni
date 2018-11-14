// jobs
$(document).ready(function () {
  
  $("#job-search-button").click(function () {
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
        socCode = data[0].soc; // this gets the soc number from first result
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
  
  // do soc number query 
  $("#soc-number-button").click(function() {
    var socInput = $("#soc-input").val();
    var age = $("#age-input").val();
    $.ajax({
      url: "http://api.lmiforall.org.uk/api/v1/ashe/estimatePay?soc=3520&age=25&coarse=false",
      type: "GET",
      data: {soc: socInput, age: age},
      dataType: "json",
      success: function (data) {
        console.log(data);
      }
      // implement error, complete and beforeSend functions...

    });

  });

  // output from the database on page load functino
  $(function () {
    $.get("log_search.php", function (data) {
      $("html").append(data);
    });
  });

});