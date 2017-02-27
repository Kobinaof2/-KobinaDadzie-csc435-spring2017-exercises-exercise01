function Person(n,birthday,Email,Address,phone_number ) {
  this.name= namefield.value;
  this.birthday=birthdayfield.value;
  this.Email=emailfield.value;
  this.Address=addressfield.value;
  this.phone_number=phone_numberfield.value;
}

var people = {};



var  AddPerson = function (Person) {
  var PersonInfoDiv =document.createElement("p");
  for (var i = 0; i < people.length; i++) {
  PersonInfoDiv.innerhtml= Person.name;
  PersonInfoDiv.appendChild(PersonName,birthdayfield,emailfield,addressfield,phonenumber);

  //people.push(PersonName,birthdayfield,emailfield,addressfield,phonenumber)
//console.log(people);
}
}
