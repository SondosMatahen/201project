'use strict';


var sum = 0;

var userName = prompt('What is your name?');
console.log('The user entered the name ', userName);
alert(' Welcome ' + userName)

var nationality = prompt('Do you guess I am a syrian ? yes or no ').toLowerCase();
if (nationality === 'yes') {
    console.log('the user answered yes');
    sum = sum + 1;
    alert('Correct !')
} else if (nationality === 'no') {
    console.log('the user answered no');
    alert('Wrong !')
}
else {
    console.log('the user answered ', nationality);
    alert('try anthor answer !');
}





var university = prompt('Do you guess I have graduated from Zarqa uni ? yes or no ').toLowerCase();
if (university === 'yes') {
    console.log('the user answered yes');
    sum = sum + 1;
    alert('Correct !')
} else if (university === 'no') {
    console.log('the user answered no');
    alert('Wrong !')
}
else {
    console.log('the user answered ', university);
    alert('try anthor answer !');
}


var favdish = prompt('Do you guess my favorit dish is Kabsa ? yes or no ').toLowerCase();
if (favdish === 'yes') {
    console.log('the user answered yes');
    alert('Correct !')
    sum = sum + 1;
} else if (favdish === 'no') {
    console.log('the user answered no');
    alert('Wrong !')
}
else {
    console.log('the user answered ', favdish);
    alert('try anthor answer !');
}



var favcol = prompt('Do you guess my favorit color is white ? yes or no ').toLowerCase();
if (favcol === 'yes') {
    console.log('the user answered yes');
    sum = sum + 1;
    alert('Correct !')


} else if (favcol === 'no') {
    console.log('the user answered no');
    alert('Wrong !')
}
else {
    console.log('the user answered ', favcol);
    alert('try anthor answer !');
}




var family = prompt('Do you guess my family name is Anees ? yes or no ').toLowerCase();
if (family === 'yes') {
    console.log('the user answered yes');
    alert('Correct !')
    sum = sum + 1;
} else if (family === 'no') {
    console.log('the user answered no');
    alert('Wrong !')
}
else {
    console.log('the user answered ', family);
    alert('try anthor answer !');
}



// lab03

for (var i = 0; i < 4; i++) {
    var favNum = prompt('What is my favorit number ?');
    
    if (favNum < 7) {
        alert('it is too low !');
    } else if (favNum > 7) {
        alert('it is too high !');
    } else {
        alert('correct !');
        console.log('my favorit number is 7');
        break;
        
    }
    
    sum = sum + 1;

}

alert('The correct answer is 7');



var freword = ['really', 'ok', 'good'];
//console.log(freword[0]);
//console.log(freword[1]);
//console.log(freword[2]);

var userinp = prompt('What are the most frequent three words that I am using?');

for (var i = 0; i < 6; i++) {
    console.log('userinp', userinp);
    if (userinp == 'really' || userinp == 'ok' || userinp == 'good') {
        alert(' Correct, Great ! ');
        break;
    }
    

    else{ alert('Not correct! try again ');
    var userinp = prompt('What are the most frequent three words that I am using?')}
        
}

alert('The correct answers are really, ok, good ');

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





console.log(sum),

    alert(' Your score is ' , sum );



alert('Thanks for answering the questions ' + userName)
