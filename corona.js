var ele="";
$( "#India" ).click(function() {
      ele = "India";
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country="+ele+"",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "6d306ab2eamsh2281b629ae3547bp11dc52jsndd86c533cc08",
            "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).done(function (response) {
        $("#cname").html(ele);
        $("#rec").html(response.data.recovered);
        $("#cnf").html(response.data.confirmed);
        $("#dth").html(response.data.deaths);
        $("#dta").html(response.data.lastChecked);
    });
  });
  $( "#Russia" ).click(function() {
     ele = "Russia";
     const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country="+ele+"",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "6d306ab2eamsh2281b629ae3547bp11dc52jsndd86c533cc08",
            "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
        $("#cname").html(ele);
        $("#rec").html(response.data.recovered);
        $("#cnf").html(response.data.confirmed);
        $("#dth").html(response.data.deaths);
        $("#dta").html(response.data.lastChecked);
    });
  });
  $( "#Australia" ).click(function() {
      ele="Australia";
    const settings = {
       "async": true,
       "crossDomain": true,
       "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country="+ele+"",
       "method": "GET",
       "headers": {
           "x-rapidapi-key": "6d306ab2eamsh2281b629ae3547bp11dc52jsndd86c533cc08",
           "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com"
       }
   };
   
   $.ajax(settings).done(function (response) {
       $("#cname").html(ele);
       $("#rec").html(response.data.recovered);
       $("#cnf").html(response.data.confirmed);
       $("#dth").html(response.data.deaths);
       $("#dta").html(response.data.lastChecked);
   });
 });
 $( "#Canada" ).click(function() {
    ele="Canada";
  const settings = {
     "async": true,
     "crossDomain": true,
     "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country="+ele+"",
     "method": "GET",
     "headers": {
         "x-rapidapi-key": "6d306ab2eamsh2281b629ae3547bp11dc52jsndd86c533cc08",
         "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com"
     }
 };
 
 $.ajax(settings).done(function (response) {
     $("#cname").html(ele);
     $("#rec").html(response.data.recovered);
     $("#cnf").html(response.data.confirmed);
     $("#dth").html(response.data.deaths);
     $("#dta").html(response.data.lastChecked);
 });
});
$( "#Italy" ).click(function() {
    ele="Italy";
  const settings = {
     "async": true,
     "crossDomain": true,
     "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country="+ele+"",
     "method": "GET",
     "headers": {
         "x-rapidapi-key": "6d306ab2eamsh2281b629ae3547bp11dc52jsndd86c533cc08",
         "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com"
     }
 };
 
 $.ajax(settings).done(function (response) {
     $("#cname").html(ele);
     $("#rec").html(response.data.recovered);
     $("#cnf").html(response.data.confirmed);
     $("#dth").html(response.data.deaths);
     $("#dta").html(response.data.lastChecked);
 });
});
$( "#China" ).click(function() {
    ele="China";
  const settings = {
     "async": true,
     "crossDomain": true,
     "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country="+ele+"",
     "method": "GET",
     "headers": {
         "x-rapidapi-key": "6d306ab2eamsh2281b629ae3547bp11dc52jsndd86c533cc08",
         "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com"
     }
 };
 
 $.ajax(settings).done(function (response) {
     $("#cname").html(ele);
     $("#rec").html(response.data.recovered);
     $("#cnf").html(response.data.confirmed);
     $("#dth").html(response.data.deaths);
     $("#dta").html(response.data.lastChecked);
 });
});
$( "#japan" ).click(function() {
    ele="japan";
  const settings = {
     "async": true,
     "crossDomain": true,
     "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country="+ele+"",
     "method": "GET",
     "headers": {
         "x-rapidapi-key": "6d306ab2eamsh2281b629ae3547bp11dc52jsndd86c533cc08",
         "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com"
     }
 };
 
 $.ajax(settings).done(function (response) {
     $("#cname").html(ele);
     $("#rec").html(response.data.recovered);
     $("#cnf").html(response.data.confirmed);
     $("#dth").html(response.data.deaths);
     $("#dta").html(response.data.lastChecked);
 });
});
$( "#Nigeria" ).click(function() {
    ele="Nigeria";
  const settings = {
     "async": true,
     "crossDomain": true,
     "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country="+ele+"",
     "method": "GET",
     "headers": {
         "x-rapidapi-key": "6d306ab2eamsh2281b629ae3547bp11dc52jsndd86c533cc08",
         "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com"
     }
 };
 
 $.ajax(settings).done(function (response) {
     $("#cname").html(ele);
     $("#rec").html(response.data.recovered);
     $("#cnf").html(response.data.confirmed);
     $("#dth").html(response.data.deaths);
     $("#dta").html(response.data.lastChecked);
 });
});
$( "#GreenLand" ).click(function() {
    ele="Greenland";
  const settings = {
     "async": true,
     "crossDomain": true,
     "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country="+ele+"",
     "method": "GET",
     "headers": {
         "x-rapidapi-key": "6d306ab2eamsh2281b629ae3547bp11dc52jsndd86c533cc08",
         "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com"
     }
 };
 
 $.ajax(settings).done(function (response) {
     $("#cname").html(ele);
     $("#rec").html(response.data.recovered);
     $("#cnf").html(response.data.confirmed);
     $("#dth").html(response.data.deaths);
     $("#dta").html(response.data.lastChecked);
 });
});
$( "#UnitedStates" ).click(function() {
    ele="America";
  const settings = {
     "async": true,
     "crossDomain": true,
     "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country="+ele+"",
     "method": "GET",
     "headers": {
         "x-rapidapi-key": "6d306ab2eamsh2281b629ae3547bp11dc52jsndd86c533cc08",
         "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com"
     }
 };
 
 $.ajax(settings).done(function (response) {
     $("#cname").html(ele);
     $("#rec").html(response.data.recovered);
     $("#cnf").html(response.data.confirmed);
     $("#dth").html(response.data.deaths);
     $("#dta").html(response.data.lastChecked);
 });
});
$( "#AF" ).click(function() {
    ele="Afghanistan";
  const settings = {
     "async": true,
     "crossDomain": true,
     "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country="+ele+"",
     "method": "GET",
     "headers": {
         "x-rapidapi-key": "6d306ab2eamsh2281b629ae3547bp11dc52jsndd86c533cc08",
         "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com"
     }
 };
 
 $.ajax(settings).done(function (response) {
     $("#cname").html(ele);
     $("#rec").html(response.data.recovered);
     $("#cnf").html(response.data.confirmed);
     $("#dth").html(response.data.deaths);
     $("#dta").html(response.data.lastChecked);
 });
});
$( "#BD" ).click(function() {
    ele="Bangladesh";
  const settings = {
     "async": true,
     "crossDomain": true,
     "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country="+ele+"",
     "method": "GET",
     "headers": {
         "x-rapidapi-key": "6d306ab2eamsh2281b629ae3547bp11dc52jsndd86c533cc08",
         "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com"
     }
 };
 
 $.ajax(settings).done(function (response) {
     $("#cname").html(ele);
     $("#rec").html(response.data.recovered);
     $("#cnf").html(response.data.confirmed);
     $("#dth").html(response.data.deaths);
     $("#dta").html(response.data.lastChecked);
 });
});
$( "#IQ" ).click(function() {
    ele="Iraq";
  const settings = {
     "async": true,
     "crossDomain": true,
     "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country="+ele+"",
     "method": "GET",
     "headers": {
         "x-rapidapi-key": "6d306ab2eamsh2281b629ae3547bp11dc52jsndd86c533cc08",
         "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com"
     }
 };
 
 $.ajax(settings).done(function (response) {
     $("#cname").html(ele);
     $("#rec").html(response.data.recovered);
     $("#cnf").html(response.data.confirmed);
     $("#dth").html(response.data.deaths);
     $("#dta").html(response.data.lastChecked);
 });
});
$( "#IR" ).click(function() {
    ele="Iran";
  const settings = {
     "async": true,
     "crossDomain": true,
     "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country="+ele+"",
     "method": "GET",
     "headers": {
         "x-rapidapi-key": "6d306ab2eamsh2281b629ae3547bp11dc52jsndd86c533cc08",
         "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com"
     }
 };
 
 $.ajax(settings).done(function (response) {
     $("#cname").html(ele);
     $("#rec").html(response.data.recovered);
     $("#cnf").html(response.data.confirmed);
     $("#dth").html(response.data.deaths);
     $("#dta").html(response.data.lastChecked);
 });
});
$( "#IC" ).click(function() {
    ele="Iceland";
  const settings = {
     "async": true,
     "crossDomain": true,
     "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country="+ele+"",
     "method": "GET",
     "headers": {
         "x-rapidapi-key": "6d306ab2eamsh2281b629ae3547bp11dc52jsndd86c533cc08",
         "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com"
     }
 };
 
 $.ajax(settings).done(function (response) {
     $("#cname").html(ele);
     $("#rec").html(response.data.recovered);
     $("#cnf").html(response.data.confirmed);
     $("#dth").html(response.data.deaths);
     $("#dta").html(response.data.lastChecked);
 });
});
$( "#MV" ).click(function() {
    ele="Maldives";
  const settings = {
     "async": true,
     "crossDomain": true,
     "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country="+ele+"",
     "method": "GET",
     "headers": {
         "x-rapidapi-key": "6d306ab2eamsh2281b629ae3547bp11dc52jsndd86c533cc08",
         "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com"
     }
 };
 
 $.ajax(settings).done(function (response) {
     $("#cname").html(ele);
     $("#rec").html(response.data.recovered);
     $("#cnf").html(response.data.confirmed);
     $("#dth").html(response.data.deaths);
     $("#dta").html(response.data.lastChecked);
 });
});
$( "#MZ" ).click(function() {
    ele="Mozambique";
  const settings = {
     "async": true,
     "crossDomain": true,
     "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country="+ele+"",
     "method": "GET",
     "headers": {
         "x-rapidapi-key": "6d306ab2eamsh2281b629ae3547bp11dc52jsndd86c533cc08",
         "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com"
     }
 };
 
 $.ajax(settings).done(function (response) {
     $("#cname").html(ele);
     $("#rec").html(response.data.recovered);
     $("#cnf").html(response.data.confirmed);
     $("#dth").html(response.data.deaths);
     $("#dta").html(response.data.lastChecked);
 });
});
$( "#PK" ).click(function() {
    ele="Pakistan";
  const settings = {
     "async": true,
     "crossDomain": true,
     "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country="+ele+"",
     "method": "GET",
     "headers": {
         "x-rapidapi-key": "6d306ab2eamsh2281b629ae3547bp11dc52jsndd86c533cc08",
         "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com"
     }
 };
 
 $.ajax(settings).done(function (response) {
     $("#cname").html(ele);
     $("#rec").html(response.data.recovered);
     $("#cnf").html(response.data.confirmed);
     $("#dth").html(response.data.deaths);
     $("#dta").html(response.data.lastChecked);
 });
});
$( "#NG" ).click(function() {
    ele="Nigeria";
  const settings = {
     "async": true,
     "crossDomain": true,
     "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country="+ele+"",
     "method": "GET",
     "headers": {
         "x-rapidapi-key": "6d306ab2eamsh2281b629ae3547bp11dc52jsndd86c533cc08",
         "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com"
     }
 };
 
 $.ajax(settings).done(function (response) {
     $("#cname").html(ele);
     $("#rec").html(response.data.recovered);
     $("#cnf").html(response.data.confirmed);
     $("#dth").html(response.data.deaths);
     $("#dta").html(response.data.lastChecked);
 });
});
$( "#Brazil" ).click(function() {
    ele="Brazil";
  const settings = {
     "async": true,
     "crossDomain": true,
     "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country="+ele+"",
     "method": "GET",
     "headers": {
         "x-rapidapi-key": "6d306ab2eamsh2281b629ae3547bp11dc52jsndd86c533cc08",
         "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com"
     }
 };
 
 $.ajax(settings).done(function (response) {
     $("#cname").html(ele);
     $("#rec").html(response.data.recovered);
     $("#cnf").html(response.data.confirmed);
     $("#dth").html(response.data.deaths);
     $("#dta").html(response.data.lastChecked);
 });
});
