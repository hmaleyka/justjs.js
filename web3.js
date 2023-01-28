 
 console.log (document.location.pathname)

console.log(document.head)
console.log (document.body)

 /*console.log (document.URL)
console.log(document.baseURL)
*/
/*
document.body.style.backgroundColor = "aqua"

let title = document.getElementById('title')
title.innerHTML = "Degisen Bilgi"
console.log (title.innerHTML)

let link = document.querySelector("#kodluyoruzLink")
link.innerHTML += " degisti"
link.style.color = "red"
link.classList.add('btn')
*/
let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "last item has changed"

let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML = "first item has changed"

let ulDom = document.querySelector("ul#list")
let liDOM = document.createElement('li')

liDOM.innerHTML = "your week"
//ulDOM.append(liDOM) // en axra elave edir

ulDOM.prepend(liDOM)



/* let fullName = prompt ("Please enter your name")

let greeting = document.querySelector("#greeting")

greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${fullName}</small>`
*/
