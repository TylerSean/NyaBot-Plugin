import { readFileSync } from "fs"
import yaml from "js-yaml"

export async function readConfig(pluginName: string) {
    try {
        const config = yaml.load(readFileSync(`../vendor/${pluginName}/config.yml`, "utf8"))
        return config
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function customConfig(pluginName: string, fileName: string) {
    try {
        const config = yaml.load(readFileSync(`../vendor/${pluginName}/${fileName}.yml`, "utf8"))
        return config
    } catch (error) {
        console.log(error)
        return null
    }
}