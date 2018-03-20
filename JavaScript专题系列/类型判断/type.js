// JavaScript 6种数据类型：
// Undefined, Null, Boolean, Number, String, Object
// 使用 typeof 对这些数据类型进行判断时，对应结果如下
// undefined, object, boolean, number, string, object

// object 下面又细分为好多类型, Array, Function, Date, RegExp, Error

// Object.prototype.toString 
// 调用时, 返回一个 由 [object, class], 组成的字符串, class 是要判断的对象的内部属性

// 以下是11种：
var number = 1;          // [object Number]
var string = '123';      // [object String]
var boolean = true;      // [object Boolean]
var und = undefined;     // [object Undefined]
var nul = null;          // [object Null]
var obj = { a: 1 }         // [object Object]
var array = [1, 2, 3];   // [object Array]
var date = new Date();   // [object Date]
var error = new Error(); // [object Error]
var reg = /a/g;          // [object RegExp]
var func = function a() { }; // [object Function]

function checkType() {
  for (var i = 0; i < arguments.length; i++) {
    console.log(Object.prototype.toString.call(arguments[i]))
  }
}

checkType(number, string, boolean, und, nul, obj, array, date, error, reg, func)