export interface InputProps {
    disable: boolean,
    width: string,
    placeholder: string,
    value: string,
    onChange?: (value: string) => void
    onFocus?: () => void
}