import CryptoJS from "crypto-js";

const key = CryptoJS.enc.Utf8.parse("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
const iv = CryptoJS.enc.Utf8.parse("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

const secret = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

/**
 *  MD5加密: 32位
 */
export function md5(content: string) {
  return CryptoJS.MD5(content).toString();
}

/**
 * AES加密: 固定的初始化向量: 生成的加密文本将是相同的
 */
export function aesEncode(content: string) {
  return CryptoJS.AES.encrypt(content, key, { iv, mode: CryptoJS.mode.CBC }).toString();
}

/**
 * AES解密: 固定的初始化向量
 */
export function aesDecode(content: string) {
  return CryptoJS.AES.decrypt(content, key, { iv, mode: CryptoJS.mode.CBC }).toString();
}

/**
 * AES加密: 使用随机的初始化向量: 生成的加密文本将是不同的，因为每次加密时都会生成一个新的随机IV
 */
export function aesEncodeRandom(content: string) {
  return CryptoJS.AES.encrypt(content, secret).toString();
}

/**
 * AES解密: 使用随机的初始化向量
 */
export function aesDecodeRandom(content: string) {
  const hex = CryptoJS.AES.decrypt(content, secret).toString();
  return Buffer.from(hex, "hex").toString();
}
