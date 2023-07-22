import { defineStore } from "pinia";

const useThemeStore = defineStore("themeStore", {
    state: () => {
        return {
            theme: "light" as string
        }
    },
    actions: {
        setTheme(mode: string) {
            this.theme = mode;
        }
    },
    getters: {
        getTheme(): string{
            return this.theme
        }
    }
})

export default useThemeStore