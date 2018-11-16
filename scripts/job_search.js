// jobs
$(document).ready(function () {
    // call makeGraph when the page loads
    makeGraph();


    /* ------------------------------- General Functions -------------------------------- */

    // This function makes a graph with ajax calls and the log_search.php file.
    function makeGraph() {
        var searchesArray = [];
        var valueArray = [];
        $.ajax({
            url: "log_search2.php",
            type: "GET",
            cache: false,
            success: function (data) {
                $("html").prepend(data); // run the script that log_search.php output in ajax
                // create ararys with the search data for graphing, Only take the first ten objects!
                var i;
                // for (i = 0; (i < searchLog.length && i < 10); i++) {
                //   searchesArray.push(searchLog[i].search_text);
                //   // convert the values to integers
                //   var converted = parseInt(searchLog[i].total);
                //   valueArray.push(converted);
                // }
                $(searchLog).each(function (key, val) {
                    searchesArray.push(val.search_text);
                    // convert the values to integers
                    var converted = parseInt(val.total);
                    valueArray.push(converted);
                });

                var chartObj = {
                    "globals": {
                        "font-family": "Helvetica"
                    },
                    "type": "bar",
                    "background-color": "white",
                    "title": {
                        "color": "#606060",
                        "background-color": "white",
                        "text": ""
                    },
                    "subtitle": {
                        "color": "#606060",
                        "text": ""
                    },
                    "scale-y": {
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
                        "line-color": "#C0D0E0",
                        "line-width": 1,
                        "tick": {
                            "line-width": 1,
                            "line-color": "#C0D0E0"
                        },
                        "guide": {
                            "visible": false
                        },
                        "item": {
                            "color": "#606060"
                        }
                    },
                    "crosshair-x": {
                        "marker": {
                            "visible": false
                        },
                        "line-color": "none",
                        "line-width": "0px",
                        "scale-label": {
                            "visible": false
                        },
                        "plot-label": {
                            "text": "%data-browser: %v% of total",
                            "multiple": true,
                            "font-size": "12px",
                            "color": "#606060",
                            "background-color": "white",
                            "border-width": 3,
                            "alpha": 0.9,
                            "callout": true,
                            "callout-position": "bottom",
                            "shadow": 0,
                            "placement": "node-top",
                            "border-radius": 4,
                            "offsetY": -20,
                            "padding": 8,
                            "rules": [{
                                    "rule": "%i==0",
                                    "border-color": "#1976d2"
                                },
                                {
                                    "rule": "%i==1",
                                    "border-color": "#424242"
                                },
                                {
                                    "rule": "%i==2",
                                    "border-color": "#388e3c"
                                },
                                {
                                    "rule": "%i==3",
                                    "border-color": "#ffa000"
                                },
                                {
                                    "rule": "%i==4",
                                    "border-color": "#7b1fa2"
                                },
                                {
                                    "rule": "%i==5",
                                    "border-color": "#c2185b"
                                }
                            ]
                        }
                    },
                    "plot": {
                        "data-browser": "",
                        "cursor": "hand",
                        "value-box": {
                            // "text": "%v%",
                            // "text-decoration": "underline",
                            "color": "#606060"
                        },
                        "tooltip": {
                            "visible": false
                        },
                        "animation": {
                            "effect": "7"
                        },
                        "rules": [{
                                "rule": "%i==0",
                                "background-color": "#1976d2"
                            },
                            {
                                "rule": "%i==1",
                                "background-color": "#424242"
                            },
                            {
                                "rule": "%i==2",
                                "background-color": "#388e3c"
                            },
                            {
                                "rule": "%i==3",
                                "background-color": "#ffa000"
                            },
                            {
                                "rule": "%i==4",
                                "background-color": "#7b1fa2"
                            },
                            {
                                "rule": "%i==5",
                                "background-color": "#c2185b"
                            }
                        ]
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
            } // end of success
        }); // end of ajax
    }

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

                $("#job-search-display-area").empty();
                $(data).each(function (key, val) {
                    console.log(data.title);
                    var newDiv = $('<div class="job-info-container"></div>').appendTo("#job-search-display-area");
                    $(newDiv).append('<h3 class="title-heading">Job Title</h3>');
                    $(newDiv).append('<p class="title">' + val.title + '</p>');
                    $(newDiv).append('<h3 class="description-heading">Job Description</h3>');
                    $(newDiv).append('<p class="description">' + val.description + '</p>');
                    $(newDiv).append('<h3 class="soc-heading">Soc Number</h3>');
                    $(newDiv).append('<p class="soc">' + val.soc + '</p>');

                });

                // NOTE: comment or uncomment this if the grapgh update should be on every button click !!!!!
                // makeGraph();
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
            url: "http://api.lmiforall.org.uk/api/v1/ashe/estimatePay",
            type: "GET",
            cache: false,
            data: {
                soc: socInput,
                age: age
            },
            dataType: "json",
            success: function (data) {
                console.log(data);
                // clear the output area before adding to it
                $("#soc-number-display-area").empty();
                $(data.series).each(function (key, val) {
                    var newDiv = $('<div class="wage-info-container"></div>').appendTo("#soc-number-display-area");
                    $(newDiv).append('<p class="estpay">In ' + val.year + ' average weekly wage was ' + val.estpay + '</p>');
                    // $(newDiv).append('<p class="year">' + val.year + '</p>');
                });

            }
            // implement error, complete and beforeSend functions...

        });

    }); // end of #soc-number-button onClick 


});