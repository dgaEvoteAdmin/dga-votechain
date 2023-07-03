import axios from "axios";
import crypto from "crypto";

export const THAID_STATE = crypto.randomBytes(24).toString("hex");

export async function authorizationThaID(code: string, { THAID_API_KEY, THAID_CLIENT_ID, THAID_CLIENT_SECRET, THAID_LOGIN_CALLBACK }: ThaIDAuthorizationCodeParam) {
  const urlParams = new URLSearchParams();
  urlParams.set("grant_type", "authorization_code");
  urlParams.set("code", code);
  urlParams.set("redirect_uri", THAID_LOGIN_CALLBACK);

  const url = new URL(`/api/v1/oauth2/token`, "https://imauth.bora.dopa.go.th");

  console.log("[ThaID URL]", url);
  
  const authBasic = "Basic " + Buffer.from(THAID_CLIENT_ID + ":" + THAID_CLIENT_SECRET).toString("base64url");
  try {
    const { data } = await axios.post(url.toString(), urlParams, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "x-imauth-apikey": THAID_API_KEY,
        "Authorization": authBasic,
      },
    })
    return data;
  } catch(err) {
    console.log("[API Error]")
    console.error(err);
  }
}
