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

    // bank api
    $(function () {
        $.ajax({
            url: agr,
            type: "get",
            cache: false,
            dataType: "xml",
            success: function (data) {
                console.log(data);

                // make JSON objects with the data from the XML 
                var descArray = [];
                var dateArray = [];
                var valueArray = [];

                $(data).find('wb\\:data').find("wb\\:data").each(function (key, val) {
                    descArray.push($(val).find('wb\\:indicator').text());
                    dateArray.push($(val).find('wb\\:date').text());
                    // the xml of the % is a string so needs converted to an int
                    var intVal = parseFloat($(val).find('wb\\:value').text());
                    valueArray.push(intVal);
                });

                console.log(dateArray, valueArray);

                var obj = makeObj(dateArray, valueArray);
                renderGraph('male-female-chart', obj);
            }

        }); // end of ajax
    });
});

/* Function to create an object for graphing */
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
function renderGraph(id, chartObj) {
    zingchart.render({ // Render Method[3]
        id: id,
        data: chartObj,
        height: 400,
        width: '100%'
    });

}

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