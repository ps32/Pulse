$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right-solid.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  dots: true,
                  arrows: false
                }
            }
        ]
      });
  });










//const { name } = require("browser-sync");

/* let number = 7;
const pi = 3.14;

number=4; */


// number
// string - "", '', ``
// true/false
// null
// undefined (переменная без значения)
//
/* let obj = {
    name: 'apple',
    color: 'green',
    weight: 200
}
 */
// symbol

//alert(1234)
//console.log(number)

/* let answer = confirm("Вам есть 18?");
console.log(answer); */

/* let answer = prompt("Вам есть 18?", "");
console.log(answer); */

/* let isChecked = true,
    isClose = false;
console.log(isChecked || isClose); */

/* if (2*6 == 8*1) {
    console.log("Верно")
} else {
    console.log("Ошибка")
} */

/* let answer = confirm("Вам есть 18?");
if (answer) {
    console.log("Проходите")
} else {
    console.log("Уходите")
} */

/* const num = 50;

if (num < 49) {
    console.log("Неправильно")
} else if (num > 100) {
    console.log("Много")
} else {
    console.log("Верно")
} */

/* for(let i=1; i < 8; i++) {
    console.log(i)
} */

/* function logging(a, b) {
    console.log(a + b)
}
logging(3, 5); */