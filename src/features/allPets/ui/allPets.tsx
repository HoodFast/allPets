import {useEffect} from "react";
import {AppRootStateType, useAppDispatch} from "../../../app/store";
import {authThunks} from "../../auth/model/authReducer";
import {useSelector} from "react-redux";

export const AllPets = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(authThunks.getMe())
    }, []);
    const meData: any = useSelector<AppRootStateType>(state => state.auth?.data)
    let username = 'незнакомец'
    if (!!meData.data) {
        username = meData.data.username
    }

    return (
        <div>Привет {username}</div>
    )
}