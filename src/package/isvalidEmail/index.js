/**
 *
 * @param {*} str 校验的字符串
 * @returns
 */
const isvalidEmail = (str) => {
  const reg =
    // eslint-disable-next-line no-useless-escape
    /^([A-Za-z0-9!#$%^&*()\'\-_.+]+)@([A-Za-z0-9\-]+[.][A-Za-z0-9\-.]+)$/;
  return reg.test(str);
};

export { isvalidEmail };
