import React from 'react';
interface Props {
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
}
export declare function Button({ children, handleClick }: Props): React.JSX.Element;
export {};
