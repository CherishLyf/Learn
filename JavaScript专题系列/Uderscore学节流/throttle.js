// 第一版  使用时间戳
// function throttle (func, wait) {
//   var context, args ;
//   var previous = 0 ;

//   return function () {
//     var now = +new Date()
//     context = this
//     args = arguments
//     if (now - previous > wait) {
//       func.apply(context, args)
//       previous = now
//     }
//   }
// }


// var count = 1;
// var container = document.getElementById('container');

// function getUserAction(e) {
//   container.innerHTML = count++;
// };

// container.onmousemove = throttle(getUserAction, 1000)


// 第二版 使用定时器
// function throttle (func, wait) {
//   var timeout, context, arg ;
//   var previous = 0

//   return function () {
//     context = this
//     args = arguments

//     if (!timeout) {
//       timeout = setTimeout(function () {
//         timeout = null
//         func.apply(context, args)
//       }, wait)
//     }
//   }
// }

// var count = 1;
// var container = document.getElementById('container');

// function getUserAction(e) {
//   container.innerHTML = count++;
// };

// container.onmousemove = throttle(getUserAction, 1000)

// 第一种事件立即执行，第二种事件会在n秒后第一次执行
// 第二种停止触发后没法再执行，第二种事件停止触发后依然会再执行一次

// // 第三版 双剑合璧

// function throttle(func, wait) {
//   var timeout, context, args, result;
//   var previous = 0;

//   var later = function () {
//     previous = +new Date();
//     timeout = null;
//     func.apply(context, args)
//   };

//   var throttled = function () {
//     var now = +new Date();
//     //下次触发 func 剩余的时间
//     var remaining = wait - (now - previous);
//     context = this;
//     args = arguments;
//     // 如果没有剩余的时间了或者你改了系统时间
//     if (remaining <= 0 || remaining > wait) {
//       if (timeout) {
//         clearTimeout(timeout);
//         timeout = null;
//       }
//       previous = now;
//       func.apply(context, args);
//     } else if (!timeout) {
//       timeout = setTimeout(later, remaining);
//     }
//   };
//   return throttled;
// }

// var count = 1;
// var container = document.getElementById('container');

// function getUserAction(e) {
//   container.innerHTML = count++;
// };

// container.onmousemove = throttle(getUserAction, 1000)

// 第四版 优化
// leading：false 表示禁用第一次执行
// trailing: false 表示禁用停止触发的回调

function throttle (func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {}

  var later = function () {
    previous = options.leading === false ? 0 : new Date().getTime()
    timeout = null
    func.apply(context, args)
    if (!timeout) context = args = null
  }

  var throttled = function () {
    var now = new Date().getTime()
    if (!previous && options.leading === false) previous = now
    //下次触发 func 剩余的时间
    var remaining = wait - (now - previous)
    context = this
    args = arguments
    // 如果没有剩余时间 或者 你改了系统时间
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false){
      timeout = setTimeout(later, remaining)
    }
  }

  throttled.cancel = function () {
    clearTimeout(timeout);
    previous = 0;
    timeout = null;
  }

  return throttled
}

var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
  container.innerHTML = count++;
};

// container.onmousemove = throttle(getUserAction, 1000);

// container.onmousemove = throttle(getUserAction, 1000, {
//   leading: false
// });

container.onmousemove = throttle(getUserAction, 1000, {
  trailing: false
});