import {instance} from "../../common/common.api";
import {log} from "util";


export const authAPI = {
    createUser(data: LoginParamsType) {
        return instance.post("auth/users/", data);
    },
    logout() {
        return instance.delete("auth/login");
    },
    me() {
        return instance.get("auth/users/me");
    },
    createToken(data:LoginParamsType){
        return instance.post('token/', data)
    }
};

//types

export type LoginParamsType = {
    username: string;
    password: string;
};