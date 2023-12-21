import { create } from "zustand";

interface useModalStoreInter {
    isContactModalOpen: boolean;
    openContactModal: () => void;
    closeContactModal: () => void;
}

const useModalStore = create<useModalStoreInter>((set) => ({
    isContactModalOpen: false,
    openContactModal: () => set({ isContactModalOpen: true }),
    closeContactModal: () => set({ isContactModalOpen: false }),
}));

export default useModalStore;
