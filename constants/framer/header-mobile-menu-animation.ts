export const headerMobileMenuContainer = {
    initial: {
        scale: 0.8,
        opacity: 0,
    },
    animate: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "tween",
        },
    },
    exit: {
        scale: 0.8,
        opacity: 0,
        transition: {
            ease: "easeInOut",
        },
    },
};
