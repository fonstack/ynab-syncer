import { env } from "@/config";
import { Country } from "@/consts/countries";
import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://bankaccountdata.gocardless.com/api/v2",
  timeout: 5000,
});

class GoCardlessClient {
  private readonly secretId: string;
  private readonly secretKey: string;
  private tokens:
    | {
        access: string;
        access_expires: number;
        refresh: string;
        refresh_expires: number;
      }
    | undefined;

  constructor(secretId: string | undefined, secretKey: string | undefined) {
    if (!secretId || !secretKey) throw new Error("GoCardlessClient: secretId and secretKey are required");

    this.secretId = secretId;
    this.secretKey = secretKey;
    this.initTokens();
  }

  private async initTokens() {
    const res = await httpClient.post("/token/new", { secret_id: this.secretId, secret_key: this.secretKey });
    this.tokens = res.data;
  }

  private getHeaders() {
    if (!this.tokens) throw new Error("GoCardlessClient: tokens are not initialized");

    return {
      Authorization: `Bearer ${this.tokens.access}`,
    };
  }

  async getInstitutions(country = Country.Portugal) {
    const res = await httpClient.get(`/institutions/?country${country}`, {
      headers: this.getHeaders(),
    });
    return res.data;
  }
}

export const goCardlessClient = new GoCardlessClient(env.GOCARDLESS_SECRET_ID, env.GOCARDLESS_SECRET_KEY);
