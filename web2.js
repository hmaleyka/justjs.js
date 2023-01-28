let username = "maleyka.heybatova"
const DOMAIN = "bsu.edu.az"

let email = username + "@" + DOMAIN
console.log("hello", username, "welcome to here", "your mail adress:", email)

let info = ` Hello ${username}, welcome to here, your email adress: ${email} 
your short name: ${username[0]}
the lenght of your email adress: ${email.length}

`

console.log(info)