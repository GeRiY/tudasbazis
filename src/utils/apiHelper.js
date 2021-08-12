import axios from 'axios';
import { getToken } from './tokenHelper';
import { BASE_URL } from '../config/config';
import i18n from '../i18n';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
});

/**
 *
 * Általános HTTP kérés headerjének beállítása
 *
 * @param needAuth boolean
 *
 */
async function setHeaders(needAuth) {
  const token = await getToken('token');
  const langCode = i18n.locale.substring(0, 2);
  if (token && needAuth) {
    return { 'Token': `${token}`, 'Language': `${langCode}` };
  }
  return { 'Language': `${langCode}` };
}

/**
 *
 * File letöltéshez a kérés headerjének beállítása
 *
 * @param needAuth
 */
async function setFileDownloadHeaders(needAuth = false) {
  const token = await getToken('token');
  const langCode = i18n.locale.substring(0, 2);
  if (token && needAuth) {
    return { 'Token': `${token}`, 'Language': `${langCode}`, 'Content-Type': 'multipart/form-data' };
  }
  return { 'Language': `${langCode}`, 'Content-Type': 'multipart/form-data' };
}

/**
 *
 * GET híváshoz
 *
 * @param url string
 * @param params any
 * @param needAuth boolean
 */
export async function APIGET(url, params, needAuth = false) {
  try {
    const htmlResponse = await instance({
      method: 'get',
      url: `${BASE_URL}/${url}`,
      headers: await setHeaders(needAuth),
      params,
      validateStatus: function (status) {
        return status >= 200;
      },
    });
    console.log(`%cAPIGET - ${url} response:`, 'background-color: #27ae60; color: #ffffff; font-size: 12px;');
    console.log(htmlResponse);
    return htmlResponse;
  } catch (error) {
    console.log(`%cAPIGET - ${url} catch error:`, 'background-color: #c0392b; color: #ffffff; font-size: 12px;');
    console.log(error);
    return {
      status: 999,
      data: [],
      message: `CATCH error: ${error}`,
    };
  }
}

/**
 *
 * POST híváshoz
 *
 * @param url string
 * @param body any
 * @param needAuth boolean
 */
export async function APIPOST(url, body, needAuth = false) {
  try {
    const htmlResponse = await instance({
      method: 'post',
      url: `${BASE_URL}/${url}`,
      headers: await setHeaders(needAuth),
      data: body,
      validateStatus: function (status) {
        return status >= 200;
      },
    });
    console.log(`%cAPIPOST - ${url} response:`, 'background-color: #27ae60; color: #ffffff; font-size: 12px;');
    console.log(htmlResponse);
    return htmlResponse;
  } catch (error) {
    console.log(`%cAPIPOST - ${url} catch error:`, 'background-color: #c0392b; color: #ffffff; font-size: 12px;');
    console.log(error);
    return {
      status: 999,
      data: [],
      message: `CATCH error: ${error}`,
    };
  }
}

/**
 *
 * File letöltéshez
 *
 * @param url string
 * @param body any
 * @param needAuth boolean
 * @param method string = get | post
 */
export async function APIFILEDOWNLOAD(url, body = {}, needAuth = false, method='get') {
  try {
    const htmlResponse = await instance({
      method: method,
      url: `${BASE_URL}/${url}`,
      headers: await setFileDownloadHeaders(needAuth),
      responseType: 'blob',
      data: body,
    });
    console.log(`%APIFILEDOWNLOAD - ${url} response:`, 'background-color: #27ae60; color: #ffffff; font-size: 12px;');
    return htmlResponse;
  } catch (error) {
    console.log(`%APIFILEDOWNLOAD - ${url} catch error:`, 'background-color: #c0392b; color: #ffffff; font-size: 12px;');
    console.log(error);
    return {
      data: {
        status: 999,
        data: [],
        message: `CATCH error: ${error}`,
      },
    };
  }
}
