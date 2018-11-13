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
            dataType: "xml",
            success: function (data) {
                console.log(data);
                

            }
        });
    });
    
});