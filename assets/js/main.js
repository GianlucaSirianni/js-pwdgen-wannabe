let nameUser = prompt("What's your name?");
console.log(nameUser);

let surnameUser = prompt("What's your surname?");
console.log(surnameUser);

let favoriteCol = prompt("What's your favorite color?");
console.log(favoriteCol);

let favoriteNum = prompt("What's your favorite number?");
console.log(favoriteNum);


document.getElementById("pswDiv").innerHTML = "Your incredibly unsafe password is: " + nameUser + surnameUser + favoriteCol + favoriteNum;