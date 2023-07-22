import { defineStore } from "pinia";
import dayjs from "dayjs";

// 根据不同时间段设置默认主题，18点到次日早上7点是晚上，其他时候是白天
const currentHour: number = dayjs().hour()

function getCurrentTheme(): string{
    if(currentHour >= 18 && currentHour <= 7) return "dark"
    else return "light"
}

const useThemeStore = defineStore("themeStore", {
    state: () => {
        return {
            theme: getCurrentTheme() as string
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