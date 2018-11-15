$(document).ready(function () {

    var all = "http://api.worldbank.org/v2/countries/GBR/indicators/SE.TER.ENRL?date=2009:2015";
    var agr = "http://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F600?date=2009:2015"; // wrong, Information and Communication Technologies
    var ed = "http://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F140?date=2009:2015";
    var helWel = "http://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F700?date=2009:2015"; //wrong, eng, man, construction
    var humArt = "http://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F200?date=2009:2015";
    var sci = "http://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F400?date=2009:2015"; // wrong, bus admin and law
    var ser = "http://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F800?date=2009:2015"; // wrong, Agriculture, Forestry, Fisheries and Veterinary
    var socBusLaw = "http://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F300?date=2009:2015"; // wrong, Social Sciences, Journalism and Information programmes
    var engManCon = "http://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F500?date=2009:2015"; // wrong, Natural Sciences, Mathematics and Statistics

    // create the tables
    getDataMFChart(all, "male-female-chart");
    getData(agr, "agriculture-chart");
    getData(ed, "education-chart");
    getData(helWel, "health-welfare-chart");
    getData(humArt, "humanities-arts-chart");
    getData(sci, "science-chart");
    getData(ser, "services-chart");
    getData(socBusLaw, "social-business-law-chart");
    getData(engManCon, "engin-manuf-constru-chart");



    /* -------------------------- Functions --------------------------------- */

    /* this function will query the api, format and append the results in three 
       arrays: descriptions, dates and values. Then creates a graph data object with
       makeObj() and renders the graph with renderGraph().
       args: url - this is the api query
            id - This is the html id or class to insert the graph
    */

    function getData(url, id) {
        var descArray = [];
        var dateArray = [];
        var valueArray = [];
        $.ajax({
            url: url,
            type: "get",
            cache: false,
            dataType: "xml",
            success: function (data) {
                $(data).find('wb\\:data').find("wb\\:data").each(function (key, val) {
                    descArray.push($(val).find('wb\\:indicator').text());
                    dateArray.push($(val).find('wb\\:date').text());
                    // the xml of the % is a string so needs converted to an int
                    var intVal = parseFloat($(val).find('wb\\:value').text());
                    valueArray.push(intVal);
                });
                // select the div passed to function, then append the description in the 
                // parent div
                $('#' + id).parent().prepend('<p>' + descArray[0] + '</p>');

                // create the graph object then call render graph with it
                var agroGraphObj = makeObj(dateArray, valueArray, "bar");
                renderGraph(id, agroGraphObj);
            }
        }); // end of ajax
    }

    // Same as above but has a custom graph object inside as this graph is a one off with 
    // specific features, (not percentages, converted the floats to ints)
    function getDataMFChart(url, id) {
        var descArray = [];
        var dateArray = [];
        var valueArray = [];
        $.ajax({
            url: url,
            type: "get",
            cache: false,
            dataType: "xml",
            success: function (data) {
                $(data).find('wb\\:data').find("wb\\:data").each(function (key, val) {
                    descArray.push($(val).find('wb\\:indicator').text());
                    dateArray.push($(val).find('wb\\:date').text());
                    // the xml of the % is a string so needs converted to an int
                    var intVal = parseInt($(val).find('wb\\:value').text());
                    valueArray.push(intVal);
                });
                // select the div passed to function, then append the description in the 
                // parent div
                $('#' + id).parent().prepend('<p>' + descArray[0] + '</p>');

                // Make a custom object for this without percentages
                var chartObj = {
                    "globals": {
                        "font-family": "Helvetica",
                        // "font-size": "2px"
                    },
                    "type": "bar",
                    "title": {
                        "text": "",
                        "adjustLayout":"true"
                    },
                    "plotarea":{
                        "margin":"dynamic",
                        "adjustLayout":"true"
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
                        "values": dateArray,
                        "adjustLayout":"true"
                    },
                    "series": [{
                        "values": valueArray
                    }]
                };
                renderGraph(id, chartObj);
            }
        }); // end of ajax
    }

    /* Function to create an object for graphing, Args: dates array, values array */
    function makeObj(dates, values, graphType) {
        // var chartObj = {
        //     "type": graphType,
        //     "title": {
        //         "text": "",
        //     },
        //     "scale-y": {
        //         "line-color": "none",
        //         "tick": {
        //             "line-color": "none"
        //         },
        //         "guide": {
        //             "line-style": "solid"
        //         },
        //         "item": {
        //             "color": "#606060"
        //         }
        //     },
        //     "scale-x": {
        //         "values": dates
        //     },
        //     "series": [{
        //         "values": values
        //     }]
        // };

        var chartObj = {
            "globals": {
                "font-family": "Helvetica"
            },
            "type": graphType,
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
                "values": dates,
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
                    "text": "%v%",
                    "text-decoration": "underline",
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
                "values": values
            }]
        };
        return chartObj;
    }

    //  Function to render a graph. Args: id or class
    function renderGraph(id, obj) {
        zingchart.render({ // Render Method[3]
            id: id,
            data: obj,
            height: 400,
            width: '100%'
        });

    }


    // Currently NOT!!! in use 
    //
    // XML approach to output ul elements of the graph data                
    function outputXMLList() {
        var output = '<ul class="searchresults">';
        $(data).find('wb\\:data').find("wb\\:data").each(function (key, val) {
            var desc = '<li>' + $(val).find('wb\\:indicator').text() + '</li>';
            var date = '<li>' + $(val).find('wb\\:date').text() + '</li>';
            var value = '<li>' + $(val).find('wb\\:value').text() + '</li>';

            output += desc + date + value + '</ul>';
            $('#stats-area').append(output);
            output = '<ul class="searchresults">';
        });
    }

});