import { defineStore } from "pinia";
import ChatContent from "~~/interfaces/ChatContent";
import myAxios from "~~/utils/axios";


const useChatStore = defineStore("chatStore", {
    state: () => {
        return {
            chatContents: [] as ChatContent[],
            scrollToLastMessage: () => {} // 在onMounted钩子中把操作函数传进来，不然document会是undefined
        }
    },
    actions: {
        /**
         * 请求函数
         */
        requestAnswer(content: string){
            myAxios.post("/",{ content }).then(
                res => {
                    const result: string = res.data
                    this.chatContents[this.chatContents.length - 1].content = result
                    this.scrollToLastMessage()
                }
            ).catch(err => {
                this.chatContents[this.chatContents.length - 1].content = "发生错误了，请重新提问o(╥﹏╥)o"
                this.scrollToLastMessage()
            })    
        },
        /**
         * 重新生成答案
         */
        regenerateAnswer(){
            this.chatContents[this.chatContents.length - 1].content = "重新生成中..."
            myAxios.get("/regenerate").then(
                res => {
                    const result: string = res.data
                    this.chatContents[this.chatContents.length - 1].content = result
                    this.scrollToLastMessage()
                }
            ).catch(err => {
                this.chatContents[this.chatContents.length - 1].content = "发生错误了，请重新提问o(╥﹏╥)o"
                this.scrollToLastMessage()
            })
        },

        /**
         * 和ai聊天，获取新上下文
         */
        chat(text: string){
            // 先增加UI作为过渡
            this.chatContents.push({
                role: "user",
                content: text
            })
            this.chatContents.push({
                role: "assistant",
                content: "稍等哈，咱正在组织语言(*^▽^*)....."
            })
            // 直接和机器人聊天
            this.requestAnswer(text)
        },
        /**
         * 清空对话
         */
        async clearChat(){
            // 清空上下文
            await myAxios.get("/clearContext")
            this.chatContents = []
        },

        /**
         * 重新生成答案
         */
        async regenerate(){
            if(this.chatContents.length < 1){
                alert("消息为空")
            }
            else{
               this.regenerateAnswer()
            }
        }
    }
})

export default useChatStore