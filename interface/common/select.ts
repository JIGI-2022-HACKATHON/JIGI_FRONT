export interface SelectListProps<T> {
    width?: string;
    onClickValue?: (value: T) => void;
    items: ReadonlyArray<T>;
}