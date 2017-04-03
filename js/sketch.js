var citibikeData;

function preload(){
	citibikeData = loadJSON('../citibike.json')
	console.log('it has been loaded')
}

function setup (){
	createCanvas(800,800);
	console.log(citibikeData.data.stations[0].num_bikes_available); 

}

function draw(){

}