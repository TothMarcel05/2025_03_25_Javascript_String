console.log("Hello")
let s = "karakterlánc \"Hello\"";
console.log(s)
let ujsor = "karakterlánc \n \"Hello\"";
console.log(ujsor)
/*let kocsi = "karakterlánc \r \"Hello\"";
console.log(kocsi)*/
console.log(ujsor.length)

// for ciklus index-szel
let sz = "JavaScript";
for (let i = 0; i < sz.length; i++)
     {console.log(sz[i])}

// for of ciklus
let sz1 = "MySQL";
for (betu of sz1)
     {console.log(betu);}

console.log(sz+sz1)
console.log(sz+ " " +sz1)
console.log(`${sz} ${sz1}`)

//contact method használata
let szovegosszefuzes = sz.concat(" ", sz1);
console.log(szovegosszefuzes)

//Startswith endswith
console.log(sz1.charAt(4));
console.log(sz1.charCodeAt(4));

console.log(sz1.startsWith('m'));

let hello = "Helló világ!";
console.log(hello.endsWith("világ!"));
console.log(hello.startsWith("világ!"));

let szam = "10";
console.log(szam.padEnd(5, "0"));
console.log(szam.padStart(5, "0"));

