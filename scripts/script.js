alert('Узнать что вернёт строка: Boolean(Number(`10`)) + 1');
let num = Boolean(Number('10')) + 1;
alert(num);
alert (typeof num);

alert('Узнать что вернёт строка: `sub` + Number(false)');
let num1 = 'sub' + Number(false);
alert(num1);
alert (typeof num1);

alert('Узнать что вернёт строка: 16  *  `  91  `');
let num2 = 16  * '  91  ';
alert(num2);
alert (typeof num2);

alert('Узнать что вернёт строка: true-70');
let num3 = true-70;
alert(num3);
alert (typeof num3);

alert('Узнать что вернёт строка: Number(1 + String(1)) + 1');
let num4 = Number(1 + String(1)) + 1;
alert(num4);
alert (typeof num4);


