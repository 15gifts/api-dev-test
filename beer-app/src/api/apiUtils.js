import axios from "axios";

export const axiosService = axios.create();

export async function handleResponse(response) {
    return response.data;
}

export function handleError(error) {
    throw error;
}