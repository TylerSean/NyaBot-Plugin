// Define plugin information
import sendGroupMsg from "../../../core/gocqact/comMessage/sendGroupMsg";
import sendGroupForwardMsg from "../../../core/gocqact/comMessage/sendGroupForwardMsg";

export const pluginInfo = {
    name: 'flarumGroup',
    version: '1.0.0',
    author: 'BaiYi',
    description: 'A plugin for flarum group',
    license: 'Apache-2.0',
    homepage: 'http://example.com',
    repository: 'http://example.com'
}

function genSmData(content: string) {
    const data = {
        "name": "算命大师",
        "uin": "1877035391",
        "content": content
    }
    const struct = {
        "type": "node",
        "data": data
    }
    return struct
}

// Process post_type 'message'
async function message(callback: any) {
    if (callback.group_id != '432511748' || callback.user_id == '188723593') {
        return
    }
    if (callback.message == '.debug') {
        const data = [
            genSmData('F12 看看控制台有无输出'),
            genSmData('因为有可能是客户端毛病'),
            genSmData('https://docs.flarum.org/zh/troubleshoot/'),
            genSmData('你也可以打开 config.php 把 debug 改为 true'),
            genSmData('尽量一次性提供足够的信息让群友们看'),
            genSmData('我其实很讨厌说这套说辞。已经挂在了群公告里，但是我每天最少都会说一次')
        ]
        const res = await sendGroupForwardMsg(callback.group_id, data)
        console.log(res)
    }
}

// Process post_type 'request'
async function request(callback: any) {
    // console.log(callback)
}

// Process post_type 'notice'
async function notice(callback: any) {
    // console.log(callback)
}

// Process post_type 'meta_event'
async function meta_event(callback: any) {
    // console.log(callback)
}

// Export post_type functions as a plugin
export const flarumGroup: { [K: string]: Function } = {
    message,
    request,
    notice,
    meta_event
}