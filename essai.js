function Goodbye(name){
	console.log("GoodBye"+" "+name);
}

function Hello(name){
	console.log("Hello"+" "+name);
}

function(){
	var names=["Jame", "Fati", "jaber", "Sami", "Baker", "Yaakob", "Samir"];
	for(var i = 0; i < names.length; i++){
		if(names[i]==='J' || names[i]==='j'){
			Goodbye(names[i]);
		}
		else{
			Hello(names[i]);
		}
	}
}
