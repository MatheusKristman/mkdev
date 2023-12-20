export const boxLargeScreenAnimation = {
    initial: {
        scale: 0.8,
        x: "-50%",
        opacity: 0,
    },
    animate: {
        scale: 1,
        x: "-50%",
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
        },
    },
};
export const boxAnimation = {
    initial: {
        scale: 0.8,
        x: 0,
        opacity: 0,
    },
    animate: {
        scale: 1,
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
        },
    },
};
