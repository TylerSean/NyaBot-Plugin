export async function handler(type: string, callback: any) {
    switch(type) {
        case "message":
            return await message(callback)
        case "request":
            return await request(callback)
        case "notice":
            return await notice(callback)
        case "meta_event":
            return await meta_event(callback)
    }
}

async function message(callback: any) {
    // Process post_type 'message'
    console.log(callback)
}

async function request(callback: any) {
    // Process post_type 'request'
    console.log(callback)
}

async function notice(callback: any) {
    // Process post_type 'notice'
    console.log(callback)
}

async function meta_event(callback: any) {
    // Process post_type 'meta_event'
    console.log(callback)
}