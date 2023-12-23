import {useAppDispatch} from "../../../app/store";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {authThunks} from "../model/authReducer";
import {ControlledTextField} from "../../../components/controlledInput/controlledInput";
import {z} from "zod";


const schema = z.object({
    username: z.string().min(4),
    password: z.string().min(4),
})

type LoginFormValues = z.input<typeof schema>
export const Login = () => {
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        control,
        formState: {errors},
    } = useForm<LoginFormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            username: '',
            password: '',
        },
    })
    const onSubmit = (data: LoginFormValues) => {
        dispatch(authThunks.login(data))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ControlledTextField control={control} name={'username'}/>
            <ControlledTextField control={control} name={'password'}/>
            <button>Login</button>
        </form>
    )
}