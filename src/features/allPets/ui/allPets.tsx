import {useEffect} from "react";
import {instance} from "../../common/common.api";
import {AppRootStateType, useAppDispatch} from "../../../app/store";
import {authThunks} from "../../auth/model/authReducer";
import {useSelector} from "react-redux";

export const AllPets = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(authThunks.getMe)
        instance.get('auth/users/').then(res => {
            console.log(res)
        });
    }, []);
    const meData = useSelector<AppRootStateType>(state => state.auth?.data)
    let keys: any = []
    if (meData){
        keys = Object.keys(meData);
        console.log(keys)
    }



    return (
        keys && <div>{keys}</div>
    )
}