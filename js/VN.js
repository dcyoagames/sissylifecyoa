var events = vnData.events;
var text;
var buttons;

function vnStart(){
  descriptionSetup();
  var all = document.getElementById("all");
  all.innerHTML = "";
  text = document.createElement("p");
  buttons = document.createElement("div");
  all.appendChild(text);
  all.appendChild(buttons);
  console.log("thing");
  console.log(optionsetObj);
}

function descriptionSetup(){
	for(var x in optionsetObj){
		var array = optionsetObj[x].array;
		for(var i=0;i<array.length;i++){
			if(array[i].replace !== void 0){
				replace[array[i].replace.type] = {};
				replace[array[i]].replace['array'] = array[i].descriptors;
			}
			if(array[i].options !== void 0){
				var opt = array[i].options;
				for(var j=0;j<opt.length;j++){
					options[j] = opt[j];
				}
			}
			if(array[i].flags !== void 0){
				var f = array[i].flags;
				for(var k=0;k<f.length;k++){
					flags.push(f[k]);
				}
			}
		}
	}
}

function updateStat(x, value){
  var eventObject = events[x];
  var calced = stat[eventObject.stat] + value;
  if(calced < eventObject.array.length && calced > -1){
    stat[eventObject.stat] = calced;
  }else if (calced >= eventObject.array.length){
    stat[eventObject.stat] = (eventObject.array.length - 1);
  }else{
    stat[eventObject.stat] = 0;
  }
}

function parseText(text){
  var arrayfin = [];
  var array1 = text.split("[[");
  console.log(array1);
  arrayfin[0] = array1[0];
  for (i=1;i<array1.length;i++){
    var array2 = array1[i].split("]]");
    console.log(array2);
    array2[0] = replace[array2[0]].getRand();
    arrayfin[i] = array2.join("");
    console.log(arrayfin[i]);
  }
  console.log(arrayfin);
  console.log(arrayfin.join(""));
  return arrayfin.join("");
}

function runEvent(x){
  text.textContent = parseText(events[x].array[stat[events[x].stat]]);
}