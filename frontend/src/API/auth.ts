import axiosInstance from "./axios"
import { LOGIN, REFRESH_TOKEN, REGISTER } from "./endpoints"

interface FormInput {
    username: string;
    password: string;
}
export interface ResponseInterface {
    data: Object | any;
    error: string;
    status: "OK" | "NOT OK"
}

export const loginHandler = async (formData: FormInput) => {
    let response: ResponseInterface = {
        data: {},
        error: "",
        status: "NOT OK"
    };

    try {
        const apiResponse = await axiosInstance.post(LOGIN, {
            ...formData
        })
        if (apiResponse.status >= 200 && apiResponse.status < 400) {
            response.data = apiResponse.data;
            response.status = "OK";
        } else {
            response.error = "wrong status code"
        }
    } catch (err: any) {
        response.error = err.response?.data?.detail ? "Invalid credentials" : err.message;
    } finally {
        return response;
    }
}

export const registerHandler = async (formData: FormInput) => {
    let response: ResponseInterface = {
        data: {},
        error: "",
        status: "NOT OK"
    };

    try {
        const apiResponse = await axiosInstance.post(REGISTER, {
            ...formData
        })
        
        if (apiResponse.status >= 200 && apiResponse.status < 400) {
            response.data = apiResponse.data;
            response.status = "OK";
        } else {
            response.error = "wrong status code"
        }
    } catch (err: any) {
        response.error = err.response.data?.username?.[0] ? err.response.data.username[0]: err.message;
    } finally {
        return response;
    }
}

export const refreshToken = async () => {
    let response: ResponseInterface = {
        data: {},
        error: "",
        status: "NOT OK"
    };

    try {
        const apiResponse = await axiosInstance.post(REFRESH_TOKEN, {
            refresh: localStorage.getItem("refreshToken")
        })
        if (apiResponse.status >= 200 && apiResponse.status < 400) {
            response.data = apiResponse.data;
            response.status = "OK";
            localStorage.setItem("accessToken", response.data?.access)
        } else {
            response.error = "wrong status code"
        }
    } catch (err: any) {
        response.error = err.response?.data?.detail ? "Invalid credentials" : err.message;
    } finally {
        return response;
    }
}