var com = {}

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var xhttp = new XMLHttpRequest();

var request = require('request');

var URL = 'https://erddap.marine.ie//erddap/tabledap/IWBNetwork.json?&station_id="M5"&orderByMax("time")';
//for (i=0; i<5;i++){
	
	com.run = {
		test: function seaTemp() {
	request({
url:URL,
method: 'GET',
},function (error, response, body){
	     var data=JSON.parse(body)
	     temperatureSea = data.table.rows[0][15]
	     

	     var urlsend = `https://api.thingspeak.com/update?api_key=8WKC6IJI7UR7D3PO&field1=${temperatureSea}`;
	     console.log("Sea Temperature: "+temperatureSea)
	     xhttp.open("GET", urlsend);
	     xhttp.send();
		 
	   //wait(20000);

	counter--;


});
	};
	};
	
	
seaTemp();

//};

function wait(ms)
{
var d= new Date();
var d2 = null;
do{d2 = new Date();}
while (d2-d< ms);
}

export function seaTemp(){
	return