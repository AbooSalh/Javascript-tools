let chars = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM@!#$%&";
let charsCount = 10;
let password = "";
for (let i = 0; i< charsCount; i++) {
    password += chars[Math.floor(Math.random() * chars.length)]; // add random ele from chars
}
console.log(password);
