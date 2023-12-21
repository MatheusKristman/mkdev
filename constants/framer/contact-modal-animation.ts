export const overlayAnimation = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
};

export const boxAnimation = {
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
    exit: {
        scale: 0.8,
        x: "-50%",
        opacity: 0,
        transition: {
            type: "spring",
            stiffness: 100,
        },
    },
};
