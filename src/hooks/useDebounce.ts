declare global {
    interface Window {
        timer: any;
    }
}

export const useDebounce = ({ onDebounce, milliseconds = 700 }: Props) => {

    const debounce = (cb: Function) => {
        window.timer && clearTimeout(window.timer);
        window.timer = setTimeout(cb, milliseconds);
    };

    return (text: string) => debounce(() => onDebounce(text));
};

interface Props {
    onDebounce: (text: string) => unknown;
    milliseconds?: number
}
