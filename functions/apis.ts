/* eslint-disable @typescript-eslint/ban-types */
import axios, {AxiosRequestHeaders, Method} from "axios";

class Api {
  private baseURL: string | undefined;
  // https://p1j4s8lykj.execute-api.ap-northeast-2.amazonaws.com/

  constructor() {
    this.baseURL = "https://sls.cnrikorea.com"; // 사용자 정보 안받아서 이걸로 바꿈
  }

  saveUserInfo = async ({
    email,
    username,
    company,
  }: {
    email: string;
    username: string;
    company: string;
  }) => {
    const data = {
      email,
      username,
      company,
    };
    console.log("saveUserInfo data", data);
    return this._post({
      uri: "/users",
      data,
      onSuccess: (res) => res,
    });
  };

  private _request = async ({uri, method, params, data, onSuccess}: IRequest): Promise<any> => {
    try {
      const res = await axios({
        method,
        url: this.baseURL + uri,
        data,
        params,
        timeout: 1000 * 60,
        // headers: Object.assign(
        //   {
        //     Authorization: `Bearer ${this.token}` || '',
        //     ContentType: 'application/x-www-form-urlencoded',
        //   },
        //   headers
        // ),
      });
      console.log("res", res);
      const responseData = res.data.data;
      console.log("responseData", responseData);

      if (onSuccess) {
        return onSuccess(responseData);
      }

      return responseData;
    } catch (e: any) {
      console.error(e);
      return e;
    }
  };

  private _get = async (reqData: IRequestData) =>
    this._request({
      method: "GET",
      ...reqData,
    });

  private _post = async (reqData: IRequestData) =>
    this._request({
      method: "POST",
      ...reqData,
    });

  private _put = async (reqData: IRequestData) =>
    this._request({
      method: "PUT",
      ...reqData,
    });

  private _patch = async (reqData: IRequestData) =>
    this._request({
      method: "PATCH",
      ...reqData,
    });

  private _delete = async (reqData: IRequestData) =>
    this._request({
      method: "DELETE",
      ...reqData,
    });
}

export const apis = new Api();

export interface IQueryType {
  [key: string]: string | string[] | undefined;
}

interface IRequestData {
  uri: string;
  data?: Object;
  params?: Object;
  onSuccess?: (res: any) => Object | void;
  onError?: (e: any) => Object | void;
  retryCount?: number;
  headers?: AxiosRequestHeaders;
}

interface IRequest extends IRequestData {
  method: Method;
}
