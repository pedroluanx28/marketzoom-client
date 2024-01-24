import './styles.scss';

type FormInputProps = {
    label?: string;
    inputClassName?: string;
    labelClassName?: string;
    type?: string;
    name?: string;
    placeholder?: string;
    id?: string;
}

export function FormInput({
    label,
    labelClassName,
    inputClassName,
    ...rest
}: FormInputProps) {
    return (
        <>
            {label && <label className={`form-label ${labelClassName}`}>{label}</label>}
            <input {...rest} className={`input-border-purple ${inputClassName}`} />
        </>
    )
}