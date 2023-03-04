import { examplePlugin } from "./vendor/example/example"

const pluginList = [
    examplePlugin
]

export async function callbackHandler(callback: any) {
    if (callback.post_type == 'message') {
        return await pluginEntry("message", callback)
    }
    if (callback.post_type == 'request') {
        return await pluginEntry("request", callback)
    }
    if (callback.post_type == 'notice') {
        return await pluginEntry("notice", callback)
    }
    if (callback.post_type == 'meta_event') {
        return await pluginEntry("meta_event", callback)
    }
}

async function pluginEntry(type: string, callback: any) {
    pluginList.map((plugin) => {
        plugin[type](callback)
    })
}