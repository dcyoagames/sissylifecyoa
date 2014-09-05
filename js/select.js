var selector = document.createElement("select");
var imagebutton = document.createElement("button");
var link = document.createElement("a");
var cheated = false;
link.style.display = "none";
link.download = "results.png";
imagebutton.textContent = "Generate Image";
imagebutton.onclick = screenie;
var credits = (whine)?(parseInt(queryString)):(Math.floor((Math.random() * creditsMultiplier) + 5));
if(isNaN(credits)){
	credits = 50;
}
var startcredits = credits;
var creditsDisplay = document.createElement("h3");
creditsDisplay.textContent = credits + " credits";
selector.onchange = onSwitch;
var chooseone = document.createElement("option");
chooseone.textContent = "Choose a section...";
chooseone.value = "null";
selector.appendChild(chooseone);
var optionsetObj = {};
var x;
var y;
for (x in choices){
  var option = document.createElement("option");
  option.value = x;
  option.textContent = choices[x].title;
  selector.add(option);
  var optionsets = choices[x].optionsets;
  for (y in optionsets){
    optionsetObj[y] = optionsets[y];
    optionsetObj[y].array = [];
  }
}

function screenie(){
  var a;
  var istrue = true;
  var violators = [];
  for (a in optionsetObj){
  	var truth = (optionsetObj[a].array.length >= optionsetObj[a].minimum);
    if (istrue === true){
      istrue = truth;
      console.log(a + ": " + istrue);
    }
    if(!truth){
    	console.log(optionsetObj[a].title);
    	violators.push(optionsetObj[a].title);
    }
  }
  if(istrue){
    var screenieElem = document.getElementById("screenie");
    screenieElem.style.color = "white";
    screenieElem.style.backgroundColor = "#1A181D";
    var screenieP = document.createElement("p");
    var space = String.fromCharCode(160);
    screenieP.textContent = (cheated || whine)?("Start Credits: " + startcredits + space + space + space + "Cheated"):("Start Credits: " + startcredits);
    screenieP.style.zIndex = "99999999999999";
    screenieP.style.position = "absolute";
    screenieP.style.marginTop = "0px";
    screenieP.style.marginLeft = "2px";
    var screenieP2 = document.createElement("p");
    screenieP2.style.position = "absolute";
    screenieP2.textContent = "End Credits: " + credits;
    screenieP2.style.zIndex = "99999999999999";
    screenieP2.style.marginLeft = "2px";
    screenieElem.appendChild(screenieP);
    screenieElem.appendChild(screenieP2);
    var x;
    for (x in choices){
      var elem = document.createElement("div");
      elem.style.marginTop = "-1px";
      elem.style.border = "1px solid transparent";
      var elemh1 = document.createElement("h1");
      var elemh3 = document.createElement("h3");
      elemh1.textContent = choices[x].title;
      elemh1.style.textAlign = "center";
      elemh3.textContent = choices[x].description;
      elemh3.style.textAlign = "center";
      elem.className = x;
      elem.appendChild(elemh1);
      elem.appendChild(elemh3);
      loadSChoices(elem, x);
      screenieElem.appendChild(elem);
    }
    document.body.appendChild(screenieElem);
    html2canvas(screenieElem, {
        onrendered: function(canvas) {
        	screenieElem.innerHTML = "";
        	link.href = canvas.toDataURL();
        	document.body.appendChild(link);
        	link.click();
      	}
    });
  }else{
  	var sentence = "You haven't met the minimum requirements for the following categories: ";
  	var list = [];
  	for(var i=0;i<violators.length;i++) list.push(violators[i]);
    alert(sentence + list.join(", ") + ". Please go through and make sure you haven't missed anything.");
  }
}

function plusCredits(int){
  console.log("PLUS");
  console.log("int:" + int);
  if(credits + int >= 0){
    credits += int;
    creditsDisplay.textContent = credits + " credits";
    console.log("credits:" + credits);
    return true;
  }else{
    console.log("FAILED");
    console.log("credits:" + credits);
    return false;
  }
}

function sCred(int){
  cheated = true;
  credits = int;
  creditsDisplay.textContent = credits + " credits";
}

function minusCredits(int){
  console.log("MINUS");
  console.log("int:" + int);
  if(credits - int >= 0){
    credits -= int;
    creditsDisplay.textContent = credits + " credits";
    console.log("credits:" + credits);
    return true;
  }else{
    console.log("FAILED");
    console.log("credits:" + credits);
    return false;
  }
}

var h1 = document.createElement("h1");
h1.style.textAlign = "center";
var h3 = document.createElement("h3");
h3.style.textAlign = "center";
var innerDiv = document.createElement("div");

var identArray = [];
var choicesArray = [];
var blacklistArray = [];

