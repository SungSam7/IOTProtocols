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
		 
		airTemperature = data.table.rows[0][13]
	    console.log("Air Temperature: "+airTemperature)
		 
		seaTemperature = data.table.rows[0][15];
		console.log("Sea Temperature: "+seaTemperature)

		pressure = data.table.rows[0][5]
		console.log("Atmospheric Pressure: "+pressure)
		
		var str1 = `https://api.thingspeak.com/update?api_key=P6Q18Q3F2KT6B87O&field1=${airTemperature}`;
		var str2 = `&field2=${seaTemperature}`;
		var str3 = `&field3=${pressure}`;
		
		var strAll = str1.concat(str2,str3)
		console.log(strAll);

		xhttp.open("GET", strAll);
	    xhttp.send();
		
		});



};

while(true)
{

M5Data();

};
