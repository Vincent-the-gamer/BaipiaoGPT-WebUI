import { defineStore } from "pinia";

const useInputStore = defineStore("inputStore", {
    state: () => {
        return {
            content: "" as string
        }
    },
    actions: {
        setContent(text: string) {
            this.content = text;
        }
    }
})

export default useInputStore