function getReturn(e){
  var element;
  if(typeof e.toElement === 'undefined'){
    element = e.target;
  }else{
    element = e.toElement;
  }
  console.log(e.toElement);
  var ident = element.id;
  var parentident = element.getAttribute("parent");
  console.log(parentident + " > " + ident);
  var index = optionsets[parentident].options[ident];
  console.log(index);
  index.identifier = ident;
  var ifm, ifp, curCredits;
  if (choicesArray.indexOf(index) !== -1){
    var choiceindex = choicesArray.indexOf(index);
    curCredits = credits;
    ifm = minusCredits(index.credits);
    console.log(ifm);
    if (ifm){
      identArray.splice(identArray.indexOf(ident),1);
      choicesArray.splice(choiceindex,1);
      optionsetObj[parentident].array.splice(optionsetObj[parentident].array.indexOf(index),1);
      document.getElementById(ident+"_div").style.border = "2px solid rgba(0,0,0,0)";
    }else if (curCredits !== credits){
      plusCredits(index.credits);
    }
    console.log("removes because it's in choicesArray");
  }else if(optionsets[parentident].choices === -1){
    ifp = plusCredits(index.credits);
    if(ifp){
      identArray.push(ident);
      choicesArray.push(index);
      optionsetObj[parentident].array.push(index);
      document.getElementById(ident+"_div").style.border = "2px solid white";
    }
    console.log("infinite choices");
  }else if(optionsetObj[parentident].array.length >= optionsetObj[parentident].choices){
    console.log(optionsetObj[parentident].array.length + " >= " + optionsetObj[parentident].choices);
    curCredits = credits;
    credits -= (optionsetObj[parentident].array[0].credits);
    creditsDisplay.textContent = credits + " credits";
    ifp = plusCredits(index.credits);
    if(ifp){
      console.log("both ifp and ifm are " + (ifp && ifm));
      identArray.splice(identArray.indexOf(optionsetObj[parentident].array[0].identifier),1);
      document.getElementById(optionsetObj[parentident].array[0].identifier + "_div").style.border = "2px solid rgba(0,0,0,0)";
      choicesArray.splice(choicesArray.indexOf(optionsetObj[parentident].array[0]),1);
      optionsetObj[parentident].array.splice(0,1);
      choicesArray.push(index);
      identArray.push(ident);
      optionsetObj[parentident].array.push(index);
      document.getElementById(ident+"_div").style.border = "2px solid white";
    }else {
      plusCredits(optionsetObj[parentident].array[0].credits);
      console.log("FAILED");
    }
    console.log("removes first and adds clicked");
  }else{
    ifp = plusCredits(index.credits);
    console.log(ifp);
    if(ifp){
      identArray.push(ident);
      choicesArray.push(index);
      optionsetObj[parentident].array.push(index);
      document.getElementById(ident+"_div").style.border = "2px solid white";
    }
    console.log("normal add");
  }
  console.log(choicesArray);
  console.log("optionsetObj["+parentident+"].array:");
  console.log(optionsetObj[parentident].array);
}

var optionsets;
var optiondiv;

function loadSChoices(innerDiv, value){
  optionsets = choices[value].optionsets;
  var x;
  var y;
  for (x in optionsets){
    var options = optionsets[x].options;
    for (y in options){
      if (identArray.indexOf(y) !== -1){
        optiondiv = document.createElement("div");
        optiondiv.id = y + "_div";
        optiondiv.className = "option";
        optiondiv.style.marginLeft = "12px";
        optiondiv.style.marginRight = "12px";
        optiondiv.style.border = "2px solid rgba(0,0,0,0)";
        innerDiv.appendChild(optiondiv);
        innerDiv.appendChild(document.createElement("br"));
        var p2 = document.createElement("p");
        var p = document.createElement("p");
        p2.textContent = options[y].description;
        if(options[y].credits > 0){
          p.textContent = options[y].name + " (+" + options[y].credits + " credits)";
        }else{
          p.textContent = options[y].name + " ("+(options[y].credits * -1) + " credits)";
        }
        p.style.fontWeight = "bold";
        p2.style.marginTop = "-10px";
        optiondiv.appendChild(p);
        optiondiv.appendChild(p2);
      }
    }
  }
}


function loadChoices(value){
  innerDiv.remove();
  innerDiv = document.createElement("div");
  content.appendChild(innerDiv);
  optionsets = choices[value].optionsets;
  var x;
  var y;
  for (x in optionsets){
    var options = optionsets[x].options;
    for (y in options){
      var button = document.createElement("button");
      button.onclick = getReturn;
      button.style.display = "none";
      button.id = y;
      button.setAttribute("parent",x);
      var label = document.createElement("label");
      label.setAttribute("for",y);
      var optiondiv = document.createElement("div");
      optiondiv.id = y + "_div";
      if(choicesArray.indexOf(options[y]) === -1){
        optiondiv.style.border = "2px solid rgba(0,0,0,0)";
      }else{
        optiondiv.style.border = "2px solid white";
      }
      optiondiv.className = "option";
      optiondiv.style.marginLeft = "12px";
      optiondiv.style.marginRight = "12px";
      innerDiv.appendChild(label);
      innerDiv.appendChild(button);
      label.appendChild(optiondiv);
      innerDiv.appendChild(document.createElement("br"));
      var p2 = document.createElement("p");
      var p = document.createElement("p");
      p2.textContent = options[y].description;
      if(options[y].credits > 0){
        p.textContent = options[y].name + " (+" + options[y].credits + " credits)";
      }else{
        p.textContent = options[y].name + " ("+(options[y].credits * -1) + " credits)";
      }
      p.style.fontWeight = "bold";
      p2.style.marginTop = "-10px";
      optiondiv.appendChild(p);
      optiondiv.appendChild(p2);
    }
  }
}

function onSwitch(){
  if(selector.value === "null"){
    h1.textContent = "";
    h3.textContent = "";
    content.className = "";
    innerDiv.remove();
    innerDiv = document.createElement("div");
  }else{
    h1.textContent = choices[selector.value].title;
    h3.textContent = choices[selector.value].description;
    content.className = selector.value;
    loadChoices(selector.value);
  }
}

var content;
var select;

function setup(){
  select = document.getElementById("select");
  select.appendChild(selector);
  select.appendChild(imagebutton);
  content = document.getElementById("content");
  content.appendChild(document.createElement("br"));
  content.appendChild(h1);
  content.appendChild(h3);
  document.getElementById("credits").appendChild(creditsDisplay);
  content.appendChild(document.createElement("br"));
  content.appendChild(innerDiv);
}