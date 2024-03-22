import { useEffect, useRef, useState } from "react";
export const useOverflow = () => {
    const ref = useRef(null);
    const [isOverflow, setIsOverflow] = useState({
        horizontal: false,
        vertical: false,
    });
    useEffect(() => {
        const { current } = ref;
        if (current) {
            const verticalOverflow = current.scrollHeight > current.offsetHeight;
            const horizontalOverflow = current.scrollWidth > current.offsetWidth;
            setIsOverflow({
                horizontal: horizontalOverflow,
                vertical: verticalOverflow,
            });
        }
    }, [ref]);
    return { ref, isOverflow };
};
//# sourceMappingURL=useOverflow.js.map