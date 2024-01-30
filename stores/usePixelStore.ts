import { create } from "zustand";

interface IUsePixelStore {
  isContactModalOpen: boolean;
  setContactModalOpened: () => void;
  setContactModalClosed: () => void;
  isContactSubmitClicked: boolean;
  contactSubmitClicked: () => void;
  contactSubmitNotClicked: () => void;
  contactName: string;
  setContactName: (value: string) => void;
}

const usePixelStore = create<IUsePixelStore>((set) => ({
  isContactModalOpen: false,
  setContactModalOpened: () => set({ isContactModalOpen: true }),
  setContactModalClosed: () => set({ isContactModalOpen: false }),
  isContactSubmitClicked: false,
  contactSubmitClicked: () => set({ isContactSubmitClicked: true }),
  contactSubmitNotClicked: () => set({ isContactSubmitClicked: false }),
  contactName: "",
  setContactName: (value) => set({ contactName: value }),
}));

export default usePixelStore;
