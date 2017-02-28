
//Define a Person class
function Person(n, birthday,email,address,phoneNo) {
  this.name = n;
  this.birthday=birthday;
  this.email=email;
  this.address=address;
  this.phoneNo=phoneNo;
  }




//Create an array to store the people we instantiated
var people = [];


//This function will run when the button is clicked
var AddPerson = function() {
  var nameListDiv = document.getElementById("PersonInfo");
  var NewPerson  = new Person(document.getElementById("namefield").value,document.getElementById("birthdayfield").value,document.getElementById("emailfield").value,document.getElementById("addressfield").value,document.getElementById("phone_numberfield").value);
  people.push(NewPerson);
    //Loop through each person in people, and add a p with the output
  //of the person's sayHello function inside of it
  for (var i = 0; i < people.length; i++) {
    var personEntry = createPersonEntry(people[i]);
    nameListDiv.appendChild(personEntry);
  }
}

var createPersonEntry = function(x) {
  var personEntry = document.createElement("div");
  var personNameHeading = document.createElement("h1");
  var personbirthday = document.createElement("p");
  var personemail = document.createElement("p");
  var personaddress = document.createElement("p");
  var personphoneno = document.createElement("p");
  personNameHeading.className = "personTitle";
  personNameHeading.innerHTML = x.name;
  personbirthday.innerHTML=x.birthday;
  personemail.innerHTML = x.email;
  personaddress.innerHTML = x.address
  personphoneno.innerHTML = x.phoneNo
  personEntry.appendChild(personNameHeading);
  personEntry.appendChild(personbirthday);
  personEntry.appendChild(personemail);
  personEntry.appendChild(personaddress);
  personEntry.appendChild(personphoneno);


  return personEntry;
}
