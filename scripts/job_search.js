// jobs
$(document).ready(function () {

  $(function () {
    var searchesArray = [];
    var valueArray = [];
    $.ajax({
      url: "log_search2.php",
      type: "GET",
      cache: false,
      success: function (data) {
        $("html").prepend(data); // run the script that log_search.php output in ajax
        // console.log(searchLog);
        // create ararys with the search data for graphing
        $(searchLog).each(function (key, value) {
          searchesArray.push(value.search_text);
          valueArray.push(value.total);
        });

        // create the graph
        var chartObj = {
          "globals": {
            "font-family": "Helvetica",
            // "font-size": "2px"
          },
          "type": "bar",
          "title": {
            "text": "",
            "adjustLayout": "true"
          },
          "plotarea": {
            "margin": "dynamic",
            "adjustLayout": "true"
          },
          "scale-y": {
            // "font-size": "5px",
            "line-color": "none",
            "tick": {
              "line-color": "none"
            },
            "guide": {
              "line-style": "solid"
            },
            "item": {
              "color": "#606060"
            }
          },
          "scale-x": {
            "values": searchesArray,
            "adjustLayout": "true"
          },
          "series": [{
            "values": valueArray
          }]
        };
        zingchart.render({ // Render Method[3]
            id: "search-log-chart-section",
            data: chartObj,
            height: 400,
            width: '100%'
        });



      }
    });
  });

  /* ----------------------------- onClick functions ------------------------ */

  $("#job-search-button").click(function () {
    var input = $("#job-search-input").val();
    var query = "http://api.lmiforall.org.uk/api/v1/soc/search?q=" + input;
    var socCode;

    // get the user query from api
    $.ajax({
      url: "http://api.lmiforall.org.uk/api/v1/soc/search",
      type: "GET",
      cache: false,
      data: {
        q: input
      },
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
      url: 'log_search2.php',
      cache: false,
      data: {
        text: input
      },
      success: function (response) {
        console.log(input);
      }
    });
  }); // end of #job-seach-button onClick

  // do soc number queryevent 
  $("#soc-number-button").click(function () {
    var socInput = $("#soc-input").val();
    var age = $("#age-input").val();
    $.ajax({
      url: "http://api.lmiforall.org.uk/api/v1/ashe/estimatePay?soc=3520&age=25&coarse=false",
      type: "GET",
      cache: false,
      data: {
        soc: socInput,
        age: age
      },
      dataType: "json",
      success: function (data) {
        console.log(data);
      }
      // implement error, complete and beforeSend functions...

    });

  }); // end of #soc-number-button onClick 

  // // output from the database on page load functino
  // $(function () {
  //   $.get("log_search2.php", function (data) {

  //   });
  // });



});