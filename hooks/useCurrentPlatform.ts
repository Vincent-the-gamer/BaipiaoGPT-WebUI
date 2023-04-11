/**
 * 判断当前系统环境
 */
export default function useCurrentPlatform(){
    let agent = navigator.userAgent
    // 判断移动端
    if (/(Android)/i.test(agent)) {
        return "android"
    } else if (/(iPhone|iPad|iPod|iOS)/i.test(agent)) {
        return "ios"
    }
    // 判断桌面端
    let lowerCaseAgent = agent.toLowerCase()
    let isMac = /macintosh|mac os x/i.test(agent)
    if (isMac) {
        return "mac"
    }
    if (lowerCaseAgent.indexOf("win32") >= 0 || lowerCaseAgent.indexOf("wow32") >= 0) {
        return "win32"
    }
    if (lowerCaseAgent.indexOf("win64") >= 0 || lowerCaseAgent.indexOf("wow64") >= 0) {
        return "win64"
    }
}