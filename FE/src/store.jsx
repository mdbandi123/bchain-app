import { create } from 'zustand';

const useStore = create((set) => ({
    darkMode: false,
    setDarkMode: (darkMode) => set({ darkMode: darkMode }),

    primaryColor: 'rose',
    setPrimaryColor: (primaryColor) => set({ primaryColor: primaryColor }),

    secondaryColor: 'rose',
    setSecondaryColor: (secondaryColor) => set({ secondaryColor: secondaryColor }),

    backgroundColor: 'default',
    setBackgroundColor: (backgroundColor) => set({ backgroundColor: backgroundColor }),
}));

export default useStore;
