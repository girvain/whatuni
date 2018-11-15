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

    // Uncomment this to see it working

    // $(function () {
    //     $.ajax({
    //         url: agr,
    //         type: "get",
    //         cache: false,
    //         dataType: "xml",
    //         success: function (data) {
    //             console.log(data);

    //             // make JSON objects with the data from the XML 
    //             var descArray = [];
    //             var dateArray = [];
    //             var valueArray = [];

    //             $(data).find('wb\\:data').find("wb\\:data").each(function (key, val) {
    //                 descArray.push($(val).find('wb\\:indicator').text());
    //                 dateArray.push($(val).find('wb\\:date').text());
    //                 // the xml of the % is a string so needs converted to an int
    //                 var intVal = parseFloat($(val).find('wb\\:value').text());
    //                 valueArray.push(intVal);
    //             });

    //             console.log(dateArray, valueArray);

    //             // This is the make graph part
    //             var obj = makeObj(dateArray, valueArray);
    //             renderGraph('male-female-chart', obj);
    //         }

    //     }); // end of ajax
    // });

    // THIS SHOULD REPLACE THE ABOVE CODE // ----------------------------------------------  WHY doesn't this work !!!!!!!!
    // var agrQuery = (getData(agr));
    // var agroGraphObj = makeObj(agrQuery.dateArray, agricultureQuery.valueArray);
    // console.log(agroGraphObj);
    // renderGraph("male-female-chart", agroGraphObj);



    /* -------------------------- Functions --------------------------------- */

    // this function will query the api and format and append the results in three 
    // arrays, descriptions, dates and values. Then inserts them into an object and
    // returns the object
    function getData(url) {
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

                // var agroGraphObj = makeObj(dateArray, valueArray);
                // renderGraph("male-female-chart", agroGraphObj);

            }
        }); // end of ajax

        // bundle the arrays into an array return
        var result = {
            "descArray": descArray,
            "dateArray": dateArray,
            "valueArray": valueArray
        };
        return result;
    }

    /* Function to create an object for graphing, Args: dates array, values array */
    function makeObj(dates, values) {
        var chartObj = {
            "type": "bar",
            "title": {
                "text": "Chart Data Object"
            },
            "scale-x": {
                "values": dates
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