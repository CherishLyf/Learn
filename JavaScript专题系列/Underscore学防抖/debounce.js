// var count = 1
// var container = document.getElementById('container')

// function getUserAction () {
//   container.innerHTML = count ++ 
// }

// container.onmousemove = getUserAction



// 第一版

// var count = 1
// var container = document.getElementById('container')

// function debounce (func, wait) {
//   var timeout ;
//   return function () {
//     clearTimeout(timeout)
//     timeout = setTimeout(func, wait)
//   }
// }

// function getUserAction () {
//   container.innerHTML = count ++ 
// }

// container.onmousemove = debounce(getUserAction, 1000);


// 第二版

// var count = 1
// var container = document.getElementById('container')

// function debounce (func, wait) {
//   var timeout 

//   return function () {
//     var context = this
//     clearTimeout(timeout)
//     timeout = setTimeout(function () {
//       func.apply(context)
//     }, wait)
//   }
// }

// function getUserAction (e) {
//   // console.log(this)
//   // console.log(e)
//   container.innerHTML = count ++ 
// }

// container.onmousemove = debounce(getUserAction, 1000);


// 第三版

// function debounce (func, wait) {
//   var timeout ;

//   return function () {
//     var context = this
//     var args = arguments
//     console.log(args)
//     clearTimeout(timeout)
//     timeout = setTimeout(function () {
//       func.apply(context, args)
//     }, wait)
//   }
// }

// var count = 1
// var container = document.getElementById('container')

// function getUserAction () {
//   container.innerHTML = count ++ 
// }
// container.onmousemove = debounce(getUserAction, 1000);


// // 第四版 立即执行

// function debounce (func, wait, immediate) {

//   var timeout, result;

//   return function () {
//     var context = this
//     var args = arguments

//     if (timeout) clearTimeout(timeout)
//     if (immediate) {
//       // 如果已经执行过, 不再执行
//       var callNow = !timeout
//       timeout = setTimeout(function () {
//         timeout = null
//       }, wait)
//       // console.log(callNow)
//       if (callNow) func.apply(context, args)
//     } else {
//       timeout = setTimeout(function () {
//         func.apply(context, args)
//       }, wait)
//     }
//   }

// }

// var count = 1
// var container = document.getElementById('container')

// function getUserAction () {
//   container.innerHTML = count ++ 
// }
// container.onmousemove = debounce(getUserAction, 1000, false);

// // 第五版 

// function debounce(func, wait, immediate) {

//   var timeout, result;

//   return function () {
//     var context = this;
//     var args = arguments;

//     if (timeout) clearTimeout(timeout);
//     if (immediate) {
//       // 如果已经执行过，不再执行
//       var callNow = !timeout;
//       timeout = setTimeout(function () {
//         timeout = null;
//       }, wait)
//       if (callNow) result = func.apply(context, args)
//     } else {
//       timeout = setTimeout(function () {
//         func.apply(context, args)
//       }, wait);
//     }
    
//     return result;
//   }
// }

// var count = 1
// var container = document.getElementById('container')

// function getUserAction() {
//   container.innerHTML = count++
// }
// container.onmousemove = debounce(getUserAction, 1000, true);

// 第六版 取消

// 第六版

function debounce(func, wait, immediate) {

  var timeout, result;

  var debounced = function () {
    var context = this;
    var args = arguments;

    if (timeout) clearTimeout(timeout);
    if (immediate) {
      // 如果已经执行过，不再执行
      var callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait)
      if (callNow) result = func.apply(context, args)
    }
    else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait);
    }
    return result;
  };

  debounced.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
}


var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
  container.innerHTML = count++;
};

var setUseAction = debounce(getUserAction, 10000, true);

container.onmousemove = setUseAction;

document.getElementById("button").addEventListener('click', function () {
  setUseAction.cancel();
})