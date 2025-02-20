import CONFIG from "@/config/config";
import { getTokens } from "@/utils/secureStore";
import urlUtils from "@/utils/url.utils";
import axios, { AxiosResponse } from "axios";

let header = {};
const tokens = getTokens();
if (tokens?.access) {
  // const tokenString: string | null = localStorage.getItem("authentication");
  // if (tokenString) {
  //   header = {
  //     authorization: "Bearer " + JSON.parse(tokenString).token,
  //     // 'Content-Type': 'multipart/form-data',
  //   };
  // }
  header = {
    authorization: "Bearer " + tokens.access,
    // 'Content-Type': 'multipart/form-data',
  };
}


// axiosInstance
export const axiosInstance = axios.create({
  baseURL: CONFIG.API_URL,
  headers: header,
});


export class CrudOperations {
  private api: string;
  constructor(api: string) {
    this.api = api;
  }
  
  get = async (query: string = "") => {
    try {
      const response: AxiosResponse<any> = await axiosInstance.get(
        urlUtils.setPathnameAndQuery({ pathname: this.api, query })
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  };
  retrieve = async (id: number | string, query: string = "") => {
    try {
      const response: AxiosResponse<any> = await axiosInstance.get(
        urlUtils.setPathnameAndQuery({
          pathname: `${this.api}/${id}`,
          query,
        })
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  };
  post = async (body = {}, query: string = "") => {
    try {
      const response: AxiosResponse<any> = await axiosInstance.post(
        urlUtils.setPathnameAndQuery({ pathname: this.api, query }),
        body
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  };
  patch = async (id: number | string, body = {}, query: string = "") => {
    try {
      const response: AxiosResponse<any> = await axiosInstance.patch(
        urlUtils.setPathnameAndQuery({
          pathname: `${this.api}/${id}`,
          query,
        }),
        body
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  };
  put = async (id: number | string, body = {}, query: string = "") => {
    try {
      const response: AxiosResponse<any> = await axiosInstance.put(
        urlUtils.setPathnameAndQuery({
          pathname: `${this.api}/${id}`,
          query,
        }),
        body
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  };

  delete = async (id: number | string, query: string = "") => {
    try {
      const response: AxiosResponse<any> = await axiosInstance.delete(
        urlUtils.setPathnameAndQuery({
          pathname: `${this.api}/${id}`,
          query,
        })
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  };
}
