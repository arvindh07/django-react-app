import { ResponseInterface } from "./auth";
import axiosInstance from "./axios";
import { NOTE } from "./endpoints";

interface NoteInput{
    title: string;
    description: string;
}

export const addNoteHandler = async (formData: NoteInput) => {
    let response: ResponseInterface = {
        data: {},
        error: "",
        status: "NOT OK"
    };

    try {
        const apiResponse = await axiosInstance.post(NOTE, {
            ...formData
        })
        if (apiResponse.status >= 200 && apiResponse.status < 400) {
            response.data = apiResponse.data;
            response.status = "OK";
        } else {
            response.error = "wrong status code"
        }
    } catch (err: any) {
        console.log("err catch", err);
        response.error = err.response?.data?.detail ? "Invalid credentials" : err.message;
    } finally {
        return response;
    }
}

export const getNotes = async () => {
    let response: ResponseInterface = {
        data: {},
        error: "",
        status: "NOT OK"
    };

    try {
        const apiResponse = await axiosInstance.get(NOTE);
        if (apiResponse.status >= 200 && apiResponse.status < 400) {
            response.data = apiResponse.data;
            response.status = "OK";
        } else {
            response.error = "wrong status code"
        }
    } catch (err: any) {
        console.log("err catch", err);
        response.error = err.response?.data?.detail ? "Invalid credentials" : err.message;
    } finally {
        return response;
    }
}