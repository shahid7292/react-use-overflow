"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOverflow = void 0;
const react_1 = require("react");
const useOverflow = () => {
    const ref = (0, react_1.useRef)(null);
    const [isOverflow, setIsOverflow] = (0, react_1.useState)({
        horizontal: false,
        vertical: false,
    });
    (0, react_1.useEffect)(() => {
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
exports.useOverflow = useOverflow;
//# sourceMappingURL=useOverflow.js.map