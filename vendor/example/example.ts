// Define plugin information
export const pluginInfo = {
    name: 'example',
    version: '1.0.0',
    author: 'example',
    description: 'example plugin',
    license: 'MIT',
    homepage: 'http://example.com',
    repository: 'http://example.com'
}

// Process post_type 'message'
async function message(callback: any) {
    console.log(callback)
}

// Process post_type 'request'
async function request(callback: any) {
    console.log(callback)
}

// Process post_type 'notice'
async function notice(callback: any) {
    console.log(callback)
}

// Process post_type 'meta_event'
async function meta_event(callback: any) {
    console.log(callback)
}

// Export post_type functions as a plugin
export const examplePlugin: { [K: string]: Function } = {
    message,
    request,
    notice,
    meta_event
}