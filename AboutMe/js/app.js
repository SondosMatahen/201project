'use strict';

var userName = prompt('What is your name?');
console.log('The user entered the name ', userName );
alert (' Welcome ' + userName )

var nationality = prompt('Do you guess I am a syrian ? yes or no ').toLowerCase();
if (nationality === 'yes' ){
    console.log('the user answered yes');
alert ('Correct !')
} else if(nationality === 'no') {
    console.log('the user answered no');
    alert ('Wrong !')
}
else { 
     console.log('the user answered ' , nationality );
alert ('try anthor answer !');
}

var university = prompt('Do you guess I have graduated from Zarqa uni ? yes or no ').toLowerCase();
if (university === 'yes' ){
    console.log('the user answered yes');
alert ('Correct !')
} else if(university === 'no') {
    console.log('the user answered no');
    alert ('Wrong !')
}
else { 
     console.log('the user answered ' , university );
alert ('try anthor answer !');
}
  
var favdish = prompt('Do you guess my favorit dish is Kabsa ? yes or no ').toLowerCase();
if (favdish === 'yes' ){
    console.log('the user answered yes');
alert ('Correct !')
} else if(favdish === 'no') {
    console.log('the user answered no');
    alert ('Wrong !')
}
else { 
     console.log('the user answered ' , favdish );
alert ('try anthor answer !');
}

var favcol = prompt('Do you guess my favorit color is white ? yes or no ').toLowerCase();
if (favcol === 'yes' ){
    console.log('the user answered yes');
alert ('Correct !')
} else if(favcol === 'no') {
    console.log('the user answered no');
    alert ('Wrong !')
}
else { 
     console.log('the user answered ' , favcol );
alert ('try anthor answer !');
}


var family = prompt('Do you guess my family name is Anees ? yes or no ').toLowerCase();
if (family === 'yes' ){
    console.log('the user answered yes');
alert ('Correct !')
} else if(family === 'no') {
    console.log('the user answered no');
    alert ('Wrong !')
}
else { 
     console.log('the user answered ' , family );
alert ('try anthor answer !');
}

alert ('Thanks for answering the questions ' + userName )








