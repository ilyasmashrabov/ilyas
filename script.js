// цикл
// ++

// var i = 0;
// console.log(++i); // префиксная

// console.log(i++); // постфиксная
// console.log(i);


//  = =============== while -========================
// var i = 0;

// while (i < 10) {
//   console.log(i);
//   i++;
// }


//  ================== do while =================
// var i = 1000;

// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// do {
//   var x = +prompt('введите число');

// } while (isNaN(x)){

//   console.log(x);

// }



// ============== for ========================
// for (var i = 0; i < 10; i++) {

//   console.log(i);

// }
// console.log(i);

// for (let i = 0; i < 10; i++) {

//   console.log(i);

// }

// let a = +prompt('введите число');
// let b;
// условие ? выражение если условие true : выражение если условие false

// a = !isNaN(a) ? a : 10;

// if (!isNaN(a)) {
//   a = a;
// }else{
//   a = 10;
// }

// for (let i = 0; i < a; i++) {

//  console.log(i);

// }




// let answer = 1;
// for (let i = 1; i <= 5; i++) {
// answer = answer * i;
  
// }

// console.log(answer);




function ran(min,max) {
    let num = Math.floor(Math.random() * (max + 1 - min) + min);
    return num;
}

let minInt = +prompt('Введите минимальное число');
let maxInt = +prompt('Введите максимальное число');

for (let i = 0; i < 10; i++) {
 
    let num1 = ran(minInt, maxInt);
    let num2 = ran(minInt, maxInt);
    let pr = +prompt(num1 + '+' + num2);
    let answer = (num1 + num2) == pr ? 'Молодец' : 'Ошибка';
    alert(num1 + '+' + num2 + ' = ' + (num1 + num2) + ' ваш ответ ' + pr + '->' + answer)

    
}