var counter = 5;

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var xhttp = new XMLHttpRequest();

var request = require('request');

var URL1 = 'https://erddap.marine.ie//erddap/tabledap/IWBNetwork.json?&station_id="M5"&orderByMax("time")';
var URL2 = 'https://erddap.marine.ie//erddap/tabledap/IWBNetwork.json?&station_id="M5"&orderByMax("time")';
var URL3 = 'https://erddap.marine.ie//erddap/tabledap/IWBNetwork.json?&station_id="M5"&orderByMax("time")';

seaTemperature =12;
temperature = 17;

function seaTemp(){
request({
url:URL1,
method: 'GET',
},function (error, response, body){
	     var data=JSON.parse(body)
		 
		 seaTemperature = data.table.rows[0][15];
		 
	     var urlsend1 = `https://api.thingspeak.com/update?api_key=8WKC6IJI7UR7D3PO&field1=${seaTemperature}`;
	     console.log("Sea Temperature: "+seaTemperature)
		 
		 
	     

	





});

};


function temp(){
request({
url:URL2,
method: 'GET',
},function (error, response, body){
	     var data=JSON.parse(body)
		 
		 temperature = data.table.rows[0][13]
		 
	     var urlsend2 = `https://api.thingspeak.com/update?api_key=8WKC6IJI7UR7D3PO&field2=${temperature}`;
	     console.log("Temperature: "+temperature)
	     




});

}

function airTemp()
{
	request({
url:URL3,
method: 'GET',
},function (error, response, body){
	     var data=JSON.parse(body)
		 
		 airTemperature = data.table.rows[0][10]
		 
	     var urlsend3 = `https://api.thingspeak.com/update?api_key=8WKC6IJI7UR7D3PO&field2=${airTemperature}`;
	     console.log("Air Temperature: "+airTemperature)
	     




});

	
	
}

function wait(ms)
{
var d= new Date();
var d2 = null;
do{d2 = new Date();}
while (d2-d< ms);
}

seaTemp() 
temp()
airTemp()

var str1 = `https://api.thingspeak.com/update?api_key=8WKC6IJI7UR7D3PO&field1=${seaTemperature}`;
var str2 = `&field2=${temperature}`;

var strAll = str1.concat(str2);
console.log(strAll);

xhttp.open("GET", strAll);
	     xhttp.send();
		 

