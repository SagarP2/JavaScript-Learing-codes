// Create an array to stored companies-> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// a. remove the first company from the array 
companies.shift();

// b. remove uber and add Ola in its place
companies.splice(2, 1, "Ola");

// c. add Amazon at the end 
companies.push("Amazon");