export function findKeyByValue(
    target: { [key: string]: string },
    value: string
): string {
    const keys = Reflect.ownKeys(target) as Array<string>
    for (let i = 0; i < keys.length; i++) {
        if (target[keys[i]] === value) {
            return keys[i]
        }
    }
    return ''
}