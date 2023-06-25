/**
 *  对象数组去重
 * @param {*} arr 数组
 * @param {*} key 校验的key
 * @returns
 */
const distinct = (arr, key) => {
  var newobj = {},
    newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (!newobj[item[key]]) {
      newobj[item[key]] = newArr.push(item);
    }
  }
  return newArr;
};

export { distinct };
