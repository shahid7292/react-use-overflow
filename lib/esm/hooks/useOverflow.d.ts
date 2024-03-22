import { RefObject } from "react";
type ElementRefType<T> = RefObject<T>;
export declare const useOverflow: <T extends HTMLElement>() => {
    ref: ElementRefType<T>;
    isOverflow: {
        horizontal: boolean;
        vertical: boolean;
    };
};
export {};
//# sourceMappingURL=useOverflow.d.ts.map