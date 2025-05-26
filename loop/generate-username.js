// Prompt the user to enter their full name. Generate a username for them based on the input. starting with @, follwed by their full name and ending with fullname length.

 let fullname = prompt("enter your name withput spaces");

 let username = "@"+ fullname +fullname.length;
 console.log(username);