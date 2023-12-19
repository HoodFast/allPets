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
        return instance.get("auth/me");
    },
    createToken(data:LoginParamsType){
        debugger
        return instance.post('api/token', data).then((res)=> console.log(res))
    }
};

//types

export type LoginParamsType = {
    username: string;
    password: string;
};