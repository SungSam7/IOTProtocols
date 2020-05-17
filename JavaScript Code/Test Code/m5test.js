

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var xhttp = new XMLHttpRequest();

var request = require('request');

var URL1 = 'https://erddap.marine.ie//erddap/tabledap/IWBNetwork.json?&station_id="M5"&orderByMax("time")';

var num = 1

//while(true){

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
		
		pressure = data.table.rows[0][5]
	    console.log("Atomospheric Pressure: "+pressure)
		
		windSpeed = data.table.rows[0][7]
	    console.log("Wind Speed: "+windSpeed)
		
		maxGust = data.table.rows[0][8]
	    console.log("Max Gust: "+maxGust)
		
		maxWaveHeight = data.table.rows[0][9]
	    console.log("Max Wave Height: "+maxWaveHeight)
	     

	    var str1 = `https://api.thingspeak.com/update?api_key=8WKC6IJI7UR7D3PO&field1=${seaTemperature}`;
		var str2 = `&field2=${airTemperature}`;
		var str3 = `&field3=${pressure}`;
		var str4 = `&field4=${windSpeed}`;
		var str5 = `&field5=${maxGust}`;
		var str6 = `&field6=${maxWaveHeight}`;

		var strAll = str1.concat(str2,str3,str4,str5,str6);
		console.log(strAll);

		xhttp.open("GET", strAll);
	    xhttp.send();
		
		
		
		
		// wait(20000)
		 
		 
		 
	     

	



});



};

M5Data();

//}; while loop end

/*for(i=0; i < 5; i++)
{
M5Data();

function wait(ms)
		{
			var d= new Date();
			var d2 = null;
			do{d2 = new Date();}
			while (d2-d< ms);
		}
		
		wait(5000)

}; */