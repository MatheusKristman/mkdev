import { create } from "zustand";

interface useModalStoreInter {
    isContactModalOpen: boolean;
    openContactModal: () => void;
    closeContactModal: () => void;
    isLoginModalOpen: boolean;
    openLoginModal: () => void;
    closeLoginModal: () => void;
    isRegisterModalOpen: boolean;
    openRegisterModal: () => void;
    closeRegisterModal: () => void;
    isForgotPasswordModalOpen: boolean;
    openForgotPasswordModal: () => void;
    closeForgotPasswordModal: () => void;
    isPasswordRecoveryMessageModalOpen: boolean;
    openPasswordRecoveryMessageModal: () => void;
    closePasswordRecoveryMessageModal: () => void;
    isPasswordRecoveryModalOpen: boolean;
    openPasswordRecoveryModal: () => void;
    closePasswordRecoveryModal: () => void;
}

const useModalStore = create<useModalStoreInter>((set) => ({
    isContactModalOpen: false,
    openContactModal: () => set({ isContactModalOpen: true }),
    closeContactModal: () => set({ isContactModalOpen: false }),
    isLoginModalOpen: false,
    openLoginModal: () => set({ isLoginModalOpen: true }),
    closeLoginModal: () => set({ isLoginModalOpen: false }),
    isRegisterModalOpen: false,
    openRegisterModal: () => set({ isRegisterModalOpen: true }),
    closeRegisterModal: () => set({ isRegisterModalOpen: false }),
    isForgotPasswordModalOpen: false,
    openForgotPasswordModal: () => set({ isForgotPasswordModalOpen: true }),
    closeForgotPasswordModal: () => set({ isForgotPasswordModalOpen: false }),
    isPasswordRecoveryMessageModalOpen: false,
    openPasswordRecoveryMessageModal: () =>
        set({ isPasswordRecoveryMessageModalOpen: true }),
    closePasswordRecoveryMessageModal: () =>
        set({ isPasswordRecoveryMessageModalOpen: false }),
    isPasswordRecoveryModalOpen: false,
    openPasswordRecoveryModal: () => set({ isPasswordRecoveryModalOpen: true }),
    closePasswordRecoveryModal: () =>
        set({ isPasswordRecoveryModalOpen: false }),
}));

export default useModalStore;
