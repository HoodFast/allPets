import {ControlledTextField} from "../../../components/controlledInput/controlledInput";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {authThunks} from "../model/authReducer";
import {useAppDispatch} from "../../../app/store";





const schema = z.object({
    username: z.string().min(4),
    password: z.string().min(4),
})

type FormValues = z.input<typeof schema>
export const Registration = () => {
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        control,
        formState: {errors},
    } = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            username: '',
            password: '',
        },
    })
    const onSubmit = (data: FormValues) => {
        dispatch(authThunks.registration(data))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ControlledTextField control={control} name={'username'}/>
            <ControlledTextField control={control} name={'password'}/>
            <button>create user</button>
        </form>
    )
}