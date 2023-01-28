
let userName = prompt("your username:")
let age = prompt ("your age:")
let info = document.querySelector("#info")

if (userName && age >= 18) {
    info.innerHTML = "you can get driver license"
}
else if (!userName){
    info.innerHTML = "you dont have username"
}
else if (!(age>= 18) ) {
   info.innerHTML = "your age information isnt here or you are under 18"

}