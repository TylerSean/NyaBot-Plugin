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

function genSmData(name: string, content: string) {
    const data = {
        "name": name,
        "uin": "113764782",
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
    if (callback.group_id != 432511748 && callback.group_id != 188723593) {
        return
    }
    if (callback.message == '.debug') {
        const data = [
            genSmData('超级练习册', 'F12 看看控制台有无输出'),
            genSmData('超级练习册', '因为有可能是客户端毛病'),
            genSmData('超级练习册', 'https://docs.flarum.org/zh/troubleshoot/'),
            genSmData('超级练习册', '你也可以打开 config.php 把 debug 改为 true'),
            genSmData('超级练习册', '尽量一次性提供足够的信息让群友们看'),
            genSmData('超级练习册', '我其实很讨厌说这套说辞。已经挂在了群公告里，但是我每天最少都会说一次')
        ]
        await new Promise(f => setTimeout(f, 1000))
        const res = await sendGroupForwardMsg(callback.group_id, data)
        console.log(res)
    }
    if (callback.message == '.bt') {
        await new Promise(f => setTimeout(f, 1000))
        const res = await sendGroupMsg(callback.group_id, '这个群不是宝塔售后群，宝塔问题请加宝塔群问')
        console.log(res)
    }
    if (callback.message == '.mysql') {
        await new Promise(f => setTimeout(f, 1000))
        const res = await sendGroupMsg(callback.group_id, '这个群不是MySQL新手教学群')
        console.log(res)
    }
    if (callback.message == '.ks') {
        await new Promise(f => setTimeout(f, 1000))
        const res = await sendGroupMsg(callback.group_id, 'KubeSphere是本群唯一指定面板')
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