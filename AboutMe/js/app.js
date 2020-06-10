'use strict';

var sum = 0;

var userName = prompt('What is your name?');
console.log('The user entered the name ', userName);
alert(' Welcome ' + userName)

function nat(){
var nationality = prompt('Do you guess I am a syrian ? yes or no ').toLowerCase();
if (nationality === 'yes'|| nationality == 'y') {
    console.log('the user answered yes');
    sum = sum + 1;
    alert('Correct !')
} else if (nationality === 'no' || nationality == 'n') {
    console.log('the user answered no');
    alert('Wrong !')
}
else {
    console.log('the user answered ', nationality);
    alert('try anthor answer !');
}
console.log(sum);
}



function uni(){
var university = prompt('Do you guess I have graduated from Zarqa uni ? yes or no ').toLowerCase();
if (university === 'yes' || university == 'y' ) {
    console.log('the user answered yes');
    sum = sum + 1;
    alert('Correct !')
} else if (university === 'no'  || university == 'n') {
    console.log('the user answered no');
    alert('Wrong !')
}
else {
    console.log('the user answered ', university);
    alert('try anthor answer !');
}
console.log(sum);
}


function fav1(){
var favdish = prompt('Do you guess my favorit dish is Kabsa ? yes or no ').toLowerCase();
if (favdish === 'yes'  || favdish == 'y') {
    console.log('the user answered yes');
    alert('Correct !')
    sum = sum + 1;
} else if (favdish === 'no' || favdish == 'n') {
    console.log('the user answered no');
    alert('Wrong !')
}
else {
    console.log('the user answered ', favdish);
    alert('try anthor answer !');
}
console.log(sum);
}


function fav2(){
var favcol = prompt('Do you guess my favorit color is white ? yes or no ').toLowerCase();
if (favcol === 'yes' || favcol == 'y') {
    console.log('the user answered yes');
    sum = sum + 1;
    alert('Correct !')


} else if (favcol === 'no' || favcol == 'n') {
    console.log('the user answered no');
    alert('Wrong !')
}
else {
    console.log('the user answered ', favcol);
    alert('try anthor answer !');
}
console.log(sum);
}


function fam(){
var family = prompt('Do you guess my family name is Anees ? yes or no ').toLowerCase();
if (family === 'yes' || family == 'y') {
    console.log('the user answered yes');
    alert('Correct !')
    sum = sum + 1;
} else if (family === 'no' || favcol == 'y') {
    console.log('the user answered no');
    alert('Wrong !')
}
else {
    console.log('the user answered ', family);
    alert('try anthor answer !');
}
console.log(sum);
}




function q6(){
for (var i = 0; i < 4; i++) {
    var favNum = prompt('What is my favorit number ?');
    
    if (favNum < 7) {
        alert('it is too low !');
    } else if (favNum > 7) {
        alert('it is too high !');
    } else {
        alert('correct !');
        sum = sum + 1;
        console.log('my favorit number is 7');
        break;
        
    }
    
 }

alert('The correct answer is 7');
console.log(sum);

}


function q7(){
var freword = ['really', 'ok', 'good'];
//console.log(freword[0]);
//console.log(freword[1]);
//console.log(freword[2]);

var userinp = prompt('What are the most frequent three words that I am using?');

for (var i = 0; i < 6; i++) {
    console.log('userinp', userinp);
    if (userinp == 'really' || userinp == 'ok' || userinp == 'good') {
        alert(' Correct, Great ! ');
        sum = sum + 1;
        break;
    }
    

    else{ alert('Not correct! try again ');
    var userinp = prompt('What are the most frequent three words that I am using?')}
        
}

alert('The correct answers are really, ok, good ');
console.log(sum);
}

/*for (var i = 0; i < 6 ; i++) {
    var userinp = prompt('What are the most frequent three words that I am using?')
    console.log( 'userinp',userinp);
    if (userinp != freword) {
        alert('Not correct! try again ');
    } 
    else if(userinp == 'really' || 'ok' || 'good') {
        alert(' Correct, Great ! ');
        break;  
    }}*/




nat();
uni();
fav1();
fav2();
fam();
q6();
q7();


console.log(sum);

alert(' Your score is ' + sum );

alert('Thanks for answering the questions ' + userName)