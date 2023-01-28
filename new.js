alert("hello world")

console.log("hello world")
//var ile degisken tanimlamaq
//var serverName = "api.kodluyoruz.org"
//console.log(serverName)

// let ile degiskeni bos tanimlamaq
let serverName;
console.log(serverName)

//let ile degiskene melumat ataraq tanimlamaq
let password = "1234";
console.log(password)

/*xetali hal
console,log(fullName)
let fullName = "marvel studio";
*/
// birinci let olmalidi yuxarida sonra asagida console
fullName =  "lorem ipsum dolor"
console.log(fullName)

//birlestirme ve ya elave etmek sistemi
fullName + "yeni bilgi"
console.log(fullName + " test bilgisi")

fullname = fullName + " yeni bilgi"
fullName = "2: bilgi:" + fullName

//dirnaq isaresinden sonra space qoyanda 1 bos yer olur

fullName = "sifirlandi"
fullname += " ve yeni bilgi elave olundu"
console.log(fullName)

//const ile degiskeni bos tanimlamaya calismak
// const serverPassword;// sadece degisken tamamlandi ama ici bosdu buna gore

//const ile degisken tanimlamaq
const SERVER_PASSWORD = "asdfg123"
console.log(SERVER_PASSWORD)

// SERVER_PASSWORD = "1234"
// console.log (SERVER_PASSWORD)


/*İlk harften sonra değişken isimlerinde rakamlar da kullanılabilir. $ ve _ dışında başka noktalama işaretleri
istifade olunmaz*/
/*Değişken ismindeki harfler arasında boşluk kullanılamaz.*/

let price = 100
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax
console.log (
    "qiymet;", price
    "edv;", tax
    "total" , total
    )

    //artirma ve azaltma isareleri
    let counter = 320
    counter = counter + 1 // uzun yontem
    counter += 1;
    counter ++; // ustune 2 gelir ele bil
    console.log(counter)

    counter --;
    counter -= 1;
    console.log(counter)

    //asagiya yuvarlama
    console.log("asagi yuvarlama:", Math.floor(1.9) ) //yuvarlananda 1 olacaq asagi qiymete

    //yuxariya yuvarlamaq
    console.log("yuxari yuvarlama;", Math.ceil(1/9) ) //yuvarlananda yuxariya yeni 2 olacaq 1.1 olsada 2 olacaq

    //yaxinda yuvarlamaq
    console.log("yaxina yuvarlama;", Math.round(1.5) ) // 1.5 2 ye yuvarlanacq ama 1.1 1 e yuvarlanacaq

    //string yazmaqq
    let stringNumber = "11"
    console.log(stringNumber)
    let newNumber = Number(stringNumber)
    console.log(newNumber)
    console.log("Number constract icine gonderildi" , Number("111"))

let is Active = false //0
isActive = true // 1
console.log(isActive)


let userName;
let isUserName = Boolean(userName)
console.log(isUserName)

Boolean("11") //true
Boolean("0") //true
Boolean("") // false

userName = "user"

console.log("User Name:" , Boolean(userName))

// 0, -0, null, false, NaN, undefined, ("")
Boolean(0) // false
Boolean(-0) // false
Boolean(-0.1) //true
Boolean(0 === 0) //true

Boolean(userName.length > 0) //true

/*console.log(typeof 42);
// beklenen output: "number"

console.log(typeof 'kodluyoruz');
//beklenen output: "string"

console.log(typeof true);
// beklenen output: "boolean"

console.log(typeof Variable);
// beklenen output: "undefined"*/

let ad= `Aycan`;
let soyad= `Yerdelen`;

//Eski kullanım
console.log("Benim adım "+ad+" "+ soyad);

//Yeni kullanım
console.log(`Benim adım ${ad} ${soyad}`);

let a = 99;
let b= 999;

console.log(`${a} çarpı ${b} eşittir ${a*b}`);

// motterize icinde ` isare oldugunda her setirde kod yamaq olur ik dirnaq " olanda ikicni setre kecmek olmurdu


//Çıktı: 
//99 çarpı 999 eşittir 98901

const kitap = {
    ad: "Fırtına",
    yazar: "Shakespeare",
    tarih: 1610
  }
  const bookTable =`
        <table border>
    <tbody>
      <tr>
        <td>Kitap</td>
        <td>${kitap.ad}</td>
      </tr>
    <tr>
        <td>Yazar</td>
        <td>${kitap.yazar}</td>
      </tr>
        <tr>
        <td>Tarih</td>
        <td>${kitap.tarih}</td>
      </tr>
   </tbody>
    </table>
  `;
        
  document.body.innerHTML = bookTable

  /*
Kitap	Fırtına
Yazar	Shakespeare
Tarih	1610

aralarinda cedvel kimi qurulur yuxaridaki kodda*/

let email = "maleykah@gmail.com"
let firstName = "maleyka"
let lastName = "heybatova"

//string xarakter sayisi--> length
console.log(email.length )

// ilk xarakteri tapmaq-- [0];
console.log(firstName[0])
console.log(fisrtName.chartAt(0))

//boyuk herf / kicik herf;
firstName = firstName.toUpperCase()
console.log(firstName)

firstName = fisrtName.toLowerCase()
console.log(fisrtName)
//string icinde bir bilge axtarmaq-- search
console.log(email.search("@"))
console.log( email[15] )

email.search('olmayan') // bu zaman cavab -1 cixacaq
//cunki olmayan bir ifadeni search edende -1 cixir.

//belli bir yere qeder al-->slice;
let DOMAIN = email.slice( email.search("@")+1)
console.log(DOMAIN)
// yuxarida +1 yazmaq o demekdirki yeni @ den soranki hiseden 1 dene sonrasin al

console.log(
    DOMAIN>slice(o, DOMAIN.index0f('.') ) //sadece gmailhissein aldiq
)

//melumati degistermek -- replace
email = email.replace('gmail.com', "kodluyoruz.org")
console.log(email)
 
//istedigin bilgi varmi ?-- includes
email.includes('asdfg') // false
email.includes('@') // true

//istedigin bilgiyle basladimi yoxsa yox
console.log(
    email.endsWith('gmail.com')
)

//ilk herfi boyuk elemek
let fullName = `${fisrtNAme[0].toUpperCase()}${firstName.slice(1).toLowerCase()}${lastName[0].
toUpperCase()}${lastName.slice(1).toLowerCase()}`

console.log(fullName)