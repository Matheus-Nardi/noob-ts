var superHeros = [];
var heroAge = [];
superHeros.push("spiderman");
heroAge.push(22);
var users = [];
users.push({ name: "matheus", email: "m@m.com", isActive: false }, { name: "leon", email: "l@l.com", isActive: true });
users.forEach(function (user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.isActive);
    console.log("-----------");
});
