import { http } from "./http";
import localforage from "localforage";

/**
 * 登录
 */
export async function userLogin(params: { account: string; password: string }) {
  const resp = await http.post("/user/login", params);
  return resp.data;
}
