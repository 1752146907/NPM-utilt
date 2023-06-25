/**
 *
 * @param {*} str 校验的字符串
 * @returns
 */
const isvalidMobile = (str) => {
  const reg = /(^[1][3456789][0-9]{9}$)|^(00852([5|6|9])\d{7})$/;
  return reg.test(str.trim());
};

export { isvalidMobile };
