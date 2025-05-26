let student = {
  name: "sagar",
  age: 21,
  gender: "male",
};

for (let key in student) {
  console.log("key=", key, "value=", student[key]);
}
