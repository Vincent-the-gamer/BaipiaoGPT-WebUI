import { defineStore } from "pinia";

const useInputStore = defineStore("inputStore", {
    state: () => {
        return {
            content: ""
        }
    },
    actions: {
        setContent(text: string) {
            this.content = text;
        }
    },
    getters: {

    }
})

export default useInputStore