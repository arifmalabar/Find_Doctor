import axios from "axios";
import {antrian} from "../config/end_points";

export const getData = async () => {
    var response;
    try {
        response = await axios.get(antrian);
    } catch (error) {
       console.log(error); 
    }
    return response.data;
}
export const postData = async (data) => {
    try {
        await axios.post(antrian, data).then(function (params) {
            console.log(params);
        }).catch(function (error) {
            console.log(error);
        })
    } catch (error) {
        console.log(error);
    }
}