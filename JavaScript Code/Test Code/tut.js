var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var xhttp = new XMLHttpRequest();

var request = require('request');

var URL1 = 'https://erddap.marine.ie//erddap/tabledap/IWBNetwork.json?&station_id="M5"&orderByMax("time")';


function M5Data(){
request({
url:URL1,
method: 'GET',
},function (error, response, body){
	     var data=JSON.parse(body)
		 
		seaTemperature = data.table.rows[0][15];
		console.log("Sea Temperature: "+seaTemperature)

		airTemperature = data.table.rows[0][13]
	    console.log("Air Temperature: "+airTemperature)
		
		var str1 = `https://api.thingspeak.com/update?api_key=YQHHR1A491N1W4HC&field1=${airTemperature}`;
		var str2 = `&field2=${seaTemperature}`;
		
		var strAll = str1.concat(str2)
		console.log(strAll);

		xhttp.open("GET", strAll);
	    xhttp.send();
		
		});



};

while (true)
{


M5Data();

};