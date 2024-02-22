const namesArr =[
    "Samandar",
    "Zafarbek",
    "Otabek",
    "Azizbek",
    "Fayzulloxon",
    "JAsurbek",
    "Asadbek",
    "Izatillo",
    "Rahmonjon",
];

const randomNumber= Math.trunc( Math.random()*namesArr.length);

console.log(namesArr[randomNumber]);


/* ---- Sntax error----*/

// let a=1;
// const a=1;

/*---- Runtime error --- */

// console.log(b); // TDZ-vaqtinchalik o'lik zona
// let b=1;

/*---- try....catch ----*/

try{
  console.log(k);
  let k=2;
  throw Error("Bu text throw Error() dan kelyapti;");
}catch(error){
  console.log("Xatolik yuz berdi.");
}finally{
  console.log("end");
}

let c=9;
console.log(c);

let v=4;
console.log(v);

// throw uchun misol //

// let errorNUmber =404;

// try{
//   if(errorNUmber===404){
//     throw Error("Bu text throw Error() dan kelyapti;")
//   }
// }catch(error){
//   console.log(error.massge);
// }


// let c=9;
// console.log(c);

// let v=4;
// console.log(v);

//1- misol

const numertor =100,denominator='a';

try{
  console.log(numertor/denominator);
  console.log(a);
}catch(error){
  console.log('An error caught');
  console.log('Error massage;'+error);
}

// 2-misol

setTimeout(function(){
 try{
    // error in the code
 }catch{
  console.log("arror is caught");
 }
},3000);

// 3-masala

const number =40;

try{
  if(number>50){
    console.log('Success');
  }else{
    throw new Error('The number is low')
  }

  console.log('hello');
}catch{
  console.log('An error caught');
  console.log('Error massage:'+error);
}

/*---- JavaScript Modules ----*/

import"./app2.js"
