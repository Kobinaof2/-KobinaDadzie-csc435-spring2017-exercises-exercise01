$(document).ready(function(){
  var xhttp =new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState==4 && this.status == 200){
      var response = this.responseText;
      var creatureData = JSON.parse(response);
      console.log(creatureData);

      // get a creature from the data

      for (var i = 0; i < creatureData.creatures.length; i++) {
        var creature = creatureData.creatures;
        console.log(creature[i]);
        $(CreatureEntry).append(generateCreatureDiv(creature[i]));

      }

      function generateCreatureDiv(creature) {
        var CreatureDiv =$("<div />");
        console.log("check status");
        CreatureDiv.id = "CreatureInfo";
        console.log("check status")
        $(CreatureDiv).append("<h1>" + creature.name + "</h1>");
        $(CreatureDiv).append("<img src="+ creature.image +">" + "</img>");
        $(CreatureDiv).append("<p>"+creature.description+"</p>");
        return CreatureDiv;
        console.log("check status");

      }


    console.log(creature[0]);


      // when one of the names is selected,
      //  check to see  if the value selected is in the data,
      // if it is in there, hide contents of CreatureDiv
      // create a new div for the SelectCreature
      // pull the selected creature name, pic and description
      $(Select).change(function() {
        $(CreatureEntry).empty();
          if (this.value == "Bantha") {
           $(CreatureEntry).append("<h1>" + creature[0].name + "</h1>");
           $(CreatureEntry).append("<img src="+ creature[0].image +">" + "</img>");
           $(CreatureEntry).append("<p>"+creature[0].description+"</p>");




         }else if (this.value == "Tauntaun") {
           $(CreatureEntry).append("<h1>" + creature[1].name + "</h1>");
           $(CreatureEntry).append("<img src="+ creature[1].image +">" + "</img>");
           $(CreatureEntry).append("<p>"+creature[1].description+"</p>");

         } else if (this.value == "Mynock") {
           $(CreatureEntry).append("<h1>" + creature[2].name + "</h1>");
           $(CreatureEntry).append("<img src="+ creature[2].image +">" + "</img>");
           $(CreatureEntry).append("<p>"+creature[2].description+"</p>");


         } else if (this.value== "Sarlacc") {
           $(CreatureEntry).append("<h1>" + creature[3].name + "</h1>");
           $(CreatureEntry).append("<img src="+ creature[3].image +">" + "</img>");
           $(CreatureEntry).append("<p>"+creature[3].description+"</p>");


         }else if (this.value == "Ewok") {
           $(CreatureEntry).append("<h1>" + creature[4].name + "</h1>");
           $(CreatureEntry).append("<img src="+ creature[4].image +">" + "</img>");
           $(CreatureEntry).append("<p>"+creature[4].description+"</p>");


         }else if (this.value == "Falumpaset") {
           $(CreatureEntry).append("<h1>" + creature[5].name + "</h1>");
           $(CreatureEntry).append("<img src="+ creature[5].image +">" + "</img>");
           $(CreatureEntry).append("<p>"+creature[5].description+"</p>");

         }









       });








  }

  };

  xhttp.open("GET", "https://api.myjson.com/bins/17f3jl", true );
  xhttp.send();



});
