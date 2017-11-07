// 双层循环 
// 在这个方法中， 我们使用循环嵌套， 最外层循环 array， 里面循环 res， 如果 array[i] 的值跟 res[j] 的值相等， 就跳出循环， 如果都不等于， 说明元素是唯一的， 这时候 j 的值就会等于 res 的长度， 根据这个特点进行判断， 将值添加进 res。

// var array = [1, 1, '1', '1'];

// function unique (arr) {
//   // res 用来储存结果
//   var res = []
//   for (var i = 0, arrayLen = arr.length; i < arrayLen; i++) {
//     for (var j = 0, resLen = res.length; j < resLen; j++) {
//       if (arr[i] === res[j]) {
//         break
//       }
//     }

//     // 如果 array[i] 是唯一的，那么执行完循环，j 等于 resLen
//     if (j === resLen) {
//       res.push(arr[i])
//     }
//   }
//   return res
// }

// console.log(unique(array))  // [1, "1"]


// indexOf 简化
// var Array = [1, 1, '1']

// function unique (array) {
//   var res = []
//   for (var i = 0, len = array.length; i < len; i++ ) {
//     var current = array[i]
//     if (res.indexOf(current) === -1) {
//       res.push(current)
//     }
//   }
//   return res
// }

// console.log(unique(Array)) // [1, "1"]


// 排序后去重
// 将需要去重的数组排序后，只判断当前元素是不是与上一元素是否相同

// var Array = [1, 1, '1']

// function unique (array) {
//   var res = []
//   var sortedArray = array.concat().sort()
//   var seen ;
//   for (var i = 0, len = sortedArray.length; i < len; i++) {
//     // 如果是第一个元素或者相邻元素不相同
//     if (!i || seen !== sortedArray[i]) {
//       res.push(sortedArray[i])    
//     }
//     seen = sortedArray[i]
//   }

//   return res
// }

// console.log(unique(Array))


// unique api
// unique 的工具函数，我们根据一个参数 isSorted 判断传入的数组是否是已排序的，如果为 true，我们就判断相邻元素是否相同，如果为 false，我们就使用 indexOf 进行判断

// var array1 = [1, 2, '1', 2, 1]
// var array2 = [1, 1, '1', 2, 2]

// // 第一版
// function unique (array, isSorted) {
//   var res = []
//   var seen ;

//   for (var i = 0, len = array.length; i < len; i++) {
//     var value = array[i]
//     if (isSorted) {
//       if (!i || seen !== value) {
//         res.push(value)
//       }
//       seen = value
//     } else if (res.indexOf(value) === -1) {
//       res.push(value)
//     }
//   } 
//   return res;
// }

// console.log(unique(array1));      // [1, 2, '1']
// console.log(unique(array2, true))   // [1, '1', 2]


// 优化
// 字母的大小视为一致
// var array3 = [1, 1, 'a', 'A', 2, 2]

// // iteratee 迭代，重复
// function unique (array, isSorted, iteratee) {
//   var res = []
//   var seen = []

//   for (var i = 0, len = array.length; i < len; i ++) {
//     var value = array[i]
//     var computed = iteratee ? iteratee(value, i, array) : value
//     if (isSorted) {
//       if (!i || seen !== computed) {
//         res.push(value)
//       }
//       seen = computed
//     } else if (iteratee) {
//       if (seen.indexOf(computed) === -1) {
//         seen.push(computed)
//         res.push(value)
//       }
//     } else if (res.indexOf(value) === -1) {
//       res.push(value)
//     }
//   }
//   return res;
// }

// console.log(unique(array3, false, function (item) {
//   return typeof item == 'string' ? item.toLowerCase() : item
// }))



// filter
var array4 = [1, 2, 1, 1, '1']

// function unique (array) {
//   var res = array.filter(function (item, index, array) {
//     return array.indexOf(item) === index
//   })

//   return res
// }

// console.log(unique(array4))

// 排序去重
function unique (array) {
  return array.concat().sort().filter(function(item, index, array) {
    return !index || item !== array[index - 1]
  })
}
console.log(unique(array4))
