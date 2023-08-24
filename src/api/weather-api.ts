import { instance } from "./base.api";

const endPoint = "/forecast";

export const weatherApi = {
    getWeather: () => {
        return instance.get(endPoint, {params: {id: `524901`, appid: "44f1b0b0e9952ff9fbe6a475ec8b5f1a"}})
    }
};
