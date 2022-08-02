declare global {
    interface Window {
        timer: any;
    }
}

export const useDebounce = ({ onChange, milliseconds = 700 }: Props) => {

    const debounce = (cb: Function) => {
        window.timer && clearTimeout(window.timer);
        window.timer = setTimeout(cb, milliseconds);
    };

    return (text: string, ...rest: any) => debounce(() => onChange(text, ...rest));
};

interface Props {
    onChange: (text: string, ...rest: any) => unknown;
    milliseconds?: number
}
