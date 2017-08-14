//global variable to stop alerts


function userid_validation(i, j) {

    //take strUser from user txtbox


    var strUser = document.getElementsByName("userid")[0].value;



    if (!strUser.length) {
        console.log("User Id Should not be Empty!");

    } else if (strUser.length > j) {
        console.log("username should be at most " + j + " characters ");
    } else if (strUser.length < i) {
        console.log("username is should be atleast " + i + " characters ");

    }


    //  document.getElementsByName("passid")[0].focus(); 


}



function firstfocus() {
    document.getElementsByName("userid")[0].focus();

}


function passid_validation(x, y) {


    let strPass = document.getElementsByName("passid")[0].value;

    if (!strPass.length) {
        console.log("User Password Should not be Empty")
    } else if (strPass.length > y)
        console.log("password should be shorter than " + y + " characters");

    else if (strPass.length < x)
        console.log("password should be atleast " + x + " characters");

    //    document.getElementsByName("username")[0].focus(); focus function 

}







function allLetter() {

    var letters = document.getElementsByName("username")[0].value;


    var flag = true;

    letters = letters.toUpperCase();
    // iterate through string, see if any non-letters, break. 



    for (let it = 0; it < letters.length; ++it) {
        if (letters[it] < 'A' || letters[it] > 'Z') {
            // console.log(letters[it]);            this is the letter that broke it
            flag = false;
            break;
        }
    }

    if (!flag)
        console.log("only use letters in your name please");

    //  document.getElementsByName("email")[0].focus();


}

function ValidateEmail() {


    let email = document.getElementsByName("email")[0].value;

    /* This Regex was taken from StackOverflow. 
        poster "Squirtle"
    */

 //   var emailMatch = /\S+@\S+\.\S+/.exec(email);

var atSign = false; 
var dotcom = false; 

let x=1; // first character should not be @

while( email[x] != '@' && x+1 < email.length )
{ 
    ++x; //find @ 
}


/* the reason for increment by 2 is because there should be at least one
letter in between @ and the '.' ... e.g. the input st@.com is incorrect
*/ 

for(x=x+2; x<email.length; x++)
{
    if(email[x]=='.' && x+1<email.length) // x+1 so cannot just end with '.'
    { 
        dotcom = true; break; 
    }

}

    if (!dotcom) {
        console.log("please enter a valid email");
    }






}