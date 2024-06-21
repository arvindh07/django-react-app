import axiosInstance from "./axios"
import { LOGIN, REGISTER } from "./endpoints"

interface FormInput {
    username: string;
    password: string;
}
interface ResponseInterface {
    data: Object;
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
        if (apiResponse.status === 200) {
            response.data = apiResponse.data;
            response.status = "OK";
        } else {
            response.error = "wrong status code"
        }
    } catch (err: any) {
        response.error = err.message;
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
        if (apiResponse.status === 200) {
            response.data = apiResponse.data;
            response.status = "OK";
        } else {
            response.error = "wrong status code"
        }
    } catch (err: any) {
        response.error = err.message;
    } finally {
        return response;
    }
}