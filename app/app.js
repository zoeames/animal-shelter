//app.js
//
//Animal Shelter
//
//
//
//Z. Ames 7/14/14


/*global prompt:true*/
var prompt = require('sync-prompt').prompt;

//defines variables
var dogs = [];
var cats = [];
var birds = [];
var people = [];

var person1 = {name: 'bob', age:10, pets:[]};
var person2 = {name: 'sam', age:5, pets:[]};
var person3 = {name: 'jill', age:7, pets:[]};

people.push(person1, person2, person3);

var menu = prompt('Add (c)at, (d)og, (b)ird, (q)uit:  ' );
while (menu !== 'q'){
    if (menu==='c'){  
        var name = prompt('Cat name:  ');
        var gender = prompt('Cat gender:  ');
        var length =parseInt( prompt('cat length (feet): '));
        var userCat = { name:name, gender:gender, length:length};
        cats.push(userCat);
        menu = prompt('Add (c)at, (d)og, (b)ird, (q)uit:  ' );
      }else if(menu==='d'){ 
        var name = prompt('Dog name:  ');
        var age = parseInt(prompt('Dog age:  '));
        var breed = prompt('Dog breed:  ');
        var userDog = { name:name, age:age, breed:breed};
        dogs.push(userDog);
        menu = prompt('Add (c)at, (d)og, (b)ird, (q)uit:  ' );
      }else{
        var name = prompt('Bird name:  ');
        var wingspan = parseInt(prompt('Bird wingspan (feet):  '));
        var color = prompt('Bird Color:  ');
        var userBird = {name:name, wingspan:wingspan, color:color };
        birds.push(userBird);
        menu = prompt('Add (c)at, (d)og, (b)ird, (q)uit:  ' );
      }
  }

 var option = prompt('(b)ob, (s)am, (j)ill or (q)uit?  ');

while (option !== 'q'){
  for (var i=0; i<people.length; i++){
    if(people[i].name[0]===option){
      var client = people[i];
      break;
  }}
  console.log('Client: ', client);

  var animals;
  var choice = prompt('What type of Pet? (d)og, (c)at or (b)ird? ' );
  switch (choice){
  case 'd':
    console.log('Dogs', dogs);
    animals = dogs;
    break;
  case 'c':
    console.log('Cats', cats);
    animals = cats;
    break;
  case 'b':
    console.log('Birds', birds);
    animals = birds;
  }
  

var name  = prompt('What is the name of the animal you want to adopt? ');
for (var j=0; j<animals.length; j++){
    if(animals[j].name===name){
      var animal = animals[j];
      var index = j;
      break;
    }
}
    console.log('Your animal is:', animal);
    animals.splice(index,1);
    client.pets.push(animal);
    console.log('After adoption:',client);
    console.log('Animal array',animals);

  option = prompt('(b)ob, (s)am, (j)ill or (q)uit?  ');
}



//console.log('You have the following cats', cats);
//console.log('You have the following dogs', dogs);
//console.log('You have the following birds', birds);
