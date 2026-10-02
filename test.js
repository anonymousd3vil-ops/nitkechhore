const password = "vivek.admin@A1";

console.log(password);
console.log(password.length);

console.log(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,64}$/.test(password)
);