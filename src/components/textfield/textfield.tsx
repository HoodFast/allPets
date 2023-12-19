import { ComponentPropsWithoutRef,  useState } from 'react'

import s from './textField.module.scss'


export type textFieldPropsType = {
    placeholder?: string
    errorMessage?: string
    label?: string
    onValueChange?: (value: string) => void
} & ComponentPropsWithoutRef<'input'>

export const TextField: React.FC<textFieldPropsType> = ({
                                                            placeholder,
                                                            type,
                                                            errorMessage,
                                                            label,
                                                            onChange,
                                                            value,
                                                            onValueChange,
                                                            ...rest
                                                        }) => {
    const [textType, setTextType] = useState(type)

    const handlerTextType = () => {
        switch (textType) {
            case 'password':
                setTextType('text')
                break
            case 'text':
                setTextType('password')
                break
            default:
                setTextType('text')
                break
        }
    }

    const errorType = !!errorMessage
    const styleInput = `${s.input}  ${errorType ? s.error : ''}`

    return (
        <div className={s.container}>
            <label>
                    <div>{label}</div>
                <input
                    placeholder={placeholder}
                    type={textType}
                    className={styleInput}
                    onChange={onChange}
                    value={value}
                    {...rest}
                />
                {type === 'password' && (
                    <button type={'button'} onClick={handlerTextType} className={s.button}>
                        х
                    </button>
                )}
                {errorMessage && <div>{errorMessage}</div>}

            </label>
        </div>
    )
}
