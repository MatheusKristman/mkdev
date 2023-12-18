import { create } from "zustand";

interface useHeaderStoreInter {
    isMenuOpen: boolean;
    openMenu: () => void;
    closeMenu: () => void;
}

const useHeaderStore = create<useHeaderStoreInter>((set) => ({
    isMenuOpen: false,
    openMenu: () => set({ isMenuOpen: true }),
    closeMenu: () =>
        set({
            isMenuOpen: false,
        }),
}));

export default useHeaderStore;
