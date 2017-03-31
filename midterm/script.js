$(document).ready(function(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
  if (this.readyState==4 && this.status ==200){
    var response =this.responseText;
    var CreatureData =JSON.parse(response)
    console.log(CreatureData);


    //Get a creature  from the object created
    var creature = CreatureData.creatures
    for (var i = 0; i < creature.length; i++) {
      var CreatureDiv = $("<div/>");
      CreatureDiv.append (creature[i]);
      $("#CreatureEntry").append(CreatureDiv);
      console.log(creature[i]);
    }






  var generateCreatureDiv= function (Creature1) {
      for (var i = 0; i < CreatureData.creatures.length; i++) {
        var CreatureDiv = $("<div/>");
        CreatureDiv.append(creatures[1]);
      }

    }
    //view a Creature in DOM
    var generateCreatureDiv = generateCreatureDiv(CreatureDiv);
    $("#CreatureEntry").append(generateCreatureDiv);

    // Create a drop down list slector for the names

    for (var i = 0; i <CreatureData.creatures.length; i++) {
      var option =$("<option/>").text(CreatureData.creatures.name);
    }
  }
  }



xhttp.open("get", "https://api.myjson.com/bins/17f3jl",true);
xhttp.send();



});
