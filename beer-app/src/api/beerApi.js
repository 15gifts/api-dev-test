import { axiosService, handleResponse, handleError } from './apiUtils';
import { baseUrl } from '../constants/apiConstants';

export function getBeers(name, description) {
    const params = '?name=' + name + '&description' + description;
    return axiosService.get(baseUrl + params)
        .then(handleResponse)
        .catch(handleError);
}