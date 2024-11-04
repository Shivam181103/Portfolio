// src/utils/crypto.js

import CryptoJS from 'crypto-js'; 
 
/**
 * Encrypt a string to a URL-safe format
 * @param {string} str - The string to encrypt 
 * @returns {string} - The encrypted string in a URL-safe format
 */
export const encryptToUrl = (str) => {
  const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY
  const encrypted = CryptoJS.AES.encrypt(str, secretKey).toString();
  
  // Convert the encrypted string to a URL-safe format
  return encodeURIComponent(encrypted);
};

/**
 * Decrypt a URL-safe encrypted string back to its original format
 * @param {string} encryptedStr - The URL-safe encrypted string 
 * @returns {string} - The decrypted string
 */
export const decryptFromUrl = (encryptedStr) => {
  const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY
  // Decode the URL-safe format
  const decoded = decodeURIComponent(encryptedStr);
  const bytes = CryptoJS.AES.decrypt(decoded, secretKey);
  const decrypted = bytes.toString(CryptoJS.enc.Utf8);
  return decrypted;
};
