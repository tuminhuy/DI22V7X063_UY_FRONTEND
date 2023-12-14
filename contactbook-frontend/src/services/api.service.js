import axios from "axios";

const commonConfig = {
    header: {
        "COntent-Type": "application/json",
        Accept: "application/json",
    },
};
export default (baseURL) => {
    return axios.create ({
        baseURL,
        ...commonConfig,
    });
};